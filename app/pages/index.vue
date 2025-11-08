<template>
  <div class="container mx-auto mt-24">
    <Hero />
  </div>
</template>

<script setup lang="ts">
import Hero from '@/components/Hero.vue'

// SEO Meta Tags
useSeoMeta({
  title: 'AdiletAI - Юридический AI Помощник с RAG | Законодательство Казахстана',
  description: 'Получайте точные юридические консультации с помощью ИИ помощника AdiletAI. Технология RAG и база законов Казахстана. Экономьте до 17 часов в неделю. Точность на 83% выше ChatGPT.',
  keywords: 'юридический помощник казахстан, ai юрист, искусственный интеллект юрист, законы казахстана, юридическая консультация онлайн, adiletai, RAG технология, chatgpt для юристов, правовая помощь казахстан',
  author: 'AdiletAI',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',

  // Open Graph
  ogType: 'website',
  ogUrl: 'https://adiletai.com',
  ogTitle: 'AdiletAI - Юридический AI Помощник для Казахстана | Точность +83%',
  ogDescription: 'Интеллектуальный юридический помощник на базе ИИ с технологией RAG. Точные ответы по законодательству Казахстана. Экономьте 16-17 часов в неделю.',
  ogImage: 'https://adiletai.com/og-image.png',
  ogImageAlt: 'AdiletAI - Юридический помощник на основе искусственного интеллекта',
  ogLocale: 'ru_RU',
  ogSiteName: 'AdiletAI',

  // Twitter Card
  twitterCard: 'summary_large_image',
  twitterTitle: 'AdiletAI - AI Юридический Помощник | +83% Точнее ChatGPT',
  twitterDescription: 'Получайте точные юридические консультации с помощью ИИ. RAG технология + законодательство Казахстана. Попробуйте бесплатно!',
  twitterImage: 'https://adiletai.com/twitter-image.png',
  twitterSite: '@adiletai',
  twitterCreator: '@adiletai',

  // Additional Meta
  applicationName: 'AdiletAI',
  msapplicationTileColor: '#18181b',
  themeColor: '#ffffff',

  // Language and Regional
  language: 'ru',

  // Apple Meta Tags
  appleMobileWebAppCapable: 'yes',
  appleMobileWebAppStatusBarStyle: 'default',
  appleMobileWebAppTitle: 'AdiletAI'
})

// Schema.org Structured Data for Rich Snippets
useSchemaOrg([
  // Website Schema
  {
    '@type': 'WebSite',
    '@id': 'https://adiletai.com/#website',
    url: 'https://adiletai.com',
    name: 'AdiletAI',
    description: 'Интеллектуальный юридический помощник на базе искусственного интеллекта для Казахстана',
    inLanguage: 'ru-RU',
    publisher: {
      '@id': 'https://adiletai.com/#organization'
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://app.adiletai.com/?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  },
  // Organization Schema
  {
    '@type': 'Organization',
    '@id': 'https://adiletai.com/#organization',
    name: 'AdiletAI',
    url: 'https://adiletai.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://adiletai.com/logo.png',
      width: 512,
      height: 512
    },
    description: 'Молодёжный стартап из Казахстана, разрабатывающий AI-решения для юридической помощи',
    sameAs: [
      'https://app.adiletai.com'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      availableLanguage: ['Russian', 'Kazakh']
    }
  },
  // SoftwareApplication Schema
  {
    '@type': 'SoftwareApplication',
    '@id': 'https://adiletai.com/#softwareapplication',
    name: 'AdiletAI',
    applicationCategory: 'LegalApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'KZT'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '10',
      bestRating: '5',
      worstRating: '1'
    },
    description: 'AI помощник для юридических вопросов с интеграцией RAG технологии и базы законов Казахстана',
    featureList: [
      'Точность на 83% выше ChatGPT',
      'Экономия 16-17 часов в неделю',
      'RAG технология проверки',
      'База законодательства Казахстана'
    ]
  },
  // WebPage Schema
  {
    '@type': 'WebPage',
    '@id': 'https://adiletai.com/#webpage',
    url: 'https://adiletai.com',
    name: 'AdiletAI - Юридический AI Помощник для Казахстана',
    description: 'Получайте точные юридические консультации с помощью искусственного интеллекта. Технология RAG и законодательство РК.',
    inLanguage: 'ru-RU',
    isPartOf: {
      '@id': 'https://adiletai.com/#website'
    },
    about: {
      '@id': 'https://adiletai.com/#organization'
    },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: 'https://adiletai.com/app.png',
      width: 1200,
      height: 1200
    },
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString()
  },
  // FAQPage Schema for better SERP features
  {
    '@type': 'FAQPage',
    '@id': 'https://adiletai.com/#faq',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Что такое AdiletAI?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'AdiletAI - это интеллектуальный юридический помощник на базе искусственного интеллекта с интеграцией RAG технологии, который предоставляет точные ответы на юридические вопросы, основанные на законодательстве Казахстана.'
        }
      },
      {
        '@type': 'Question',
        name: 'Насколько точен AdiletAI по сравнению с ChatGPT?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'AdiletAI обеспечивает точность на 83% выше, чем ChatGPT, благодаря использованию технологии RAG и специализированной базы законодательства Казахстана.'
        }
      },
      {
        '@type': 'Question',
        name: 'Сколько времени можно сэкономить с AdiletAI?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Пользователи AdiletAI экономят в среднем 16-17 часов в неделю на поиске и анализе юридической информации.'
        }
      }
    ]
  }
])

// Canonical URL
useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://adiletai.com'
    }
  ],
  htmlAttrs: {
    lang: 'ru'
  }
})
</script>