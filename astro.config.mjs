import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  output: 'server',
  adapter: vercel(),
  site: "https://josemacruz.dev",
  integrations: [sitemap()]
});