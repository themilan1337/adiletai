<script setup lang="ts">
// Spec sheet: hairline-divided label / value rows (a real <dl>), used for module facts and the languages summary.
// Label and value sit side by side only when the list's own container is wide enough (container query), else stack.
defineProps<{ items: { label: string, value: string }[] }>()
</script>

<template>
  <div class="@container">
    <dl class="divide-y divide-line border-y border-line">
      <div v-for="item in items" :key="item.label" class="grid gap-1 py-3.5 @lg:grid-cols-[minmax(0,11rem)_minmax(0,1fr)] @lg:gap-6">
        <dt class="text-sm font-medium text-ink">
          {{ item.label }}
        </dt>
        <dd class="text-sm leading-relaxed text-ink-muted">
          {{ item.value }}
        </dd>
      </div>
    </dl>
  </div>
</template>
