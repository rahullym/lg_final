// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.logisticsgurukul.com',
  compressHTML: true,
  output: 'server',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react(), sitemap()],

  adapter: node({
    mode: 'standalone'
  })
});