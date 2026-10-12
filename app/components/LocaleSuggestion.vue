<script setup lang="ts">
// English is the default, but most visitors from Kazakhstan read Russian or Kazakh. Instead of a server
// redirect (bad for crawlers and caching), offer the browser's language once. Client-only by design.
// The copy is written in the suggested language itself, so it lives here rather than in en/common.json.
const COPY = {
  ru: { text: 'Этот сайт доступен на русском языке.', action: 'Перейти на русский' },
  kk: { text: 'Бұл сайт қазақ тілінде де қолжетімді.', action: 'Қазақшаға ауысу' },
} as const
const STORAGE_KEY = 'adilet-locale-suggest-dismissed'

const { locale, t } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const suggested = ref<keyof typeof COPY | null>(null)

onMounted(() => {
  if (locale.value !== 'en') return
  try {
    if (localStorage.getItem(STORAGE_KEY)) return
  }
  catch { /* storage blocked: still show the hint */ }
  const match = navigator.languages
    .map(l => l.toLowerCase().slice(0, 2))
    .find((l): l is keyof typeof COPY => l in COPY)
  suggested.value = match ?? null
})

function dismiss() {
  suggested.value = null
  try { localStorage.setItem(STORAGE_KEY, '1') }
  catch { /* ignore */ }
}
</script>

<template>
  <div
    v-if="suggested && locale === 'en'"
    class="border-b border-accent-200 bg-accent-50 text-sm text-accent-900"
    :lang="suggested"
  >
    <div class="mx-auto flex max-w-page items-center justify-between gap-4 px-4 py-2 sm:px-6">
      <p>{{ COPY[suggested].text }}</p>
      <div class="flex shrink-0 items-center gap-1">
        <NuxtLink :to="switchLocalePath(suggested)" class="rounded-control px-2.5 py-1 font-medium underline-offset-4 hover:underline" @click="dismiss">
          {{ COPY[suggested].action }}
        </NuxtLink>
        <button type="button" class="grid size-7 place-items-center rounded-control hover:bg-accent-100" :aria-label="t('common.localeSuggest.dismiss')" @click="dismiss">
          <Icon name="hugeicons:cancel-01" class="size-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  </div>
</template>
