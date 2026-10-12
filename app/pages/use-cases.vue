<script setup lang="ts">
// Use cases: three audiences (each task links to its case below), six task cases with faithful mockups, FAQ with
// related links, closing CTA band. Copy lives in i18n/locales/<locale>/useCases.json; mockup chrome stays Russian.
// JSON-LD: BreadcrumbList (from PageHero) and a FAQPage that mirrors the visible FAQ exactly.
const { t, te, tm, rt, locale } = useI18n()

const list = (key: string) => (tm(key) as string[]).map(s => rt(s))
// Keeps hyphenated compounds in headings on one line (Kazakh "қадамба-қадам" split as "қадамба-" / "қадам" on phones):
// a WORD JOINER after the hyphen. Invisible and ignored by screen readers.
const glue = (s: string) => s.replace(/(\p{L})-(?=\p{L})/gu, '$1-\u2060')

// Section anchors on /features.
const FEATURES = {
  assistant: '/features#assistant',
  contractReview: '/features#contract-review',
  playbook: '/features#playbook',
  vault: '/features#vault',
  review: '/features#review-tables',
  court: '/features#court-practice',
  translation: '/features#drafting-translation',
} as const
const link = (m: keyof typeof FEATURES) => ({ label: t(`useCases.modules.${m}`), to: FEATURES[m] })

// One entry per case, in page order. `key` is the i18n block, `id` the anchor the audience lists link to.
const task = (key: string, id: string, icon: string, stepIcons: string[], modules: (keyof typeof FEATURES)[]) => computed(() => ({
  id,
  icon,
  stepIcons,
  kicker: t(`useCases.${key}.kicker`),
  title: t(`useCases.${key}.title`),
  situation: t(`useCases.${key}.situation`),
  steps: list(`useCases.${key}.steps`),
  outputs: list(`useCases.${key}.outputs`),
  note: te(`useCases.${key}.note`) ? t(`useCases.${key}.note`) : '',
  links: modules.map(link),
}))
const contract = task('contract', 'contract-review', 'hugeicons:asterisk', ['hugeicons:attachment-02', 'hugeicons:file-search', 'hugeicons:checkmark-badge-01', 'hugeicons:quill-write-02'], ['contractReview', 'playbook'])
const diligence = task('diligence', 'due-diligence', 'hugeicons:table-02', ['hugeicons:folder-upload', 'hugeicons:table-02', 'hugeicons:loading-03', 'hugeicons:download-04'], ['vault', 'review'])
const litigation = task('litigation', 'litigation', 'hugeicons:analytics-01', ['hugeicons:bubble-chat', 'hugeicons:folder-01', 'hugeicons:search-01', 'hugeicons:document-validation'], ['court'])
const research = task('research', 'legal-research', 'hugeicons:asterisk', ['hugeicons:message-question', 'hugeicons:help-circle', 'hugeicons:books-02', 'hugeicons:bookmark-02'], ['assistant'])
const translation = task('translation', 'translation', 'hugeicons:language-circle', ['hugeicons:attachment-02', 'hugeicons:language-circle', 'hugeicons:view'], ['translation'])
const tax = task('tax', 'tax-questions', 'hugeicons:taxes', ['hugeicons:message-question', 'hugeicons:taxes', 'hugeicons:books-02', 'hugeicons:bookmark-02'], ['assistant'])

// Audience task lists link to the cases above by index (same array lengths in every locale).
const AUDIENCES = [
  { icon: 'hugeicons:building-06', tile: 'bg-surface ring-line', anchors: ['contract-review', 'due-diligence', 'legal-research', 'translation'] },
  { icon: 'hugeicons:legal-hammer', tile: 'bg-surface-muted ring-line', anchors: ['due-diligence', 'litigation', 'legal-research', 'translation'] },
  { icon: 'hugeicons:audit-02', tile: 'bg-accent-50 ring-accent-100', anchors: ['tax-questions', 'due-diligence', 'legal-research'] },
]
type Audience = { title: string, body: string, tasks: string[] }
const audiences = computed(() => (tm('useCases.audiences.items') as Audience[]).map((a, i) => ({
  ...AUDIENCES[i]!,
  title: rt(a.title),
  body: rt(a.body),
  tasks: a.tasks.map((text, j) => ({ text: rt(text), anchor: AUDIENCES[i]!.anchors[j]! })),
})))

