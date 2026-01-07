import { defineAction, ActionError } from "astro:actions";
import { z } from "astro:content";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_KEY || import.meta.env.VERCEL_RESEND_KEY);

async function verifyTurnstileToken(token: string): Promise<boolean> {
    const secretKey = import.meta.env.TURNSTILE_SECRET_KEY;

    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            secret: secretKey,
            response: token,
        }),
    });

    const data = await response.json();
    return data.success === true;
}

export const server = {
    sendEmail: defineAction({
        accept: 'form',
        input: z.object({
            name: z.string(),
            email: z.string(),
            message: z.string(),
            'cf-turnstile-response': z.string(),
        }),
        handler: async ({ name, email, message, 'cf-turnstile-response': turnstileToken }) => {
            const isValidToken = await verifyTurnstileToken(turnstileToken);

            if (!isValidToken) {
                throw new ActionError({
                    code: 'FORBIDDEN',
                    message: 'Captcha verification failed. Please try again.',
                });
            }

            const { data, error } = await resend.emails.send({
                from: "contact@ultimatequestioncoding.com",
                to: "contact@ultimatequestioncoding.com",
                subject: "New message from contact form",
                text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
            });

            if (error) {
                throw error;
            }

            return data;
        }
    })
}