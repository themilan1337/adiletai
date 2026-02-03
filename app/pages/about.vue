<template>
  <div class="container mx-auto mt-12 sm:mt-16 md:mt-24 px-4 sm:px-6">
    <div class="max-w-4xl mx-auto">
      <!-- Hero Section -->
      <header class="text-center mb-12 sm:mb-16">
        <h1 class="text-3xl sm:text-4xl md:text-5xl gs font-bold text-zinc-900 tracking-tight">
          О проекте AdiletAI
        </h1>
        <p class="mt-4 sm:mt-6 text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto">
          Мы создаем будущее юридической помощи, делая её доступной каждому жителю Казахстана
        </p>
      </header>

      <!-- Mission Section -->
      <section class="mb-12 sm:mb-16">
        <div class="bg-zinc-50 rounded-2xl p-8 sm:p-12">
          <h2 class="text-2xl sm:text-3xl gs font-bold text-zinc-900 mb-4">
            Наша миссия
          </h2>
          <p class="text-base sm:text-lg text-zinc-700 leading-relaxed">
            Сделать профессиональную юридическую помощь доступной каждому гражданину Казахстана. Мы верим, что знание своих прав и возможность получить квалифицированную консультацию не должны зависеть от финансового положения или места проживания.
          </p>
        </div>
      </section>

      <!-- Story Section -->
      <section class="mb-12 sm:mb-16">
        <h2 class="text-2xl sm:text-3xl gs font-bold text-zinc-900 mb-6">
          История создания
        </h2>
        <div class="space-y-6">
          <p class="text-base sm:text-lg text-zinc-700 leading-relaxed">
            AdiletAI родился из простого наблюдения: тысячи людей в Казахстане ежедневно сталкиваются с юридическими вопросами, но не могут получить своевременную помощь. Услуги юристов дороги, а поиск нужной информации в законодательстве занимает часы.
          </p>
          <p class="text-base sm:text-lg text-zinc-700 leading-relaxed">
            Команда молодых разработчиков и юристов из Казахстана объединилась, чтобы решить эту проблему с помощью современных технологий искусственного интеллекта. Мы разработали систему, которая объединяет мощь AI с глубокими знаниями казахстанского законодательства.
          </p>
          <p class="text-base sm:text-lg text-zinc-700 leading-relaxed">
            Сегодня AdiletAI помогает тысячам пользователей получать точные юридические консультации в режиме реального времени, экономя их время и деньги.
          </p>
        </div>
      </section>

      <!-- Values Section -->
      <section class="mb-12 sm:mb-16">
        <h2 class="text-2xl sm:text-3xl gs font-bold text-zinc-900 mb-8 text-center">
          Наши ценности
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <article class="p-6 border border-zinc-200 rounded-xl">
            <div class="text-3xl mb-3">🎯</div>
            <h3 class="text-lg gs font-medium text-zinc-900 mb-2">
              Точность
            </h3>
            <p class="text-sm sm:text-base text-zinc-600">
              Мы используем технологию RAG для проверки каждого ответа по базе актуальных законов, обеспечивая максимальную точность информации.
            </p>
          </article>

          <article class="p-6 border border-zinc-200 rounded-xl">
            <div class="text-3xl mb-3">🤝</div>
            <h3 class="text-lg gs font-medium text-zinc-900 mb-2">
              Доступность
            </h3>
            <p class="text-sm sm:text-base text-zinc-600">
              Юридическая помощь должна быть доступна каждому, независимо от дохода или географического положения.
            </p>
          </article>

          <article class="p-6 border border-zinc-200 rounded-xl">
            <div class="text-3xl mb-3">🔒</div>
            <h3 class="text-lg gs font-medium text-zinc-900 mb-2">
              Конфиденциальность
            </h3>
            <p class="text-sm sm:text-base text-zinc-600">
              Мы серьезно относимся к защите персональных данных и обеспечиваем полную конфиденциальность всех обращений.
            </p>
          </article>

          <article class="p-6 border border-zinc-200 rounded-xl">
            <div class="text-3xl mb-3">🚀</div>
            <h3 class="text-lg gs font-medium text-zinc-900 mb-2">
              Инновации
            </h3>
            <p class="text-sm sm:text-base text-zinc-600">
              Мы постоянно совершенствуем технологии и добавляем новые функции для улучшения качества сервиса.
            </p>
          </article>
        </div>
      </section>

      <!-- Technology Section -->
      <section class="mb-12 sm:mb-16">
        <h2 class="text-2xl sm:text-3xl gs font-bold text-zinc-900 mb-6">
          Технология RAG
        </h2>
        <div class="bg-zinc-50 rounded-xl p-6 sm:p-8">
          <p class="text-base sm:text-lg text-zinc-700 leading-relaxed mb-4">
            Retrieval-Augmented Generation (RAG) — это передовая технология, которая отличает AdiletAI от обычных AI-чатботов.
          </p>
          <p class="text-base sm:text-lg text-zinc-700 leading-relaxed mb-4">
            В отличие от стандартных языковых моделей, которые полагаются только на данные обучения, наша система:
          </p>
          <ul class="space-y-3 text-base sm:text-lg text-zinc-700">
            <li class="flex items-start gap-3">
              <span class="text-zinc-700 font-bold mt-1">•</span>
              <span>Ищет релевантную информацию в актуальной базе законов Казахстана</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-zinc-700 font-bold mt-1">•</span>
              <span>Проверяет каждый ответ на соответствие действующему законодательству</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-zinc-700 font-bold mt-1">•</span>
              <span>Предоставляет ссылки на конкретные статьи и нормативные акты</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-zinc-700 font-bold mt-1">•</span>
              <span>Обновляется при изменении законодательства</span>
            </li>
          </ul>
        </div>
      </section>

      <!-- Team Section -->
      <section class="mb-12 sm:mb-16">
        <h2 class="text-2xl sm:text-3xl gs font-bold text-zinc-900 mb-6 text-center">
          Наша команда
        </h2>
        <p class="text-base sm:text-lg text-zinc-600 text-center max-w-2xl mx-auto mb-8">
          Мы — молодая команда разработчиков, юристов и дизайнеров из Казахстана, объединенных одной целью: сделать право доступным для всех.
        </p>
        <div class="bg-zinc-50 rounded-xl p-6 sm:p-8 text-center">
          <p class="text-base sm:text-lg text-zinc-700 leading-relaxed">
            Наша команда сочетает экспертизу в области искусственного интеллекта, машинного обучения и глубокие знания казахстанского законодательства. Мы постоянно работаем над улучшением платформы и добавлением новых функций.
          </p>
        </div>
      </section>

      <!-- Stats Section -->
      <section class="mb-12 sm:mb-16">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div class="text-center">
            <p class="text-3xl sm:text-4xl font-bold text-zinc-900 gs mb-2">10+</p>
            <p class="text-sm sm:text-base text-zinc-600">Активных пользователей</p>
          </div>
          <div class="text-center">
            <p class="text-3xl sm:text-4xl font-bold text-zinc-900 gs mb-2">83%</p>
            <p class="text-sm sm:text-base text-zinc-600">Точнее ChatGPT</p>
          </div>
          <div class="text-center">
            <p class="text-3xl sm:text-4xl font-bold text-zinc-900 gs mb-2">17ч</p>
            <p class="text-sm sm:text-base text-zinc-600">Экономия в неделю</p>
          </div>
          <div class="text-center">
            <p class="text-3xl sm:text-4xl font-bold text-zinc-900 gs mb-2">24/7</p>
            <p class="text-sm sm:text-base text-zinc-600">Доступность</p>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="mb-16 sm:mb-20 md:mb-24">
        <div class="bg-zinc-700 rounded-2xl p-8 sm:p-12 text-center">
          <h2 class="text-2xl sm:text-3xl gs font-bold text-white mb-4">
            Присоединяйтесь к нам
          </h2>
          <p class="text-base sm:text-lg text-zinc-200 mb-8 max-w-xl mx-auto">
            Станьте частью движения за доступное право в Казахстане
          </p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <NuxtLink
              to="https://console.adiletai.com/auth/register"
              class="relative flex gs items-center justify-center text-center font-medium transition-colors duration-200 ease-in-out select-none focus-visible:outline-2 focus-visible:outline-offset-2 rounded-md text-zinc-900 bg-white hover:bg-zinc-100 focus-visible:outline-white h-11 px-8 text-base w-full sm:w-auto"
            >
              Начать использовать
            </NuxtLink>
            <NuxtLink
              to="/contact"
              class="relative flex gs items-center justify-center text-center font-medium transition-colors duration-200 ease-in-out select-none focus-visible:outline-2 focus-visible:outline-offset-2 rounded-md text-white bg-zinc-600 hover:bg-zinc-500 focus-visible:outline-white h-11 px-8 text-base w-full sm:w-auto"
            >
              Связаться с нами
            </NuxtLink>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'О проекте AdiletAI - Юридический AI помощник для Казахстана',
  description: 'Узнайте историю создания AdiletAI, нашу миссию и технологию RAG. Молодая команда из Казахстана делает юридическую помощь доступной каждому с помощью искусственного интеллекта.',
  keywords: 'о adiletai, команда adiletai, миссия adiletai, технология rag, юридический ai казахстан, о проекте, история создания',
  robots: 'index, follow',

  ogType: 'website',
  ogUrl: 'https://adiletai.com/about',
  ogTitle: 'О AdiletAI - История и миссия проекта',
  ogDescription: 'Молодая команда из Казахстана создает будущее юридической помощи с помощью AI и технологии RAG.',
  ogImage: 'https://adiletai.com/og-image.png',

  twitterCard: 'summary_large_image',
  twitterTitle: 'О AdiletAI - Юридический AI помощник',
  twitterDescription: 'История создания и миссия проекта AdiletAI - делаем право доступным каждому в Казахстане.',
  twitterImage: 'https://adiletai.com/twitter-image.png'
})

useSchemaOrg([
  {
    '@type': 'WebPage',
    '@id': 'https://adiletai.com/about#webpage',
    url: 'https://adiletai.com/about',
    name: 'О проекте AdiletAI',
    description: 'История создания, миссия и технология юридического AI помощника для Казахстана',
    inLanguage: 'ru-RU',
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString().slice(0, 10)
  },
  {
    '@type': 'AboutPage',
    '@id': 'https://adiletai.com/about#aboutpage',
    name: 'О AdiletAI',
    description: 'Информация о проекте AdiletAI, команде и технологии RAG'
  }
])

useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://adiletai.com/about'
    }
  ],
  htmlAttrs: {
    lang: 'ru'
  }
})
</script>
