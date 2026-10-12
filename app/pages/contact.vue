<script setup lang="ts">
// Contact page. Primary: book a demo (what happens on it). Secondary: one e-mail address for sales, support and
// security (mailto links with a localized subject), sign-in for existing customers. No form: the site has no backend.
// Copy lives in i18n/locales/<locale>/contact.json. @nuxtjs/seo already types this URL's WebPage node as ContactPage
// (by its path); the node below shares that node's absolute @id, so it merges into it and adds what the page is about.
const { t, tm, rt } = useI18n()
const localePath = useLocalePath()
const site = useSiteConfig()
const route = useRoute()

useSeoMeta({
  title: () => t('contact.meta.title'),
  description: () => t('contact.meta.description'),
  ogTitle: () => t('contact.meta.title'),
  ogDescription: () => t('contact.meta.description'),
  twitterTitle: () => t('contact.meta.title'),
  twitterDescription: () => t('contact.meta.description'),
})

useSchemaOrg([
  {
    '@type': ['WebPage', 'ContactPage'],
    '@id': () => `${site.url}${route.path}#webpage`,
    'about': { '@id': `${site.url}/#organization` },
  },
])

const mailto = (subject?: string) => `mailto:${CONTACT_EMAIL}${subject ? `?subject=${encodeURIComponent(subject)}` : ''}`

const FACT_ICONS = ['hugeicons:mail-01', 'hugeicons:user-add-01', 'hugeicons:language-circle', 'hugeicons:location-01']
// Hairlines: stacked on phones, 2x2 from sm, one row of four from xl (at lg the RU/KK values wrap to three lines).
const FACT_CELL = [
  'sm:pr-8',
  'border-t sm:border-t-0 sm:border-l sm:pl-8 xl:px-8',
  'border-t sm:pr-8 xl:border-t-0 xl:border-l xl:px-8',
  'border-t sm:border-l sm:pl-8 xl:border-t-0 xl:pl-8',
]
const facts = computed(() => (tm('contact.facts.items') as { label: string, value: string, detail: string }[])
  .map((f, i) => ({ icon: FACT_ICONS[i]!, label: rt(f.label), value: rt(f.value, { email: CONTACT_EMAIL }), detail: rt(f.detail) })))

const AGENDA_ICONS = ['hugeicons:file-search', 'hugeicons:square-lock-02', 'hugeicons:user-group', 'hugeicons:coins-01']
const agenda = computed(() => (tm('contact.demo.items') as { title: string, body: string }[])
  .map((a, i) => ({ icon: AGENDA_ICONS[i]!, title: rt(a.title), body: rt(a.body) })))

const CHANNEL_ICONS = ['hugeicons:briefcase-01', 'hugeicons:customer-support', 'hugeicons:document-validation']
const channels = computed(() => (tm('contact.email.channels') as { title: string, body: string, link: string, subject: string }[])
  .map((c, i) => ({ icon: CHANNEL_ICONS[i]!, title: rt(c.title), body: rt(c.body), link: rt(c.link), href: mailto(rt(c.subject)) })))

const related = [
  { key: 'features', nav: 'platform', to: '/features' },
  { key: 'howItWorks', nav: 'howItWorks', to: '/how-it-works' },
  { key: 'security', nav: 'security', to: '/security' },
  { key: 'faq', nav: 'faq', to: '/faq' },
] as const
</script>

