<script setup lang="ts">
// The four modules, each with faithful mockups. Rhythm: split (+ two fragment cards), reversed split (from xl), full
// width, full width (+ two small figures). Stable anchors: #platform, #assistant, #vault, #review, #court-practice.
const { t, tm, rt, locale } = useI18n()
const list = (key: string) => (tm(key) as string[]).map(s => rt(s))

const mod = (key: 'assistant' | 'vault' | 'review' | 'court', icon: string) => computed(() => ({
  icon,
  name: t(`home.platform.${key}.name`),
  title: t(`home.platform.${key}.title`),
  body: t(`home.platform.${key}.body`),
  points: list(`home.platform.${key}.points`),
}))
const assistant = mod('assistant', 'hugeicons:asterisk')
const vault = mod('vault', 'hugeicons:folder-01')
const review = mod('review', 'hugeicons:table-02')
const court = mod('court', 'hugeicons:analytics-01')
</script>

<template>
  <section id="platform" aria-labelledby="home-platform-title" class="scroll-mt-16 pt-16 pb-20 md:pt-24 md:pb-28">
    <div class="mx-auto max-w-page px-4 sm:px-6">
      <SectionHeading
        id="home-platform-title"
        :eyebrow="t('home.platform.eyebrow')"
        :title="t('home.platform.title')"
        :continuation="t('home.platform.continuation')"
      />

      <!-- Assistant: copy left, contract scan right, then two fragments -->
      <article id="assistant" aria-labelledby="home-mod-assistant" class="mt-16 scroll-mt-20 border-t border-line pt-12 md:mt-20 lg:pt-16">
        <div class="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <HomeModuleText id="home-mod-assistant" v-bind="assistant" class="lg:sticky lg:top-24 lg:col-span-5 lg:self-start lg:pr-4" />
          <MockFrame
            class="reveal lg:col-span-7"
            :caption="t('home.platform.assistant.caption')"
            tile-class="h-[34rem] md:h-[44rem] lg:h-[46rem]"
            shell-class="mx-3 mt-5 sm:mx-8 sm:mt-8"
          >
            <MockRiskScan class="md:[zoom:0.92]" />
          </MockFrame>
        </div>

        <div class="mt-10 grid gap-4 md:grid-cols-2 lg:mt-12">
          <div class="flex min-w-0 flex-col rounded-tile bg-accent-50 p-6 ring-1 ring-accent-100 md:p-8">
            <h4 class="text-lg font-semibold text-ink">
              {{ t('home.platform.assistant.questions.title') }}
            </h4>
            <p class="mt-2 max-w-[48ch] text-[15px] leading-relaxed text-ink-muted">
              {{ t('home.platform.assistant.questions.text') }}
            </p>
            <div aria-hidden="true" inert class="mt-6 md:mt-auto md:pt-6">
              <MockClarifyingQuestions class="max-w-sm" />
            </div>
          </div>
          <div class="flex min-w-0 flex-col rounded-tile bg-surface-muted p-6 ring-1 ring-line md:p-8">
            <h4 class="text-lg font-semibold text-ink">
              {{ t('home.platform.assistant.modes.title') }}
            </h4>
            <p class="mt-2 max-w-[48ch] text-[15px] leading-relaxed text-ink-muted">
              {{ t('home.platform.assistant.modes.text') }}
            </p>
            <div aria-hidden="true" inert class="mt-6 flex flex-col items-end gap-4 md:mt-auto md:pt-6">
              <p :lang="locale" class="max-w-[85%] rounded-2xl rounded-br-sm bg-stone-900 px-4 py-3 text-[13px] leading-relaxed text-white hyphens-manual">
                {{ t('home.platform.assistant.modes.prompt') }}
              </p>
              <MockModeBadges class="self-start" />
            </div>
          </div>
        </div>
      </article>

      <!-- Vault: mockup left, copy right from xl (below xl the 7/12 column is too narrow for files + preview drawer) -->
      <article id="vault" aria-labelledby="home-mod-vault" class="mt-16 grid scroll-mt-20 gap-10 border-t border-line pt-12 md:mt-20 lg:pt-16 xl:grid-cols-12 xl:gap-12">
        <HomeModuleText id="home-mod-vault" v-bind="vault" class="xl:order-2 xl:col-span-5 xl:pl-4" />
        <MockFrame
          class="reveal xl:order-1 xl:col-span-7"
          :caption="t('home.platform.vault.caption')"
          tile-class="h-[36rem] md:h-[30rem]"
          shell-class="mx-3 mt-5 sm:mx-8 sm:mt-8"
        >
          <MockVault class="md:[zoom:0.92]" />
        </MockFrame>
      </article>

      <!-- Review tables: copy in two columns, the three points across the full width, then the full-width table -->
      <article id="review" aria-labelledby="home-mod-review" class="mt-16 scroll-mt-20 border-t border-line pt-12 md:mt-20 lg:pt-16">
        <div class="grid gap-4 lg:grid-cols-12 lg:gap-12">
          <div class="lg:col-span-5">
            <p class="flex items-center gap-2 text-sm font-medium text-accent-700">
              <Icon :name="review.icon" class="size-[18px]!" aria-hidden="true" />
              {{ review.name }}
            </p>
            <h3 id="home-mod-review" class="mt-4 font-display text-display-3 text-ink">
              {{ review.title }}
            </h3>
          </div>
          <p class="max-w-[60ch] text-base leading-relaxed text-ink-muted lg:col-span-7 lg:pt-9">
            {{ review.body }}
          </p>
        </div>
        <FeatureList :items="review.points" :columns="3" class="mt-6 lg:mt-10" />
        <MockFrame
          class="reveal mt-10 md:mt-12"
          :caption="t('home.platform.review.caption')"
          tile-class="h-[26rem] sm:h-[28rem] md:h-[31rem]"
          shell-class="mx-3 mt-5 sm:mx-8 sm:mt-8 lg:mx-auto lg:mt-10 lg:max-w-[66rem]"
        >
          <MockReviewTable />
        </MockFrame>
      </article>

      <!-- Court practice: copy in two columns, the decisions list, then the risk register and the memo export -->
      <article id="court-practice" aria-labelledby="home-mod-court" class="mt-16 scroll-mt-20 border-t border-line pt-12 md:mt-20 lg:pt-16">
        <div class="grid gap-4 lg:grid-cols-12 lg:gap-12">
          <div class="lg:col-span-5">
            <p class="flex items-center gap-2 text-sm font-medium text-accent-700">
              <Icon :name="court.icon" class="size-[18px]!" aria-hidden="true" />
              {{ court.name }}
            </p>
            <h3 id="home-mod-court" class="mt-4 font-display text-display-3 text-ink">
              {{ court.title }}
            </h3>
          </div>
          <div class="lg:col-span-7 lg:pt-9">
            <p class="max-w-[60ch] text-base leading-relaxed text-ink-muted">
              {{ court.body }}
            </p>
            <FeatureList :items="court.points" class="mt-6" />
            <p class="mt-5 flex gap-2.5 text-sm leading-relaxed text-ink-subtle">
              <Icon name="hugeicons:clock-01" class="mt-0.5 size-4! shrink-0" aria-hidden="true" />
              {{ t('home.platform.court.background') }}
            </p>
          </div>
        </div>
        <MockFrame
          class="reveal mt-10 md:mt-12"
          :caption="t('home.platform.court.caption')"
          tile-class="h-[30rem] md:h-[33rem]"
          shell-class="mx-3 mt-5 sm:mx-8 sm:mt-8 lg:mx-auto lg:mt-10 lg:max-w-[66rem]"
        >
          <MockCourtPractice />
        </MockFrame>
        <div class="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-12">
          <!-- Side by side the two tiles share a height; the shorter shell centres in its tile so the captions line up -->
          <MockFrame class="reveal flex flex-col lg:col-span-7" :caption="t('home.platform.court.risksCaption')" tile-class="flex flex-1 items-center p-3 sm:p-6" shell-class="w-full">
            <MockCourtRisks />
          </MockFrame>
          <MockFrame class="reveal flex flex-col lg:col-span-5" :caption="t('home.platform.court.memoCaption')" tile-class="flex flex-1 items-center p-3 sm:p-6" shell-class="w-full">
            <MockMemoExport />
          </MockFrame>
        </div>
      </article>
    </div>
  </section>
</template>
