<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()
const { t } = useI18n()
const localePath = useLocalePath()
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
          <NuxtLink
            :to="localePath('/')"
            class="inline-flex h-10 items-center rounded-control bg-stone-900 px-4 text-sm font-medium text-white hover:bg-stone-800"
            @click="clearError()"
          >
            {{ t('errors.home') }}
          </NuxtLink>
          <NuxtLink
            :to="localePath('/contact')"
            class="inline-flex h-10 items-center rounded-control px-4 text-sm font-medium text-ink ring-1 ring-inset ring-line-strong hover:bg-stone-100"
            @click="clearError()"
          >
            {{ t('errors.contact') }}
          </NuxtLink>
        </div>
      </div>
    </main>
    <SiteFooter />
  </div>
</template>
