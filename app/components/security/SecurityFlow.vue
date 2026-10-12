<script setup lang="ts">
// Diagram (not product UI): an ordered flow drawn in the product's progress-timeline language (icon circles on a
// 1px rail). Used for "how sign-in works" (light) and "how a request travels" (dark block). Fully readable text,
// so it is a real figure, not aria-hidden.
defineProps<{
  title: string
  steps: { title: string, body: string, icon: string }[]
  dark?: boolean
}>()
</script>

<template>
  <figure
    class="rounded-tile p-6 md:p-8"
    :class="dark ? 'bg-night-raised ring-1 ring-white/10' : 'bg-canvas ring-1 ring-line'"
  >
    <figcaption class="text-base font-medium" :class="dark ? 'text-stone-50' : 'text-ink'">
      {{ title }}
    </figcaption>
    <ol class="mt-7">
      <li v-for="(step, i) in steps" :key="step.title" class="flex gap-4">
        <div class="flex flex-col items-center" aria-hidden="true">
          <span
            class="flex size-10 shrink-0 items-center justify-center rounded-full"
            :class="dark ? 'bg-white/5 ring-1 ring-white/15' : 'bg-surface ring-1 ring-line-strong'"
          >
            <Icon :name="step.icon" class="size-5!" :class="dark ? 'text-accent-300' : 'text-accent-600'" />
          </span>
          <span v-if="i < steps.length - 1" class="w-px flex-1" :class="dark ? 'bg-white/15' : 'bg-line-strong'" />
        </div>
        <div class="min-w-0 flex-1 pt-2" :class="i < steps.length - 1 ? 'pb-7' : ''">
          <p class="text-[15px] font-semibold hyphens-manual" :class="dark ? 'text-stone-50' : 'text-ink'">
            {{ step.title }}
          </p>
          <p class="mt-1.5 text-sm leading-relaxed" :class="dark ? 'text-stone-400' : 'text-ink-muted'">
            {{ step.body }}
          </p>
        </div>
      </li>
    </ol>
  </figure>
</template>
