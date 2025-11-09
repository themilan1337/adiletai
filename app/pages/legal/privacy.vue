<template>
  <div class="container mx-auto mt-24 px-4 sm:px-0">
    <header class="w-full max-w-3xl mx-auto">
      <h1 class="text-3xl gs text-center sm:text-left font-bold sm:font-normal sm:text-2xl md:text-3xl lg:text-4xl mt-6 sm:mt-8 md:mt-12 tracking-tight text-zinc-900 lg:text-balance">
        Политика конфиденциальности AdiletAI
      </h1>
      <p class="text-sm text-center sm:text-left sm:text-base mt-3 sm:mt-4 text-zinc-600 lg:text-balance">
        Мы — молодёжная команда из Казахстана, создающая юридического помощника с технологией RAG. Ниже описано, какие данные мы собираем, как используем и защищаем их.
      </p>
      <nav class="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center mt-6 sm:mt-8 gap-3 sm:gap-2" aria-label="Ссылки на юридические документы">
        <NuxtLink to="/legal/terms" class="relative flex gs items-center justify-center text-center font-medium rounded-md text-white bg-zinc-700 outline outline-zinc-700 hover:bg-zinc-600 h-10 sm:h-9 px-4 text-sm">Правила пользования</NuxtLink>
        <NuxtLink to="/legal/disclaimer" class="relative flex gs items-center justify-center text-center font-medium rounded-md text-zinc-600 bg-zinc-50 outline outline-zinc-100 hover:bg-zinc-200 h-10 sm:h-9 px-4 text-sm">Отказ от ответственности</NuxtLink>
      </nav>
    </header>

    <section class="mt-8 sm:mt-10 md:mt-12 grid grid-cols-1 gap-6 sm:gap-7 md:gap-8 max-w-3xl mx-auto" aria-label="Содержание политики конфиденциальности">
      <article class="flex flex-col gap-2">
        <h2 class="text-xl sm:text-2xl font-semibold text-zinc-900 gs">1. Кого касается эта политика</h2>
        <p class="text-zinc-700 text-sm sm:text-base">
          Политика применяется к посетителям сайта <span class="font-medium">adiletai.com</span>, пользователям приложения <span class="font-medium">app.adiletai.com</span> и лицам, взаимодействующим с нами по электронной почте или через формы обратной связи.
        </p>
      </article>

      <article id="data-collected" class="flex flex-col gap-2">
        <h2 class="text-xl sm:text-2xl font-semibold text-zinc-900 gs">2. Какие данные мы собираем</h2>
        <ul class="list-disc pl-5 space-y-2 text-zinc-700 text-sm sm:text-base">
          <li><span class="font-medium">Технические данные</span>: IP-адрес, тип устройства/браузера, язык, данные cookies, приблизительная геолокация.</li>
          <li><span class="font-medium">Данные использования</span>: запросы, клики, время взаимодействия, страницы, на которых вы были.</li>
          <li><span class="font-medium">Содержимое запросов</span>: текст, который вы вводите в чат/формы. Мы стремимся минимизировать персональные данные в запросах и просим не отправлять чувствительную информацию.</li>
          <li><span class="font-medium">Коммуникации</span>: сообщения по e‑mail, обратная связь, результаты опросов.</li>
        </ul>
      </article>

      <article id="purposes" class="flex flex-col gap-2">
        <h2 class="text-xl sm:text-2xl font-semibold text-zinc-900 gs">3. Цели обработки</h2>
        <ul class="list-disc pl-5 space-y-2 text-zinc-700 text-sm sm:text-base">
          <li>Предоставление сервиса, генерация ответов и улучшение качества подсказок (включая RAG‑проверку).</li>
          <li>Аналитика производительности и безопасности, предотвращение злоупотреблений.</li>
          <li>Коммуникация с пользователями: ответы на запросы, уведомления об обновлениях.</li>
          <li>Исследовательские цели и улучшение моделей ИИ с соблюдением принципов этичности и минимизации данных.</li>
        </ul>
      </article>

      <article id="legal-basis" class="flex flex-col gap-2">
        <h2 class="text-xl sm:text-2xl font-semibold text-zinc-900 gs">4. Правовые основания</h2>
        <p class="text-zinc-700 text-sm sm:text-base">
          Мы руководствуемся законодательством Республики Казахстан и общепринятыми международными стандартами защиты данных. Правовыми основаниями являются: выполнение договора (оказание сервиса), согласие пользователя, законные интересы (обеспечение безопасности и улучшение сервиса).
        </p>
      </article>

      <article id="retention" class="flex flex-col gap-2">
        <h2 class="text-xl sm:text-2xl font-semibold text-zinc-900 gs">5. Сроки хранения</h2>
        <p class="text-zinc-700 text-sm sm:text-base">
          Технические логи — до 12 месяцев. Содержимое запросов — минимально необходимое время для улучшения сервиса и отладки, после чего подлежит обезличиванию или удалению. Конкретные сроки могут меняться при переходе из MVP в полноценный релиз.
        </p>
      </article>

      <article id="sharing" class="flex flex-col gap-2">
        <h2 class="text-xl sm:text-2xl font-semibold text-zinc-900 gs">6. Передача третьим лицам</h2>
        <ul class="list-disc pl-5 space-y-2 text-zinc-700 text-sm sm:text-base">
          <li>Провайдеры хостинга, аналитики и инфраструктуры — строго по договорам обработки.</li>
          <li>Партнёры и консультанты — для валидации качества, при условии обезличивания данных.</li>
          <li>Государственные органы — только по законному запросу и в рамках применимого права.</li>
        </ul>
      </article>

      <article id="cookies" class="flex flex-col gap-2">
        <h2 class="text-xl sm:text-2xl font-semibold text-zinc-900 gs">7. Cookies и аналитика</h2>
        <p class="text-zinc-700 text-sm sm:text-base">
          Мы используем cookies для работы сайта, а также инструменты веб‑аналитики (например, Vercel Analytics) для агрегированной статистики. Вы можете ограничить cookies в настройках браузера, однако часть функций может работать некорректно.
        </p>
      </article>

      <article id="rights" class="flex flex-col gap-2">
        <h2 class="text-xl sm:text-2xl font-semibold text-zinc-900 gs">8. Права пользователя</h2>
        <ul class="list-disc pl-5 space-y-2 text-zinc-700 text-sm sm:text-base">
          <li>Доступ к данным и получение копии.</li>
          <li>Исправление неточностей и удаление данных, если это допустимо по закону.</li>
          <li>Отзыв согласия и ограничение обработки.</li>
          <li>Подача жалобы в уполномоченный орган по защите данных.</li>
        </ul>
      </article>

      <article id="security" class="flex flex-col gap-2">
        <h2 class="text-xl sm:text-2xl font-semibold text-zinc-900 gs">9. Безопасность</h2>
        <p class="text-zinc-700 text-sm sm:text-base">
          Мы применяем организационные и технические меры защиты: контроль доступа, шифрование каналов, мониторинг инцидентов. Ни один онлайн‑сервис не может гарантировать абсолютную безопасность, поэтому просим не отправлять чувствительные персональные данные через чат.
        </p>
      </article>

      <article id="minors" class="flex flex-col gap-2">
        <h2 class="text-xl sm:text-2xl font-semibold text-zinc-900 gs">10. Несовершеннолетние</h2>
        <p class="text-zinc-700 text-sm sm:text-base">
          Сервис предназначен для совершеннолетних пользователей. Несовершеннолетние могут использовать сервис только с разрешения и под контролем законных представителей.
        </p>
      </article>

      <article id="international" class="flex flex-col gap-2">
        <h2 class="text-xl sm:text-2xl font-semibold text-zinc-900 gs">11. Международные передачи</h2>
        <p class="text-zinc-700 text-sm sm:text-base">
          Возможна передача данных на серверы за пределы Республики Казахстан, если это необходимо для работы инфраструктуры. В таких случаях мы стремимся обеспечивать эквивалентный уровень защиты.
        </p>
      </article>

      <article id="changes" class="flex flex-col gap-2">
        <h2 class="text-xl sm:text-2xl font-semibold text-zinc-900 gs">12. Изменения политики</h2>
        <p class="text-zinc-700 text-sm sm:text-base">
          Мы можем обновлять настоящую политику. Дата последнего обновления: <span class="font-medium text-zinc-900">{{ lastUpdated }}</span>.
        </p>
      </article>

      <article id="contacts" class="flex flex-col gap-2">
        <h2 class="text-xl sm:text-2xl font-semibold text-zinc-900 gs">13. Контакты</h2>
        <p class="text-zinc-700 text-sm sm:text-base">
          Вопросы по данным, реализации прав и безопасности направляйте на <a href="mailto:support@adiletai.com" class="underline text-zinc-900 hover:text-zinc-700">support@adiletai.com</a>.
        </p>
      </article>
    </section>
  </div>
  <br>
