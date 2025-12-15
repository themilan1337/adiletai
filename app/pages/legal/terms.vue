<template>
  <div class="container mx-auto mt-24 px-4 sm:px-0">
    <header class="w-full max-w-3xl mx-auto">
      <h1 class="text-3xl gs text-center sm:text-left font-bold sm:font-normal sm:text-2xl md:text-3xl lg:text-4xl mt-6 sm:mt-8 md:mt-12 tracking-tight text-zinc-900 lg:text-balance">
        Правила пользования сервисом AdiletAI
      </h1>
      <p class="text-sm text-center sm:text-left sm:text-base mt-3 sm:mt-4 text-zinc-600 lg:text-balance">
        Настоящие условия регулируют использование веб‑сайта и приложения AdiletAI. Пожалуйста, внимательно ознакомьтесь с ними перед началом работы.
      </p>
      <nav class="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center mt-6 sm:mt-8 gap-3 sm:gap-2" aria-label="Ссылки на юридические документы">
        <NuxtLink to="/legal/disclaimer" class="relative flex gs items-center justify-center text-center font-medium rounded-md text-white bg-zinc-700 outline outline-zinc-700 hover:bg-zinc-600 h-10 sm:h-9 px-4 text-sm">Отказ от ответственности</NuxtLink>
        <NuxtLink to="/legal/privacy" class="relative flex gs items-center justify-center text-center font-medium rounded-md text-zinc-600 bg-zinc-50 outline outline-zinc-100 hover:bg-zinc-200 h-10 sm:h-9 px-4 text-sm">Политика конфиденциальности</NuxtLink>
      </nav>
    </header>

    <section class="mt-8 sm:mt-10 md:mt-12 grid grid-cols-1 gap-6 sm:gap-7 md:gap-8 max-w-3xl mx-auto" aria-label="Содержание правил">
      <article id="accept" class="flex flex-col gap-2">
        <h2 class="text-xl sm:text-2xl font-semibold text-zinc-900 gs">1. Принятие условий</h2>
        <p class="text-zinc-700 text-sm sm:text-base">
          Начав использование сервиса, вы подтверждаете согласие с настоящими Правилами, а также с <NuxtLink to="/legal/privacy" class="underline text-zinc-900 hover:text-zinc-700">Политикой конфиденциальности</NuxtLink> и <NuxtLink to="/legal/disclaimer" class="underline text-zinc-900 hover:text-zinc-700">Отказом от ответственности</NuxtLink>. Если вы не согласны, пожалуйста, прекратите использование сервиса.
        </p>
      </article>

      <article id="service" class="flex flex-col gap-2">
        <h2 class="text-xl sm:text-2xl font-semibold text-zinc-900 gs">2. Описание сервиса</h2>
        <p class="text-zinc-700 text-sm sm:text-base">
          AdiletAI — интеллектуальный юридический помощник на основе ИИ с технологией RAG. Сервис предоставляет информационные подсказки по законодательству Республики Казахстан. Мы не гарантируем абсолютную точность и актуальность ответов; подробные ограничения описаны в «Отказе от ответственности».
        </p>
      </article>

      <article id="access" class="flex flex-col gap-2">
        <h2 class="text-xl sm:text-2xl font-semibold text-zinc-900 gs">3. Регистрация и доступ</h2>
        <ul class="list-disc pl-5 space-y-2 text-zinc-700 text-sm sm:text-base">
          <li>Вы обязуетесь предоставлять точные данные учётной записи и поддерживать их актуальность.</li>
          <li>Вы несёте ответственность за сохранность доступа к своему аккаунту.</li>
          <li>Мы можем приостановить доступ при нарушении Правил или угрозе безопасности.</li>
        </ul>
      </article>

      <article id="acceptable-use" class="flex flex-col gap-2">
        <h2 class="text-xl sm:text-2xl font-semibold text-zinc-900 gs">4. Допустимое использование</h2>
        <ul class="list-disc pl-5 space-y-2 text-zinc-700 text-sm sm:text-base">
          <li>Не используйте сервис для противоправных действий, спама, введения в заблуждение и нарушения прав третьих лиц.</li>
          <li>Не отправляйте в запросах чувствительные персональные данные; соблюдайте Политику конфиденциальности.</li>
          <li>Не осуществляйте обратную разработку, вмешательство в работу, нагрузочное тестирование без письменного разрешения.</li>
        </ul>
      </article>

      <article id="ip" class="flex flex-col gap-2">
        <h2 class="text-xl sm:text-2xl font-semibold text-zinc-900 gs">5. Интеллектуальная собственность</h2>
        <p class="text-zinc-700 text-sm sm:text-base">
          Контент сайта, логотипы и программные компоненты принадлежат AdiletAI и/или соответствующим правообладателям и защищены законом. Пользователь получает ограниченную, отзывную, неисключительную лицензию на доступ и использование сервиса в личных законных целях.
        </p>
      </article>

      <article id="fees" class="flex flex-col gap-2">
        <h2 class="text-xl sm:text-2xl font-semibold text-zinc-900 gs">6. Тарифы и оплата</h2>
        <p class="text-zinc-700 text-sm sm:text-base">
          Мы предлагаем индивидуальные тарифные планы, разработанные специально для ваших потребностей. Для определения оптимального решения и условий сотрудничества, пожалуйста, свяжитесь с нами для персонализированной консультации и онбординга.
        </p>
      </article>

      <article id="warranty" class="flex flex-col gap-2">
        <h2 class="text-xl sm:text-2xl font-semibold text-zinc-900 gs">7. Гарантии и отказы</h2>
        <p class="text-zinc-700 text-sm sm:text-base">
          Сервис предоставляется «как есть» и «как доступно». Мы не обещаем безошибочную работу и абсолютную точность подсказок. Вы несёте ответственность за проверку информации и принятие решений.
        </p>
      </article>

      <article id="liability" class="flex flex-col gap-2">
        <h2 class="text-xl sm:text-2xl font-semibold text-zinc-900 gs">8. Ограничение ответственности</h2>
        <p class="text-zinc-700 text-sm sm:text-base">
          AdiletAI не отвечает за любые убытки, возникшие в результате использования сервиса, невозможности использования или доверия к информации. Максимальная суммарная ответственность — в пределах фактически уплаченной пользователем суммы за доступ к платным функциям (если применимо).
        </p>
      </article>

      <article id="termination" class="flex flex-col gap-2">
        <h2 class="text-xl sm:text-2xl font-semibold text-zinc-900 gs">9. Прекращение доступа</h2>
        <p class="text-zinc-700 text-sm sm:text-base">
          Мы вправе прекратить или приостановить доступ при нарушении Правил, угрозе безопасности, требованиях закона или по иным существенным причинам.
        </p>
      </article>

      <article id="changes" class="flex flex-col gap-2">
        <h2 class="text-xl sm:text-2xl font-semibold text-zinc-900 gs">10. Изменения условий</h2>
        <p class="text-zinc-700 text-sm sm:text-base">
          Мы можем обновлять настоящие Правила. Дата последнего обновления: <span class="font-medium text-zinc-900">{{ lastUpdated }}</span>. Продолжая использовать сервис после публикации обновлений, вы соглашаетесь с новой редакцией.
        </p>
      </article>

      <article id="law" class="flex flex-col gap-2">
        <h2 class="text-xl sm:text-2xl font-semibold text-zinc-900 gs">11. Применимое право и споры</h2>
        <p class="text-zinc-700 text-sm sm:text-base">
          Настоящие Правила регулируются законодательством Республики Казахстан. Споры подлежат разрешению в компетентных судах РК, если иное не предусмотрено соглашениями сторон.
        </p>
      </article>

      <article id="contacts" class="flex flex-col gap-2">
        <h2 class="text-xl sm:text-2xl font-semibold text-zinc-900 gs">12. Контакты</h2>
        <p class="text-zinc-700 text-sm sm:text-base">
          Вопросы по условиям направляйте на <a href="mailto:support@adiletai.com" class="underline text-zinc-900 hover:text-zinc-700">support@adiletai.com</a>.
        </p>
      </article>
    </section>
  </div>
  <br>
