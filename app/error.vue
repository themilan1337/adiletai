<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()
const { t } = useI18n()
const is404 = computed(() => props.error?.statusCode === 404)
const copy = computed(() => is404.value ? 'errors.notFound' : 'errors.generic')

// error.vue renders outside app.vue, so it sets html lang/dir itself. No hreflang/canonical on error pages.
const head = useLocaleHead({ dir: true, lang: true, seo: false })
useHead(() => ({ htmlAttrs: { lang: head.value.htmlAttrs.lang, dir: head.value.htmlAttrs.dir } }))
useSeoMeta({
  title: () => t(`${copy.value}.title`),
  robots: 'noindex, follow',
})
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <SiteHeader />
    <main id="main" class="flex flex-1 items-center">
      <div class="mx-auto max-w-copy px-4 py-24 text-center sm:px-6">
        <p class="font-mono text-sm text-ink-subtle">
          {{ error?.statusCode ?? 500 }}
        </p>
        <h1 class="mt-3 font-display text-display-2 text-ink">
          {{ t(`${copy}.title`) }}
        </h1>
        <p class="mt-4 text-lead text-ink-muted">
          {{ t(`${copy}.text`) }}
        </p>
        <div class="mt-8 flex flex-wrap justify-center gap-3">
          <AppButton to="/" @click="clearError()">
            {{ t('errors.home') }}
          </AppButton>
          <AppButton to="/contact" variant="secondary" @click="clearError()">
            {{ t('errors.contact') }}
          </AppButton>
        </div>
      </div>
    </main>
    <SiteFooter />
  </div>
</template>
