// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://www.logisticsgurukul.com',
  compressHTML: true,

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    react(),
    sitemap(),
  ],

  adapter: vercel(),
});
