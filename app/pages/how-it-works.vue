<script setup lang="ts">
// How it works: how an answer is produced (data-flow diagram, then each step with a product fragment), the court
// practice flow, the limits, getting started, FAQ and related pages. Copy: i18n/locales/<locale>/howItWorks.json.
// JSON-LD: BreadcrumbList (from PageHero) and a FAQPage that mirrors the visible FAQ.
const { t, tm, rt } = useI18n()
const localePath = useLocalePath()

// ponytail: Object.values accepts both an array and the index-keyed object tm() can return after a locale hot reload.
const list = <T,>(key: string) => Object.values(tm(key) as Record<string, T>)

type Item = { title: string, body: string }
const limits = computed(() => list<Item>('howItWorks.limits.items').map(i => ({ title: rt(i.title), body: rt(i.body) })))
const start = computed(() => list<Item>('howItWorks.start.steps').map(i => ({ title: rt(i.title), body: rt(i.body) })))
const faq = computed(() => list<{ q: string, a: string }>('howItWorks.faq.items').map(i => ({ q: rt(i.q), a: rt(i.a) })))

const LIMIT_ICONS = ['hugeicons:legal-01', 'hugeicons:alert-02', 'hugeicons:analytics-01', 'hugeicons:books-02', 'hugeicons:view-off-slash', 'hugeicons:language-circle']
const RELATED = [
  { key: 'platform', to: '/features', icon: 'hugeicons:asterisk' },
  { key: 'security', to: '/security', icon: 'hugeicons:square-lock-02' },
  { key: 'useCases', to: '/use-cases', icon: 'hugeicons:user-group' },
] as const

useSeoMeta({
  title: () => t('howItWorks.meta.title'),
  description: () => t('howItWorks.meta.description'),
  ogTitle: () => t('howItWorks.meta.title'),
  ogDescription: () => t('howItWorks.meta.description'),
  twitterTitle: () => t('howItWorks.meta.title'),
  twitterDescription: () => t('howItWorks.meta.description'),
})

useSchemaOrg([{
  '@type': 'FAQPage',
  'mainEntity': () => faq.value.map(i => ({
    '@type': 'Question',
    'name': i.q,
    'acceptedAnswer': { '@type': 'Answer', 'text': i.a },
  })),
}])
</script>

