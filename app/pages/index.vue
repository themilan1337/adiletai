<template>
  <div class="container mx-auto mt-12 sm:mt-16 md:mt-24">
    <!-- Hero Section -->
    <Hero />

    <!-- Why AdiletAI Section -->
    <section id="why" class="max-w-4xl mx-auto px-4 sm:px-6 mt-16 sm:mt-20 md:mt-24">
      <div class="text-center mb-12 sm:mb-16">
        <h2 class="text-2xl sm:text-3xl md:text-4xl gs font-bold text-zinc-900 tracking-tight">
          Почему выбирают AdiletAI?
        </h2>
        <p class="mt-4 text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto">
          Мы объединили мощь искусственного интеллекта и глубокие знания законодательства Казахстана, чтобы сделать юридическую помощь доступной каждому.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        <article class="flex flex-col gap-3 p-6 bg-zinc-50 rounded-xl border border-zinc-200">
          <div class="w-12 h-12 bg-zinc-700 rounded-lg flex items-center justify-center text-white text-2xl">
            ⚡
          </div>
          <h3 class="text-lg sm:text-xl gs font-medium text-zinc-900">
            Мгновенные ответы
          </h3>
          <p class="text-sm sm:text-base text-zinc-600">
            Получайте квалифицированные юридические консультации за секунды, не дожидаясь записи к юристу и не тратя часы на поиск информации.
          </p>
        </article>

        <article class="flex flex-col gap-3 p-6 bg-zinc-50 rounded-xl border border-zinc-200">
          <div class="w-12 h-12 bg-zinc-700 rounded-lg flex items-center justify-center text-white text-2xl">
            🎯
          </div>
          <h3 class="text-lg sm:text-xl gs font-medium text-zinc-900">
            Высокая точность
          </h3>
          <p class="text-sm sm:text-base text-zinc-600">
            Благодаря технологии RAG и постоянно обновляемой базе законов, точность наших ответов на 83% выше обычных AI-ассистентов.
          </p>
        </article>

        <article class="flex flex-col gap-3 p-6 bg-zinc-50 rounded-xl border border-zinc-200">
          <div class="w-12 h-12 bg-zinc-700 rounded-lg flex items-center justify-center text-white text-2xl">
            💰
          </div>
          <h3 class="text-lg sm:text-xl gs font-medium text-zinc-900">
            Доступная цена
          </h3>
          <p class="text-sm sm:text-base text-zinc-600">
            Стоимость консультации в разы ниже традиционных юридических услуг, а базовый функционал доступен бесплатно.
          </p>
        </article>
      </div>
    </section>

    <!-- Features Preview Section -->
    <section id="features" class="max-w-4xl mx-auto px-4 sm:px-6 mt-16 sm:mt-20 md:mt-24">
      <div class="text-center mb-12 sm:mb-16">
        <h2 class="text-2xl sm:text-3xl md:text-4xl gs font-bold text-zinc-900 tracking-tight">
          Мощные возможности для решения ваших задач
        </h2>
        <p class="mt-4 text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto">
          Все инструменты, необходимые для работы с юридическими вопросами, в одном месте.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <article class="p-6 border border-zinc-200 rounded-xl hover:border-zinc-300 transition-colors">
          <h3 class="text-lg gs font-medium text-zinc-900 mb-2">
            База законов Казахстана
          </h3>
          <p class="text-sm sm:text-base text-zinc-600">
            Полная и актуальная база законодательных актов РК с автоматическим обновлением при изменении законодательства.
          </p>
        </article>

        <article class="p-6 border border-zinc-200 rounded-xl hover:border-zinc-300 transition-colors">
          <h3 class="text-lg gs font-medium text-zinc-900 mb-2">
            Анализ документов
          </h3>
          <p class="text-sm sm:text-base text-zinc-600">
            Загружайте договоры, соглашения и другие документы для мгновенного AI-анализа на соответствие законодательству.
          </p>
        </article>

        <article class="p-6 border border-zinc-200 rounded-xl hover:border-zinc-300 transition-colors">
          <h3 class="text-lg gs font-medium text-zinc-900 mb-2">
            Генерация документов
          </h3>
          <p class="text-sm sm:text-base text-zinc-600">
            Автоматическое создание типовых юридических документов с учетом ваших индивидуальных требований.
          </p>
        </article>

        <article class="p-6 border border-zinc-200 rounded-xl hover:border-zinc-300 transition-colors">
          <h3 class="text-lg gs font-medium text-zinc-900 mb-2">
            История консультаций
          </h3>
          <p class="text-sm sm:text-base text-zinc-600">
            Все ваши вопросы и ответы сохраняются в личном кабинете для быстрого доступа в любое время.
          </p>
        </article>
      </div>

      <div class="mt-8 text-center">
        <NuxtLink
          to="/features"
          class="relative inline-flex gs items-center justify-center text-center font-medium transition-colors duration-200 ease-in-out select-none focus-visible:outline-2 focus-visible:outline-offset-2 rounded-md text-zinc-600 bg-zinc-50 outline outline-zinc-100 hover:bg-zinc-200 focus-visible:outline-zinc-600 h-10 px-6 text-sm"
        >
          Посмотреть все возможности
        </NuxtLink>
      </div>
    </section>

    <!-- How It Works Section -->
    <section class="max-w-4xl mx-auto px-4 sm:px-6 mt-16 sm:mt-20 md:mt-24">
      <div class="text-center mb-12 sm:mb-16">
        <h2 class="text-2xl sm:text-3xl md:text-4xl gs font-bold text-zinc-900 tracking-tight">
          Как это работает?
        </h2>
        <p class="mt-4 text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto">
          Всего три простых шага отделяют вас от квалифицированной юридической помощи.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="relative">
          <div class="flex flex-col items-center text-center">
            <div class="w-16 h-16 bg-zinc-700 rounded-full flex items-center justify-center text-white text-2xl gs font-bold mb-4">
              1
            </div>
            <h3 class="text-lg gs font-medium text-zinc-900 mb-2">
              Задайте вопрос
            </h3>
            <p class="text-sm sm:text-base text-zinc-600">
              Опишите вашу юридическую ситуацию простым языком или загрузите документы для анализа.
            </p>
          </div>
        </div>

        <div class="relative">
          <div class="flex flex-col items-center text-center">
            <div class="w-16 h-16 bg-zinc-700 rounded-full flex items-center justify-center text-white text-2xl gs font-bold mb-4">
              2
            </div>
            <h3 class="text-lg gs font-medium text-zinc-900 mb-2">
              AI анализирует
            </h3>
            <p class="text-sm sm:text-base text-zinc-600">
              Наш интеллектуальный помощник обрабатывает запрос, используя базу законов и технологию RAG.
            </p>
          </div>
        </div>

        <div class="relative">
          <div class="flex flex-col items-center text-center">
            <div class="w-16 h-16 bg-zinc-700 rounded-full flex items-center justify-center text-white text-2xl gs font-bold mb-4">
              3
            </div>
            <h3 class="text-lg gs font-medium text-zinc-900 mb-2">
              Получите ответ
            </h3>
            <p class="text-sm sm:text-base text-zinc-600">
              За секунды вы получаете подробный ответ со ссылками на соответствующие статьи законов.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Who Is It For Section -->
    <section class="max-w-4xl mx-auto px-4 sm:px-6 mt-16 sm:mt-20 md:mt-24">
      <div class="text-center mb-12 sm:mb-16">
        <h2 class="text-2xl sm:text-3xl md:text-4xl gs font-bold text-zinc-900 tracking-tight">
          Для кого создан AdiletAI?
        </h2>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <article class="p-6 bg-zinc-50 rounded-xl">
          <h3 class="text-lg gs font-medium text-zinc-900 mb-2">
            👨‍💼 Предприниматели
          </h3>
          <p class="text-sm sm:text-base text-zinc-600">
            Проверка договоров, консультации по налогам и регистрации бизнеса.
          </p>
        </article>

        <article class="p-6 bg-zinc-50 rounded-xl">
          <h3 class="text-lg gs font-medium text-zinc-900 mb-2">
            👤 Частные лица
          </h3>
          <p class="text-sm sm:text-base text-zinc-600">
            Помощь в семейных, трудовых и имущественных вопросах.
          </p>
        </article>

        <article class="p-6 bg-zinc-50 rounded-xl">
          <h3 class="text-lg gs font-medium text-zinc-900 mb-2">
            🎓 Студенты-юристы
          </h3>
          <p class="text-sm sm:text-base text-zinc-600">
            Быстрый поиск нормативных актов и помощь в подготовке к занятиям.
          </p>
        </article>

        <article class="p-6 bg-zinc-50 rounded-xl">
          <h3 class="text-lg gs font-medium text-zinc-900 mb-2">
            ⚖️ Юристы
          </h3>
          <p class="text-sm sm:text-base text-zinc-600">
            Ускорение рутинной работы и быстрый доступ к законодательству.
          </p>
        </article>

        <article class="p-6 bg-zinc-50 rounded-xl">
          <h3 class="text-lg gs font-medium text-zinc-900 mb-2">
            🏢 Компании
          </h3>
          <p class="text-sm sm:text-base text-zinc-600">
            Юридическая поддержка для HR, бухгалтерии и руководства.
          </p>
        </article>

        <article class="p-6 bg-zinc-50 rounded-xl">
          <h3 class="text-lg gs font-medium text-zinc-900 mb-2">
            📱 НПО и активисты
          </h3>
          <p class="text-sm sm:text-base text-zinc-600">
            Понимание прав граждан и механизмов их защиты.
          </p>
        </article>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="max-w-2xl mx-auto px-4 sm:px-6 mt-16 sm:mt-20 md:mt-24 mb-16 sm:mb-20 md:mb-24">
      <div class="bg-zinc-700 rounded-2xl p-8 sm:p-12 text-center">
        <h2 class="text-2xl sm:text-3xl gs font-bold text-white mb-4">
          Начните использовать AdiletAI прямо сейчас
        </h2>
        <p class="text-base sm:text-lg text-zinc-200 mb-8 max-w-xl mx-auto">
          Присоединяйтесь к тысячам пользователей, которые уже получают быструю и точную юридическую помощь.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <NuxtLink
            to="https://app.adiletai.com/"
            class="relative flex gs items-center justify-center text-center font-medium transition-colors duration-200 ease-in-out select-none focus-visible:outline-2 focus-visible:outline-offset-2 rounded-md text-zinc-900 bg-white hover:bg-zinc-100 focus-visible:outline-white h-11 px-8 text-base w-full sm:w-auto"
          >
            Попробовать бесплатно
          </NuxtLink>
          <NuxtLink
            to="https://wa.me/+77770172008"
            class="relative flex gs items-center justify-center text-center font-medium transition-colors duration-200 ease-in-out select-none focus-visible:outline-2 focus-visible:outline-offset-2 rounded-md text-white bg-zinc-600 hover:bg-zinc-500 focus-visible:outline-white h-11 px-8 text-base w-full sm:w-auto"
          >
            Получить демо
          </NuxtLink>
        </div>
      </div>
    </section>
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