<script setup lang="ts">
// Court practice analysis flow: a vertical timeline in the product's progress language (circles on a 1px rail), each
// step ending with the Russian UI element it corresponds to, next to the memo export dialog (the only citation check).
const { t, tm, rt } = useI18n()

const STEP_UI = [
  { icon: 'hugeicons:note-edit', ui: 'Новый анализ судебной практики', uiIcon: 'hugeicons:analytics-01' },
  { icon: 'hugeicons:global-search', ui: 'Поиск практики', uiIcon: 'hugeicons:search-01' },
  { icon: 'hugeicons:table-02', ui: 'Дела (12)', uiIcon: 'hugeicons:court-house' },
  { icon: 'hugeicons:alert-02', ui: 'Реестр рисков', uiIcon: 'hugeicons:alert-02' },
  { icon: 'hugeicons:document-validation', ui: 'Экспорт меморандума', uiIcon: 'hugeicons:download-04' },
]
type Step = { title: string, body: string }
// ponytail: Object.values accepts both an array and the index-keyed object tm() can return after a locale hot reload.
const steps = computed(() => Object.values(tm('howItWorks.court.steps') as Record<string, Step>).map((s, i) => ({ title: rt(s.title), body: rt(s.body), ...STEP_UI[i]! })))
</script>

<template>
  <section aria-labelledby="hiw-court-title" class="border-y border-line bg-surface py-20 md:py-28">
    <div class="mx-auto max-w-page px-4 sm:px-6">
      <SectionHeading id="hiw-court-title" :title="t('howItWorks.court.title')" :continuation="t('howItWorks.court.continuation')" :lead="t('howItWorks.court.lead')" />

      <div class="mt-14 grid gap-12 md:mt-16 lg:grid-cols-12 lg:gap-16">
        <ol class="min-w-0 max-w-copy lg:col-span-7 lg:max-w-none">
          <li v-for="(step, i) in steps" :key="step.title" class="flex gap-5">
            <div class="flex flex-col items-center" aria-hidden="true">
              <span class="flex size-11 shrink-0 items-center justify-center rounded-full border border-line-strong bg-surface">
                <Icon :name="step.icon" class="size-5! text-accent-600" />
              </span>
              <span v-if="i < steps.length - 1" class="w-px flex-1 bg-line-strong" />
            </div>
            <div class="min-w-0 flex-1 pb-10">
              <h3 class="pt-2.5 text-lg leading-snug font-semibold text-ink hyphens-manual">
                {{ step.title }}
              </h3>
              <p class="mt-2 text-base leading-relaxed text-pretty text-ink-muted">
                {{ step.body }}
              </p>
              <span lang="ru" aria-hidden="true" class="mt-4 inline-flex max-w-full items-center gap-1.5 rounded-full border border-stone-200 bg-stone-50 px-2.5 py-1 text-[11px] font-medium text-stone-600">
                <Icon :name="step.uiIcon" class="size-3! shrink-0 text-stone-500" />
                <span class="truncate">{{ step.ui }}</span>
              </span>
            </div>
          </li>
        </ol>

        <div class="min-w-0 lg:col-span-5">
          <MockFrame class="reveal lg:sticky lg:top-24" :caption="t('howItWorks.court.caption')" tile-class="p-3 sm:p-6">
            <MockMemoExport />
          </MockFrame>
        </div>
      </div>
    </div>
  </section>
</template>
