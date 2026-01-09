# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at localhost:4321
npm run build    # Build production site to ./dist/
npm run preview  # Preview production build locally
npm run astro check  # Type-check Astro files
```

## Architecture

This is an Astro 5 portfolio site with SSR deployed to Vercel.

**Key files:**
- `astro.config.mjs` - Configured for SSR (`output: 'server'`) with Vercel adapter and Tailwind CSS v4 via Vite plugin
- `src/layouts/Layout.astro` - Base layout wrapping all pages with Header/Footer
- `src/actions/index.ts` - Server-side Astro Actions for contact form (Resend email + Cloudflare Turnstile verification)
- `src/styles/global.css` - CSS custom properties for color palette (earthy greens/oranges) and Nunito font

**Rendering:** Full SSR with Vercel adapter, max 8 second function duration.

**Styling:** Tailwind CSS v4 with custom CSS variables. Colors use semantic mappings (`--color-background`, `--color-surface`, etc.) defined in global.css.

**Environment variables (server-side):**
- `RESEND_KEY` / `VERCEL_RESEND_KEY` - Email API
- `TURNSTILE_SECRET_KEY` - Captcha verification
- `TURNSTILE_SITE_KEY` - Captcha widget (client-side)
