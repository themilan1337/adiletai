<script setup lang="ts">
// Platform page (/features): one section per module with a stable anchor (#assistant, #contract-review, #vault,
// #review-tables, #court-practice, #drafting-translation, #playbook), a sticky sub-nav, Built for Kazakhstan, a short
// FAQ and the closing CTA. Copy: i18n/locales/<locale>/features.json. Mockups keep the product's Russian chrome.
// JSON-LD: SoftwareApplication (no offers: access is by demo) and a FAQPage that mirrors the visible questions.
const { t, tm, rt, locale } = useI18n()
const localePath = useLocalePath()
const site = useSiteConfig()

type Pair = { label: string, value: string }
const list = (key: string) => (tm(key) as string[]).map(s => rt(s))
const specs = (key: string) => (tm(key) as Pair[]).map(s => ({ label: rt(s.label), value: rt(s.value) }))
const cards = (key: string) => (tm(key) as { title: string, text: string }[]).map(s => ({ title: rt(s.title), text: rt(s.text) }))

const MODULES = ['assistant', 'contractReview', 'vault', 'reviewTables', 'courtPractice', 'drafting', 'playbook'] as const
const SECTIONS = [
  ['assistant', 'assistant'],
  ['contract-review', 'contractReview'],
  ['vault', 'vault'],
  ['review-tables', 'reviewTables'],
  ['court-practice', 'courtPractice'],
  ['drafting-translation', 'drafting'],
  ['playbook', 'playbook'],
  ['kazakhstan', 'kazakhstan'],
] as const
const nav = computed(() => SECTIONS.map(([id, key]) => ({ id, label: t(`features.nav.${key}`) })))

// Answer types with the glyphs the product puts in review-table column headers.
const TYPE_GLYPHS = [{ glyph: 'T' }, { glyph: '#' }, { icon: 'hugeicons:calendar-03' }, { icon: 'hugeicons:checkmark-square-02' }, { glyph: '₸', serif: true }, { glyph: '«»' }]
const COURT_ICONS = ['hugeicons:note-edit', 'hugeicons:justice-scale-01', 'hugeicons:alert-02', 'hugeicons:file-export']
const LINK = 'inline-flex items-center gap-1.5 text-sm font-medium text-accent-600 underline decoration-accent-600/30 underline-offset-4 transition-colors hover:decoration-accent-600'

const faq = computed(() => (tm('features.faq.items') as { q: string, a: string }[]).map(i => ({ q: rt(i.q), a: rt(i.a) })))

useSeoMeta({
  title: () => t('features.meta.title'),
  description: () => t('features.meta.description'),
  ogTitle: () => t('features.meta.title'),
  ogDescription: () => t('features.meta.description'),
  twitterTitle: () => t('features.meta.title'),
  twitterDescription: () => t('features.meta.description'),
})