<template>
  <div>
    <PageHero
      :title="t('contact.hero.title')"
      :lead="t('contact.hero.lead')"
      :breadcrumbs="[{ label: t('common.nav.contact') }]"
    >
      <template #actions>
        <AppButton :href="CALENDLY_URL" size="lg" icon="hugeicons:arrow-right-02">
          {{ t('common.cta.demo') }}
        </AppButton>
        <!-- mailto stays in this tab, so a plain link with the secondary button look instead of AppButton (href = new tab) -->
        <a
          :href="mailto()"
          class="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-control bg-surface px-6 text-base font-medium text-ink ring-1 ring-line-strong transition-colors duration-150 ring-inset select-none hover:bg-stone-100"
        >
          <Icon name="hugeicons:mail-01" class="size-4!" aria-hidden="true" />
          {{ CONTACT_EMAIL }}
        </a>
      </template>
    </PageHero>

    <!-- Practical details, answer-first -->
    <section aria-labelledby="contact-facts-title" class="mx-auto max-w-page px-4 sm:px-6">
      <h2 id="contact-facts-title" class="sr-only">
        {{ t('contact.facts.label') }}
      </h2>
      <dl class="grid grid-cols-1 border-y border-line sm:grid-cols-2 xl:grid-cols-4">
        <!-- dl > div may only hold dt/dd, so the icon lives in the dt and the dd's sit in the grid's text column.
             content-start: a cell stretched to its row's height must not spread that height across its own rows. -->
        <div v-for="(fact, i) in facts" :key="fact.label" class="grid min-w-0 grid-cols-[1.25rem_minmax(0,1fr)] content-start gap-x-4 border-line py-6 sm:py-7" :class="FACT_CELL[i]">
          <dt class="col-span-2 flex gap-4 text-sm text-ink-subtle">
            <Icon :name="fact.icon" class="size-5! shrink-0 text-accent-600" aria-hidden="true" />
            {{ fact.label }}
          </dt>
          <dd class="col-start-2 mt-1 text-base font-medium text-ink">
            {{ fact.value }}
          </dd>
          <dd class="col-start-2 mt-1 text-sm leading-relaxed text-ink-subtle">
            {{ fact.detail }}
          </dd>
        </div>
      </dl>
    </section>

    <!-- What happens on the demo. Phones read heading, agenda, then the booking button; from lg the agenda sits right. -->
    <section id="demo" aria-labelledby="contact-demo-title" class="scroll-mt-16 py-20 md:py-28">
      <div class="mx-auto grid max-w-page gap-y-12 px-4 sm:px-6 lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:gap-x-12 lg:gap-y-8">
        <SectionHeading
          id="contact-demo-title"
          class="lg:col-span-5"
          :eyebrow="t('contact.demo.eyebrow')"
          :title="t('contact.demo.title')"
          :lead="t('contact.demo.lead')"
        />

        <ol :aria-label="t('contact.demo.agendaLabel')" class="lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-1">
          <li v-for="item in agenda" :key="item.title" class="flex gap-5 border-t border-line py-7 first:border-t-0 first:pt-0 lg:first:pt-1">
            <span class="flex size-11 shrink-0 items-center justify-center rounded-full border border-line-strong bg-surface">
              <Icon :name="item.icon" class="size-5! text-accent-600" aria-hidden="true" />
            </span>
            <div class="min-w-0">
              <h3 class="text-lg font-medium text-ink">
                {{ item.title }}
              </h3>
              <p class="mt-2 max-w-[62ch] text-[15px] leading-relaxed text-ink-muted">
                {{ item.body }}
              </p>
            </div>
          </li>
        </ol>

        <div class="lg:col-span-5">
          <div class="flex flex-col sm:flex-row">
            <AppButton :href="CALENDLY_URL" size="lg" icon="hugeicons:arrow-right-02">
              {{ t('common.cta.demo') }}
            </AppButton>
          </div>
          <p class="mt-3 text-sm text-ink-subtle">
            {{ t('contact.demo.bookNote') }}
          </p>
          <div class="mt-10 flex gap-4 border-t border-line pt-6">
            <Icon name="hugeicons:user-group" class="mt-0.5 size-5! shrink-0 text-accent-600" aria-hidden="true" />
            <div class="min-w-0">
              <h3 class="text-base font-medium text-ink">
                {{ t('contact.demo.invite.title') }}
              </h3>
              <p class="mt-1.5 max-w-[52ch] text-[15px] leading-relaxed text-ink-muted">
                {{ t('contact.demo.invite.text') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- E-mail: one address, three topics -->
    <section id="email" aria-labelledby="contact-email-title" class="scroll-mt-16 border-y border-line bg-surface py-20 md:py-28">
      <div class="mx-auto max-w-page px-4 sm:px-6">
        <SectionHeading id="contact-email-title" :title="t('contact.email.title')" :continuation="t('contact.email.continuation')" />
        <i18n-t keypath="contact.email.lead" scope="global" tag="p" class="mt-5 max-w-[60ch] text-lead text-ink-muted">
          <template #email>
            <a :href="mailto()" class="font-medium whitespace-nowrap text-accent-600 underline decoration-accent-600/30 underline-offset-4 hover:decoration-accent-600">{{ CONTACT_EMAIL }}</a>
          </template>
        </i18n-t>

        <ul class="mt-12 grid gap-4 md:mt-14 lg:grid-cols-3">
          <li v-for="channel in channels" :key="channel.title" class="flex min-w-0 flex-col rounded-card border border-line bg-canvas p-6">
            <Icon :name="channel.icon" class="size-6! text-accent-600" aria-hidden="true" />
            <h3 class="mt-5 text-lg font-medium text-ink">
              {{ channel.title }}
            </h3>
            <p class="mt-2 max-w-[60ch] text-[15px] leading-relaxed text-ink-muted">
              {{ channel.body }}
            </p>
            <a :href="channel.href" class="mt-auto inline-flex items-center gap-2 self-start pt-6 text-sm font-medium text-accent-600 underline decoration-accent-600/30 underline-offset-4 hover:decoration-accent-600">
              {{ channel.link }}
              <Icon name="hugeicons:mail-01" class="size-4! shrink-0" aria-hidden="true" />
            </a>
          </li>
        </ul>

        <div class="mt-4 flex flex-col gap-5 rounded-card bg-surface-muted p-6 ring-1 ring-line ring-inset sm:flex-row sm:items-center sm:justify-between">
          <div class="flex min-w-0 gap-4">
            <Icon name="hugeicons:login-03" class="mt-0.5 size-5! shrink-0 text-accent-600" aria-hidden="true" />
            <div class="min-w-0">
              <p class="text-base font-medium text-ink">
                {{ t('contact.email.signIn.title') }}
              </p>
              <p class="mt-1 text-[15px] leading-relaxed text-ink-muted">
                {{ t('contact.email.signIn.text') }}
              </p>
            </div>
          </div>
          <AppButton :href="APP_URL" variant="secondary" class="w-full sm:w-auto">
            {{ t('common.cta.signIn') }}
          </AppButton>
        </div>

        <p class="mt-8 flex max-w-[80ch] gap-2.5 text-sm leading-relaxed text-ink-subtle">
          <Icon name="hugeicons:information-circle" class="mt-0.5 size-4! shrink-0" aria-hidden="true" />
          {{ t('contact.email.notAdvice') }}
        </p>
      </div>
    </section>

    <!-- Related pages -->
    <section aria-labelledby="contact-related-title" class="py-20 md:py-28">
      <div class="mx-auto max-w-page px-4 sm:px-6">
        <SectionHeading id="contact-related-title" :title="t('contact.related.title')" :lead="t('contact.related.lead')" />
        <ul class="mt-12 grid gap-4 sm:grid-cols-2 md:mt-14 xl:grid-cols-4">
          <li v-for="link in related" :key="link.key" class="min-w-0">
            <NuxtLink :to="localePath(link.to)" class="group flex h-full flex-col rounded-card border border-line bg-surface p-6 transition-[border-color,box-shadow] duration-150 hover:border-line-strong hover:shadow-card">
              <h3 class="flex items-start justify-between gap-3 text-lg font-medium text-ink">
                {{ t(`common.nav.${link.nav}`) }}
                <Icon name="hugeicons:arrow-right-02" class="mt-1.5 size-4! shrink-0 text-ink-subtle transition-transform duration-150 group-hover:translate-x-0.5" aria-hidden="true" />
              </h3>
              <p class="mt-2 text-[15px] leading-relaxed text-ink-muted">
                {{ t(`contact.related.${link.key}`) }}
              </p>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </section>

    <CtaBand :title="t('contact.cta.title')" :text="t('contact.cta.text')" />
  </div>
</template>
