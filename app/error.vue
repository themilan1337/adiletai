<template>
  <div class="container mx-auto mt-24 px-4 sm:px-0">
    <header class="w-full max-w-xl px-4 sm:px-0 mx-auto text-center">
      <h1
        class="text-3xl gs text-center font-bold sm:font-normal sm:text-2xl md:text-3xl lg:text-4xl mt-6 sm:mt-8 md:mt-12 tracking-tight text-zinc-900 lg:text-balance"
      >
        {{ is404 ? 'Страница не найдена' : 'Произошла ошибка' }}
      </h1>
      <p class="text-sm text-center sm:text-base mt-3 sm:mt-4 text-zinc-600 lg:text-balance">
        {{ is404
          ? 'Мы не нашли запрошенную страницу. Возможно, она была перемещена или вы ошиблись в адресе.'
          : 'Неожиданная ошибка при обработке запроса. Попробуйте обновить страницу или вернитесь на главную.'
        }}
      </p>
      <nav class="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center mt-6 sm:mt-8 gap-3 sm:gap-2" aria-label="Основные действия">
        <NuxtLink
          to="/"
          class="relative flex gs items-center justify-center text-center font-medium transition-colors duration-200 ease-in-out select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:z-10 rounded-md text-white bg-zinc-700 outline outline-zinc-700 hover:bg-zinc-600 focus-visible:outline-zinc-600 h-10 sm:h-9 px-4 text-sm"
          aria-label="Вернуться на главную"
        >
          На главную
        </NuxtLink>
      </nav>
    </header>
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'
import { clearError } from '#app'
import { computed } from 'vue'

const props = defineProps<{ error: NuxtError }>()
const is404 = computed(() => props.error?.statusCode === 404)

function goHome() {
  clearError({ redirect: '/' })
}

useSeoMeta({
  title: '404 — Страница не найдена | AdiletAI',
  description: 'Запрошенная страница не найдена. Вернитесь на главную или ознакомьтесь с правилами сервиса.',
  robots: 'noindex, nofollow',
  ogType: 'website',
  ogUrl: 'https://adiletai.com/404',
  ogTitle: '404 — Страница не найдена | AdiletAI',
  ogDescription: 'Кастомная 404-страница AdiletAI с согласованным дизайном.',
  ogImage: 'https://adiletai.com/app.png',
  ogLocale: 'ru_RU',
  twitterCard: 'summary',
  twitterTitle: '404 — Страница не найдена | AdiletAI',
  twitterDescription: 'Вернитесь на главную страницу или откройте правила сервиса.',
  twitterImage: 'https://adiletai.com/app.png',
  // lang устанавливается через useHead ниже
})

useSchemaOrg([
  {
    '@type': 'WebPage',
    '@id': 'https://adiletai.com/404#webpage',
    url: 'https://adiletai.com/404',
    name: '404 — Страница не найдена | AdiletAI',
    description: 'Кастомная страница ошибки 404 проекта AdiletAI.',
    inLanguage: 'ru-RU',
    isPartOf: { '@id': 'https://adiletai.com/#website' },
    about: { '@id': 'https://adiletai.com/#organization' },
    dateModified: new Date().toISOString()
  }
])

useHead({
  link: [{ rel: 'canonical', href: 'https://adiletai.com/404' }],
  htmlAttrs: { lang: 'ru' }
})
</script>