<template>
  <div class="container mx-auto mt-24 px-4 sm:px-0">
    <header class="w-full max-w-3xl mx-auto">
      <h1 class="text-3xl gs text-center sm:text-left font-bold sm:font-normal sm:text-2xl md:text-3xl lg:text-4xl mt-6 sm:mt-8 md:mt-12 tracking-tight text-zinc-900 lg:text-balance">
        Отказ от ответственности AdiletAI
      </h1>
      <p class="text-sm text-center sm:text-left sm:text-base mt-3 sm:mt-4 text-zinc-600 lg:text-balance">
        AdiletAI — создаёт RAG‑интегрированный юридический помощник для Казахстана. Ниже подробно указаны ограничения, риски и правила использования информации и подсказок сервиса.
      </p>
      <nav class="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center mt-6 sm:mt-8 gap-3 sm:gap-2" aria-label="Ссылки на юридические документы">
        <NuxtLink to="/legal/terms" class="relative flex gs items-center justify-center text-center font-medium rounded-md text-white bg-zinc-700 outline outline-zinc-700 hover:bg-zinc-600 h-10 sm:h-9 px-4 text-sm">Правила пользования</NuxtLink>
        <NuxtLink to="/legal/privacy" class="relative flex gs items-center justify-center text-center font-medium rounded-md text-zinc-600 bg-zinc-50 outline outline-zinc-100 hover:bg-zinc-200 h-10 sm:h-9 px-4 text-sm">Политика конфиденциальности</NuxtLink>
      </nav>
    </header>

    <section class="mt-8 sm:mt-10 md:mt-12 grid grid-cols-1 gap-6 sm:gap-7 md:gap-8 max-w-3xl mx-auto" aria-label="Содержание отказа от ответственности">
      <article id="general" class="flex flex-col gap-2">
        <h2 class="text-xl gs sm:text-2xl font-semibold text-zinc-900">1. Общее</h2>
        <p class="text-zinc-700 text-sm sm:text-base">
          AdiletAI предоставляет информационные подсказки на основе искусственного интеллекта и технологии <strong>RAG</strong> (retrieval‑augmented generation), используя публичные источники законодательства Республики Казахстан. Сервис не является юридической фирмой и не оказывает юридические услуги в традиционном понимании.
        </p>
        <p class="text-zinc-700 text-sm sm:text-base">
          Любая выдаваемая подсказка носит справочно‑информационный характер и может содержать ошибки, быть неполной или устаревшей. Решения, принимаемые пользователем на основе ответа, осуществляются исключительно на его риск.
        </p>
      </article>

      <article id="no-legal-advice" class="flex flex-col gap-2">
        <h2 class="text-xl gs sm:text-2xl font-semibold text-zinc-900">2. Не юридическая консультация</h2>
        <ul class="list-disc pl-5 space-y-2 text-zinc-700 text-sm sm:text-base">
          <li>Ответы сервиса не являются юридическим заключением, рекомендацией или инструкцией к действию.</li>
          <li>Материалы не заменяют консультацию квалифицированного юриста, адвоката или нотариуса.</li>
          <li>Для сложных, спорных и высокорисковых ситуаций используйте подход <em>human‑in‑the‑loop</em> — обратитесь к специалисту, подтвердите актуальность и применимость нормы права к вашему случаю.</li>
        </ul>
      </article>

      <article id="accuracy" class="flex flex-col gap-2">
        <h2 class="text-xl sm:text-2xl font-semibold text-zinc-900 gs">3. Источники, точность и обновляемость</h2>
        <ul class="list-disc pl-5 space-y-2 text-zinc-700 text-sm sm:text-base">
          <li>Мы стремимся к высокой проверяемости ответов через ссылки на источники, однако не гарантируем абсолютную точность и полноту.</li>
          <li>Законодательство часто меняется: возможны расхождения между актуальной редакцией нормативного акта и данными в нашей базе.</li>
          <li>Переводы, интерпретации и упрощения могут искажать смысл правовых норм. Пользователь обязан сверять критичную информацию с официальными источниками.</li>
        </ul>
      </article>

      <article id="liability" class="flex flex-col gap-2">
        <h2 class="text-xl sm:text-2xl font-semibold text-zinc-900 gs">4. Ограничение ответственности</h2>
        <p class="text-zinc-700 text-sm sm:text-base">
          Ни AdiletAI, ни участники команды не несут ответственности за любые прямые или косвенные убытки, штрафы, утраченную прибыль, репутационный вред, иные последствия, возникшие в результате использования, невозможности использования или доверия к информации сервиса.
        </p>
        <ul class="list-disc pl-5 space-y-2 text-zinc-700 text-sm sm:text-base">
          <li>Сервис предоставляется «как есть» (<em>as is</em>) без гарантий пригодности, точности или непрерывной доступности.</li>
          <li>Пользователь несёт полную ответственность за проверку информации и принятие решений.</li>
          <li>Мы не отвечаем за действия третьих лиц, сторонние сайты и сервисы, на которые могут вести ссылки.</li>
        </ul>
      </article>

      <article id="use" class="flex flex-col gap-2">
        <h2 class="text-xl sm:text-2xl font-semibold text-zinc-900 gs">5. Правомерность и допустимое использование</h2>
        <ul class="list-disc pl-5 space-y-2 text-zinc-700 text-sm sm:text-base">
          <li>Сервис ориентирован на законодательство Республики Казахстан; применение к иным правопорядкам требует дополнительной проверки.</li>
          <li>Запрещено использовать AdiletAI для противоправных целей, публикации или распространения недостоверной информации и юридических манипуляций.</li>
          <li>При работе с персональными данными руководствуйтесь нашей <NuxtLink to="/legal/privacy" class="underline text-zinc-900 hover:text-zinc-700">Политикой конфиденциальности</NuxtLink>.</li>
        </ul>
      </article>

      <article id="minors" class="flex flex-col gap-2">
        <h2 class="text-xl sm:text-2xl font-semibold text-zinc-900 gs">6. Несовершеннолетние пользователи</h2>
        <p class="text-zinc-700 text-sm sm:text-base">
          Использование сервиса несовершеннолетними возможно только с разрешения и под контролем законных представителей. Сервис не предназначен для предоставления юридических советов детям.
        </p>
      </article>

      <article id="law" class="flex flex-col gap-2">
        <h2 class="text-xl sm:text-2xl font-semibold text-zinc-900 gs">7. Применимое право и юрисдикция</h2>
        <p class="text-zinc-700 text-sm sm:text-base">
          Настоящий документ регулируется законодательством Республики Казахстан. Споры решаются по правилам и в судах РК, если иное не предусмотрено отдельными договорами.
        </p>
      </article>

      <article id="changes" class="flex flex-col gap-2">
        <h2 class="text-xl sm:text-2xl font-semibold text-zinc-900 gs">8. Обновления документа</h2>
        <p class="text-zinc-700 text-sm sm:text-base">
          Мы можем периодически обновлять этот отказ от ответственности. Актуальная версия публикуется на этой странице. Дата последнего обновления: <span class="font-medium text-zinc-900">{{ lastUpdated }}</span>.
        </p>
      </article>

      <article id="contacts" class="flex flex-col gap-2">
        <h2 class="text-xl sm:text-2xl font-semibold text-zinc-900 gs">9. Контакты</h2>
        <p class="text-zinc-700 text-sm sm:text-base">
          По вопросам корректности информации, удалений или сотрудничества: <a href="mailto:support@adiletai.com" class="underline text-zinc-900 hover:text-zinc-700">support@adiletai.com</a>. Команда: Нариман Ерхан, Мухтарулы Нурсултан, Гориславец Милан.
        </p>
      </article>
    </section>
  </div>
  <br>
