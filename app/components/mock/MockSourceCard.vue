<script setup lang="ts">
// One card of the Sources drawer (adilet-b2b AssistantSourcesDrawer). kind: doc = Документы, kb = База знаний,
// web = Веб. `highlighted` is the amber ring the product draws around the source of the clicked citation.
withDefaults(defineProps<{
  index: number
  kind: 'doc' | 'kb' | 'web'
  label: string
  subtitle?: string
  quote?: string
  highlighted?: boolean
}>(), { subtitle: '', quote: '', highlighted: false })

const ICONS = { doc: 'hugeicons:file-02', kb: 'hugeicons:books-02', web: 'hugeicons:global' }
</script>

<template>
  <div
    lang="ru"
    class="rounded-lg border bg-white px-3.5 py-3 [&_p]:hyphens-manual"
    :class="highlighted ? 'border-transparent ring-2 ring-amber-300' : 'border-stone-200'"
  >
    <div class="flex items-start gap-2.5">
      <span class="inline-flex h-5 min-w-5 shrink-0 items-center justify-center rounded-md bg-stone-100 px-1 text-[11px] font-semibold text-stone-700 tabular-nums">{{ index }}</span>
      <span
        class="flex size-6 shrink-0 items-center justify-center rounded-md border"
        :class="kind === 'doc' ? 'border-red-100 bg-red-50 text-red-600' : 'border-stone-200 bg-stone-50 text-stone-500'"
      >
        <Icon :name="ICONS[kind]" class="size-3.5!" />
      </span>
      <div class="min-w-0 flex-1">
        <p class="line-clamp-2 text-[13px] leading-snug font-medium text-stone-900">
          {{ label }}
        </p>
        <p v-if="subtitle" class="mt-0.5 text-[11px] text-stone-500">
          {{ subtitle }}
        </p>
      </div>
    </div>
    <p v-if="quote" class="mt-2 line-clamp-4 text-xs leading-5 text-stone-600">
      {{ quote }}
    </p>
  </div>
</template>
