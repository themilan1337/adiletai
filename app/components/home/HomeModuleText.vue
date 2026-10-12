<script setup lang="ts">
// Copy column for one product module: kicker (product icon + module name), serif H3, one paragraph, feature list.
defineProps<{
  id: string
  icon: string
  name: string
  title: string
  body: string
  points: string[]
}>()
</script>

<template>
  <div class="min-w-0">
    <p class="flex items-center gap-2 text-sm font-medium text-accent-700">
      <Icon :name="icon" class="size-[18px]!" aria-hidden="true" />
      {{ name }}
    </p>
    <h3 :id="id" class="mt-4 font-display text-display-3 text-ink">
      {{ title }}
    </h3>
    <p class="mt-4 max-w-[60ch] text-base leading-relaxed text-ink-muted">
      {{ body }}
    </p>
    <FeatureList :items="points" class="mt-7" />
  </div>
</template>