</template>

<script setup lang="ts">
const lastUpdated = new Date().toISOString().slice(0, 10)

useSeoMeta({
  title: 'Политика конфиденциальности — AdiletAI',
  description: 'Какие данные собирает AdiletAI, как мы их используем, храним и защищаем. Права пользователей и контакты.',
  keywords: 'adiletai privacy, политика конфиденциальности, защита данных казахстан',
  robots: 'index,follow',
  ogType: 'website',
  ogUrl: 'https://adiletai.com/legal/privacy',
  ogTitle: 'Политика конфиденциальности — AdiletAI',
  ogDescription: 'Прозрачные практики обработки данных и безопасность.',
  ogImage: 'https://adiletai.com/app.png',
  ogLocale: 'ru_RU',
  twitterCard: 'summary',
  twitterTitle: 'Политика конфиденциальности — AdiletAI',
  twitterDescription: 'Сбор, использование, хранение и права пользователей.',
  twitterImage: 'https://adiletai.com/app.png',
  language: 'ru'
})

useSchemaOrg([
  {
    '@type': 'WebPage',
    '@id': 'https://adiletai.com/legal/privacy#webpage',
    url: 'https://adiletai.com/legal/privacy',
    name: 'Политика конфиденциальности — AdiletAI',
    description: 'Подробная политика обработки персональных данных проекта AdiletAI.',
    inLanguage: 'ru-RU',
    isPartOf: { '@id': 'https://adiletai.com/#website' },
    about: { '@id': 'https://adiletai.com/#organization' },
    dateModified: new Date().toISOString()
  }
])

useHead({
  link: [{ rel: 'canonical', href: 'https://adiletai.com/legal/privacy' }],
  htmlAttrs: { lang: 'ru' }
})
</script>