<template>
  <div>
    <PageHero
      :title="t('howItWorks.hero.title')"
      :lead="t('howItWorks.hero.lead')"
      :breadcrumbs="[{ label: t('common.nav.howItWorks') }]"
    >
      <template #actions>
        <AppButton :href="CALENDLY_URL" size="lg" icon="hugeicons:arrow-right-02">
          {{ t('common.cta.demo') }}
        </AppButton>
        <AppButton to="/features" variant="secondary" size="lg">
          {{ t('howItWorks.hero.secondary') }}
        </AppButton>
      </template>
    </PageHero>

    <!-- Overview: the data-flow diagram -->
    <section aria-labelledby="hiw-overview-title" class="pb-20 md:pb-28">
      <div class="mx-auto max-w-page px-4 sm:px-6">
        <SectionHeading id="hiw-overview-title" :title="t('howItWorks.overview.title')" :continuation="t('howItWorks.overview.continuation')" :lead="t('howItWorks.overview.lead')" />
        <HowItWorksFlow class="reveal mt-14 md:mt-16" />
      </div>
    </section>

    <HowItWorksSteps class="border-t border-line" />

    <HowItWorksCourt />

    <!-- Limits -->
    <section aria-labelledby="hiw-limits-title" class="py-20 md:py-28">
      <div class="mx-auto max-w-page px-4 sm:px-6">
        <SectionHeading id="hiw-limits-title" :title="t('howItWorks.limits.title')" :lead="t('howItWorks.limits.lead')" />
        <ul class="mt-14 grid gap-4 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
          <li v-for="(item, i) in limits" :key="item.title" class="flex min-w-0 gap-4 rounded-tile bg-surface p-5 ring-1 ring-line md:flex-col md:gap-5 md:p-7">
            <span class="flex size-10 shrink-0 items-center justify-center rounded-card bg-surface-muted ring-1 ring-line" aria-hidden="true">
              <Icon :name="LIMIT_ICONS[i]!" class="size-5! text-ink-muted" />
            </span>
            <div class="min-w-0">
              <h3 class="pt-2 text-lg leading-snug font-semibold text-ink hyphens-manual md:pt-0">
                {{ item.title }}
              </h3>
              <p class="mt-2 text-sm leading-relaxed text-pretty text-ink-muted">
                {{ item.body }}
              </p>
            </div>
          </li>
        </ul>
        <p class="mt-8 text-sm">
          <NuxtLink :to="localePath('/legal/disclaimer')" class="inline-flex items-center gap-1.5 font-medium text-accent-600 underline decoration-accent-600/30 underline-offset-4 transition-colors hover:decoration-accent-600">
            {{ t('howItWorks.limits.disclaimer') }}
            <Icon name="hugeicons:arrow-right-02" class="size-4!" aria-hidden="true" />
          </NuxtLink>
        </p>
      </div>
    </section>

    <!-- Getting started -->
    <section aria-labelledby="hiw-start-title" class="border-t border-line py-20 md:py-28">
      <div class="mx-auto max-w-page px-4 sm:px-6">
        <SectionHeading id="hiw-start-title" :title="t('howItWorks.start.title')" :continuation="t('howItWorks.start.continuation')" />
        <ol class="mt-14 grid max-w-copy gap-x-8 md:mt-16 lg:max-w-none lg:grid-cols-3">
          <li v-for="(step, i) in start" :key="step.title" class="min-w-0 border-t border-line-strong pt-6 pb-10 lg:pb-0">
            <span class="font-display text-[2.5rem] leading-none text-accent-600 tabular-nums" aria-hidden="true">{{ i + 1 }}</span>
            <h3 class="mt-5 text-lg leading-snug font-semibold text-ink hyphens-manual">
              {{ step.title }}
            </h3>
            <p class="mt-2 text-base leading-relaxed text-pretty text-ink-muted">
              {{ step.body }}
            </p>
          </li>
        </ol>
        <div class="mt-4 flex flex-col gap-3 sm:flex-row lg:mt-12">
          <AppButton :href="CALENDLY_URL" size="lg" icon="hugeicons:arrow-right-02">
            {{ t('common.cta.demo') }}
          </AppButton>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section aria-labelledby="hiw-faq-title" class="border-t border-line py-20 md:py-28">
      <div class="mx-auto grid max-w-page gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12">
        <div class="lg:col-span-4">
          <h2 id="hiw-faq-title" class="font-display text-display-2 text-balance text-ink lg:sticky lg:top-24">
            {{ t('howItWorks.faq.title') }}
          </h2>
        </div>
        <FaqList :items="faq" open class="lg:col-span-8" />
      </div>
    </section>

    <!-- Related pages -->
    <section aria-labelledby="hiw-related-title" class="pb-20 md:pb-28">
      <div class="mx-auto max-w-page px-4 sm:px-6">
        <h2 id="hiw-related-title" class="text-sm font-medium tracking-[0.06em] text-ink-subtle uppercase">
          {{ t('howItWorks.related.title') }}
        </h2>
        <ul class="mt-6 grid gap-4 md:grid-cols-3">
          <li v-for="r in RELATED" :key="r.key" class="min-w-0">
            <NuxtLink :to="localePath(r.to)" class="group flex h-full flex-col rounded-tile bg-surface p-6 ring-1 ring-line transition-shadow hover:shadow-card hover:ring-line-strong">
              <span class="flex items-center justify-between gap-4">
                <span class="flex items-center gap-2.5 text-lg font-semibold text-ink">
                  <Icon :name="r.icon" class="size-5! text-accent-600" aria-hidden="true" />
                  {{ t(`common.nav.${r.key}`) }}
                </span>
                <Icon name="hugeicons:arrow-right-02" class="size-5! text-ink-subtle transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </span>
              <span class="mt-3 text-sm leading-relaxed text-ink-muted">{{ t(`howItWorks.related.${r.key}`) }}</span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </section>

    <CtaBand :title="t('howItWorks.cta.title')" :text="t('howItWorks.cta.text')" />
  </div>
</template>
