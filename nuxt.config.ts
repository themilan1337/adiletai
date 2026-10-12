import tailwindcss from '@tailwindcss/vite'
import { readdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

// One JSON file per namespace per locale (i18n/locales/<locale>/<namespace>.json).
// The namespace list is read from en/, so ru/ and kk/ must mirror it or the build fails.
const NAMESPACES = readdirSync(fileURLToPath(new URL('./i18n/locales/en', import.meta.url)))
  .filter(f => f.endsWith('.json'))
  .sort()
const files = (code: string) => NAMESPACES.map(f => `${code}/${f}`)

// Production serves www (the apex 307-redirects to it). Override with NUXT_SITE_URL if that changes.
const SITE_URL = process.env.NUXT_SITE_URL || 'https://www.adiletai.com'

export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  // Self-hosted variable fonts (npm, split by unicode-range so Cyrillic files load only on RU/KK pages):
  // Inter for text, Literata with the optical-size axis for headings.
  css: ['@fontsource-variable/inter/index.css', '@fontsource-variable/inter/wght-italic.css', '@fontsource-variable/literata/opsz.css', './app/assets/css/main.css'],
  // @nuxtjs/i18n must come before @nuxtjs/seo so site config, sitemap and schema.org pick up the locales.
  modules: ['@nuxt/eslint', '@nuxt/image', '@nuxt/icon', '@nuxtjs/i18n', '@nuxtjs/seo'],

  app: {
    head: {
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: '48x48' },
        { rel: 'apple-touch-icon', href: '/logo.png' },
      ],
      meta: [{ name: 'theme-color', content: '#fafaf9' }],
    },
  },

  site: {
    url: SITE_URL,
    name: 'AdiletAI',
    trailingSlash: false,
  },

  i18n: {
    baseUrl: SITE_URL,
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    locales: [
      { code: 'en', language: 'en-US', name: 'English', dir: 'ltr', files: files('en') },
      { code: 'ru', language: 'ru-KZ', name: 'Русский', dir: 'ltr', files: files('ru') },
      { code: 'kk', language: 'kk-KZ', name: 'Қазақша', dir: 'ltr', files: files('kk') },
    ],
    // No server redirects by language: every URL is stable and crawlable, and pages stay prerenderable.
    detectBrowserLanguage: false,
  },

  icon: {
    serverBundle: { collections: ['hugeicons', 'circle-flags'] },
    clientBundle: { scan: true },
  },

  // Static per-locale OG images live in public/og; no runtime rendering needed.
  ogImage: { enabled: false },

  robots: {
    // One permissive group: search engines and AI answer engines (GPTBot, ClaudeBot, PerplexityBot, ...) may all crawl.
    groups: [{ userAgent: ['*'], allow: ['/'] }],
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/ru', '/kk'],
      // The sitemap module's /sitemap.xml redirect gets re-localized into empty 200 pages; never emit those.
      ignore: [/^\/(?:ru|kk)\/sitemap\.xml/],
      failOnError: true,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
})