useSchemaOrg([
  {
    '@type': 'SoftwareApplication',
    'name': 'AdiletAI',
    'applicationCategory': 'BusinessApplication',
    'operatingSystem': 'Web',
    'url': APP_URL,
    'description': () => t('features.meta.description'),
    'featureList': () => MODULES.map(k => `${t(`features.${k}.name`)}: ${t(`features.${k}.title`)}`),
    'publisher': { '@id': `${site.url}/#organization` },
  },
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
      :title="t('features.hero.title')"
      :lead="t('features.hero.lead')"
      :breadcrumbs="[{ label: t('common.nav.platform') }]"
    >
      <template #actions>
        <AppButton :href="CALENDLY_URL" size="lg" icon="hugeicons:arrow-right-02">
          {{ t('common.cta.demo') }}
        </AppButton>
        <AppButton to="/how-it-works" variant="secondary" size="lg">
          {{ t('common.nav.howItWorks') }}
        </AppButton>
      </template>
    </PageHero>

    <!-- The sub-nav stays docked while any module section is on screen; it releases before the dark CTA band. -->
    <div>
      <FeaturesSubnav :label="t('features.nav.label')" :items="nav" />

      <!-- Assistant: heading left, facts right, the thread full width, then three capability tiles -->
      <section id="assistant" aria-labelledby="features-assistant-title" class="mx-auto max-w-page scroll-mt-32 px-4 pt-16 pb-16 sm:px-6 md:pt-24 md:pb-24">
        <div class="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <FeaturesModuleHead
            id="features-assistant-title"
            class="lg:sticky lg:top-36 lg:col-span-6 lg:self-start"
            icon="hugeicons:asterisk"
            :name="t('features.assistant.name')"
            :title="t('features.assistant.title')"
            :app="['Ассистент']"
          />
          <div class="min-w-0 lg:col-span-6 lg:pt-11">
            <p class="max-w-[60ch] text-lead text-ink-muted">
              {{ t('features.assistant.lead') }}
            </p>
            <FeaturesSpecs :items="specs('features.assistant.specs')" class="mt-8" />
            <p class="mt-5 flex gap-2.5 text-sm leading-relaxed text-ink-subtle">
              <Icon name="hugeicons:information-circle" class="mt-0.5 size-4! shrink-0" aria-hidden="true" />
              {{ t('features.assistant.note') }}
            </p>
            <NuxtLink :to="localePath('/how-it-works')" :class="LINK" class="mt-6">
              {{ t('features.assistant.link') }}
              <Icon name="hugeicons:arrow-right-02" class="size-4!" aria-hidden="true" />
            </NuxtLink>
          </div>
        </div>

        <MockFrame
          class="reveal mt-12 md:mt-16"
          :caption="t('features.assistant.caption')"
          tile-class="h-[32rem] md:h-[41rem]"
          shell-class="mx-3 mt-5 md:mx-10 md:mt-10 lg:mx-14"
        >
          <MockAssistant
            :lang="locale"
            :question="t('features.assistant.chat.question')"
            :answer="list('features.assistant.chat.answer')"
            :note-title="t('features.assistant.chat.noteTitle')"
            :note="t('features.assistant.chat.note')"
          />
        </MockFrame>

        <div class="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <article class="flex min-w-0 flex-col rounded-tile bg-surface-muted p-6 ring-1 ring-line md:p-8">
            <h3 class="text-lg font-semibold text-ink">
              {{ t('features.assistant.modes.title') }}
            </h3>
            <p class="mt-2 text-[15px] leading-relaxed text-ink-muted">
              {{ t('features.assistant.modes.text') }}
            </p>
            <!-- Tile fragments follow the mockup rule: a localized label on role="img", the UI itself hidden and inert -->
            <div role="img" :aria-label="t('features.assistant.modes.alt')" class="mt-6 md:mt-auto md:pt-6 [&_:is(p,li)]:hyphens-manual">
              <div aria-hidden="true" inert class="flex flex-col items-end gap-4">
                <p :lang="locale" class="max-w-[90%] rounded-2xl rounded-br-sm bg-stone-900 px-4 py-3 text-[13px] leading-relaxed text-white">
                  {{ t('features.assistant.modes.prompt') }}
                </p>
                <MockModeBadges active="translation" class="self-start" />
              </div>
            </div>
          </article>
          <article class="flex min-w-0 flex-col rounded-tile bg-accent-50 p-6 ring-1 ring-accent-100 md:p-8">
            <h3 class="text-lg font-semibold text-ink">
              {{ t('features.assistant.questions.title') }}
            </h3>
            <p class="mt-2 text-[15px] leading-relaxed text-ink-muted">
              {{ t('features.assistant.questions.text') }}
            </p>
            <div role="img" :aria-label="t('features.assistant.questions.alt')" class="mt-6 md:mt-auto md:pt-6 [&_:is(p,li)]:hyphens-manual">
              <MockClarifyingQuestions aria-hidden="true" inert />
            </div>
          </article>
          <article class="flex min-w-0 flex-col rounded-tile bg-surface p-6 ring-1 ring-line md:col-span-2 md:p-8 lg:col-span-1">
            <h3 class="text-lg font-semibold text-ink">
              {{ t('features.assistant.files.title') }}
            </h3>
            <p class="mt-2 text-[15px] leading-relaxed text-ink-muted">
              {{ t('features.assistant.files.text') }}
            </p>
            <div role="img" :aria-label="t('features.assistant.files.alt')" class="mt-6 md:mt-auto md:pt-6 [&_:is(p,li)]:hyphens-manual">
              <FeaturesMockComposer aria-hidden="true" inert />
            </div>
          </article>
        </div>
      </section>

      <!-- Contract review: sticky copy left, the scan report right -->
      <section id="contract-review" aria-labelledby="features-review-title" class="mx-auto max-w-page scroll-mt-32 px-4 sm:px-6">
        <div class="grid gap-10 border-t border-line py-16 md:py-24 lg:grid-cols-12 lg:gap-12">
          <div class="min-w-0 lg:sticky lg:top-36 lg:col-span-5 lg:self-start">
            <FeaturesModuleHead
              id="features-review-title"
              icon="hugeicons:file-search"
              :name="t('features.contractReview.name')"
              :title="t('features.contractReview.title')"
              :lead="t('features.contractReview.lead')"
              :app="['Ассистент', 'Режим: Анализ']"
            />
            <FeatureList :items="list('features.contractReview.points')" class="mt-8" />
            <a href="#playbook" :class="LINK" class="mt-6">
              {{ t('features.contractReview.link') }}
              <Icon name="hugeicons:arrow-down-02" class="size-4!" aria-hidden="true" />
            </a>
          </div>
          <MockFrame
            class="reveal lg:col-span-7"
            :caption="t('features.contractReview.caption')"
            tile-class="h-[34rem] md:h-[44rem] lg:h-[46rem]"
            shell-class="mx-3 mt-5 sm:mx-8 sm:mt-8"
          >
            <MockRiskScan class="md:[zoom:0.92]" />
          </MockFrame>
        </div>
      </section>

      <!-- Vault: the vault left (docked while the facts scroll), copy right -->
      <section id="vault" aria-labelledby="features-vault-title" class="mx-auto max-w-page scroll-mt-32 px-4 sm:px-6">
        <div class="grid gap-10 border-t border-line py-16 md:py-24 lg:grid-cols-12 lg:gap-12">
          <div class="min-w-0 lg:order-2 lg:col-span-5">
            <FeaturesModuleHead
              id="features-vault-title"
              icon="hugeicons:folder-01"
              :name="t('features.vault.name')"
              :title="t('features.vault.title')"
              :lead="t('features.vault.lead')"
              :app="['Хранилище']"
            />
            <FeaturesSpecs :items="specs('features.vault.specs')" class="mt-8" />
            <NuxtLink :to="localePath('/security')" :class="LINK" class="mt-6">
              {{ t('features.vault.link') }}
              <Icon name="hugeicons:arrow-right-02" class="size-4!" aria-hidden="true" />
            </NuxtLink>
          </div>
          <MockFrame
            class="reveal lg:sticky lg:top-36 lg:order-1 lg:col-span-7 lg:self-start"
            :caption="t('features.vault.caption')"
            tile-class="h-[36rem] md:h-[32rem]"
            shell-class="mx-3 mt-5 sm:mx-8 sm:mt-8 lg:mx-4 xl:mx-8"
          >
            <!-- ponytail: lg-only zoom keeps the vault's tabs and Upload button inside the 7/12 column at 1024 -->
            <MockVault class="md:[zoom:0.92] lg:[zoom:0.82] xl:[zoom:0.92]" />
          </MockFrame>
        </div>
      </section>

      <!-- Review tables: copy in two columns with the answer types and export formats, then the full-width table -->
      <section id="review-tables" aria-labelledby="features-tables-title" class="mx-auto max-w-page scroll-mt-32 px-4 sm:px-6">
        <div class="border-t border-line py-16 md:py-24">
          <div class="grid gap-8 lg:grid-cols-12 lg:gap-12">
            <FeaturesModuleHead
              id="features-tables-title"
              class="lg:sticky lg:top-36 lg:col-span-6 lg:self-start"
              icon="hugeicons:table-02"
              :name="t('features.reviewTables.name')"
              :title="t('features.reviewTables.title')"
              :app="['Хранилище', 'Таблицы анализа']"
            />
            <div class="min-w-0 lg:col-span-6 lg:pt-11">
              <p class="max-w-[60ch] text-lead text-ink-muted">
                {{ t('features.reviewTables.lead') }}
              </p>
              <div class="mt-8 grid gap-8 sm:grid-cols-2">
                <div>
                  <h3 class="text-sm font-medium text-ink">
                    {{ t('features.reviewTables.typesLabel') }}
                  </h3>
                  <ul class="mt-3 flex flex-wrap gap-2">
                    <li v-for="(type, i) in list('features.reviewTables.types')" :key="type" class="inline-flex items-center gap-2 rounded-full border border-line bg-surface py-1 pr-3 pl-1 text-sm text-ink">
                      <span class="flex size-6 items-center justify-center rounded-full bg-stone-100 text-[11px] font-semibold text-stone-600" :class="{ 'font-display text-[13px]': TYPE_GLYPHS[i]?.serif }" aria-hidden="true">
                        <Icon v-if="TYPE_GLYPHS[i]?.icon" :name="TYPE_GLYPHS[i]!.icon!" class="size-3.5!" />
                        <template v-else>{{ TYPE_GLYPHS[i]?.glyph }}</template>
                      </span>
                      {{ type }}
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 class="text-sm font-medium text-ink">
                    {{ t('features.reviewTables.exportLabel') }}
                  </h3>
                  <ul class="mt-3 flex flex-wrap gap-2">
                    <li v-for="format in list('features.reviewTables.exports')" :key="format" class="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1 text-sm text-ink">
                      <Icon name="hugeicons:download-04" class="size-3.5! text-ink-subtle" aria-hidden="true" />
                      {{ format }}
                    </li>
                  </ul>
                </div>
              </div>
              <FeatureList :items="list('features.reviewTables.points')" class="mt-8" />
              <NuxtLink :to="localePath('/use-cases')" :class="LINK" class="mt-6">
                {{ t('features.reviewTables.link') }}
                <Icon name="hugeicons:arrow-right-02" class="size-4!" aria-hidden="true" />
              </NuxtLink>
            </div>
          </div>
          <MockFrame
            class="reveal mt-10 md:mt-12"
            :caption="t('features.reviewTables.caption')"
            tile-class="h-[26rem] sm:h-[28rem] md:h-[31rem]"
            shell-class="mx-3 mt-5 sm:mx-8 sm:mt-8 lg:mx-auto lg:mt-10 lg:max-w-[66rem]"
          >
            <MockReviewTable />
          </MockFrame>
        </div>
      </section>

      <!-- Court practice: copy, the four stages, the decisions list, then the risk register and the memo export -->
      <section id="court-practice" aria-labelledby="features-court-title" class="mx-auto max-w-page scroll-mt-32 px-4 sm:px-6">
        <div class="border-t border-line py-16 md:py-24">
          <div class="grid gap-8 lg:grid-cols-12 lg:gap-12">
            <FeaturesModuleHead
              id="features-court-title"
              class="lg:col-span-6"
              icon="hugeicons:analytics-01"
              :name="t('features.courtPractice.name')"
              :title="t('features.courtPractice.title')"
              :app="['Аналитика']"
            />
            <p class="max-w-[60ch] text-lead text-ink-muted lg:col-span-6 lg:pt-11">
              {{ t('features.courtPractice.lead') }}
            </p>
          </div>

          <ol class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            <li v-for="(step, i) in cards('features.courtPractice.steps')" :key="step.title" class="min-w-0">
              <div class="flex items-center gap-3">
                <span class="flex size-10 shrink-0 items-center justify-center rounded-full border border-line bg-surface text-accent-600">
                  <Icon :name="COURT_ICONS[i]!" class="size-[18px]!" aria-hidden="true" />
                </span>
                <span v-if="i < COURT_ICONS.length - 1" class="hidden h-px flex-1 bg-line lg:block" aria-hidden="true" />
              </div>
              <h3 class="mt-4 text-base font-semibold text-ink hyphens-manual">
                {{ step.title }}
              </h3>
              <p class="mt-1.5 text-sm leading-relaxed text-ink-muted">
                {{ step.text }}
              </p>
            </li>
          </ol>

          <MockFrame
            class="reveal mt-12 md:mt-14"
            :caption="t('features.courtPractice.caption')"
            tile-class="h-[30rem] md:h-[33rem]"
            shell-class="mx-3 mt-5 sm:mx-8 sm:mt-8 lg:mx-auto lg:mt-10 lg:max-w-[66rem]"
          >
            <MockCourtPractice />
          </MockFrame>
          <!-- Side by side from lg; each figure spans two subgrid rows so both tiles share one height and the captions align -->
          <div class="mt-6 grid gap-6 lg:grid-cols-12">
            <MockFrame class="reveal lg:col-span-7 lg:row-span-2 lg:grid lg:grid-rows-subgrid lg:gap-y-0" :caption="t('features.courtPractice.risksCaption')" tile-class="flex flex-col justify-center p-3 sm:p-6">
              <MockCourtRisks />
            </MockFrame>
            <MockFrame class="reveal lg:col-span-5 lg:row-span-2 lg:grid lg:grid-rows-subgrid lg:gap-y-0" :caption="t('features.courtPractice.memoCaption')" tile-class="flex flex-col justify-center p-3 sm:p-6">
              <MockMemoExport />
            </MockFrame>
          </div>

          <div class="mt-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <ul class="max-w-[70ch] space-y-3 text-sm leading-relaxed text-ink-muted">
              <li class="flex gap-2.5">
                <Icon name="hugeicons:document-validation" class="mt-0.5 size-4! shrink-0 text-accent-600" aria-hidden="true" />
                {{ t('features.courtPractice.check') }}
              </li>
              <li class="flex gap-2.5">
                <Icon name="hugeicons:clock-01" class="mt-0.5 size-4! shrink-0 text-accent-600" aria-hidden="true" />
                {{ t('features.courtPractice.background') }}
              </li>
            </ul>
            <AppButton :href="CALENDLY_URL" icon="hugeicons:arrow-right-02" class="self-start lg:self-auto">
              {{ t('common.cta.demo') }}
            </AppButton>
          </div>
        </div>
      </section>

      <!-- Drafting and translation: two tiles, each with a product fragment -->
      <section id="drafting-translation" aria-labelledby="features-drafting-title" class="mx-auto max-w-page scroll-mt-32 px-4 sm:px-6">
        <div class="border-t border-line py-16 md:py-24">
          <div class="grid gap-8 lg:grid-cols-12 lg:gap-12">
            <FeaturesModuleHead
              id="features-drafting-title"
              class="lg:col-span-6"
              icon="hugeicons:quill-write-02"
              :name="t('features.drafting.name')"
              :title="t('features.drafting.title')"
              :app="['Ассистент']"
            />
            <div class="min-w-0 lg:col-span-6 lg:pt-11">
              <p class="max-w-[60ch] text-lead text-ink-muted">
                {{ t('features.drafting.lead') }}
              </p>
              <a href="#faq" :class="LINK" class="mt-6">
                {{ t('features.drafting.link') }}
                <Icon name="hugeicons:arrow-down-02" class="size-4!" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div class="mt-12 grid gap-4 lg:grid-cols-12">
            <article class="flex min-w-0 flex-col rounded-tile bg-accent-50 p-6 ring-1 ring-accent-100 md:p-8 lg:col-span-7">
              <h3 class="flex flex-wrap items-center gap-2 text-lg font-semibold text-ink">
                {{ t('features.drafting.draft.title') }}
                <span class="rounded-full border border-accent-200 bg-surface px-2 py-0.5 text-xs font-medium text-accent-700">{{ t('features.drafting.draft.beta') }}</span>
              </h3>
              <p class="mt-2 max-w-[56ch] text-[15px] leading-relaxed text-ink-muted">
                {{ t('features.drafting.draft.text') }}
              </p>
              <div role="img" :aria-label="t('features.drafting.draft.alt')" class="mt-8 md:mt-auto md:pt-8 [&_:is(p,li)]:hyphens-manual">
                <div aria-hidden="true" inert class="overflow-hidden rounded-card bg-white shadow-card ring-1 ring-stone-200/90">
                  <FeaturesMockDraft :prompt="t('features.drafting.draft.prompt')" :lang="locale" />
                </div>
              </div>
            </article>
            <article class="flex min-w-0 flex-col rounded-tile bg-surface-muted p-6 ring-1 ring-line md:p-8 lg:col-span-5">
              <h3 class="text-lg font-semibold text-ink">
                {{ t('features.drafting.translation.title') }}
              </h3>
              <p class="mt-2 text-[15px] leading-relaxed text-ink-muted">
                {{ t('features.drafting.translation.text') }}
              </p>
              <div role="img" :aria-label="t('features.drafting.translation.alt')" class="mt-8 md:mt-auto md:pt-8 [&_:is(p,li)]:hyphens-manual">
                <MockTranslation aria-hidden="true" inert />
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- Practice profile: copy and the four parts left, the profile right -->
      <section id="playbook" aria-labelledby="features-playbook-title" class="mx-auto max-w-page scroll-mt-32 px-4 sm:px-6">
        <div class="grid gap-10 border-t border-line py-16 md:py-24 lg:grid-cols-12 lg:gap-12">
          <div class="min-w-0 lg:col-span-5">
            <FeaturesModuleHead
              id="features-playbook-title"
              icon="hugeicons:license"
              :name="t('features.playbook.name')"
              :title="t('features.playbook.title')"
              :lead="t('features.playbook.lead')"
              :app="['Профиль практики']"
            />
            <FeaturesSpecs :items="cards('features.playbook.items').map(c => ({ label: c.title, value: c.text }))" class="mt-8" />
            <p class="mt-5 text-sm leading-relaxed text-ink-subtle">
              {{ t('features.playbook.badge') }}
              <span lang="ru" class="inline-flex items-center gap-1 rounded bg-accent-50 px-2 py-0.5 align-middle text-[11px] font-semibold text-accent-700">
                <Icon name="hugeicons:checkmark-badge-01" class="size-3!" aria-hidden="true" /> Проверено по playbook команды
              </span>
            </p>
            <AppButton :href="CALENDLY_URL" icon="hugeicons:arrow-right-02" class="mt-8">
              {{ t('common.cta.demo') }}
            </AppButton>
          </div>
          <MockFrame
            class="reveal lg:sticky lg:top-36 lg:col-span-7 lg:self-start"
            :caption="t('features.playbook.caption')"
            tile-class="p-3 sm:p-8"
          >
            <FeaturesMockPlaybook />
          </MockFrame>
        </div>
      </section>

      <FeaturesKazakhstan />

      <section id="faq" aria-labelledby="features-faq-title" class="scroll-mt-32 py-20 md:py-28">
        <div class="mx-auto grid max-w-page gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12">
          <div class="lg:col-span-4">
            <h2 id="features-faq-title" class="font-display text-display-2 text-ink lg:sticky lg:top-36">
              {{ t('features.faq.title') }}
            </h2>
          </div>
          <FaqList :items="faq" open class="lg:col-span-8" />
        </div>
      </section>
    </div>

    <CtaBand :title="t('features.cta.title')" :text="t('features.cta.text')" />
  </div>
</template>
