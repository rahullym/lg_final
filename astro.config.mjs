// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://www.logisticsgurukul.com',
  compressHTML: true,

  // Astro's default Origin/Host CSRF check misfires behind Vercel's proxy
  // (preview URLs, aliases). Admin endpoints require a SameSite=lax session
  // cookie, so CSRF is already mitigated at the cookie layer.
  security: {
    checkOrigin: false,
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    react(),
    sitemap(),
  ],

  adapter: vercel(),
});