const related = computed(() => [
  { label: t('useCases.related.features'), to: '/features' },
  { label: t('useCases.related.howItWorks'), to: '/how-it-works' },
  { label: t('useCases.related.security'), to: '/security' },
  { label: t('useCases.related.faq'), to: '/faq' },
])

const faq = computed(() => (tm('useCases.faq.items') as { q: string, a: string }[]).map(i => ({ q: rt(i.q), a: rt(i.a) })))

useSeoMeta({
  title: () => t('useCases.meta.title'),
  description: () => t('useCases.meta.description'),
  ogTitle: () => t('useCases.meta.title'),
  ogDescription: () => t('useCases.meta.description'),
  twitterTitle: () => t('useCases.meta.title'),
  twitterDescription: () => t('useCases.meta.description'),
})

useSchemaOrg([
  {
    '@type': 'FAQPage',
    'mainEntity': () => faq.value.map(i => ({
      '@type': 'Question',
      'name': i.q,
      'acceptedAnswer': { '@type': 'Answer', 'text': i.a },
    })),
  },
])
</script>

<template>
  <div>
    <PageHero
      :title="t('useCases.hero.title')"
      :lead="t('useCases.hero.lead')"
      :breadcrumbs="[{ label: t('common.nav.useCases') }]"
    >
      <template #actions>
        <AppButton :href="CALENDLY_URL" size="lg" icon="hugeicons:arrow-right-02">
          {{ t('common.cta.demo') }}
        </AppButton>
        <AppButton to="/features" variant="secondary" size="lg">
          {{ t('useCases.hero.secondary') }}
        </AppButton>
      </template>
    </PageHero>

    <!-- Who it is for: three audiences, each listing tasks that jump to the cases below -->
    <section aria-labelledby="uc-aud-title" class="pb-20 md:pb-28">
      <div class="mx-auto max-w-page px-4 sm:px-6">
        <div class="border-t border-line pt-14 md:pt-20">
          <SectionHeading id="uc-aud-title" :title="glue(t('useCases.audiences.title'))" :continuation="t('useCases.audiences.continuation')" />
        </div>

        <!-- Subgrid rows (icon, intro, label, list) keep the three task lists aligned on desktop -->
        <div class="mt-12 grid gap-4 md:mt-16 lg:grid-cols-3 lg:grid-rows-[auto_1fr_auto_auto] lg:gap-y-0">
          <article
            v-for="aud in audiences"
            :key="aud.title"
            class="flex min-w-0 flex-col rounded-tile p-6 ring-1 md:p-8 lg:row-span-4 lg:grid lg:grid-rows-subgrid"
            :class="aud.tile"
          >
            <span class="flex size-11 items-center justify-center rounded-full border border-line-strong bg-surface">
              <Icon :name="aud.icon" class="size-5! text-accent-600" aria-hidden="true" />
            </span>
            <div class="mt-6">
              <h3 class="font-display text-display-3 text-ink">
                {{ aud.title }}
              </h3>
              <p class="mt-3 max-w-[60ch] text-[15px] leading-relaxed text-ink-muted">
                {{ aud.body }}
              </p>
            </div>
            <p class="mt-8 text-xs font-semibold tracking-[0.06em] text-ink-muted uppercase">
              {{ t('useCases.audiences.tasksLabel') }}
            </p>
            <ul class="mt-3 border-t border-stone-300/60">
              <li v-for="item in aud.tasks" :key="item.text" class="border-b border-stone-300/60">
                <a :href="`#${item.anchor}`" class="group flex items-start justify-between gap-4 py-3.5 text-[15px] leading-snug text-ink transition-colors hover:text-accent-700">
                  <span class="min-w-0">{{ item.text }}</span>
                  <Icon name="hugeicons:arrow-down-02" class="mt-0.5 size-4! shrink-0 text-ink-muted transition-transform group-hover:translate-y-0.5 group-hover:text-accent-700" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <!-- Six task cases -->
    <section aria-labelledby="uc-tasks-title" class="pb-20 md:pb-28">
      <div class="mx-auto max-w-page px-4 sm:px-6">
        <SectionHeading id="uc-tasks-title" :title="glue(t('useCases.tasks.title'))" :continuation="t('useCases.tasks.continuation')" />

        <div class="mt-14 space-y-16 md:mt-16 md:space-y-20">
          <UseCasesTask v-bind="contract">
            <MockFrame
              class="reveal"
              :caption="t('useCases.contract.caption')"
              tile-class="h-[34rem] md:h-[44rem]"
              shell-class="mx-3 mt-5 sm:mx-8 sm:mt-8"
            >
              <MockRiskScan class="md:[zoom:0.92]" />
            </MockFrame>
          </UseCasesTask>

          <UseCasesTask v-bind="diligence" layout="wide">
            <MockFrame
              class="reveal"
              :caption="t('useCases.diligence.caption')"
              tile-class="h-[26rem] sm:h-[28rem] md:h-[31rem]"
              shell-class="mx-3 mt-5 sm:mx-8 sm:mt-8 lg:mt-10 xl:mx-auto xl:max-w-[66rem]"
            >
              <MockReviewTable />
            </MockFrame>
          </UseCasesTask>

          <UseCasesTask v-bind="litigation" layout="split-reverse">
            <div class="grid gap-6">
              <MockFrame class="reveal" :caption="t('useCases.litigation.risksCaption')" tile-class="p-3 sm:p-6">
                <MockCourtRisks />
              </MockFrame>
              <MockFrame class="reveal" :caption="t('useCases.litigation.memoCaption')" tile-class="p-3 sm:p-6">
                <MockMemoExport />
              </MockFrame>
            </div>
          </UseCasesTask>

          <UseCasesTask v-bind="research" layout="wide">
            <MockFrame
              class="reveal"
              :caption="t('useCases.research.caption')"
              tile-class="h-[32rem] md:h-[40rem]"
              shell-class="mx-3 mt-5 sm:mx-8 sm:mt-8 md:mx-10 md:mt-10 xl:mx-auto xl:max-w-[66rem]"
            >
              <MockAssistant
                :lang="locale"
                :sidebar="false"
                :question="t('useCases.research.chat.question')"
                :answer="list('useCases.research.chat.answer')"
                :note-title="t('useCases.research.chat.noteTitle')"
                :note="t('useCases.research.chat.note')"
              />
            </MockFrame>
          </UseCasesTask>

          <UseCasesTask v-bind="translation">
            <MockFrame class="reveal" :caption="t('useCases.translation.caption')" tile-class="p-3 sm:p-8 md:p-12">
              <MockTranslation />
            </MockFrame>
          </UseCasesTask>

          <UseCasesTask v-bind="tax" layout="split-reverse">
            <MockFrame class="reveal" :caption="t('useCases.tax.caption')" tile-class="p-3 sm:p-8 md:p-12">
              <UseCasesTaxMock :lang="locale" :question="t('useCases.tax.chat.question')" />
            </MockFrame>
          </UseCasesTask>
        </div>
      </div>
    </section>

    <!-- FAQ with related pages -->
    <section aria-labelledby="uc-faq-title" class="pb-24 md:pb-32">
      <div class="mx-auto max-w-page px-4 sm:px-6">
        <div class="grid gap-10 border-t border-line pt-14 md:pt-20 lg:grid-cols-12 lg:gap-12">
          <div class="lg:sticky lg:top-24 lg:col-span-4 lg:self-start">
            <h2 id="uc-faq-title" class="font-display text-display-2 text-ink">
              {{ t('useCases.faq.title') }}
            </h2>
            <nav :aria-label="t('useCases.related.title')" class="mt-8">
              <p class="text-xs font-semibold tracking-[0.06em] text-ink-muted uppercase">
                {{ t('useCases.related.title') }}
              </p>
              <ul class="mt-3 space-y-2.5">
                <li v-for="item in related" :key="item.to" class="text-[15px]">
                  <UseCasesLink :to="item.to" :label="item.label" />
                </li>
              </ul>
            </nav>
          </div>
          <div class="min-w-0 lg:col-span-8">
            <FaqList :items="faq" open />
          </div>
        </div>
      </div>
    </section>

    <CtaBand :title="t('useCases.cta.title')" :text="t('useCases.cta.text')" />
  </div>
</template>
