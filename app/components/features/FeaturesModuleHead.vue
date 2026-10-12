<script setup lang="ts">
// Heading block for one module of the platform page: product icon + module name, where the module lives in the app
// (the Russian UI labels, lang="ru", exactly as the product shows them), the section H2 and an optional lead.
defineProps<{
  id: string
  icon: string
  name: string
  title: string
  app: string[]
  lead?: string
}>()
const { t } = useI18n()
</script>

<template>
  <div class="min-w-0">
    <div class="flex flex-wrap items-center gap-x-4 gap-y-2">
      <p class="flex items-center gap-2 text-sm font-medium text-accent-700">
        <Icon :name="icon" class="size-[18px]!" aria-hidden="true" />
        {{ name }}
      </p>
      <p class="flex flex-wrap items-center gap-1.5 text-xs text-ink-subtle">
        {{ t('features.inApp') }}
        <template v-for="(label, i) in app" :key="label">
          <Icon v-if="i" name="hugeicons:arrow-right-01" class="size-3! text-stone-400" aria-hidden="true" />
          <span lang="ru" class="rounded border border-line bg-surface px-1.5 py-0.5 font-medium text-ink-muted">{{ label }}</span>
        </template>
      </p>
    </div>
    <h2 :id="id" class="mt-5 max-w-[22ch] font-display text-display-2 text-ink">
      {{ title }}
    </h2>
    <p v-if="lead" class="mt-5 max-w-[60ch] text-lead text-ink-muted">
      {{ lead }}
    </p>
  </div>
</template>