</template>

<script setup lang="ts">
const lastUpdated = new Date().toISOString().slice(0, 10)

useSeoMeta({
  title: 'Отказ от ответственности — AdiletAI',
  description: 'AdiletAI не предоставляет юридическую консультацию. Информация носит справочный характер, возможны ошибки. Ограничение ответственности и правила использования сервиса.',
  keywords: 'adiletai отказ от ответственности, юридический ИИ Казахстан, rag',
  robots: 'index,follow',
  ogType: 'website',
  ogUrl: 'https://adiletai.com/legal/disclaimer',
  ogTitle: 'Отказ от ответственности — AdiletAI',
  ogDescription: 'Подробные ограничения и риски использования юридического AI помощника AdiletAI.',
  ogImage: 'https://adiletai.com/app.png',
  ogLocale: 'ru_RU',
  twitterCard: 'summary',
  twitterTitle: 'Отказ от ответственности — AdiletAI',
  twitterDescription: 'Информация носит справочный характер. Возможны ошибки. Ознакомьтесь с ограничениями.',
  twitterImage: 'https://adiletai.com/app.png',
  language: 'ru'
})

useSchemaOrg([
  {
    '@type': 'WebPage',
    '@id': 'https://adiletai.com/legal/disclaimer#webpage',
    url: 'https://adiletai.com/legal/disclaimer',
    name: 'Отказ от ответственности — AdiletAI',
    description: 'Ограничения, риски и правила использования подсказок AdiletAI.',
    inLanguage: 'ru-RU',
    isPartOf: { '@id': 'https://adiletai.com/#website' },
    about: { '@id': 'https://adiletai.com/#organization' },
    dateModified: new Date().toISOString()
  }
])

useHead({
  link: [{ rel: 'canonical', href: 'https://adiletai.com/legal/disclaimer' }],
  htmlAttrs: { lang: 'ru' }
})
</script>