import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  site: 'https://asithakuruppu.github.io',
  base: '/huangwei', // Remove if serving at https://asithakuruppu.github.io
  integrations: [sitemap(), tailwind()],
  vite: {
    plugins: [tailwind()],
  },
});
