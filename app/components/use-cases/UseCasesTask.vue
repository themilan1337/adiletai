<script setup lang="ts">
// One task case on /use-cases: kicker (module), H3, the situation, the steps (drawn in the product's own timeline
// language), what you get, an optional note and links to the module on /features. The mockup goes in the default slot.
// Layouts: split (copy left, mockup right), split-reverse (mockup left), wide (copy in two columns, mockup full width).
// On phones everything stacks in DOM order: copy, steps, mockup.
const props = withDefaults(defineProps<{
  id: string
  icon: string
  kicker: string
  title: string
  situation: string
  steps: string[]
  stepIcons: string[]
  outputs: string[]
  note?: string
  links: { label: string, to: string }[]
  layout?: 'split' | 'split-reverse' | 'wide'
}>(), { note: '', layout: 'split' })

const { t } = useI18n()

// Static class strings so Tailwind sees them. Rows: [auto, 1fr] keeps the steps right under the intro
// while the mockup spans both rows, centred against the copy.
const LAYOUTS = {
  'split': {
    grid: 'lg:grid-cols-12 lg:grid-rows-[auto_1fr]',
    intro: 'lg:col-span-5 lg:col-start-1 lg:row-start-1 lg:pr-4',
    body: 'lg:col-span-5 lg:col-start-1 lg:row-start-2 lg:pr-4',
    media: 'lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-1 lg:self-center',
  },
  'split-reverse': {
    grid: 'lg:grid-cols-12 lg:grid-rows-[auto_1fr]',
    intro: 'lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:pl-4',
    body: 'lg:col-span-5 lg:col-start-8 lg:row-start-2 lg:pl-4',
    media: 'lg:col-span-7 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:self-center',
  },
  'wide': {
    grid: 'lg:grid-cols-12',
    intro: 'lg:col-span-5',
    body: 'lg:col-span-7 lg:pt-9',
    media: 'lg:col-span-12 lg:mt-2',
  },
}
const L = computed(() => LAYOUTS[props.layout])
const LABEL = 'text-xs font-semibold tracking-[0.06em] text-ink-muted uppercase'
</script>

<template>
  <article :id="id" :aria-labelledby="`${id}-title`" class="scroll-mt-20 border-t border-line pt-12 lg:pt-16">
    <div class="grid gap-x-12 gap-y-10" :class="L.grid">
      <div class="min-w-0 self-start" :class="L.intro">
        <p class="flex items-start gap-2 text-sm font-medium text-accent-700">
          <Icon :name="icon" class="mt-px size-[18px]! shrink-0" aria-hidden="true" />
          {{ kicker }}
        </p>
        <h3 :id="`${id}-title`" class="mt-4 font-display text-display-3 text-ink">
          {{ title }}
        </h3>
        <h4 :class="LABEL" class="mt-8">
          {{ t('useCases.labels.situation') }}
        </h4>
        <p class="mt-2 max-w-[60ch] text-base leading-relaxed text-ink-muted">
          {{ situation }}
        </p>
      </div>

      <div class="min-w-0 self-start" :class="L.body">
        <h4 :class="LABEL">
          {{ t('useCases.labels.steps') }}
        </h4>
        <ol class="mt-4">
          <li v-for="(step, i) in steps" :key="step" class="flex gap-3.5">
            <div class="flex w-7 shrink-0 flex-col items-center" aria-hidden="true">
              <span class="flex size-7 shrink-0 items-center justify-center rounded-full border border-line-strong bg-surface">
                <Icon :name="stepIcons[i] ?? 'hugeicons:arrow-right-02'" class="size-3.5! text-accent-600" />
              </span>
              <span v-if="i < steps.length - 1" class="my-1 w-px flex-1 bg-line" />
            </div>
            <p class="min-w-0 pt-1 text-[15px] leading-relaxed text-ink" :class="i < steps.length - 1 ? 'pb-5' : ''">
              {{ step }}
            </p>
          </li>
        </ol>

        <h4 :class="LABEL" class="mt-9">
          {{ t('useCases.labels.outputs') }}
        </h4>
        <FeatureList :items="outputs" class="mt-3" />

        <p v-if="note" class="mt-4 flex gap-2.5 text-sm leading-relaxed text-ink-muted">
          <Icon name="hugeicons:information-circle" class="mt-0.5 size-4! shrink-0" aria-hidden="true" />
          {{ note }}
        </p>

        <ul class="mt-6 flex flex-wrap gap-x-6 gap-y-2">
          <li v-for="link in links" :key="link.to" class="text-sm">
            <UseCasesLink :to="link.to" :label="link.label" />
          </li>
        </ul>
      </div>

      <div class="min-w-0" :class="L.media">
        <slot />
      </div>
    </div>
  </article>
</template>
