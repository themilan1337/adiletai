<template>
  <div class="container mx-auto mt-12 sm:mt-16 md:mt-24">
    <!-- Hero Section -->
    <Hero />

    <!-- Features Section -->
    <section id="features" class="max-w-4xl mx-auto px-4 sm:px-6 mt-16 sm:mt-20 md:mt-24">
      <div class="text-center mb-12 sm:mb-16">
        <h2 class="text-2xl sm:text-3xl md:text-4xl gs font-bold text-zinc-900 tracking-tight">
          Работа с вашими внутренними документами. Здесь и сейчас.
        </h2>
        <p class="mt-4 text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto">
          Возможности платформы, которые AdiletAI выполняет уже сегодня — без пилотных обещаний на будущее.
        </p>
      </div>

      <div class="overflow-x-auto rounded-xl border border-zinc-200">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="border-b border-zinc-200 bg-zinc-50">
              <th scope="col" class="gs px-4 sm:px-6 py-3 sm:py-4 text-sm font-medium text-zinc-900 w-2/5">
                Функция
              </th>
              <th scope="col" class="gs px-4 sm:px-6 py-3 sm:py-4 text-sm font-medium text-zinc-900">
                Что получает фирма
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(feature, i) in features"
              :key="feature.name"
              :class="i !== features.length - 1 ? 'border-b border-zinc-200' : ''"
            >
              <td class="px-4 sm:px-6 py-4 text-sm sm:text-base font-medium text-zinc-900 align-top">
                {{ feature.name }}
              </td>
              <td class="px-4 sm:px-6 py-4 text-sm sm:text-base text-zinc-600 align-top">
                {{ feature.result }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Security & Privacy Section -->
    <section id="security" class="max-w-4xl mx-auto px-4 sm:px-6 mt-16 sm:mt-20 md:mt-24">
      <div class="text-center mb-12 sm:mb-16">
        <h2 class="text-2xl sm:text-3xl md:text-4xl gs font-bold text-zinc-900 tracking-tight">
          Ваша адвокатская тайна остаётся тайной
        </h2>
        <p class="mt-4 text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto">
          Мы понимаем цену конфиденциальности в вашем бизнесе. Безопасность — не опция, а фундамент архитектуры AdiletAI.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <article
          v-for="item in securityPoints"
          :key="item.title"
          class="flex gap-4 p-6 border border-zinc-200 rounded-xl"
          :class="item.wide ? 'sm:col-span-2' : ''"
        >
          <div class="shrink-0 w-10 h-10 bg-zinc-700 rounded-lg flex items-center justify-center text-white text-lg" aria-hidden="true">
            {{ item.icon }}
          </div>
          <div>
            <h3 class="gs text-base sm:text-lg font-medium text-zinc-900 mb-1">{{ item.title }}</h3>
            <p class="text-sm sm:text-base text-zinc-600">{{ item.description }}</p>
          </div>
        </article>
      </div>

      <div class="mt-6 flex items-start gap-3 border-l-2 border-zinc-300 pl-4 max-w-2xl mx-auto">
        <span class="text-lg shrink-0" aria-hidden="true">🛡️</span>
        <p class="text-sm text-zinc-600">
          Загрузка NDA и контрактов в AdiletAI безопаснее, чем их пересылка по почте: данные шифруются, обезличиваются и не покидают ваш контур.
        </p>
      </div>
    </section>

    <!-- Objections Section -->
    <section class="max-w-4xl mx-auto px-4 sm:px-6 mt-16 sm:mt-20 md:mt-24">
      <div class="text-center mb-12 sm:mb-16">
        <h2 class="text-2xl sm:text-3xl md:text-4xl gs font-bold text-zinc-900 tracking-tight">
          Жёсткие вопросы. Прямые ответы.
        </h2>
        <p class="mt-4 text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto">
          Это вопросы, которые управляющий партнёр или директор по комплаенсу задаёт на первой встрече. Мы отвечаем на них сразу — без маркетинга.
        </p>
      </div>

      <div class="flex flex-col gap-6">
        <article
          v-for="item in objections"
          :key="item.q"
          class="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-4 md:gap-8 p-6 border border-zinc-200 rounded-xl"
        >
          <blockquote class="text-base sm:text-lg gs font-medium text-zinc-900">
            «{{ item.q }}»
          </blockquote>
          <p class="text-sm sm:text-base text-zinc-600">{{ item.a }}</p>
        </article>
      </div>
    </section>

    <!-- Premium Announcement: Smart Bridge -->
    <section class="max-w-4xl mx-auto px-4 sm:px-6 mt-16 sm:mt-20 md:mt-24">
      <div class="rounded-2xl border border-zinc-200 bg-zinc-50 p-8 sm:p-12 text-center">
        <h2 class="text-2xl sm:text-3xl gs font-bold text-zinc-900 tracking-tight mb-4">
          Скоро: глубокая судебная аналитика
        </h2>
        <p class="text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto">
          AdiletAI находится в процессе официальной интеграции с государственным шлюзом <strong class="text-zinc-900">Smart Bridge</strong> (базы Судебной администрации РК). Это откроет модуль глубокой судебной аналитики — оценку перспектив спора, анализ практики и статистики по реальным судебным данным.
        </p>
        <div class="mt-6 flex items-start gap-3 border-l-2 border-zinc-300 pl-4 text-left max-w-xl mx-auto">
          <span class="text-lg shrink-0" aria-hidden="true">⭐</span>
          <p class="text-sm text-zinc-600">
            Модуль судебной аналитики станет доступен действующим партнёрам в рамках подписки. Те, кто внедряет AdiletAI сегодня, получают преимущество первыми.
          </p>
        </div>
      </div>
    </section>

    <!-- Final CTA Section -->
    <section class="max-w-2xl mx-auto px-4 sm:px-6 mt-16 sm:mt-20 md:mt-24 mb-16 sm:mb-20 md:mb-24">
      <div class="bg-zinc-700 rounded-2xl p-8 sm:p-12 text-center">
        <h2 class="text-2xl sm:text-3xl gs font-bold text-white mb-4">
          Оцените автоматизацию на ваших реальных документах
        </h2>
        <p class="text-base sm:text-lg text-zinc-200 mb-8 max-w-xl mx-auto">
          Мы не продаём обещания. Мы предлагаем пилот в вашем контуре и аудит, который покажет экономику в цифрах.
        </p>

        <ul class="text-left max-w-md mx-auto mb-8 flex flex-col gap-2">
          <li v-for="point in demoAgenda" :key="point" class="flex gap-2 text-sm sm:text-base text-zinc-200">
            <span aria-hidden="true">—</span>
            <span>{{ point }}</span>
          </li>
        </ul>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            :href="CALENDLY_URL"
            target="_blank"
            rel="noopener"
            class="relative flex gs items-center justify-center text-center font-medium transition-colors duration-200 ease-in-out select-none focus-visible:outline-2 focus-visible:outline-offset-2 rounded-md text-zinc-900 bg-white hover:bg-zinc-100 focus-visible:outline-white h-11 px-8 text-base w-full sm:w-auto"
          >
            Забронировать демо для вашей компании
          </a>
          <a
            :href="CALENDLY_URL"
            target="_blank"
            rel="noopener"
            class="relative flex gs items-center justify-center text-center font-medium transition-colors duration-200 ease-in-out select-none focus-visible:outline-2 focus-visible:outline-offset-2 rounded-md text-white bg-zinc-600 hover:bg-zinc-500 focus-visible:outline-white h-11 px-8 text-base w-full sm:w-auto"
          >
            Запросить аудит и пилотный запуск
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import Hero from '@/components/Hero.vue'

const features = [
  {
    name: 'Анализ и ревью договоров',
    result: 'Сокращение времени на вычитку типовых и сложных договоров в разы. Система подсвечивает риски и нужные пункты.'
  },
  {
    name: 'Драфтинг документов',
    result: 'Первичный проект документа за минуты вместо часов — на основе ваших шаблонов и практики.'
  },
  {
    name: 'Внутренняя база знаний',
    result: 'Мгновенные ответы по массиву ваших документов с прямой ссылкой на пункт-первоисточник.'
  },
  {
    name: 'Верифицируемость',
    result: 'Ни одного ответа «из воздуха». Только то, что есть в ваших данных — с подтверждением.'
  }
]

const securityPoints = [
  {
    icon: '🔒',
    title: 'Изолированный контур',
    description: 'Развёртывание в защищённом периметре. Данные не уходят в публичное облако.'
  },
  {
    icon: '🏦',
    title: 'Банковское шифрование',
    description: 'Тот же уровень защиты, что и в финансовом секторе.'
  },
  {
    icon: '🥷',
    title: 'Полная анонимизация',
    description: 'Чувствительные данные обезличиваются на входе.'
  },
  {
    icon: '🚫',
    title: 'Модель не обучается на ваших данных',
    description: 'Ваши договоры и NDA никогда не попадут в общий датасет и к другим клиентам.'
  },
  {
    icon: '🎯',
    title: 'Никаких галлюцинаций',
    description: 'Гибридная RAG-архитектура: система извлекает ответ из ваших документов и даёт ссылку на конкретный пункт. Юрист всегда видит первоисточник.',
    wide: true
  }
]

const objections = [
  {
    q: 'Мы обязаны хранить адвокатскую тайну. Куда физически уходят наши договоры и NDA после загрузки? Кто имеет к ним доступ, обучается ли ваша модель на наших данных, и что произойдёт с данными, если мы расторгнем контракт?',
    a: 'AdiletAI разворачивается в изолированном контуре с банковским уровнем шифрования. Ваши документы не покидают защищённый периметр, не используются для обучения модели и не попадают в общие датасеты. Все чувствительные данные проходят полную анонимизацию, а при прекращении сотрудничества данные удаляются по вашему регламенту.'
  },
  {
    q: 'Мировая практика уже знает случаи, когда юристов штрафовали за сфабрикованные ИИ ссылки на несуществующие прецеденты. Какая у вас гарантия, что система не выдумает пункт договора или норму права, за которую отвечать буду лично я?',
    a: 'AdiletAI построен на гибридной RAG-архитектуре: система не «сочиняет» ответ, а извлекает его из загруженных вами документов. Каждый ответ сопровождается ссылкой на конкретный пункт конкретного документа — юрист видит первоисточник и проверяет его за секунды. Модель не отвечает на то, чего нет в базе.'
  },
  {
    q: 'Мы продаём время. Дайте не маркетинг, а цифры: на сколько процентов сокращается время на ревью договора и на драфтинг стандартного документа? И как это влияет на нашу маржу, а не только на скорость?',
    a: 'Ревью типовых договоров ускоряется в разы, первичный драфт готовится за минуты вместо часов. Высвобожденное время партнёров и senior-юристов перенаправляется с рутины на высокомаржинальную работу — стратегию, переговоры, сложные споры. Точные метрики фиксируются на пилоте на ваших реальных документах.'
  },
  {
    q: 'У нас свой DMS, свои политики ИБ и служба безопасности, которая не пропустит внешнее SaaS. Как разворачивается система — в вашем облаке или в нашем изолированном контуре? Сколько занимает внедрение и что требуется от нашего IT?',
    a: 'AdiletAI разворачивается в вашем изолированном контуре и работает в связке с внутренними политиками ИБ — мы не требуем выносить конфиденциальные данные во внешнее публичное облако. Внедрение проходит как управляемый проект с вашей службой безопасности и IT: от пилота на ограниченном наборе документов до полного контура.'
  },
  {
    q: 'Что вы гарантируете по SLA и уровню доступа к данным — юридически, в договоре, а не на словах?',
    a: 'Уровни доступа, безопасность и обязательства фиксируются договором. SLA, регламент обработки и удаления данных — юридически закреплённые условия сотрудничества, а не маркетинговые обещания.'
  }
]

const demoAgenda = [
  'Живой разбор ваших договоров: ревью и черновой драфтинг на реальных документах фирмы',
  'Архитектура безопасности: изолированный контур, шифрование, обработка NDA и адвокатской тайны',
  'Экономика пилота: расчёт экономии billable hours на ваших объёмах',
  'Интеграция: сроки внедрения, требования к вашему DMS, IT и службе безопасности'
]

// SEO Meta Tags
useSeoMeta({
  title: 'AdiletAI — корпоративная ИИ-платформа для юридических департаментов и юрфирм',
  description: 'AdiletAI снимает рутину с юридического департамента: анализ и ревью договоров, драфтинг документов, внутренняя база знаний со ссылкой на первоисточник. Изолированный контур, банковское шифрование, без обучения модели на ваших данных.',
  keywords: 'корпоративный юридический ии, автоматизация юридического департамента, ревью договоров ии, драфтинг документов ии, RAG для юристов, legal ai казахстан, безопасность данных юридическая фирма, adiletai',
  author: 'AdiletAI',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',

  // Open Graph
  ogType: 'website',
  ogUrl: 'https://adiletai.com',
  ogTitle: 'AdiletAI — корпоративная ИИ-платформа для юридических департаментов',
  ogDescription: 'Анализ и ревью договоров, драфтинг документов, верифицируемая база знаний. Изолированный контур и банковское шифрование.',
  ogImage: 'https://adiletai.com/og-image.png',
  ogImageAlt: 'AdiletAI — корпоративный юридический ИИ-помощник',
  ogLocale: 'ru_RU',
  ogSiteName: 'AdiletAI',

  // Twitter Card
  twitterCard: 'summary_large_image',
  twitterTitle: 'AdiletAI — корпоративный ИИ для юридических департаментов',
  twitterDescription: 'Ревью и драфтинг договоров, верифицируемая база знаний со ссылкой на первоисточник. Изолированный контур.',
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
    description: 'Корпоративная ИИ-платформа для юридических департаментов и юридических фирм в Казахстане.',
    inLanguage: 'ru-RU',
    publisher: {
      '@id': 'https://adiletai.com/#organization'
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
    description: 'Корпоративная ИИ-платформа для юридических департаментов и юридических фирм, работающая в изолированном контуре клиента.',
    sameAs: [
      'https://app.adiletai.com'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
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
    description: 'Корпоративная ИИ-платформа для анализа и ревью договоров, драфтинга документов и верифицируемого поиска по внутренней базе знаний юридического департамента.',
    featureList: [
      'Анализ и ревью договоров с подсветкой рисков',
      'Драфтинг документов на основе ваших шаблонов',
      'Верифицируемая база знаний со ссылкой на первоисточник',
      'Изолированный контур и банковское шифрование'
    ]
  },
  // WebPage Schema
  {
    '@type': 'WebPage',
    '@id': 'https://adiletai.com/#webpage',
    url: 'https://adiletai.com',
    name: 'AdiletAI — корпоративная ИИ-платформа для юридических департаментов',
    description: 'Анализ и ревью договоров, драфтинг документов и верифицируемая база знаний для юридических департаментов и юридических фирм.',
    inLanguage: 'ru-RU',
    isPartOf: {
      '@id': 'https://adiletai.com/#website'
    },
    about: {
      '@id': 'https://adiletai.com/#organization'
    },
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString()
  },
  // FAQPage Schema — mirrors the "Жёсткие вопросы. Прямые ответы." section on this page
  {
    '@type': 'FAQPage',
    '@id': 'https://adiletai.com/#faq',
    mainEntity: objections.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a
      }
    }))
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
