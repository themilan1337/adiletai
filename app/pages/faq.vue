<template>
  <div class="container mx-auto mt-12 sm:mt-16 md:mt-24 px-4 sm:px-6">
    <div class="max-w-4xl mx-auto">
      <!-- Hero Section -->
      <header class="text-center mb-12 sm:mb-16">
        <h1 class="text-3xl sm:text-4xl md:text-5xl gs font-bold text-zinc-900 tracking-tight">
          Часто задаваемые вопросы
        </h1>
        <p class="mt-4 sm:mt-6 text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto">
          Ответы на самые популярные вопросы о AdiletAI
        </p>
      </header>

      <!-- FAQ Categories -->
      <section class="mb-12 sm:mb-16 space-y-8">
        <!-- General Questions -->
        <div>
          <h2 class="text-2xl gs font-bold text-zinc-900 mb-6">Общие вопросы</h2>
          <div class="space-y-4">
            <details class="p-6 bg-zinc-50 rounded-xl border border-zinc-200">
              <summary class="gs font-medium text-zinc-900 cursor-pointer">Что такое AdiletAI?</summary>
              <p class="mt-3 text-sm sm:text-base text-zinc-600">
                AdiletAI — это интеллектуальный юридический помощник на базе искусственного интеллекта, специализирующийся на законодательстве Казахстана. Мы используем технологию RAG для предоставления точных и актуальных юридических консультаций.
              </p>
            </details>

            <details class="p-6 bg-zinc-50 rounded-xl border border-zinc-200">
              <summary class="gs font-medium text-zinc-900 cursor-pointer">Как AdiletAI отличается от ChatGPT?</summary>
              <p class="mt-3 text-sm sm:text-base text-zinc-600">
                В отличие от ChatGPT, AdiletAI специализируется на казахстанском праве и использует технологию RAG, которая обеспечивает проверку каждого ответа по актуальной базе законов. Это дает точность на 83% выше, чем у обычных AI-моделей.
              </p>
            </details>

            <details class="p-6 bg-zinc-50 rounded-xl border border-zinc-200">
              <summary class="gs font-medium text-zinc-900 cursor-pointer">Можно ли доверять ответам AdiletAI?</summary>
              <p class="mt-3 text-sm sm:text-base text-zinc-600">
                AdiletAI предоставляет информационные консультации на основе актуального законодательства РК. Однако помните, что это не замена профессиональному юристу для сложных юридических дел. Всегда перепроверяйте важную информацию с лицензированным юристом.
              </p>
            </details>

            <details class="p-6 bg-zinc-50 rounded-xl border border-zinc-200">
              <summary class="gs font-medium text-zinc-900 cursor-pointer">Бесплатный ли AdiletAI?</summary>
              <p class="mt-3 text-sm sm:text-base text-zinc-600">
                Да, мы предлагаем бесплатный тариф с ограничением в 5 вопросов в день. Для неограниченного доступа и дополнительных функций доступны платные тарифы от 2,990₸/месяц.
              </p>
            </details>
          </div>
        </div>

        <!-- Technical Questions -->
        <div>
          <h2 class="text-2xl gs font-bold text-zinc-900 mb-6">Технические вопросы</h2>
          <div class="space-y-4">
            <details class="p-6 bg-zinc-50 rounded-xl border border-zinc-200">
              <summary class="gs font-medium text-zinc-900 cursor-pointer">На каких устройствах работает AdiletAI?</summary>
              <p class="mt-3 text-sm sm:text-base text-zinc-600">
                AdiletAI работает на любых устройствах через веб-браузер: компьютеры, планшеты и смартфоны. Не требуется установка приложения.
              </p>
            </details>

            <details class="p-6 bg-zinc-50 rounded-xl border border-zinc-200">
              <summary class="gs font-medium text-zinc-900 cursor-pointer">Какие документы можно анализировать?</summary>
              <p class="mt-3 text-sm sm:text-base text-zinc-600">
                Мы поддерживаем PDF, DOCX и TXT файлы. Вы можете загружать договоры, соглашения, уставы и другие юридические документы для анализа.
              </p>
            </details>

            <details class="p-6 bg-zinc-50 rounded-xl border border-zinc-200">
              <summary class="gs font-medium text-zinc-900 cursor-pointer">Работает ли AdiletAI без интернета?</summary>
              <p class="mt-3 text-sm sm:text-base text-zinc-600">
                Нет, для работы AdiletAI требуется подключение к интернету, так как система использует облачные вычисления и актуальную базу данных законов.
              </p>
            </details>

            <details class="p-6 bg-zinc-50 rounded-xl border border-zinc-200">
              <summary class="gs font-medium text-zinc-900 cursor-pointer">Как часто обновляется база законов?</summary>
              <p class="mt-3 text-sm sm:text-base text-zinc-600">
                Наша база законодательства обновляется ежедневно, чтобы отражать последние изменения в законодательстве Казахстана.
              </p>
            </details>
          </div>
        </div>

        <!-- Account & Billing -->
        <div>
          <h2 class="text-2xl gs font-bold text-zinc-900 mb-6">Аккаунт и оплата</h2>
          <div class="space-y-4">
            <details class="p-6 bg-zinc-50 rounded-xl border border-zinc-200">
              <summary class="gs font-medium text-zinc-900 cursor-pointer">Нужна ли регистрация?</summary>
              <p class="mt-3 text-sm sm:text-base text-zinc-600">
                Для использования бесплатного тарифа регистрация не обязательна, но рекомендуется для сохранения истории консультаций. Для платных тарифов регистрация обязательна.
              </p>
            </details>

            <details class="p-6 bg-zinc-50 rounded-xl border border-zinc-200">
              <summary class="gs font-medium text-zinc-900 cursor-pointer">Какие способы оплаты принимаете?</summary>
              <p class="mt-3 text-sm sm:text-base text-zinc-600">
                Мы принимаем все основные банковские карты Казахстана (Visa, Mastercard), а также платежи через Kaspi, Halyk Bank и другие казахстанские системы.
              </p>
            </details>

            <details class="p-6 bg-zinc-50 rounded-xl border border-zinc-200">
              <summary class="gs font-medium text-zinc-900 cursor-pointer">Можно ли отменить подписку?</summary>
              <p class="mt-3 text-sm sm:text-base text-zinc-600">
                Да, вы можете отменить подписку в любое время из личного кабинета. Доступ к платным функциям сохраняется до конца оплаченного периода.
              </p>
            </details>

            <details class="p-6 bg-zinc-50 rounded-xl border border-zinc-200">
              <summary class="gs font-medium text-zinc-900 cursor-pointer">Предоставляете ли вы чеки?</summary>
              <p class="mt-3 text-sm sm:text-base text-zinc-600">
                Да, после каждого платежа мы автоматически отправляем электронный чек на вашу почту. Также доступна выгрузка актов выполненных работ для организаций.
              </p>
            </details>
          </div>
        </div>

        <!-- Privacy & Security -->
        <div>
          <h2 class="text-2xl gs font-bold text-zinc-900 mb-6">Конфиденциальность и безопасность</h2>
          <div class="space-y-4">
            <details class="p-6 bg-zinc-50 rounded-xl border border-zinc-200">
              <summary class="gs font-medium text-zinc-900 cursor-pointer">Безопасны ли мои данные?</summary>
              <p class="mt-3 text-sm sm:text-base text-zinc-600">
                Да, мы используем современное шифрование для защиты всех данных. Подробнее на странице <NuxtLink to="/security" class="text-zinc-900 underline">Безопасность</NuxtLink>.
              </p>
            </details>

            <details class="p-6 bg-zinc-50 rounded-xl border border-zinc-200">
              <summary class="gs font-medium text-zinc-900 cursor-pointer">Кто имеет доступ к моим вопросам?</summary>
              <p class="mt-3 text-sm sm:text-base text-zinc-600">
                Только вы имеете доступ к вашим консультациям. Мы не передаем ваши данные третьим лицам и не используем их для обучения AI-моделей.
              </p>
            </details>

            <details class="p-6 bg-zinc-50 rounded-xl border border-zinc-200">
              <summary class="gs font-medium text-zinc-900 cursor-pointer">Могу ли я удалить свои данные?</summary>
              <p class="mt-3 text-sm sm:text-base text-zinc-600">
                Да, вы можете в любой момент удалить историю консультаций или полностью удалить аккаунт из настроек профиля.
              </p>
            </details>

            <details class="p-6 bg-zinc-50 rounded-xl border border-zinc-200">
              <summary class="gs font-medium text-zinc-900 cursor-pointer">Соответствует ли AdiletAI законам РК о защите данных?</summary>
              <p class="mt-3 text-sm sm:text-base text-zinc-600">
                Да, мы полностью соблюдаем законодательство Казахстана о защите персональных данных. Подробности в нашей <NuxtLink to="/legal/privacy" class="text-zinc-900 underline">Политике конфиденциальности</NuxtLink>.
              </p>
            </details>
          </div>
        </div>

        <!-- Usage Questions -->
        <div>
          <h2 class="text-2xl gs font-bold text-zinc-900 mb-6">Использование</h2>
          <div class="space-y-4">
            <details class="p-6 bg-zinc-50 rounded-xl border border-zinc-200">
              <summary class="gs font-medium text-zinc-900 cursor-pointer">На каких языках работает AdiletAI?</summary>
              <p class="mt-3 text-sm sm:text-base text-zinc-600">
                AdiletAI поддерживает русский и казахский языки. Вы можете задавать вопросы на любом из этих языков.
              </p>
            </details>

            <details class="p-6 bg-zinc-50 rounded-xl border border-zinc-200">
              <summary class="gs font-medium text-zinc-900 cursor-pointer">Сколько времени занимает получение ответа?</summary>
              <p class="mt-3 text-sm sm:text-base text-zinc-600">
                Большинство ответов генерируются за 2-5 секунд. Сложные запросы или анализ больших документов может занять до 30 секунд.
              </p>
            </details>

            <details class="p-6 bg-zinc-50 rounded-xl border border-zinc-200">
              <summary class="gs font-medium text-zinc-900 cursor-pointer">Можно ли задавать уточняющие вопросы?</summary>
              <p class="mt-3 text-sm sm:text-base text-zinc-600">
                Да, AdiletAI поддерживает контекстные диалоги. Вы можете задавать уточняющие вопросы, и система будет учитывать предыдущий контекст разговора.
              </p>
            </details>

            <details class="p-6 bg-zinc-50 rounded-xl border border-zinc-200">
              <summary class="gs font-medium text-zinc-900 cursor-pointer">Какие типы юридических вопросов вы покрываете?</summary>
              <p class="mt-3 text-sm sm:text-base text-zinc-600">
                AdiletAI охватывает все основные отрасли права РК: гражданское, трудовое, семейное, налоговое, административное, уголовное и другие.
              </p>
            </details>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="mb-16 sm:mb-20 md:mb-24">
        <div class="bg-zinc-700 rounded-2xl p-8 sm:p-12 text-center">
          <h2 class="text-2xl sm:text-3xl gs font-bold text-white mb-4">
            Остались вопросы?
          </h2>
          <p class="text-base sm:text-lg text-zinc-200 mb-8 max-w-xl mx-auto">
            Свяжитесь с нашей службой поддержки или попробуйте AdiletAI прямо сейчас
          </p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <NuxtLink
              to="https://app.adiletai.com/auth/register"
              class="relative flex gs items-center justify-center text-center font-medium transition-colors duration-200 ease-in-out select-none focus-visible:outline-2 focus-visible:outline-offset-2 rounded-md text-zinc-900 bg-white hover:bg-zinc-100 focus-visible:outline-white h-11 px-8 text-base w-full sm:w-auto"
            >
              Начать сейчас
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
  title: 'FAQ - Часто задаваемые вопросы о AdiletAI',
  description: 'Ответы на популярные вопросы о AdiletAI: как работает, безопасность, тарифы, технические вопросы. Полное руководство по использованию AI юриста.',
  keywords: 'faq adiletai, вопросы ai юриста, как использовать adiletai, помощь adiletai, инструкция adiletai',
  robots: 'index, follow',

  ogType: 'website',
  ogUrl: 'https://adiletai.com/faq',
  ogTitle: 'FAQ AdiletAI - Ответы на вопросы',
  ogDescription: 'Часто задаваемые вопросы о юридическом AI помощнике AdiletAI',
  ogImage: 'https://adiletai.com/og-image.png',

  twitterCard: 'summary',
  twitterTitle: 'FAQ AdiletAI',
  twitterDescription: 'Ответы на популярные вопросы о AdiletAI',
  twitterImage: 'https://adiletai.com/twitter-image.png'
})

useSchemaOrg([
  {
    '@type': 'WebPage',
    '@id': 'https://adiletai.com/faq#webpage',
    url: 'https://adiletai.com/faq',
    name: 'FAQ - Часто задаваемые вопросы AdiletAI',
    description: 'Полный список часто задаваемых вопросов о AdiletAI',
    inLanguage: 'ru-RU',
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString().slice(0, 10)
  },
  {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Что такое AdiletAI?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'AdiletAI — это интеллектуальный юридический помощник на базе искусственного интеллекта, специализирующийся на законодательстве Казахстана.'
        }
      },
      {
        '@type': 'Question',
        name: 'Бесплатный ли AdiletAI?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Да, мы предлагаем бесплатный тариф с ограничением в 5 вопросов в день. Для неограниченного доступа доступны платные тарифы от 2,990₸/месяц.'
        }
      },
      {
        '@type': 'Question',
        name: 'Безопасны ли мои данные?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Да, мы используем современное шифрование для защиты всех данных и не передаем информацию третьим лицам.'
        }
      }
    ]
  }
])

useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://adiletai.com/faq'
    }
  ],
  htmlAttrs: {
    lang: 'ru'
  }
})
</script>
