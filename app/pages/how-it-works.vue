<template>
  <div class="container mx-auto mt-12 sm:mt-16 md:mt-24 px-4 sm:px-6">
    <div class="max-w-4xl mx-auto">
      <!-- Hero Section -->
      <header class="text-center mb-12 sm:mb-16">
        <h1 class="text-3xl sm:text-4xl md:text-5xl gs font-bold text-zinc-900 tracking-tight">
          Как работает AdiletAI?
        </h1>
        <p class="mt-4 sm:mt-6 text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto">
          Узнайте, как технология искусственного интеллекта и RAG помогают получать точные юридические консультации
        </p>
      </header>

      <!-- Main Steps -->
      <section class="mb-12 sm:mb-16">
        <div class="space-y-8 sm:space-y-12">
          <!-- Step 1 -->
          <article class="flex flex-col md:flex-row gap-6 items-start">
            <div class="flex-shrink-0 w-16 h-16 bg-zinc-700 rounded-full flex items-center justify-center text-white text-2xl gs font-bold">
              1
            </div>
            <div class="flex-1">
              <h2 class="text-2xl gs font-bold text-zinc-900 mb-3">Задайте свой вопрос</h2>
              <p class="text-base sm:text-lg text-zinc-700 mb-4">
                Опишите вашу юридическую ситуацию простыми словами, как будто разговариваете с юристом. Не нужно знать юридические термины — AdiletAI понимает естественный язык.
              </p>
              <div class="bg-zinc-50 rounded-xl p-6 border border-zinc-200">
                <p class="text-sm text-zinc-600 italic">
                  Пример: "Работодатель задерживает зарплату на 2 недели. Что мне делать по закону?"
                </p>
              </div>
            </div>
          </article>

          <!-- Step 2 -->
          <article class="flex flex-col md:flex-row gap-6 items-start">
            <div class="flex-shrink-0 w-16 h-16 bg-zinc-700 rounded-full flex items-center justify-center text-white text-2xl gs font-bold">
              2
            </div>
            <div class="flex-1">
              <h2 class="text-2xl gs font-bold text-zinc-900 mb-3">AI анализирует запрос</h2>
              <p class="text-base sm:text-lg text-zinc-700 mb-4">
                Наша система использует передовую технологию RAG (Retrieval-Augmented Generation):
              </p>
              <ul class="space-y-3">
                <li class="flex items-start gap-3">
                  <span class="flex-shrink-0 w-8 h-8 bg-zinc-200 rounded-full flex items-center justify-center text-sm font-bold text-zinc-700">1</span>
                  <div>
                    <h3 class="gs font-medium text-zinc-900 mb-1">Понимание контекста</h3>
                    <p class="text-sm text-zinc-600">AI анализирует ваш вопрос и определяет ключевые правовые аспекты</p>
                  </div>
                </li>
                <li class="flex items-start gap-3">
                  <span class="flex-shrink-0 w-8 h-8 bg-zinc-200 rounded-full flex items-center justify-center text-sm font-bold text-zinc-700">2</span>
                  <div>
                    <h3 class="gs font-medium text-zinc-900 mb-1">Поиск в базе законов</h3>
                    <p class="text-sm text-zinc-600">Система ищет релевантные статьи в актуальной базе законодательства РК</p>
                  </div>
                </li>
                <li class="flex items-start gap-3">
                  <span class="flex-shrink-0 w-8 h-8 bg-zinc-200 rounded-full flex items-center justify-center text-sm font-bold text-zinc-700">3</span>
                  <div>
                    <h3 class="gs font-medium text-zinc-900 mb-1">Генерация ответа</h3>
                    <p class="text-sm text-zinc-600">AI формирует подробный ответ на основе найденных законов</p>
                  </div>
                </li>
                <li class="flex items-start gap-3">
                  <span class="flex-shrink-0 w-8 h-8 bg-zinc-200 rounded-full flex items-center justify-center text-sm font-bold text-zinc-700">4</span>
                  <div>
                    <h3 class="gs font-medium text-zinc-900 mb-1">Проверка точности</h3>
                    <p class="text-sm text-zinc-600">Ответ верифицируется на соответствие актуальному законодательству</p>
                  </div>
                </li>
              </ul>
            </div>
          </article>

          <!-- Step 3 -->
          <article class="flex flex-col md:flex-row gap-6 items-start">
            <div class="flex-shrink-0 w-16 h-16 bg-zinc-700 rounded-full flex items-center justify-center text-white text-2xl gs font-bold">
              3
            </div>
            <div class="flex-1">
              <h2 class="text-2xl gs font-bold text-zinc-900 mb-3">Получите подробный ответ</h2>
              <p class="text-base sm:text-lg text-zinc-700 mb-4">
                Через несколько секунд вы получаете:
              </p>
              <ul class="space-y-2 text-zinc-700">
                <li class="flex items-start gap-2">
                  <span class="text-zinc-700 font-bold mt-1">✓</span>
                  <span>Подробное объяснение вашей ситуации</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-zinc-700 font-bold mt-1">✓</span>
                  <span>Ссылки на конкретные статьи законов РК</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-zinc-700 font-bold mt-1">✓</span>
                  <span>Практические рекомендации по дальнейшим действиям</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-zinc-700 font-bold mt-1">✓</span>
                  <span>Возможность задать уточняющие вопросы</span>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <!-- Technology Deep Dive -->
      <section class="mb-12 sm:mb-16">
        <h2 class="text-2xl sm:text-3xl gs font-bold text-zinc-900 mb-8 text-center">
          Что такое технология RAG?
        </h2>
        <div class="bg-zinc-50 rounded-2xl p-8 sm:p-12 border border-zinc-200">
          <p class="text-base sm:text-lg text-zinc-700 mb-6">
            <strong class="gs text-zinc-900">RAG (Retrieval-Augmented Generation)</strong> — это передовая технология, которая объединяет преимущества больших языковых моделей с возможностью поиска в специализированной базе знаний.
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 class="gs font-medium text-zinc-900 mb-3">Обычный ChatGPT:</h3>
              <ul class="space-y-2 text-sm text-zinc-600">
                <li>❌ Ограничен данными до 2021 года</li>
                <li>❌ Не знает специфику законов РК</li>
                <li>❌ Может "галлюцинировать" факты</li>
                <li>❌ Не предоставляет источники</li>
              </ul>
            </div>
            <div>
              <h3 class="gs font-medium text-zinc-900 mb-3">AdiletAI с RAG:</h3>
              <ul class="space-y-2 text-sm text-zinc-600">
                <li>✅ Актуальная база законов</li>
                <li>✅ Специализация на праве РК</li>
                <li>✅ Ответы на основе реальных законов</li>
                <li>✅ Ссылки на статьи законов</li>
              </ul>
            </div>
          </div>

          <p class="text-base text-zinc-700">
            Благодаря RAG, точность наших ответов на <strong>83% выше</strong> стандартных AI-моделей.
          </p>
        </div>
      </section>

      <!-- Security -->
      <section class="mb-12 sm:mb-16">
        <h2 class="text-2xl sm:text-3xl gs font-bold text-zinc-900 mb-8 text-center">
          Безопасность и конфиденциальность
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <article class="p-6 bg-zinc-50 rounded-xl border border-zinc-200">
            <div class="text-3xl mb-3">🔒</div>
            <h3 class="text-lg gs font-medium text-zinc-900 mb-2">
              Шифрование данных
            </h3>
            <p class="text-sm text-zinc-600">
              Все ваши вопросы и документы шифруются с использованием современных протоколов безопасности
            </p>
          </article>

          <article class="p-6 bg-zinc-50 rounded-xl border border-zinc-200">
            <div class="text-3xl mb-3">👁️</div>
            <h3 class="text-lg gs font-medium text-zinc-900 mb-2">
              Конфиденциальность
            </h3>
            <p class="text-sm text-zinc-600">
              Мы не передаем ваши данные третьим лицам и не используем их для обучения AI
            </p>
          </article>

          <article class="p-6 bg-zinc-50 rounded-xl border border-zinc-200">
            <div class="text-3xl mb-3">🇰🇿</div>
            <h3 class="text-lg gs font-medium text-zinc-900 mb-2">
              Соответствие законам РК
            </h3>
            <p class="text-sm text-zinc-600">
              Полное соблюдение законодательства Казахстана о защите персональных данных
            </p>
          </article>

          <article class="p-6 bg-zinc-50 rounded-xl border border-zinc-200">
            <div class="text-3xl mb-3">🗑️</div>
            <h3 class="text-lg gs font-medium text-zinc-900 mb-2">
              Контроль данных
            </h3>
            <p class="text-sm text-zinc-600">
              Вы можете в любой момент удалить свою историю консультаций
            </p>
          </article>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="mb-16 sm:mb-20 md:mb-24">
        <div class="bg-zinc-700 rounded-2xl p-8 sm:p-12 text-center">
          <h2 class="text-2xl sm:text-3xl gs font-bold text-white mb-4">
            Попробуйте сами
          </h2>
          <p class="text-base sm:text-lg text-zinc-200 mb-8 max-w-xl mx-auto">
            Увидьте, как работает AdiletAI на практике. Задайте свой первый вопрос бесплатно.
          </p>
          <NuxtLink
            to="https://wa.me/+77770172008"
            class="relative inline-flex gs items-center justify-center text-center font-medium transition-colors duration-200 ease-in-out select-none focus-visible:outline-2 focus-visible:outline-offset-2 rounded-md text-zinc-900 bg-white hover:bg-zinc-100 focus-visible:outline-white h-11 px-8 text-base"
          >
            Получить демо
          </NuxtLink>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Как работает AdiletAI - Технология RAG для юридических консультаций',
  description: 'Узнайте, как AdiletAI использует технологию RAG и AI для предоставления точных юридических консультаций. Поймите разницу с обычным ChatGPT.',
  keywords: 'как работает adiletai, технология rag, ai юрист работа, юридический ai процесс, как использовать adiletai',
  robots: 'index, follow',

  ogType: 'website',
  ogUrl: 'https://adiletai.com/how-it-works',
  ogTitle: 'Как работает AdiletAI - Технология и процесс',
  ogDescription: 'Простое объяснение того, как AdiletAI использует RAG и AI для точных юридических консультаций.',
  ogImage: 'https://adiletai.com/og-image.png',

  twitterCard: 'summary_large_image',
  twitterTitle: 'Как работает AdiletAI',
  twitterDescription: 'Технология RAG + AI = точные юридические консультации',
  twitterImage: 'https://adiletai.com/twitter-image.png'
})

useSchemaOrg([
  {
    '@type': 'WebPage',
    '@id': 'https://adiletai.com/how-it-works#webpage',
    url: 'https://adiletai.com/how-it-works',
    name: 'Как работает AdiletAI',
    description: 'Подробное объяснение технологии и процесса работы AdiletAI',
    inLanguage: 'ru-RU',
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString().slice(0, 10)
  },
  {
    '@type': 'HowTo',
    name: 'Как использовать AdiletAI для юридических консультаций',
    description: 'Пошаговое руководство по использованию AdiletAI',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Задайте вопрос',
        text: 'Опишите вашу юридическую ситуацию простым языком'
      },
      {
        '@type': 'HowToStep',
        name: 'AI анализирует',
        text: 'Система использует RAG для поиска релевантной информации в базе законов'
      },
      {
        '@type': 'HowToStep',
        name: 'Получите ответ',
        text: 'Получите подробный ответ со ссылками на статьи законов'
      }
    ]
  }
])

useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://adiletai.com/how-it-works'
    }
  ],
  htmlAttrs: {
    lang: 'ru'
  }
})
</script>
