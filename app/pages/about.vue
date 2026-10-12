<script setup lang="ts">
// About: what AdiletAI is (canonical definition + company facts), where the name comes from (with the "Әділет"
// disambiguation), mission, why Kazakhstan first, principles, founders, closing CtaBand. Copy: i18n about.json.
// JSON-LD: an AboutPage about the Organization from app.vue, and one Person per founder that worksFor it.
const { t, tm, rt } = useI18n()
const localePath = useLocalePath()
const site = useSiteConfig()
const ORG_ID = `${site.url}/#organization`

const FOUNDERS_LATIN = ['Nariman Erkhan', 'Nursultan Mukhtaruly', 'Milan Gorislavets']
const PRINCIPLE_LINKS = ['/how-it-works', '/features', '/use-cases', '/faq', '/security']
const KZ_TILES = [
  { icon: 'hugeicons:justice-scale-01', tile: 'bg-surface ring-line' },
  { icon: 'hugeicons:translate', tile: 'bg-accent-50 ring-accent-100' },
  { icon: 'hugeicons:language-circle', tile: 'bg-surface-muted ring-line' },
]
// Product step labels (Russian UI chrome) for the "faster" fragment.
const GROUNDWORK_UI = [
  { icon: 'hugeicons:justice-scale-01', label: 'Поиск в законодательстве РК' },
  { icon: 'hugeicons:file-search', label: 'Поиск по вашим документам' },
  { icon: 'hugeicons:contracts', label: 'Сканирование договора на риски' },
]
const APP_HOST = new URL(APP_URL).host

type Item = { title: string, body: string }
const facts = computed(() => (['founded', 'audience', 'languages', 'access'] as const)
  .map(k => ({ label: t(`about.what.facts.${k}.label`), value: t(`about.what.facts.${k}.value`) })))
const kzItems = computed(() => (tm('about.kazakhstan.items') as Item[])
  .map((i, n) => ({ title: rt(i.title), body: rt(i.body), ...KZ_TILES[n]! })))
const principles = computed(() => (tm('about.principles.items') as (Item & { link: string })[])
  .map((p, n) => ({ title: rt(p.title), body: rt(p.body), link: rt(p.link), to: PRINCIPLE_LINKS[n]! })))
const founders = computed(() => (tm('about.founders.names') as string[]).map(n => rt(n)))

useSeoMeta({
  title: () => t('about.meta.title'),
  description: () => t('about.meta.description'),
  ogTitle: () => t('about.meta.title'),
  ogDescription: () => t('about.meta.description'),
  twitterTitle: () => t('about.meta.title'),
  twitterDescription: () => t('about.meta.description'),
})

useSchemaOrg([
  // Merges into the page's own WebPage node (which @nuxtjs/seo already types as AboutPage on /about).
  defineWebPage({ '@type': 'AboutPage', 'about': { '@id': ORG_ID }, 'mainEntity': { '@id': ORG_ID } }),
  ...FOUNDERS_LATIN.map((latin, i) => ({
    '@type': 'Person',
    'name': () => founders.value[i],
    'alternateName': () => (founders.value[i] === latin ? undefined : latin),
    'worksFor': { '@id': ORG_ID },
  })),
])
</script>

