<template>
  <div class="container mx-auto mt-12 sm:mt-16 md:mt-24 px-4 sm:px-6">
    <div class="max-w-5xl mx-auto">
      <!-- Hero Section -->
      <header class="text-center mb-12 sm:mb-16">
        <h1 class="text-3xl sm:text-4xl md:text-5xl gs font-bold text-zinc-900 tracking-tight">
          Блог AdiletAI
        </h1>
        <p class="mt-4 sm:mt-6 text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto">
          Новости, обновления, статьи о праве и искусственном интеллекте
        </p>
      </header>

      <!-- Coming Soon -->
      <section class="mb-12 sm:mb-16">
        <div class="bg-zinc-50 rounded-2xl p-12 sm:p-16 text-center border border-zinc-200">
          <div class="text-6xl mb-6">📝</div>
          <h2 class="text-2xl sm:text-3xl gs font-bold text-zinc-900 mb-4">
            Скоро здесь появится блог
          </h2>
          <p class="text-base text-zinc-600 mb-8 max-w-xl mx-auto">
            Мы готовим интересные материалы о юридических технологиях, AI в праве, обновлениях законодательства РК и практических советах по использованию AdiletAI.
          </p>
        </div>
      </section>

      <!-- Planned Topics -->
      <section class="mb-12 sm:mb-16">
        <h2 class="text-2xl sm:text-3xl gs font-bold text-zinc-900 mb-8 text-center">
          Что мы будем публиковать
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <article class="p-6 sm:p-8 bg-white border border-zinc-200 rounded-xl">
            <div class="w-14 h-14 bg-zinc-700 rounded-xl flex items-center justify-center text-3xl mb-4">
              🤖
            </div>
            <h3 class="text-lg gs font-medium text-zinc-900 mb-2">
              AI и право
            </h3>
            <p class="text-sm text-zinc-600">
              Как искусственный интеллект меняет юридическую индустрию, перспективы и вызовы
            </p>
          </article>

          <article class="p-6 sm:p-8 bg-white border border-zinc-200 rounded-xl">
            <div class="w-14 h-14 bg-zinc-700 rounded-xl flex items-center justify-center text-3xl mb-4">
              📚
            </div>
            <h3 class="text-lg gs font-medium text-zinc-900 mb-2">
              Обновления законодательства
            </h3>
            <p class="text-sm text-zinc-600">
              Разбор важных изменений в законах Казахстана и их влияние на бизнес и граждан
            </p>
          </article>

          <article class="p-6 sm:p-8 bg-white border border-zinc-200 rounded-xl">
            <div class="w-14 h-14 bg-zinc-700 rounded-xl flex items-center justify-center text-3xl mb-4">
              💡
            </div>
            <h3 class="text-lg gs font-medium text-zinc-900 mb-2">
              Практические советы
            </h3>
            <p class="text-sm text-zinc-600">
              Руководства по использованию AdiletAI для решения конкретных юридических задач
            </p>
          </article>

          <article class="p-6 sm:p-8 bg-white border border-zinc-200 rounded-xl">
            <div class="w-14 h-14 bg-zinc-700 rounded-xl flex items-center justify-center text-3xl mb-4">
              🚀
            </div>
            <h3 class="text-lg gs font-medium text-zinc-900 mb-2">
              Новости продукта
            </h3>
            <p class="text-sm text-zinc-600">
              Анонсы новых функций, обновлений платформы и планов развития
            </p>
          </article>

          <article class="p-6 sm:p-8 bg-white border border-zinc-200 rounded-xl">
            <div class="w-14 h-14 bg-zinc-700 rounded-xl flex items-center justify-center text-3xl mb-4">
              ⚖️
            </div>
            <h3 class="text-lg gs font-medium text-zinc-900 mb-2">
              Разбор кейсов
            </h3>
            <p class="text-sm text-zinc-600">
              Реальные примеры использования AdiletAI: от простых вопросов до сложных дел
            </p>
          </article>

          <article class="p-6 sm:p-8 bg-white border border-zinc-200 rounded-xl">
            <div class="w-14 h-14 bg-zinc-700 rounded-xl flex items-center justify-center text-3xl mb-4">
              🎓
            </div>
            <h3 class="text-lg gs font-medium text-zinc-900 mb-2">
              Образовательные статьи
            </h3>
            <p class="text-sm text-zinc-600">
              Объяснение юридических концепций простым языком для всех
            </p>
          </article>
        </div>
      </section>

      <!-- Newsletter Signup -->
      <section class="mb-12 sm:mb-16">
        <div class="bg-zinc-700 rounded-2xl p-8 sm:p-12">
          <h2 class="text-2xl sm:text-3xl gs font-bold text-white mb-4 text-center">
            Будьте в курсе
          </h2>
          <p class="text-base text-zinc-200 mb-8 text-center max-w-xl mx-auto">
            Подпишитесь на уведомления, чтобы не пропустить запуск блога и первые статьи
          </p>

          <form class="max-w-md mx-auto" @submit.prevent="handleSubscribe">
            <div class="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                v-model="email"
                required
                placeholder="Ваш email"
                class="flex-1 px-4 py-3 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                class="relative flex gs items-center justify-center text-center font-medium transition-colors duration-200 ease-in-out select-none focus-visible:outline-2 focus-visible:outline-offset-2 rounded-md text-zinc-900 bg-white hover:bg-zinc-100 focus-visible:outline-white h-12 px-8 text-base whitespace-nowrap"
              >
                Подписаться
              </button>
            </div>
            <p class="text-xs text-zinc-300 mt-3 text-center">
              Мы не спамим. Только важные новости и статьи.
            </p>
          </form>
        </div>
      </section>

      <!-- Recent Updates Placeholder -->
      <section class="mb-12 sm:mb-16">
        <h2 class="text-2xl sm:text-3xl gs font-bold text-zinc-900 mb-8 text-center">
          Последние обновления
        </h2>

        <div class="space-y-6">
          <article class="p-6 sm:p-8 bg-zinc-50 rounded-xl border border-zinc-200">
            <div class="flex items-start justify-between gap-4 mb-3">
              <span class="text-xs text-zinc-500">10 ноября 2025</span>
              <span class="px-3 py-1 bg-zinc-700 text-white text-xs gs rounded-full">Новости</span>
            </div>
            <h3 class="text-xl gs font-bold text-zinc-900 mb-2">
              Запуск AdiletAI
            </h3>
            <p class="text-base text-zinc-700 mb-4">
              Мы рады представить AdiletAI — первого специализированного юридического AI-помощника для Казахстана. Платформа использует передовую технологию RAG для предоставления точных консультаций на основе актуального законодательства РК.
            </p>
            <NuxtLink to="/" class="text-sm text-zinc-900 underline gs">
              Узнать больше →
            </NuxtLink>
          </article>

          <article class="p-6 sm:p-8 bg-zinc-50 rounded-xl border border-zinc-200 opacity-50">
            <div class="flex items-start justify-between gap-4 mb-3">
              <span class="text-xs text-zinc-500">Скоро</span>
              <span class="px-3 py-1 bg-zinc-200 text-zinc-600 text-xs gs rounded-full">Статья</span>
            </div>
            <h3 class="text-xl gs font-bold text-zinc-900 mb-2">
              Как AI меняет юридическую индустрию Казахстана
            </h3>
            <p class="text-base text-zinc-700">
              Подробный анализ влияния искусственного интеллекта на рынок юридических услуг...
            </p>
          </article>

          <article class="p-6 sm:p-8 bg-zinc-50 rounded-xl border border-zinc-200 opacity-50">
            <div class="flex items-start justify-between gap-4 mb-3">
              <span class="text-xs text-zinc-500">Скоро</span>
              <span class="px-3 py-1 bg-zinc-200 text-zinc-600 text-xs gs rounded-full">Руководство</span>
            </div>
            <h3 class="text-xl gs font-bold text-zinc-900 mb-2">
              10 способов использования AdiletAI для бизнеса
            </h3>
            <p class="text-base text-zinc-700">
              Практические советы по интеграции AI-помощника в работу компании...
            </p>
          </article>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="mb-16 sm:mb-20 md:mb-24">
        <div class="text-center p-8 sm:p-12 bg-zinc-50 rounded-2xl border border-zinc-200">
          <h2 class="text-2xl sm:text-3xl gs font-bold text-zinc-900 mb-4">
            Пока блог готовится, попробуйте AdiletAI
          </h2>
          <p class="text-base text-zinc-600 mb-8 max-w-xl mx-auto">
            Начните получать юридические консультации прямо сейчас
          </p>
          <NuxtLink
            to="https://console.adiletai.com"
            class="relative inline-flex gs items-center justify-center text-center font-medium transition-colors duration-200 ease-in-out select-none focus-visible:outline-2 focus-visible:outline-offset-2 rounded-md text-white bg-zinc-700 hover:bg-zinc-600 focus-visible:outline-zinc-600 h-11 px-8 text-base"
          >
            Начать сейчас
          </NuxtLink>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
