import { defineAction } from "astro:actions";
import { z } from "astro:content";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_KEY);

export const server = {
    sendEmail: defineAction({
        accept: 'form',
        input: z.object({
            name: z.string(),
            email: z.string(),
            message: z.string(),
        }),
        handler: async ({ name, email, message }) => {
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