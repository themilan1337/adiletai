<template>
  <div class="container mx-auto mt-12 sm:mt-16 md:mt-24 px-4 sm:px-6">
    <div class="max-w-4xl mx-auto">
      <!-- Hero Section -->
      <header class="text-center mb-12 sm:mb-16">
        <h1 class="text-3xl sm:text-4xl md:text-5xl gs font-bold text-zinc-900 tracking-tight">
          Безопасность и защита данных
        </h1>
        <p class="mt-4 sm:mt-6 text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto">
          Мы серьезно относимся к защите ваших данных и обеспечиваем максимальную безопасность
        </p>
      </header>

      <!-- Main Features -->
      <section class="mb-12 sm:mb-16">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <article class="p-8 bg-zinc-50 rounded-2xl border border-zinc-200">
            <div class="w-14 h-14 bg-zinc-700 rounded-xl flex items-center justify-center text-3xl mb-4">
              🔒
            </div>
            <h2 class="text-xl gs font-bold text-zinc-900 mb-3">Шифрование данных</h2>
            <p class="text-base text-zinc-700">
              Все данные шифруются с использованием современных протоколов TLS 1.3 при передаче и AES-256 при хранении. Ваши вопросы и документы защищены банковским уровнем шифрования.
            </p>
          </article>

          <article class="p-8 bg-zinc-50 rounded-2xl border border-zinc-200">
            <div class="w-14 h-14 bg-zinc-700 rounded-xl flex items-center justify-center text-3xl mb-4">
              👁️
            </div>
            <h2 class="text-xl gs font-bold text-zinc-900 mb-3">Конфиденциальность</h2>
            <p class="text-base text-zinc-700">
              Мы не передаем ваши данные третьим лицам, не используем их для обучения AI-моделей и не продаем рекламодателям. Ваша информация остается только у вас.
            </p>
          </article>

          <article class="p-8 bg-zinc-50 rounded-2xl border border-zinc-200">
            <div class="w-14 h-14 bg-zinc-700 rounded-xl flex items-center justify-center text-3xl mb-4">
              🇰🇿
            </div>
            <h2 class="text-xl gs font-bold text-zinc-900 mb-3">Соответствие законам РК</h2>
            <p class="text-base text-zinc-700">
              Полное соблюдение Закона РК "О персональных данных и их защите" и других требований законодательства Казахстана о защите информации.
            </p>
          </article>

          <article class="p-8 bg-zinc-50 rounded-2xl border border-zinc-200">
            <div class="w-14 h-14 bg-zinc-700 rounded-xl flex items-center justify-center text-3xl mb-4">
              🗑️
            </div>
            <h2 class="text-xl gs font-bold text-zinc-900 mb-3">Контроль данных</h2>
            <p class="text-base text-zinc-700">
              Вы имеете полный контроль над своими данными: можете в любой момент просмотреть, экспортировать или удалить всю свою информацию из системы.
            </p>
          </article>
        </div>
      </section>

      <!-- Technical Security -->
      <section class="mb-12 sm:mb-16">
        <h2 class="text-2xl sm:text-3xl gs font-bold text-zinc-900 mb-8 text-center">
          Техническая безопасность
        </h2>

        <div class="space-y-6">
          <article class="p-6 sm:p-8 bg-white border border-zinc-200 rounded-xl">
            <h3 class="text-lg gs font-medium text-zinc-900 mb-3">Защита инфраструктуры</h3>
            <ul class="space-y-2 text-sm sm:text-base text-zinc-700">
              <li class="flex items-start gap-2">
                <span class="font-bold mt-0.5">•</span>
                <span>Размещение на защищенных серверах с системами мониторинга 24/7</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="font-bold mt-0.5">•</span>
                <span>Регулярное резервное копирование данных</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="font-bold mt-0.5">•</span>
                <span>Защита от DDoS-атак и вредоносного трафика</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="font-bold mt-0.5">•</span>
                <span>Автоматическое обновление систем безопасности</span>
              </li>
            </ul>
          </article>

          <article class="p-6 sm:p-8 bg-white border border-zinc-200 rounded-xl">
            <h3 class="text-lg gs font-medium text-zinc-900 mb-3">Аутентификация и доступ</h3>
            <ul class="space-y-2 text-sm sm:text-base text-zinc-700">
              <li class="flex items-start gap-2">
                <span class="font-bold mt-0.5">•</span>
                <span>Двухфакторная аутентификация (2FA) для защиты аккаунтов</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="font-bold mt-0.5">•</span>
                <span>Безопасное хранение паролей с использованием bcrypt</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="font-bold mt-0.5">•</span>
                <span>Автоматический выход при неактивности</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="font-bold mt-0.5">•</span>
                <span>Мониторинг подозрительной активности</span>
              </li>
            </ul>
          </article>

          <article class="p-6 sm:p-8 bg-white border border-zinc-200 rounded-xl">
            <h3 class="text-lg gs font-medium text-zinc-900 mb-3">Аудит и тестирование</h3>
            <ul class="space-y-2 text-sm sm:text-base text-zinc-700">
              <li class="flex items-start gap-2">
                <span class="font-bold mt-0.5">•</span>
                <span>Регулярные тесты на проникновение</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="font-bold mt-0.5">•</span>
                <span>Аудит безопасности кода</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="font-bold mt-0.5">•</span>
                <span>Логирование всех критических операций</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="font-bold mt-0.5">•</span>
                <span>Соответствие лучшим практикам OWASP</span>
              </li>
            </ul>
          </article>
        </div>
      </section>

      <!-- Data Processing -->
      <section class="mb-12 sm:mb-16">
        <h2 class="text-2xl sm:text-3xl gs font-bold text-zinc-900 mb-8 text-center">
          Обработка персональных данных
        </h2>

        <div class="bg-zinc-50 rounded-2xl p-8 sm:p-12 border border-zinc-200">
          <div class="space-y-6">
            <div>
              <h3 class="text-lg gs font-medium text-zinc-900 mb-2">Какие данные мы собираем?</h3>
              <p class="text-sm sm:text-base text-zinc-700 mb-3">
                Мы собираем минимально необходимые данные для функционирования сервиса:
              </p>
              <ul class="space-y-2 text-sm text-zinc-700">
                <li class="flex items-start gap-2">
                  <span class="font-bold mt-0.5">•</span>
                  <span>Email для регистрации и связи</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="font-bold mt-0.5">•</span>
                  <span>Ваши вопросы и загруженные документы</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="font-bold mt-0.5">•</span>
                  <span>Техническая информация (IP-адрес, браузер) для безопасности</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="font-bold mt-0.5">•</span>
                  <span>Платежная информация (обрабатывается через защищенные платежные шлюзы)</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-lg gs font-medium text-zinc-900 mb-2">Как мы используем данные?</h3>
              <ul class="space-y-2 text-sm text-zinc-700">
                <li class="flex items-start gap-2">
                  <span class="font-bold mt-0.5">•</span>
                  <span>Для предоставления юридических консультаций</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="font-bold mt-0.5">•</span>
                  <span>Для улучшения качества сервиса (без идентификации личности)</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="font-bold mt-0.5">•</span>
                  <span>Для обработки платежей</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="font-bold mt-0.5">•</span>
                  <span>Для связи с вами по вопросам сервиса</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-lg gs font-medium text-zinc-900 mb-2">Чего мы НЕ делаем?</h3>
              <ul class="space-y-2 text-sm text-zinc-700">
                <li class="flex items-start gap-2">
                  <span class="text-red-600 font-bold mt-0.5">✗</span>
                  <span>Не продаем данные третьим лицам</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-red-600 font-bold mt-0.5">✗</span>
                  <span>Не используем для таргетированной рекламы</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-red-600 font-bold mt-0.5">✗</span>
                  <span>Не обучаем AI на ваших консультациях</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-red-600 font-bold mt-0.5">✗</span>
                  <span>Не передаем данные без вашего согласия</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Your Rights -->
      <section class="mb-12 sm:mb-16">
        <h2 class="text-2xl sm:text-3xl gs font-bold text-zinc-900 mb-8 text-center">
          Ваши права
        </h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <article class="p-6 bg-zinc-50 rounded-xl border border-zinc-200">
            <h3 class="gs font-medium text-zinc-900 mb-2">Право на доступ</h3>
            <p class="text-sm text-zinc-600">
              Вы можете в любой момент просмотреть все свои персональные данные в личном кабинете
            </p>
          </article>

          <article class="p-6 bg-zinc-50 rounded-xl border border-zinc-200">
            <h3 class="gs font-medium text-zinc-900 mb-2">Право на исправление</h3>
            <p class="text-sm text-zinc-600">
              Вы можете изменить или обновить свои данные в любое время
            </p>
          </article>

          <article class="p-6 bg-zinc-50 rounded-xl border border-zinc-200">
            <h3 class="gs font-medium text-zinc-900 mb-2">Право на удаление</h3>
            <p class="text-sm text-zinc-600">
              Вы можете удалить свой аккаунт и все данные одним кликом
            </p>
          </article>

          <article class="p-6 bg-zinc-50 rounded-xl border border-zinc-200">
            <h3 class="gs font-medium text-zinc-900 mb-2">Право на экспорт</h3>
            <p class="text-sm text-zinc-600">
              Вы можете скачать все свои данные в удобном формате
            </p>
          </article>
        </div>
      </section>

      <!-- Incident Response -->
      <section class="mb-12 sm:mb-16">
        <div class="bg-zinc-700 rounded-2xl p-8 sm:p-12">
          <h2 class="text-2xl gs font-bold text-white mb-4">
            Реагирование на инциденты
          </h2>
          <p class="text-base text-zinc-200 mb-6">
            В случае любых инцидентов безопасности мы:
          </p>
          <ul class="space-y-3 text-zinc-200">
            <li class="flex items-start gap-3">
              <span class="flex-shrink-0 w-8 h-8 bg-zinc-600 rounded-full flex items-center justify-center text-sm font-bold">1</span>
              <span>Немедленно уведомляем всех пострадавших пользователей</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="flex-shrink-0 w-8 h-8 bg-zinc-600 rounded-full flex items-center justify-center text-sm font-bold">2</span>
              <span>Проводим полное расследование инцидента</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="flex-shrink-0 w-8 h-8 bg-zinc-600 rounded-full flex items-center justify-center text-sm font-bold">3</span>
              <span>Принимаем меры для предотвращения подобных случаев</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="flex-shrink-0 w-8 h-8 bg-zinc-600 rounded-full flex items-center justify-center text-sm font-bold">4</span>
              <span>Информируем соответствующие государственные органы</span>
            </li>
          </ul>
        </div>
      </section>

      <!-- Contact Section -->
      <section class="mb-16 sm:mb-20 md:mb-24">
        <div class="text-center p-8 sm:p-12 bg-zinc-50 rounded-2xl border border-zinc-200">
          <h2 class="text-2xl gs font-bold text-zinc-900 mb-4">
            Вопросы по безопасности?
          </h2>
          <p class="text-base text-zinc-600 mb-6 max-w-xl mx-auto">
            Если у вас есть вопросы о безопасности или вы обнаружили уязвимость, свяжитесь с нами
          </p>
          <NuxtLink
            to="/contact"
            class="relative inline-flex gs items-center justify-center text-center font-medium transition-colors duration-200 ease-in-out select-none focus-visible:outline-2 focus-visible:outline-offset-2 rounded-md text-white bg-zinc-700 hover:bg-zinc-600 focus-visible:outline-zinc-600 h-11 px-8 text-base"
          >
            Связаться с нами
          </NuxtLink>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Безопасность AdiletAI - Защита данных и конфиденциальность',
  description: 'Узнайте, как AdiletAI защищает ваши данные: шифрование AES-256, соответствие законам РК, конфиденциальность. Мы серьезно относимся к безопасности.',
  keywords: 'безопасность adiletai, защита данных, конфиденциальность ai, шифрование данных, gdpr казахстан',
  robots: 'index, follow',

  ogType: 'website',
  ogUrl: 'https://adiletai.com/security',
  ogTitle: 'Безопасность и защита данных AdiletAI',
  ogDescription: 'Шифрование банковского уровня, соблюдение законов РК, полный контроль над данными',
  ogImage: 'https://adiletai.com/og-image.png',

  twitterCard: 'summary',
  twitterTitle: 'Безопасность AdiletAI',
  twitterDescription: 'Защита данных и конфиденциальность на высшем уровне',
  twitterImage: 'https://adiletai.com/twitter-image.png'
})

useSchemaOrg([
  {
    '@type': 'WebPage',
    '@id': 'https://adiletai.com/security#webpage',
    url: 'https://adiletai.com/security',
    name: 'Безопасность и защита данных AdiletAI',
    description: 'Информация о мерах безопасности и защиты персональных данных в AdiletAI',
    inLanguage: 'ru-RU',
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString().slice(0, 10)
  }
])

useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://adiletai.com/security'
    }
  ],
  htmlAttrs: {
    lang: 'ru'
  }
})
</script>
