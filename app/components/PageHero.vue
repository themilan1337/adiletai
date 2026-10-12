<script setup lang="ts">
// Inner-page hero: optional breadcrumbs, optional eyebrow, the page's single H1, an optional lead and an optional
// #actions slot for CTAs (use AppButton). Left-aligned on the canvas; the next section supplies its own spacing.
withDefaults(defineProps<{
  title: string
  lead?: string
  eyebrow?: string
  breadcrumbs?: { label: string, to?: string }[]
}>(), { lead: '', eyebrow: '', breadcrumbs: undefined })
</script>

<template>
  <section aria-labelledby="page-hero-title" class="pt-10 pb-14 md:pt-16 md:pb-20">
    <div class="mx-auto max-w-page px-4 sm:px-6">
      <Breadcrumbs v-if="breadcrumbs?.length" :items="breadcrumbs" class="mb-10 md:mb-14" />
      <p v-if="eyebrow" class="mb-4 text-sm font-medium tracking-[0.06em] text-ink-subtle uppercase">
        {{ eyebrow }}
      </p>
      <h1 id="page-hero-title" class="max-w-[20ch] font-display text-display-1 text-ink [:lang(kk)_&]:max-w-[24ch] [:lang(ru)_&]:max-w-[24ch]">
        {{ title }}
      </h1>
      <p v-if="lead" class="mt-6 max-w-[60ch] text-lead text-ink-muted">
        {{ lead }}
      </p>
      <div v-if="$slots.actions" class="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
        <slot name="actions" />
      </div>
    </div>
  </section>
</template>
