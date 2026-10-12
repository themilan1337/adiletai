<script setup lang="ts">
// Header for a blog article or legal page: serif H1, description, byline, published / updated dates formatted for the
// current locale (Kazakh gets "2026 жылғы 12 қазан") and reading time. Dates are ISO strings (YYYY-MM-DD), never new Date().
const props = defineProps<{
  title: string
  description?: string
  author?: string
  published?: string
  updated?: string
  readingTime?: number
}>()

const { t, locale } = useI18n()
// Kazakh is formatted by hand: browser ICU data for kk varies (some builds print "2026 M10 12"), which breaks hydration.
const KK_MONTHS = ['қаңтар', 'ақпан', 'наурыз', 'сәуір', 'мамыр', 'маусым', 'шілде', 'тамыз', 'қыркүйек', 'қазан', 'қараша', 'желтоқсан']
const formatDate = (iso: string) => {
  const [y, m, d] = iso.split('-').map(Number) as [number, number, number]
  if (locale.value === 'kk') return `${y} жылғы ${d} ${KK_MONTHS[m - 1]}`
  return new Intl.DateTimeFormat(locale.value === 'en' ? 'en-GB' : locale.value, { dateStyle: 'long', timeZone: 'UTC' }).format(Date.UTC(y, m - 1, d))
}
const showUpdated = computed(() => props.updated && props.updated !== props.published)
</script>

<template>
  <header>
    <h1 class="max-w-[28ch] font-display text-display-2 text-ink">
      {{ title }}
    </h1>
    <p v-if="description" class="mt-5 max-w-copy text-lead text-ink-muted">
      {{ description }}
    </p>
    <p class="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-ink-subtle">
      <span v-if="author" class="font-medium text-ink-muted">{{ author }}</span>
      <span v-if="published">{{ t('home.article.published') }}: <time :datetime="published">{{ formatDate(published) }}</time></span>
      <span v-if="showUpdated">{{ t('home.article.updated') }}: <time :datetime="updated">{{ formatDate(updated!) }}</time></span>
      <span v-if="readingTime">{{ t('home.article.readingTime', { n: readingTime }) }}</span>
    </p>
  </header>
</template>