const email = ref('')

const handleSubscribe = () => {
  // В реальном проекте здесь будет отправка на сервер
  alert('Спасибо за подписку! Мы уведомим вас о запуске блога.')
  email.value = ''
}

useSeoMeta({
  title: 'Блог AdiletAI - Статьи о праве и AI в Казахстане',
  description: 'Блог AdiletAI: новости AI в юридической сфере, обновления законодательства РК, практические советы, кейсы. Следите за развитием юридических технологий.',
  keywords: 'блог adiletai, ai право казахстан, юридические новости, обновления законов рк, статьи о праве',
  robots: 'index, follow',

  ogType: 'website',
  ogUrl: 'https://adiletai.com/blog',
  ogTitle: 'Блог AdiletAI - Право и AI',
  ogDescription: 'Статьи о применении искусственного интеллекта в юридической сфере Казахстана',
  ogImage: 'https://adiletai.com/og-image.png',

  twitterCard: 'summary_large_image',
  twitterTitle: 'Блог AdiletAI',
  twitterDescription: 'Новости, статьи и обновления о праве и AI',
  twitterImage: 'https://adiletai.com/twitter-image.png'
})

useSchemaOrg([
  {
    '@type': 'WebPage',
    '@id': 'https://adiletai.com/blog#webpage',
    url: 'https://adiletai.com/blog',
    name: 'Блог AdiletAI',
    description: 'Блог о праве, AI технологиях и юридической помощи в Казахстане',
    inLanguage: 'ru-RU',
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString().slice(0, 10)
  },
  {
    '@type': 'Blog',
    '@id': 'https://adiletai.com/blog#blog',
    name: 'Блог AdiletAI',
    description: 'Статьи о праве и искусственном интеллекте в Казахстане'
  }
])

useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://adiletai.com/blog'
    }
  ],
  htmlAttrs: {
    lang: 'ru'
  }
})
</script>