<template>
  <div>
    <PageHero
      :title="t('about.hero.title')"
      :lead="t('about.hero.lead')"
      :breadcrumbs="[{ label: t('common.nav.about') }]"
    >
      <template #actions>
        <AppButton :href="CALENDLY_URL" size="lg" icon="hugeicons:arrow-right-02">
          {{ t('common.cta.demo') }}
        </AppButton>
        <AppButton to="/contact" variant="secondary" size="lg">
          {{ t('common.cta.contact') }}
        </AppButton>
      </template>
    </PageHero>

    <!-- What AdiletAI is: the canonical definitional sentence, then company facts -->
    <section aria-labelledby="about-what-title" class="pb-20 md:pb-28">
      <div class="mx-auto max-w-page px-4 sm:px-6">
        <div class="grid gap-6 border-t border-line pt-10 md:pt-14 lg:grid-cols-12 lg:gap-8">
          <h2 id="about-what-title" class="text-sm font-medium tracking-[0.06em] text-ink-subtle uppercase lg:col-span-3 lg:pt-2">
            {{ t('about.what.heading') }}
          </h2>
          <div class="min-w-0 lg:col-span-9">
            <p class="font-display text-[clamp(1.3rem,1.05rem+1.15vw,2.25rem)] leading-[1.3] tracking-[-0.01em] hyphens-manual text-ink">
              {{ t('about.what.statement') }}
              <span class="text-ink-subtle">{{ t('about.what.continuation') }}</span>
            </p>

            <dl class="mt-12 grid gap-x-8 sm:grid-cols-2 md:mt-16 xl:grid-cols-3">
              <div v-for="fact in facts" :key="fact.label" class="min-w-0 border-t border-line py-5">
                <dt class="text-xs font-medium tracking-[0.06em] text-ink-subtle uppercase">
                  {{ fact.label }}
                </dt>
                <dd class="mt-2 text-base leading-relaxed text-ink">
                  {{ fact.value }}
                </dd>
              </div>
              <div class="min-w-0 border-t border-line py-5">
                <dt class="text-xs font-medium tracking-[0.06em] text-ink-subtle uppercase">
                  {{ t('about.what.facts.product.label') }}
                </dt>
                <dd class="mt-2 text-base leading-relaxed text-ink">
                  <a :href="APP_URL" target="_blank" rel="noopener" class="font-medium text-accent-600 underline decoration-accent-600/30 underline-offset-4 hover:decoration-accent-600">
                    {{ APP_HOST }}<span class="sr-only"> {{ t('common.cta.opensInNewTab') }}</span>
                  </a>
                  <span class="mt-0.5 block text-sm text-ink-subtle">{{ t('about.what.facts.product.note') }}</span>
                </dd>
              </div>
              <div class="min-w-0 border-t border-line py-5">
                <dt class="text-xs font-medium tracking-[0.06em] text-ink-subtle uppercase">
                  {{ t('about.what.facts.contact.label') }}
                </dt>
                <dd class="mt-2 text-base leading-relaxed text-ink">
                  <a :href="`mailto:${CONTACT_EMAIL}`" class="font-medium text-accent-600 underline decoration-accent-600/30 underline-offset-4 hover:decoration-accent-600">{{ CONTACT_EMAIL }}</a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>

    <!-- The name: a dictionary entry for "Әділет" (decorative; the text carries the claims) and the disambiguation -->
    <section aria-labelledby="about-name-title" class="border-y border-line bg-surface py-20 md:py-28">
      <div class="mx-auto grid max-w-page gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:items-center lg:gap-8">
        <div class="min-w-0 lg:col-span-6 lg:col-start-7 lg:row-start-1">
          <h2 id="about-name-title" class="font-display text-display-2 text-ink">
            {{ t('about.name.title') }}
          </h2>
          <p class="mt-6 text-lead hyphens-manual text-ink">
            {{ t('about.name.meaning') }}
          </p>
          <p class="mt-4 text-lead hyphens-manual text-ink-muted">
            {{ t('about.name.independent') }}
          </p>
          <p class="mt-6 flex max-w-[60ch] gap-2.5 text-sm leading-relaxed text-ink-subtle">
            <Icon name="hugeicons:information-circle" class="mt-0.5 size-4! shrink-0 text-accent-600" aria-hidden="true" />
            {{ t('about.name.source') }}
          </p>
        </div>

        <div aria-hidden="true" class="reveal rounded-tile bg-canvas p-6 ring-1 ring-line sm:p-10 lg:col-span-5 lg:col-start-1 lg:row-start-1">
          <p class="text-xs font-medium tracking-[0.06em] text-ink-subtle uppercase">
            {{ t('about.name.card.label') }}
          </p>
          <p lang="kk" class="mt-5 font-display text-[clamp(3.5rem,2.6rem+3.6vw,6rem)] leading-[1.05] tracking-[-0.02em] text-ink">
            {{ t('about.name.card.word') }}
          </p>
          <dl class="mt-8 divide-y divide-line border-y border-line">
            <div class="grid grid-cols-[minmax(0,6rem)_minmax(0,1fr)] items-baseline gap-4 py-3.5 sm:grid-cols-[minmax(0,7.5rem)_minmax(0,1fr)]">
              <dt class="text-sm text-ink-subtle">
                {{ t('about.name.card.ruLabel') }}
              </dt>
              <dd lang="ru" class="font-display text-xl text-ink">
                {{ t('about.name.card.ruWord') }}
              </dd>
            </div>
            <div class="grid grid-cols-[minmax(0,6rem)_minmax(0,1fr)] items-baseline gap-4 py-3.5 sm:grid-cols-[minmax(0,7.5rem)_minmax(0,1fr)]">
              <dt class="text-sm text-ink-subtle">
                {{ t('about.name.card.enLabel') }}
              </dt>
              <dd lang="en" class="font-display text-xl text-ink">
                {{ t('about.name.card.enWord') }}
              </dd>
            </div>
            <div class="grid grid-cols-[minmax(0,6rem)_minmax(0,1fr)] items-baseline gap-4 py-3.5 sm:grid-cols-[minmax(0,7.5rem)_minmax(0,1fr)]">
              <dt class="text-sm text-ink-subtle">
                {{ t('about.name.card.brandLabel') }}
              </dt>
              <dd lang="en" class="font-display text-xl text-accent-700">
                {{ t('about.name.card.brand') }}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>

    <!-- Mission: faster, and verifiable. Each column ends with a small product fragment: role="img" with a localized label, Russian chrome inside -->
    <section aria-labelledby="about-mission-title" class="py-20 md:py-28">
      <div class="mx-auto max-w-page px-4 sm:px-6">
        <SectionHeading
          id="about-mission-title"
          :eyebrow="t('about.mission.eyebrow')"
          :title="t('about.mission.title')"
          :continuation="t('about.mission.continuation')"
        />

        <!-- md+: each column is a 3-row subgrid, so titles, bodies and the two fragments line up across columns; h-full gives both fragments the same height -->
        <div class="mt-12 grid gap-12 md:mt-16 md:grid-cols-2 md:gap-x-8 md:gap-y-0 lg:gap-x-16">
          <article class="flex min-w-0 flex-col border-t border-line pt-8 md:row-span-3 md:grid md:grid-rows-subgrid">
            <h3 class="flex items-center gap-3 text-xl font-semibold text-ink">
              <Icon name="hugeicons:time-quarter-pass" class="size-5! text-accent-600" aria-hidden="true" />
              {{ t('about.mission.faster.title') }}
            </h3>
            <p class="mt-4 mb-8 max-w-[60ch] text-base leading-relaxed text-ink-muted">
              {{ t('about.mission.faster.body') }}
            </p>
            <div role="img" :aria-label="t('about.mission.faster.mockLabel')" data-nosnippet class="reveal h-full">
              <ul lang="ru" aria-hidden="true" inert class="h-full space-y-2 rounded-tile bg-surface-muted p-3">
                <li
                  v-for="step in GROUNDWORK_UI"
                  :key="step.label"
                  class="flex items-center gap-2.5 rounded-card border border-line bg-white px-3.5 py-2.5 text-[13px] font-medium text-stone-700"
                >
                  <span class="flex size-6 shrink-0 items-center justify-center rounded-full border border-stone-200 bg-stone-50">
                    <Icon :name="step.icon" class="size-3.5! text-stone-500" />
                  </span>
                  <span class="min-w-0 truncate">{{ step.label }}</span>
                </li>
              </ul>
            </div>
          </article>

          <article class="flex min-w-0 flex-col border-t border-line pt-8 md:row-span-3 md:grid md:grid-rows-subgrid">
            <h3 class="flex items-center gap-3 text-xl font-semibold text-ink">
              <Icon name="hugeicons:document-validation" class="size-5! text-accent-600" aria-hidden="true" />
              {{ t('about.mission.verifiable.title') }}
            </h3>
            <p class="mt-4 mb-8 max-w-[60ch] text-base leading-relaxed text-ink-muted">
              {{ t('about.mission.verifiable.body') }}
            </p>
            <div role="img" :aria-label="t('about.mission.verifiable.mockLabel')" data-nosnippet class="reveal h-full">
              <div lang="ru" aria-hidden="true" inert class="h-full space-y-2 rounded-tile bg-surface-muted p-3">
                <MockSourceCard :index="2" kind="kb" label="Статья 297. Уменьшение размера неустойки" subtitle="Кодекс · Гражданский кодекс РК (Общая часть)" highlighted />
                <MockSourceCard :index="3" kind="kb" label="Статья 293. Понятие неустойки" subtitle="Кодекс · Гражданский кодекс РК (Общая часть)" />
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Why Kazakhstan first: three tiles -->
    <section aria-labelledby="about-kz-title" class="pb-20 md:pb-28">
      <div class="mx-auto max-w-page px-4 sm:px-6">
        <SectionHeading id="about-kz-title" :title="t('about.kazakhstan.title')" :lead="t('about.kazakhstan.lead')" />

        <div class="mt-12 grid gap-4 md:mt-16 lg:grid-cols-3">
          <article
            v-for="item in kzItems"
            :key="item.title"
            class="reveal flex min-w-0 flex-col rounded-tile p-6 ring-1 md:p-8"
            :class="item.tile"
          >
            <span class="flex size-11 items-center justify-center rounded-full border border-line-strong bg-surface">
              <Icon :name="item.icon" class="size-5! text-accent-600" aria-hidden="true" />
            </span>
            <h3 class="mt-8 font-display text-display-3 text-ink">
              {{ item.title }}
            </h3>
            <p class="mt-3 text-base leading-relaxed text-ink-muted hyphens-manual [overflow-wrap:anywhere]">
              {{ item.body }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- Principles: numbered editorial list, each with a link to the page that shows it in practice -->
    <section aria-labelledby="about-principles-title" class="border-y border-line bg-surface py-20 md:py-28">
      <div class="mx-auto max-w-page px-4 sm:px-6">
        <SectionHeading id="about-principles-title" :title="t('about.principles.title')" :continuation="t('about.principles.continuation')" />

        <ol class="mt-12 border-b border-line md:mt-16">
          <li
            v-for="(p, i) in principles"
            :key="p.title"
            class="grid gap-x-8 gap-y-3 border-t border-line py-8 md:py-10 lg:grid-cols-12"
          >
            <div class="flex items-baseline gap-4 lg:col-span-5 lg:gap-6">
              <span class="w-8 shrink-0 font-display text-xl text-accent-600 tabular-nums lg:w-10" aria-hidden="true">{{ String(i + 1).padStart(2, '0') }}</span>
              <h3 class="min-w-0 font-display text-display-3 text-ink">
                {{ p.title }}
              </h3>
            </div>
            <div class="min-w-0 pl-12 lg:col-span-7 lg:pl-0">
              <p class="max-w-[62ch] text-base leading-relaxed text-ink-muted">
                {{ p.body }}
              </p>
              <NuxtLink
                :to="localePath(p.to)"
                class="group mt-4 inline-flex items-center gap-1.5 rounded-sm text-sm font-medium text-accent-600 hover:text-accent-700"
              >
                {{ p.link }}
                <Icon name="hugeicons:arrow-right-02" class="size-4! transition-transform duration-150 group-hover:translate-x-0.5" aria-hidden="true" />
              </NuxtLink>
            </div>
          </li>
        </ol>
      </div>
    </section>

    <!-- Founders: names only, set in a serif statement -->
    <section aria-labelledby="about-founders-title" class="py-20 md:py-28">
      <div class="mx-auto grid max-w-page gap-8 px-4 sm:px-6 lg:grid-cols-12">
        <div class="lg:col-span-4">
          <SectionHeading id="about-founders-title" :title="t('about.founders.title')" />
        </div>
        <div class="min-w-0 lg:col-span-8">
          <i18n-t
            keypath="about.founders.statement"
            scope="global"
            tag="p"
            class="font-display text-[clamp(1.5rem,1.2rem+1.4vw,2.5rem)] leading-[1.25] tracking-[-0.01em] hyphens-manual text-ink-subtle"
          >
            <template #first>
              <span class="whitespace-nowrap text-ink">{{ founders[0] }}</span>
            </template>
            <template #second>
              <span class="whitespace-nowrap text-ink">{{ founders[1] }}</span>
            </template>
            <template #third>
              <span class="whitespace-nowrap text-ink">{{ founders[2] }}</span>
            </template>
          </i18n-t>
          <i18n-t keypath="about.founders.contact" scope="global" tag="p" class="mt-10 border-t border-line pt-6 text-sm text-ink-muted">
            <template #email>
              <a :href="`mailto:${CONTACT_EMAIL}`" class="font-medium text-accent-600 underline decoration-accent-600/30 underline-offset-4 hover:decoration-accent-600">{{ CONTACT_EMAIL }}</a>
            </template>
          </i18n-t>
        </div>
      </div>
    </section>

    <CtaBand :title="t('about.cta.title')" :text="t('about.cta.text')" />
  </div>
</template>
