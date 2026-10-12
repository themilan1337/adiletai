<script setup lang="ts">
// Section H2 with an optional eyebrow, a two-tone continuation (muted second sentence) and a lead; left or centred.
// Pass `id` and point the section's aria-labelledby at it. `dark` switches colours for the night block.
withDefaults(defineProps<{
  id: string
  title: string
  continuation?: string
  eyebrow?: string
  lead?: string
  align?: 'left' | 'center'
  dark?: boolean
}>(), { continuation: '', eyebrow: '', lead: '', align: 'left', dark: false })
</script>

<template>
  <div class="max-w-4xl" :class="align === 'center' ? 'mx-auto text-center' : ''">
    <p v-if="eyebrow" class="mb-4 text-sm font-medium tracking-[0.06em] uppercase" :class="dark ? 'text-stone-400' : 'text-ink-subtle'">
      {{ eyebrow }}
    </p>
    <h2 :id="id" class="font-display text-display-2" :class="dark ? 'text-stone-50' : 'text-ink'">
      {{ title }}
      <span v-if="continuation" :class="dark ? 'text-stone-400' : 'text-ink-subtle'">{{ continuation }}</span>
    </h2>
    <p v-if="lead" class="mt-5 max-w-[60ch] text-lead" :class="[dark ? 'text-stone-300' : 'text-ink-muted', align === 'center' ? 'mx-auto' : '']">
      {{ lead }}
    </p>
  </div>
</template>
