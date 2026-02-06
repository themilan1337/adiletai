import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ['./app/assets/css/main.css'],
  modules: ['@nuxt/eslint', '@nuxt/fonts', '@nuxt/image', 'nuxt-booster', '@nuxtjs/seo'],

  site: {
    url: 'https://adiletai.com',
    name: 'AdiletAI - Юридический AI Помощник для Казахстана',
    description: 'Интеллектуальный юридический помощник на базе искусственного интеллекта с интеграцией RAG. Получайте точные ответы на юридические вопросы, основанные на законодательстве Казахстана.',
    defaultLocale: 'ru',
    trailingSlash: false
  },

  ogImage: {
    enabled: true,
    fonts: [
      'Inter:400',
      'Inter:700'
    ]
  },

  sitemap: {
    strictNuxtContentPaths: true,
    sitemaps: true
  },

  robots: {
    enabled: true,
    groups: [
      {
        userAgent: ['*'],
        allow: ['/'],
      },
      {
        userAgent: ['Googlebot', 'Bingbot', 'Yandex'],
        allow: ['/'],
      }
    ]
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  booster: {

    detection: {
      performance: true,
      browserSupport: true
    },

    performanceMetrics: {
      device: {
        hardwareConcurrency: { min: 2, max: 48 },
        deviceMemory: { min: 2 }
      },
      timing: {
        fcp: 800,
        dcl: 1200
      }
    },

    targetFormats: ['webp', 'avif', 'jpg|jpeg|png|gif'],

    componentAutoImport: false,
    componentPrefix: undefined,

    /**
     * IntersectionObserver rootMargin for Compoennts and Assets
     */
    lazyOffset: {
      component: '0%',
      asset: '0%'
    }

  }
});