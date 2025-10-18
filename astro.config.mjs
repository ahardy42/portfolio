// @ts-check
import { defineConfig } from 'astro/config';
import vercelServerless from '@astrojs/vercel/serverless';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercelServerless({
    maxDuration: 8
  }),
  vite: {
    plugins: [tailwindcss()]
  },
});