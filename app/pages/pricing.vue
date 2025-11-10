<template>
  <div class="container mx-auto mt-12 sm:mt-16 md:mt-24 px-4 sm:px-6">
    <div class="max-w-6xl mx-auto">
      <!-- Hero Section -->
      <header class="text-center mb-12 sm:mb-16">
        <h1 class="text-3xl sm:text-4xl md:text-5xl gs font-bold text-zinc-900 tracking-tight">
          Тарифные планы
        </h1>
        <p class="mt-4 sm:mt-6 text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto">
          Выберите подходящий план для ваших потребностей. Начните бесплатно, платите только за то, что используете.
        </p>
      </header>

      <!-- Pricing Cards -->
      <section class="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
        <!-- Free Plan -->
        <article class="p-6 sm:p-8 bg-white border-2 border-zinc-200 rounded-2xl flex flex-col">
          <div class="mb-6">
            <h2 class="text-2xl gs font-bold text-zinc-900 mb-2">Бесплатный</h2>
            <p class="text-sm text-zinc-600 mb-4">Для знакомства с платформой</p>
            <div class="flex items-baseline gap-2">
              <span class="text-4xl gs font-bold text-zinc-900">0₸</span>
              <span class="text-zinc-600">/месяц</span>
            </div>
          </div>

          <ul class="space-y-3 mb-8 flex-1">
            <li class="flex items-start gap-2 text-sm text-zinc-700">
              <span class="text-zinc-700 font-bold mt-0.5">✓</span>
              <span>5 вопросов в день</span>
            </li>
            <li class="flex items-start gap-2 text-sm text-zinc-700">
              <span class="text-zinc-700 font-bold mt-0.5">✓</span>
              <span>Базовый поиск по законам</span>
            </li>
            <li class="flex items-start gap-2 text-sm text-zinc-700">
              <span class="text-zinc-700 font-bold mt-0.5">✓</span>
              <span>История консультаций (7 дней)</span>
            </li>
            <li class="flex items-start gap-2 text-sm text-zinc-700">
              <span class="text-zinc-700 font-bold mt-0.5">✓</span>
              <span>Доступ к базе законов РК</span>
            </li>
            <li class="flex items-start gap-2 text-sm text-zinc-400">
              <span class="font-bold mt-0.5">✗</span>
              <span>Анализ документов</span>
            </li>
            <li class="flex items-start gap-2 text-sm text-zinc-400">
              <span class="font-bold mt-0.5">✗</span>
              <span>Генерация документов</span>
            </li>
          </ul>

          <NuxtLink
            to="https://app.adiletai.com/"
            class="relative flex gs items-center justify-center text-center font-medium transition-colors duration-200 ease-in-out select-none focus-visible:outline-2 focus-visible:outline-offset-2 rounded-md text-zinc-600 bg-zinc-50 outline outline-zinc-100 hover:bg-zinc-200 focus-visible:outline-zinc-600 h-11 px-6 text-base"
          >
            Начать бесплатно
          </NuxtLink>
        </article>

        <!-- Pro Plan (Highlighted) -->
        <article class="p-6 sm:p-8 bg-zinc-700 rounded-2xl flex flex-col relative">
          <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span class="bg-white text-zinc-900 text-xs gs font-medium px-3 py-1 rounded-full">В ЧЕСТЬ ОТКРЫТИЯ!</span>
          </div>

          <div class="mb-6">
            <h2 class="text-2xl gs font-bold text-white mb-2">Профессиональный</h2>
            <p class="text-sm text-zinc-300 mb-4">Для частых пользователей</p>
            <div class="flex items-baseline gap-2">
              <span class="text-4xl gs font-bold line-through text-white">5000₸</span>
              <span class="text-4xl gs font-bold text-white">0₸</span>
              <span class="text-zinc-300">/месяц</span>
            </div>
          </div>

          <ul class="space-y-3 mb-8 flex-1">
            <li class="flex items-start gap-2 text-sm text-white">
              <span class="font-bold mt-0.5">✓</span>
              <span>Неограниченные вопросы</span>
            </li>
            <li class="flex items-start gap-2 text-sm text-white">
              <span class="font-bold mt-0.5">✓</span>
              <span>Приоритетный ответ (быстрее)</span>
            </li>
            <li class="flex items-start gap-2 text-sm text-white">
              <span class="font-bold mt-0.5">✓</span>
              <span>История консультаций (без ограничений)</span>
            </li>
            <li class="flex items-start gap-2 text-sm text-white">
              <span class="font-bold mt-0.5">✓</span>
              <span>Анализ документов (50 в месяц)</span>
            </li>
            <li class="flex items-start gap-2 text-sm text-white">
              <span class="font-bold mt-0.5">✓</span>
              <span>Генерация документов (20 в месяц)</span>
            </li>
            <li class="flex items-start gap-2 text-sm text-white">
              <span class="font-bold mt-0.5">✓</span>
              <span>Экспорт в PDF</span>
            </li>
            <li class="flex items-start gap-2 text-sm text-white">
              <span class="font-bold mt-0.5">✓</span>
              <span>Email поддержка</span>
            </li>
            <li class="flex items-start gap-2 text-sm text-white">
              <span class="font-bold mt-0.5">✓</span>
              <span>Поддержка большого количества моделей</span>
            </li>
          </ul>

          <NuxtLink
            to="https://app.adiletai.com/"
            class="relative flex gs items-center justify-center text-center font-medium transition-colors duration-200 ease-in-out select-none focus-visible:outline-2 focus-visible:outline-offset-2 rounded-md text-zinc-900 bg-white hover:bg-zinc-100 focus-visible:outline-white h-11 px-6 text-base"
          >
            Выбрать план
          </NuxtLink>
        </article>

        <!-- Enterprise Plan -->
        <article class="p-6 sm:p-8 bg-white border-2 border-zinc-200 rounded-2xl flex flex-col">
          <div class="mb-6">
            <h2 class="text-2xl gs font-bold text-zinc-900 mb-2">Корпоративный</h2>
            <p class="text-sm text-zinc-600 mb-4">Для компаний и юридических отделов</p>
            <div class="flex items-baseline gap-2">
              <span class="text-4xl gs font-bold text-zinc-900">Custom</span>
            </div>
          </div>

          <ul class="space-y-3 mb-8 flex-1">
            <li class="flex items-start gap-2 text-sm text-zinc-700">
              <span class="text-zinc-700 font-bold mt-0.5">✓</span>
              <span>Все возможности Pro</span>
            </li>
            <li class="flex items-start gap-2 text-sm text-zinc-700">
              <span class="text-zinc-700 font-bold mt-0.5">✓</span>
              <span>Неограниченный анализ документов</span>
            </li>
            <li class="flex items-start gap-2 text-sm text-zinc-700">
              <span class="text-zinc-700 font-bold mt-0.5">✓</span>
              <span>API доступ</span>
            </li>
            <li class="flex items-start gap-2 text-sm text-zinc-700">
              <span class="text-zinc-700 font-bold mt-0.5">✓</span>
              <span>Командные аккаунты</span>
            </li>
            <li class="flex items-start gap-2 text-sm text-zinc-700">
              <span class="text-zinc-700 font-bold mt-0.5">✓</span>
              <span>Персональный менеджер</span>
            </li>
            <li class="flex items-start gap-2 text-sm text-zinc-700">
              <span class="text-zinc-700 font-bold mt-0.5">✓</span>
              <span>Приоритетная поддержка 24/7</span>
            </li>
            <li class="flex items-start gap-2 text-sm text-zinc-700">
              <span class="text-zinc-700 font-bold mt-0.5">✓</span>
              <span>Кастомизация под ваши нужды</span>
            </li>
          </ul>

          <NuxtLink
            to="/contact"
            class="relative flex gs items-center justify-center text-center font-medium transition-colors duration-200 ease-in-out select-none focus-visible:outline-2 focus-visible:outline-offset-2 rounded-md text-white bg-zinc-700 hover:bg-zinc-600 focus-visible:outline-zinc-600 h-11 px-6 text-base"
          >
            Связаться с нами
          </NuxtLink>
        </article>
      </section>

      <!-- Comparison Table -->
      <section class="mb-12 sm:mb-16">
        <h2 class="text-2xl sm:text-3xl gs font-bold text-zinc-900 mb-8 text-center">
          Подробное сравнение
        </h2>
        <div class="overflow-x-auto">
          <table class="w-full border-collapse bg-white rounded-xl overflow-hidden">
            <thead class="bg-zinc-50">
              <tr>
                <th class="text-left p-4 gs font-medium text-zinc-900 border-b border-zinc-200">Возможность</th>
                <th class="text-center p-4 gs font-medium text-zinc-900 border-b border-zinc-200">Бесплатный</th>
                <th class="text-center p-4 gs font-medium text-zinc-900 border-b border-zinc-200 bg-zinc-100">Pro</th>
                <th class="text-center p-4 gs font-medium text-zinc-900 border-b border-zinc-200">Enterprise</th>
              </tr>
            </thead>
            <tbody class="text-sm sm:text-base">
              <tr class="border-b border-zinc-100">
                <td class="p-4 text-zinc-700">Вопросов в день</td>
                <td class="p-4 text-center text-zinc-600">5</td>
                <td class="p-4 text-center bg-zinc-50 font-medium">∞</td>
                <td class="p-4 text-center font-medium">∞</td>
              </tr>
              <tr class="border-b border-zinc-100">
                <td class="p-4 text-zinc-700">История консультаций</td>
                <td class="p-4 text-center text-zinc-600">7 дней</td>
                <td class="p-4 text-center bg-zinc-50 font-medium">∞</td>
                <td class="p-4 text-center font-medium">∞</td>
              </tr>
              <tr class="border-b border-zinc-100">
                <td class="p-4 text-zinc-700">Анализ документов</td>
                <td class="p-4 text-center text-zinc-400">—</td>
                <td class="p-4 text-center bg-zinc-50 font-medium">50/мес</td>
                <td class="p-4 text-center font-medium">∞</td>
              </tr>
              <tr class="border-b border-zinc-100">
                <td class="p-4 text-zinc-700">Генерация документов</td>
                <td class="p-4 text-center text-zinc-400">—</td>
                <td class="p-4 text-center bg-zinc-50 font-medium">20/мес</td>
                <td class="p-4 text-center font-medium">∞</td>
              </tr>
              <tr class="border-b border-zinc-100">
                <td class="p-4 text-zinc-700">Экспорт в PDF</td>
                <td class="p-4 text-center text-zinc-400">—</td>
                <td class="p-4 text-center bg-zinc-50">✓</td>
                <td class="p-4 text-center">✓</td>
              </tr>
              <tr class="border-b border-zinc-100">
                <td class="p-4 text-zinc-700">API доступ</td>
                <td class="p-4 text-center text-zinc-400">—</td>
                <td class="p-4 text-center bg-zinc-50 text-zinc-400">—</td>
                <td class="p-4 text-center">✓</td>
              </tr>
              <tr class="border-b border-zinc-100">
                <td class="p-4 text-zinc-700">Командная работа</td>
                <td class="p-4 text-center text-zinc-400">—</td>
                <td class="p-4 text-center bg-zinc-50 text-zinc-400">—</td>
                <td class="p-4 text-center">✓</td>
              </tr>
              <tr>
                <td class="p-4 text-zinc-700">Приоритетная поддержка</td>
                <td class="p-4 text-center text-zinc-400">—</td>
                <td class="p-4 text-center bg-zinc-50">Email</td>
                <td class="p-4 text-center">24/7</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- FAQ Section -->
      <section class="mb-12 sm:mb-16">
        <h2 class="text-2xl sm:text-3xl gs font-bold text-zinc-900 mb-8 text-center">
          Часто задаваемые вопросы
        </h2>
        <div class="max-w-3xl mx-auto space-y-4">
          <details class="p-6 bg-zinc-50 rounded-xl border border-zinc-200">
            <summary class="gs font-medium text-zinc-900 cursor-pointer">Могу ли я сменить тариф в любое время?</summary>
            <p class="mt-3 text-sm sm:text-base text-zinc-600">
              Да, вы можете изменить тариф в любое время. При повышении тарифа изменения вступают в силу немедленно, при понижении — с начала следующего расчетного периода.
            </p>
          </details>

          <details class="p-6 bg-zinc-50 rounded-xl border border-zinc-200">
            <summary class="gs font-medium text-zinc-900 cursor-pointer">Как происходит оплата?</summary>
            <p class="mt-3 text-sm sm:text-base text-zinc-600">
              Оплата производится автоматически каждый месяц с привязанной карты. Мы принимаем все основные платежные системы Казахстана.
            </p>
          </details>

          <details class="p-6 bg-zinc-50 rounded-xl border border-zinc-200">
            <summary class="gs font-medium text-zinc-900 cursor-pointer">Есть ли возврат средств?</summary>
            <p class="mt-3 text-sm sm:text-base text-zinc-600">
              Да, мы предлагаем возврат средств в течение 14 дней с момента первой оплаты, если сервис вам не подошел.
            </p>
          </details>

          <details class="p-6 bg-zinc-50 rounded-xl border border-zinc-200">
            <summary class="gs font-medium text-zinc-900 cursor-pointer">Что входит в корпоративный тариф?</summary>
            <p class="mt-3 text-sm sm:text-base text-zinc-600">
              Корпоративный тариф включает все функции Pro плана плюс API доступ, командные аккаунты, персонального менеджера и приоритетную поддержку. Стоимость рассчитывается индивидуально в зависимости от размера команды и потребностей.
            </p>
          </details>

          <details class="p-6 bg-zinc-50 rounded-xl border border-zinc-200">
            <summary class="gs font-medium text-zinc-900 cursor-pointer">Защищены ли мои данные?</summary>
            <p class="mt-3 text-sm sm:text-base text-zinc-600">
              Да, мы используем шифрование данных на всех уровнях и соблюдаем все требования законодательства РК о защите персональных данных. Подробнее на странице <NuxtLink to="/security" class="text-zinc-900 underline">Безопасность</NuxtLink>.
            </p>
          </details>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="mb-16 sm:mb-20 md:mb-24">
        <div class="bg-zinc-700 rounded-2xl p-8 sm:p-12 text-center">
          <h2 class="text-2xl sm:text-3xl gs font-bold text-white mb-4">
            Готовы начать?
          </h2>
          <p class="text-base sm:text-lg text-zinc-200 mb-8 max-w-xl mx-auto">
            Попробуйте AdiletAI бесплатно прямо сейчас. Без кредитной карты.
          </p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <NuxtLink
              to="https://app.adiletai.com/"
              class="relative flex gs items-center justify-center text-center font-medium transition-colors duration-200 ease-in-out select-none focus-visible:outline-2 focus-visible:outline-offset-2 rounded-md text-zinc-900 bg-white hover:bg-zinc-100 focus-visible:outline-white h-11 px-8 text-base w-full sm:w-auto"
            >
              Начать бесплатно
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
  title: 'Тарифы AdiletAI - Цены на юридический AI помощник',
  description: 'Прозрачные тарифы AdiletAI: бесплатный, профессиональный и корпоративный планы. Начните с бесплатного доступа, платите только за то, что используете.',
  keywords: 'цены adiletai, тарифы ai юриста, стоимость юридической помощи, подписка adiletai, бесплатный юридический ai',
  robots: 'index, follow',

  ogType: 'website',
  ogUrl: 'https://adiletai.com/pricing',
  ogTitle: 'Тарифы AdiletAI - Доступные цены на AI юриста',
  ogDescription: 'От 0₸ до корпоративных решений. Выберите подходящий тариф для ваших потребностей.',
  ogImage: 'https://adiletai.com/og-image.png',

  twitterCard: 'summary_large_image',
  twitterTitle: 'Тарифы AdiletAI - Прозрачное ценообразование',
  twitterDescription: 'Начните бесплатно или выберите профессиональный план от 2,990₸/месяц.',
  twitterImage: 'https://adiletai.com/twitter-image.png'
})

useSchemaOrg([
  {
    '@type': 'WebPage',
    '@id': 'https://adiletai.com/pricing#webpage',
    url: 'https://adiletai.com/pricing',
    name: 'Тарифы AdiletAI',
    description: 'Тарифные планы и цены на юридический AI помощник AdiletAI',
    inLanguage: 'ru-RU',
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString().slice(0, 10)
  }
])

useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://adiletai.com/pricing'
    }
  ],
  htmlAttrs: {
    lang: 'ru'
  }
})
</script>
