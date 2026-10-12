<script setup lang="ts">
// Hairline-divided list of short capability lines, each with a teal check. columns: 1 (default) or 3 from sm.
withDefaults(defineProps<{ items: string[], columns?: 1 | 3 }>(), { columns: 1 })
</script>

<template>
  <ul v-if="columns === 1" class="divide-y divide-line border-y border-line">
    <li v-for="item in items" :key="item" class="flex gap-3 py-3.5 text-sm leading-relaxed text-ink-muted">
      <Icon name="hugeicons:checkmark-circle-02" class="mt-0.5 size-4! shrink-0 text-accent-600" aria-hidden="true" />
      <span>{{ item }}</span>
    </li>
  </ul>
  <ul v-else class="grid gap-x-8 border-t border-line sm:grid-cols-3">
    <li v-for="item in items" :key="item" class="flex gap-2.5 border-b border-line py-3.5 text-sm leading-relaxed text-ink-muted sm:border-b-0">
      <Icon name="hugeicons:checkmark-circle-02" class="mt-0.5 size-4! shrink-0 text-accent-600" aria-hidden="true" />
      <span>{{ item }}</span>
    </li>
  </ul>
</template>
