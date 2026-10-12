<script setup lang="ts">
// How an answer is grounded, drawn in the product's own progress-timeline language (circles on a 1px rail),
// horizontal from lg, vertical below. Each step ends with the product element it corresponds to (Russian chrome).
const { t, tm, rt } = useI18n()
type Step = { title: string, body: string }

const STEP_UI = [
  { icon: 'hugeicons:justice-scale-01', ui: 'Поиск в законодательстве РК', uiIcon: 'hugeicons:justice-scale-01' },
  { icon: 'hugeicons:global-search', ui: 'adilet.zan.kz', uiIcon: 'hugeicons:global' },
  { icon: 'hugeicons:files-02', ui: 'Поиск по вашим документам', uiIcon: 'hugeicons:file-search' },
  { icon: 'hugeicons:bookmark-02', ui: 'Источники · 3', uiIcon: 'hugeicons:bookmark-02' },
  { icon: 'hugeicons:user-check-01', ui: 'Примечание для проверяющего юриста', uiIcon: 'hugeicons:alert-02', note: true },
]
const steps = computed(() => (tm('home.grounding.steps') as Step[]).map((s, i) => ({ title: rt(s.title), body: rt(s.body), ...STEP_UI[i]! })))
</script>

<template>
  <section id="how-it-works" aria-labelledby="home-grounding-title" class="scroll-mt-16 border-y border-line bg-surface py-20 md:py-28">
    <div class="mx-auto max-w-page px-4 sm:px-6">
      <SectionHeading id="home-grounding-title" :title="t('home.grounding.title')" :continuation="t('home.grounding.continuation')" />

      <ol class="mt-14 grid md:mt-16 lg:grid-cols-5 lg:gap-8">
        <li v-for="(step, i) in steps" :key="step.title" class="relative flex gap-5 lg:flex-col lg:gap-0">
          <div class="flex flex-col items-center lg:flex-row">
            <span class="relative z-10 flex size-11 shrink-0 items-center justify-center rounded-full border border-line-strong bg-surface">
              <Icon :name="step.icon" class="size-5! text-accent-600" aria-hidden="true" />
            </span>
            <span v-if="i < steps.length - 1" class="w-px flex-1 bg-line-strong lg:h-px lg:w-auto lg:flex-1 lg:-mr-8" aria-hidden="true" />
          </div>
          <div class="flex min-w-0 flex-1 flex-col pb-10 lg:pt-6 lg:pb-0">
            <h3 class="pt-2.5 text-base font-semibold text-ink hyphens-manual lg:pt-0">
              {{ step.title }}
            </h3>
            <p class="mt-2 text-sm leading-relaxed text-ink-muted">
              {{ step.body }}
            </p>
            <div lang="ru" aria-hidden="true" class="mt-4 flex hyphens-manual lg:mt-auto lg:pt-5">
              <span v-if="step.note" class="flex items-start gap-1.5 rounded-r-md border-l-2 border-amber-300 bg-amber-50/70 px-2.5 py-1.5 text-[11px] leading-snug font-medium text-stone-700">
                <Icon :name="step.uiIcon" class="mt-px size-3! shrink-0 text-amber-600" />
                {{ step.ui }}
              </span>
              <span v-else class="inline-flex max-w-full items-start gap-1.5 rounded-xl border border-stone-200 bg-stone-50 px-2.5 py-1 text-[11px] leading-snug font-medium text-stone-600">
                <Icon :name="step.uiIcon" class="mt-px size-3! shrink-0 text-stone-500" />
                <!-- ponytail: wraps instead of truncating; at lg the five columns are narrower than the longest product label -->
                <span class="min-w-0">{{ step.ui }}</span>
              </span>
            </div>
          </div>
        </li>
      </ol>

      <p class="mt-2 flex max-w-[65ch] items-start gap-2.5 rounded-card bg-surface-muted px-4 py-3 text-sm text-ink-muted lg:mt-14">
        <Icon name="hugeicons:information-circle" class="mt-0.5 size-4! shrink-0 text-accent-600" aria-hidden="true" />
        {{ t('home.grounding.fallback') }}
      </p>
    </div>
  </section>
</template>
