// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://flightbaggagerules.com',
  output: 'static',

  integrations: [
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          es: 'es-ES',
          fr: 'fr-FR',
          de: 'de-DE',
          it: 'it-IT',
          pt: 'pt-PT',
          nl: 'nl-NL',
          ar: 'ar-SA',
          hi: 'hi-IN',
          ja: 'ja-JP',
          ko: 'ko-KR',
          zh: 'zh-CN',
        },
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'fr', 'de', 'it', 'pt', 'nl', 'ar', 'hi', 'ja', 'ko', 'zh'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});