</template>

<script setup lang="ts">
const lastUpdated = new Date().toISOString().slice(0, 10)

useSeoMeta({
  title: 'Правила пользования сервисом — AdiletAI',
  description: 'Условия использования веб‑сайта и приложения AdiletAI: допустимое использование, ответственность, применимое право и контакты.',
  keywords: 'adiletai terms, правила пользования, условия сервиса',
  robots: 'index,follow',
  ogType: 'website',
  ogUrl: 'https://adiletai.com/legal/terms',
  ogTitle: 'Правила пользования сервисом — AdiletAI',
  ogDescription: 'Подробные условия использования сервиса AdiletAI.',
  ogImage: 'https://adiletai.com/app.png',
  ogLocale: 'ru_RU',
  twitterCard: 'summary',
  twitterTitle: 'Правила пользования сервисом — AdiletAI',
  twitterDescription: 'Описание сервиса, ответственность, право и споры.',
  twitterImage: 'https://adiletai.com/app.png',
  language: 'ru'
})

useSchemaOrg([
  {
    '@type': 'WebPage',
    '@id': 'https://adiletai.com/legal/terms#webpage',
    url: 'https://adiletai.com/legal/terms',
    name: 'Правила пользования сервисом — AdiletAI',
    description: 'Правила и условия использования проекта AdiletAI.',
    inLanguage: 'ru-RU',
    isPartOf: { '@id': 'https://adiletai.com/#website' },
    about: { '@id': 'https://adiletai.com/#organization' },
    dateModified: new Date().toISOString()
  }
])

useHead({
  link: [{ rel: 'canonical', href: 'https://adiletai.com/legal/terms' }],
  htmlAttrs: { lang: 'ru' }
})
</script>