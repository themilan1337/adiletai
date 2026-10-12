<script setup lang="ts">
// Underlined text link with a trailing arrow. Inline (not flex), and the arrow is glued to the last word, so a label
// that wraps (Kazakh in narrow columns) keeps the arrow at the end of the text instead of floating to the far edge.
const props = defineProps<{ to: string, label: string }>()
const localePath = useLocalePath()
const cut = computed(() => props.label.lastIndexOf(' ') + 1)
</script>

<template>
  <NuxtLink
    :to="localePath(to)"
    class="group rounded-sm font-medium text-accent-700 underline decoration-accent-600/30 underline-offset-4 transition-colors hover:decoration-accent-600"
  >
    {{ label.slice(0, cut) }}<span class="whitespace-nowrap">{{ label.slice(cut) }}<Icon name="hugeicons:arrow-right-02" class="ml-1.5 inline-block size-4! align-[-0.2em] transition-transform group-hover:translate-x-0.5" aria-hidden="true" /></span>
  </NuxtLink>
</template>
