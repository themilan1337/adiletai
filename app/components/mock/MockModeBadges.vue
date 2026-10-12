<script setup lang="ts">
// The Assistant's mode badges as the product labels them; the active one is the mode it chose for the request.
withDefaults(defineProps<{ active?: 'assistant' | 'tax' | 'analysis' | 'drafting' | 'translation' }>(), { active: 'tax' })

const MODES = [
  { id: 'assistant', label: 'Режим: Ассистент', icon: 'hugeicons:sparkles' },
  { id: 'tax', label: 'Режим: Налоги', icon: 'hugeicons:taxes' },
  { id: 'analysis', label: 'Режим: Анализ', icon: 'hugeicons:file-search' },
  { id: 'drafting', label: 'Режим: Конструктор', icon: 'hugeicons:quill-write-02' },
  { id: 'translation', label: 'Режим: Перевод', icon: 'hugeicons:language-circle' },
] as const
</script>

<template>
  <div lang="ru" class="flex flex-wrap gap-2">
    <span
      v-for="mode in MODES"
      :key="mode.id"
      class="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium"
      :class="mode.id === active ? 'border-stone-300 bg-white text-stone-900 shadow-card' : 'border-stone-200 bg-stone-50 text-stone-500'"
    >
      <Icon :name="mode.icon" class="size-3.5!" :class="mode.id === active ? 'text-accent-600' : 'text-stone-400'" />
      {{ mode.label }}
    </span>
  </div>
</template>
