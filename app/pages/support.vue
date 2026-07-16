<template>
  <div class="container mx-auto mt-12 sm:mt-16 md:mt-24 px-4 sm:px-6">
    <div class="max-w-4xl mx-auto">
      <!-- Hero Section -->
      <header class="text-center mb-12 sm:mb-16">
        <h1 class="text-3xl sm:text-4xl md:text-5xl gs font-bold text-zinc-900 tracking-tight">
          Центр поддержки
        </h1>
        <p class="mt-4 sm:mt-6 text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto">
          Мы готовы помочь вам в любое время. Найдите ответы на вопросы или свяжитесь с нашей командой.
        </p>
      </header>

      <!-- Quick Links -->
      <section class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 sm:mb-16">
        <NuxtLink
          to="/faq"
          class="p-8 bg-zinc-50 rounded-2xl border border-zinc-200 hover:border-zinc-300 transition-colors"
        >
          <div class="w-14 h-14 bg-zinc-700 rounded-xl flex items-center justify-center text-3xl mb-4">
            ❓
          </div>
          <h2 class="text-xl gs font-bold text-zinc-900 mb-2">FAQ</h2>
          <p class="text-base text-zinc-600">
            Ответы на часто задаваемые вопросы
          </p>
        </NuxtLink>

        <NuxtLink
          to="/how-it-works"
          class="p-8 bg-zinc-50 rounded-2xl border border-zinc-200 hover:border-zinc-300 transition-colors"
        >
          <div class="w-14 h-14 bg-zinc-700 rounded-xl flex items-center justify-center text-3xl mb-4">
            📚
          </div>
          <h2 class="text-xl gs font-bold text-zinc-900 mb-2">Руководство</h2>
          <p class="text-base text-zinc-600">
            Как работает AdiletAI и как его использовать
          </p>
        </NuxtLink>

        <NuxtLink
          to="/contact"
          class="p-8 bg-zinc-50 rounded-2xl border border-zinc-200 hover:border-zinc-300 transition-colors"
        >
          <div class="w-14 h-14 bg-zinc-700 rounded-xl flex items-center justify-center text-3xl mb-4">
            ✉️
          </div>
          <h2 class="text-xl gs font-bold text-zinc-900 mb-2">Связаться с нами</h2>
          <p class="text-base text-zinc-600">
            Отправьте нам сообщение через форму обратной связи
          </p>
        </NuxtLink>

        <NuxtLink
          to="/security"
          class="p-8 bg-zinc-50 rounded-2xl border border-zinc-200 hover:border-zinc-300 transition-colors"
        >
          <div class="w-14 h-14 bg-zinc-700 rounded-xl flex items-center justify-center text-3xl mb-4">
            🔒
          </div>
          <h2 class="text-xl gs font-bold text-zinc-900 mb-2">Безопасность</h2>
          <p class="text-base text-zinc-600">
            Информация о защите ваших данных
          </p>
        </NuxtLink>
      </section>

      <!-- Getting Started -->
      <section class="mb-12 sm:mb-16">
        <h2 class="text-2xl sm:text-3xl gs font-bold text-zinc-900 mb-8 text-center">
          Начало работы
        </h2>

        <div class="space-y-6">
          <article class="p-6 sm:p-8 bg-white border border-zinc-200 rounded-xl">
            <h3 class="text-lg gs font-medium text-zinc-900 mb-3">1. Создайте аккаунт</h3>
            <p class="text-sm sm:text-base text-zinc-600 mb-4">
              Зарегистрируйтесь с помощью email или начните использовать без регистрации на бесплатном тарифе.
            </p>
            <NuxtLink to="https://app.adiletai.com/auth/register" class="text-sm text-zinc-900 underline gs">
              Начать →
            </NuxtLink>
          </article>

          <article class="p-6 sm:p-8 bg-white border border-zinc-200 rounded-xl">
            <h3 class="text-lg gs font-medium text-zinc-900 mb-3">2. Задайте первый вопрос</h3>
            <p class="text-sm sm:text-base text-zinc-600 mb-4">
              Опишите вашу юридическую ситуацию простым языком. AI поймет вас и предоставит подробный ответ со ссылками на законы.
            </p>
            <NuxtLink to="/how-it-works" class="text-sm text-zinc-900 underline gs">
              Подробнее о том, как это работает →
            </NuxtLink>
          </article>

          <article class="p-6 sm:p-8 bg-white border border-zinc-200 rounded-xl">
            <h3 class="text-lg gs font-medium text-zinc-900 mb-3">3. Изучите возможности</h3>
            <p class="text-sm sm:text-base text-zinc-600 mb-4">
              Попробуйте анализ документов, генерацию контрактов и другие функции платформы.
            </p>
            <NuxtLink to="/features" class="text-sm text-zinc-900 underline gs">
              Все возможности →
            </NuxtLink>
          </article>
        </div>
      </section>

      <!-- Common Issues -->
      <section class="mb-12 sm:mb-16">
        <h2 class="text-2xl sm:text-3xl gs font-bold text-zinc-900 mb-8 text-center">
          Решение частых проблем
        </h2>

        <div class="space-y-4">
          <details class="p-6 bg-zinc-50 rounded-xl border border-zinc-200">
            <summary class="gs font-medium text-zinc-900 cursor-pointer">Не могу войти в аккаунт</summary>
            <div class="mt-3 space-y-2 text-sm sm:text-base text-zinc-600">
              <p>Попробуйте следующее:</p>
              <ul class="list-disc pl-5 space-y-1">
                <li>Проверьте правильность email и пароля</li>
                <li>Используйте функцию "Забыли пароль?"</li>
                <li>Очистите кэш браузера</li>
                <li>Попробуйте другой браузер</li>
              </ul>
            </div>
          </details>

          <details class="p-6 bg-zinc-50 rounded-xl border border-zinc-200">
            <summary class="gs font-medium text-zinc-900 cursor-pointer">AI не понимает мой вопрос</summary>
            <div class="mt-3 space-y-2 text-sm sm:text-base text-zinc-600">
              <p>Для лучших результатов:</p>
              <ul class="list-disc pl-5 space-y-1">
                <li>Формулируйте вопрос четко и подробно</li>
                <li>Укажите контекст ситуации</li>
                <li>Используйте простой язык, избегайте сложных терминов</li>
                <li>Задавайте один вопрос за раз</li>
              </ul>
            </div>
          </details>

          <details class="p-6 bg-zinc-50 rounded-xl border border-zinc-200">
            <summary class="gs font-medium text-zinc-900 cursor-pointer">Проблемы с оплатой</summary>
            <div class="mt-3 space-y-2 text-sm sm:text-base text-zinc-600">
              <p>Если платеж не проходит:</p>
              <ul class="list-disc pl-5 space-y-1">
                <li>Проверьте данные карты</li>
                <li>Убедитесь, что на карте достаточно средств</li>
                <li>Проверьте лимиты интернет-платежей</li>
                <li>Свяжитесь с банком для подтверждения транзакции</li>
                <li>Напишите нам в поддержку, если проблема сохраняется</li>
              </ul>
            </div>
          </details>

          <details class="p-6 bg-zinc-50 rounded-xl border border-zinc-200">
            <summary class="gs font-medium text-zinc-900 cursor-pointer">Документ не загружается</summary>
            <div class="mt-3 space-y-2 text-sm sm:text-base text-zinc-600">
              <p>Проверьте следующее:</p>
              <ul class="list-disc pl-5 space-y-1">
                <li>Размер файла не превышает 10 МБ</li>
                <li>Формат файла: PDF, DOCX или TXT</li>
                <li>Файл не поврежден и открывается на вашем устройстве</li>
                <li>Попробуйте сконвертировать файл в другой формат</li>
              </ul>
            </div>
          </details>
        </div>
      </section>

      <!-- Contact Support -->
      <section class="mb-12 sm:mb-16">
        <div class="bg-zinc-700 rounded-2xl p-8 sm:p-12">
          <h2 class="text-2xl gs font-bold text-white mb-4">Контакты поддержки</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h3 class="gs font-medium text-white mb-2">Email</h3>
              <a href="mailto:support@adiletai.com" class="text-zinc-200 hover:text-white transition-colors">
                support@adiletai.com
              </a>
            </div>

            <div>
              <h3 class="gs font-medium text-white mb-2">Время работы</h3>
              <p class="text-sm text-zinc-200">
                Пн-Пт: 9:00 - 18:00<br>
                Выходные: Выходной
              </p>
              <p class="text-xs text-zinc-300 mt-2">
                * AI-помощник работает 24/7
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Resources -->
      <section class="mb-12 sm:mb-16">
        <h2 class="text-2xl sm:text-3xl gs font-bold text-zinc-900 mb-8 text-center">
          Полезные ресурсы
        </h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <NuxtLink to="/about" class="p-6 bg-zinc-50 rounded-xl border border-zinc-200 hover:border-zinc-300 transition-colors">
            <h3 class="gs font-medium text-zinc-900 mb-2">О проекте</h3>
            <p class="text-sm text-zinc-600">История и миссия AdiletAI</p>
          </NuxtLink>

          <NuxtLink to="https://app.adiletai.com/auth/register" class="p-6 bg-zinc-50 rounded-xl border border-zinc-200 hover:border-zinc-300 transition-colors">
            <h3 class="gs font-medium text-zinc-900 mb-2">Запросить демо</h3>
            <p class="text-sm text-zinc-600">Выберите подходящий план</p>
          </NuxtLink>

          <NuxtLink to="/use-cases" class="p-6 bg-zinc-50 rounded-xl border border-zinc-200 hover:border-zinc-300 transition-colors">
            <h3 class="gs font-medium text-zinc-900 mb-2">Примеры</h3>
            <p class="text-sm text-zinc-600">Кейсы использования</p>
          </NuxtLink>

          <NuxtLink to="/legal/terms" class="p-6 bg-zinc-50 rounded-xl border border-zinc-200 hover:border-zinc-300 transition-colors">
            <h3 class="gs font-medium text-zinc-900 mb-2">Условия</h3>
            <p class="text-sm text-zinc-600">Правила использования</p>
          </NuxtLink>

          <NuxtLink to="/legal/privacy" class="p-6 bg-zinc-50 rounded-xl border border-zinc-200 hover:border-zinc-300 transition-colors">
            <h3 class="gs font-medium text-zinc-900 mb-2">Конфиденциальность</h3>
            <p class="text-sm text-zinc-600">Политика обработки данных</p>
          </NuxtLink>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="mb-16 sm:mb-20 md:mb-24">
        <div class="text-center p-8 sm:p-12 bg-zinc-50 rounded-2xl border border-zinc-200">
          <h2 class="text-2xl sm:text-3xl gs font-bold text-zinc-900 mb-4">
            Не нашли ответ?
          </h2>
          <p class="text-base text-zinc-600 mb-8 max-w-xl mx-auto">
            Свяжитесь с нашей командой поддержки, и мы поможем решить вашу проблему
          </p>
          <NuxtLink
            to="/contact"
            class="relative inline-flex gs items-center justify-center text-center font-medium transition-colors duration-200 ease-in-out select-none focus-visible:outline-2 focus-visible:outline-offset-2 rounded-md text-white bg-zinc-700 hover:bg-zinc-600 focus-visible:outline-zinc-600 h-11 px-8 text-base"
          >
            Связаться с поддержкой
          </NuxtLink>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Поддержка AdiletAI - Центр помощи и решение проблем',
  description: 'Центр поддержки AdiletAI: руководства, FAQ, решение проблем. Получите помощь по использованию AI юриста. Служба поддержки 24/7.',
  keywords: 'поддержка adiletai, помощь ai юриста, техподдержка, руководство пользователя, решение проблем',
  robots: 'index, follow',

  ogType: 'website',
  ogUrl: 'https://adiletai.com/support',
  ogTitle: 'Центр поддержки AdiletAI',
  ogDescription: 'Найдите ответы на вопросы или свяжитесь с нашей командой поддержки',
  ogImage: 'https://adiletai.com/og-image.png',

  twitterCard: 'summary',
  twitterTitle: 'Поддержка AdiletAI',
  twitterDescription: 'Центр помощи и поддержки пользователей',
  twitterImage: 'https://adiletai.com/twitter-image.png'
})

useSchemaOrg([
  {
    '@type': 'WebPage',
    '@id': 'https://adiletai.com/support#webpage',
    url: 'https://adiletai.com/support',
    name: 'Центр поддержки AdiletAI',
    description: 'Помощь и поддержка пользователей AdiletAI',
    inLanguage: 'ru-RU',
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString().slice(0, 10)
  }
])

useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://adiletai.com/support'
    }
  ],
  htmlAttrs: {
    lang: 'ru'
  }
})
</script>
