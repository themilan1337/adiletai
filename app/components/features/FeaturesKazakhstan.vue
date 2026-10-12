<script setup lang="ts">
// Built for Kazakhstan: three hairline rows (law, official sources with their domains, documents in three languages)
// beside a "Languages at a glance" card that states plainly what runs in which language.
const { t, tm, rt } = useI18n()

const OFFICIAL = ['adilet.zan.kz', 'gov.kz', 'akorda.kz', 'parlam.kz']
const AIFC = ['aifc.kz', 'iac.kz']
const ROWS = [
  { key: 'law', icon: 'hugeicons:justice-scale-01' },
  { key: 'sources', icon: 'hugeicons:global' },
  { key: 'documents', icon: 'hugeicons:language-circle' },
]
const languages = computed(() => (tm('features.kazakhstan.languages.rows') as { label: string, value: string }[])
  .map(r => ({ label: rt(r.label), value: rt(r.value) })))
</script>

<template>
  <section id="kazakhstan" aria-labelledby="features-kz-title" class="scroll-mt-32 border-t border-line bg-surface py-20 md:py-28">
    <div class="mx-auto max-w-page px-4 sm:px-6">
      <SectionHeading id="features-kz-title" :title="t('features.kazakhstan.title')" :continuation="t('features.kazakhstan.continuation')" />

      <div class="mt-14 grid gap-12 md:mt-16 lg:grid-cols-12">
        <div class="divide-y divide-line border-y border-line lg:col-span-7">
          <article v-for="row in ROWS" :key="row.key" class="grid gap-4 py-7 sm:grid-cols-[2.5rem_minmax(0,1fr)]">
            <span class="flex size-10 items-center justify-center rounded-card bg-accent-50 text-accent-600 ring-1 ring-accent-100">
              <Icon :name="row.icon" class="size-5!" aria-hidden="true" />
            </span>
            <div class="min-w-0">
              <h3 class="text-lg font-semibold text-ink">
                {{ t(`features.kazakhstan.${row.key}.title`) }}
              </h3>
              <p class="mt-2 max-w-[60ch] text-base leading-relaxed text-ink-muted">
                {{ t(`features.kazakhstan.${row.key}.body`) }}
              </p>
              <dl v-if="row.key === 'sources'" class="mt-5 space-y-3">
                <div v-for="g in [{ label: t('features.kazakhstan.sources.official'), domains: OFFICIAL }, { label: t('features.kazakhstan.sources.aifc'), domains: AIFC, accent: true }]" :key="g.label" class="grid gap-2 sm:grid-cols-[9rem_minmax(0,1fr)] sm:items-center">
                  <dt class="text-xs font-medium text-ink-subtle">
                    {{ g.label }}
                  </dt>
                  <dd class="flex flex-wrap gap-2">
                    <span
                      v-for="d in g.domains"
                      :key="d"
                      class="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-xs"
                      :class="g.accent ? 'border-accent-200 bg-accent-50 text-accent-700' : 'border-line bg-canvas text-ink-muted'"
                    >
                      <Icon name="hugeicons:global" class="size-3.5!" aria-hidden="true" />{{ d }}
                    </span>
                  </dd>
                </div>
              </dl>
            </div>
          </article>
        </div>

        <div class="self-start rounded-tile bg-canvas p-6 ring-1 ring-line md:p-8 lg:col-span-5">
          <h3 class="flex items-center gap-2.5 text-lg font-semibold text-ink">
            <Icon name="hugeicons:language-circle" class="size-5! text-accent-600" aria-hidden="true" />
            {{ t('features.kazakhstan.languages.title') }}
          </h3>
          <FeaturesSpecs :items="languages" class="mt-5" />
        </div>
      </div>
    </div>
  </section>
</template>
