<script setup lang="ts">
// Security and data handling: a trust page for the legal buyer and their security team. Copy lives in
// i18n/locales/<locale>/security.json and states only the approved controls, each with its exact scope
// (pseudonymisation = typed messages; encryption at rest = uploaded files). Light sections first, then the single
// dark block (providers -> CTA band -> footer). JSON-LD: BreadcrumbList (via PageHero) and FAQPage from the visible FAQ.
const { t, tm, rt } = useI18n()
const localePath = useLocalePath()

type Item = { title: string, body: string }
// Renders every leaf of an array of message objects (tm + rt), e.g. [{ title, body }].
const list = <T extends Record<string, string>>(key: string) =>
  (tm(key) as T[]).map(o => Object.fromEntries(Object.entries(o).map(([k, v]) => [k, rt(v)])) as T)
const withIcons = <T extends Item>(items: T[], icons: string[]) => items.map((it, i) => ({ ...it, icon: icons[i]! }))

const principles = computed(() => withIcons(list<Item>('security.principles.items'), ['hugeicons:user-lock-01', 'hugeicons:message-lock-01', 'hugeicons:global', 'hugeicons:user-check-01']))
const signIn = computed(() => withIcons(list<Item>('security.account.flow.steps'), ['hugeicons:user-account', 'hugeicons:key-01', 'hugeicons:server-stack-01']))
const protection = computed(() => withIcons(list<Item & { label: string }>('security.protection.items'), ['hugeicons:square-lock-02', 'hugeicons:file-locked', 'hugeicons:web-protection', 'hugeicons:security-check']))
const identifiers = computed(() => (tm('security.personal.identifiers') as string[]).map(s => rt(s)))
const workspace = computed(() => withIcons(list<Item>('security.workspace.items'), ['hugeicons:folder-locked', 'hugeicons:delete-02']))
const responsible = computed(() => withIcons(list<Item>('security.responsible.items'), ['hugeicons:books-02', 'hugeicons:alert-02', 'hugeicons:document-validation', 'hugeicons:justice-scale-01']))
const requestFlow = computed(() => withIcons(list<Item>('security.providers.flow.steps'), ['hugeicons:browser', 'hugeicons:message-lock-01', 'hugeicons:ai-chip', 'hugeicons:arrow-turn-backward']))
const faq = computed(() => list<{ q: string, a: string }>('security.faq.items'))
const subprocessorMail = computed(() => `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(t('security.providers.subject'))}`)

useSeoMeta({
  title: () => t('security.meta.title'),
  description: () => t('security.meta.description'),
  ogTitle: () => t('security.meta.title'),
  ogDescription: () => t('security.meta.description'),
  twitterTitle: () => t('security.meta.title'),
  twitterDescription: () => t('security.meta.description'),
})

useSchemaOrg([{
  '@type': 'FAQPage',
  'mainEntity': () => faq.value.map(i => ({ '@type': 'Question', 'name': i.q, 'acceptedAnswer': { '@type': 'Answer', 'text': i.a } })),
}])

const link = 'font-medium text-accent-600 underline decoration-accent-600/30 underline-offset-4 transition-colors hover:decoration-accent-600'
</script>

<template>
  <div class="wrap-break-word">
    <!-- ponytail: inherited overflow-wrap guard; one long Kazakh word in a display heading must not push past its column -->
    <PageHero
      :title="t('security.hero.title')"
      :lead="t('security.hero.lead')"
      :breadcrumbs="[{ label: t('common.nav.security') }]"
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

    <!-- Principles -->
    <section id="principles" aria-labelledby="sec-principles" class="scroll-mt-16 border-t border-line py-20 md:py-28">
      <div class="mx-auto max-w-page px-4 sm:px-6">
        <SectionHeading id="sec-principles" :title="t('security.principles.title')" :continuation="t('security.principles.continuation')" />
        <ul class="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 md:mt-16 xl:grid-cols-4">
          <li v-for="p in principles" :key="p.title" class="min-w-0 border-t border-line-strong pt-6">
            <Icon :name="p.icon" class="size-6! text-accent-600" aria-hidden="true" />
            <h3 class="hyphens-manual mt-5 text-lg leading-snug font-semibold text-ink">
              {{ p.title }}
            </h3>
            <p class="mt-2 text-sm leading-relaxed text-ink-muted">
              {{ p.body }}
            </p>
          </li>
        </ul>
      </div>
    </section>

    <!-- Account security -->
    <section id="account" aria-labelledby="sec-account" class="scroll-mt-16 border-y border-line bg-surface py-20 md:py-28">
      <div class="mx-auto grid max-w-page gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12">
        <div class="min-w-0 lg:col-span-5">
          <SectionHeading id="sec-account" :title="t('security.account.title')" :lead="t('security.account.lead')" />
          <div class="mt-8 flex gap-4 rounded-card bg-surface-muted p-5">
            <Icon name="hugeicons:smart-phone-01" class="mt-0.5 size-5! shrink-0 text-accent-600" aria-hidden="true" />
            <div class="min-w-0">
              <h3 class="hyphens-manual text-base font-semibold text-ink">
                {{ t('security.account.twoFactor.title') }}
              </h3>
              <p class="mt-1.5 text-sm leading-relaxed text-ink-muted">
                {{ t('security.account.twoFactor.body') }}
              </p>
            </div>
          </div>
        </div>
        <SecurityFlow class="reveal min-w-0 lg:col-span-6 lg:col-start-7 lg:self-start" :title="t('security.account.flow.title')" :steps="signIn" />
      </div>
    </section>

    <!-- Data protection -->
    <section id="data-protection" aria-labelledby="sec-protection" class="scroll-mt-16 py-20 md:py-28">
      <div class="mx-auto max-w-page px-4 sm:px-6">
        <SectionHeading id="sec-protection" :title="t('security.protection.title')" :lead="t('security.protection.lead')" />
        <ul class="mt-12 grid gap-4 sm:grid-cols-2 md:mt-16 xl:grid-cols-4">
          <li v-for="item in protection" :key="item.title" class="flex min-w-0 flex-col rounded-tile bg-surface p-6 ring-1 ring-line">
            <div class="flex items-center justify-between gap-3">
              <Icon :name="item.icon" class="size-6! shrink-0 text-accent-600" aria-hidden="true" />
              <span class="rounded bg-surface-muted px-2 py-1 font-mono text-xs text-ink-muted ring-1 ring-line">{{ item.label }}</span>
            </div>
            <h3 class="hyphens-manual mt-8 text-lg leading-snug font-semibold text-ink">
              {{ item.title }}
            </h3>
            <p class="mt-2 text-sm leading-relaxed text-ink-muted">
              {{ item.body }}
            </p>
          </li>
        </ul>
        <p class="mt-6 flex max-w-[70ch] items-start gap-2.5 rounded-card bg-surface-muted px-4 py-3 text-sm text-ink-muted">
          <Icon name="hugeicons:information-circle" class="mt-0.5 size-4! shrink-0 text-accent-600" aria-hidden="true" />
          {{ t('security.protection.scope') }}
        </p>
      </div>
    </section>

    <!-- Personal data: pseudonymisation of typed messages -->
    <section id="personal-data" aria-labelledby="sec-personal" class="scroll-mt-16 border-t border-line py-20 md:py-28">
      <div class="mx-auto grid max-w-page gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12">
        <div class="min-w-0 lg:col-span-6">
          <SectionHeading id="sec-personal" :title="t('security.personal.title')" :lead="t('security.personal.lead')" />
          <p class="mt-5 max-w-[60ch] text-base leading-relaxed text-ink-muted">
            {{ t('security.personal.body') }}
          </p>
          <h3 class="hyphens-manual mt-8 text-sm font-semibold text-ink">
            {{ t('security.personal.listLabel') }}
          </h3>
          <ul class="mt-3 flex flex-wrap gap-2">
            <li v-for="id in identifiers" :key="id" class="rounded-full bg-surface px-3 py-1 text-sm text-ink ring-1 ring-line-strong">
              {{ id }}
            </li>
          </ul>
          <div class="mt-8 border-l-2 border-accent-500 pl-4">
            <h3 class="hyphens-manual text-sm font-semibold text-ink">
              {{ t('security.personal.scopeTitle') }}
            </h3>
            <p class="mt-1 text-sm leading-relaxed text-ink-muted">
              {{ t('security.personal.scope') }}
            </p>
            <p class="mt-2 text-sm leading-relaxed text-ink-muted">
              {{ t('security.personal.caveat') }}
            </p>
          </div>
        </div>
        <div class="min-w-0 lg:col-span-6">
          <MockPseudonymisation class="reveal" />
        </div>
      </div>
    </section>

    <!-- Privacy of your workspace -->
    <section id="workspace" aria-labelledby="sec-workspace" class="scroll-mt-16 border-y border-line bg-surface py-20 md:py-28">
      <div class="mx-auto grid max-w-page gap-12 px-4 sm:px-6 xl:grid-cols-12">
        <div class="min-w-0 xl:col-span-5">
          <SectionHeading id="sec-workspace" :title="t('security.workspace.title')" />
          <i18n-t keypath="security.workspace.privacy" scope="global" tag="p" class="mt-6 max-w-[46ch] text-base leading-relaxed text-ink-muted hyphens-manual">
            <template #link>
              <NuxtLink :to="localePath('/legal/privacy')" :class="link">{{ t('security.workspace.privacyLink') }}</NuxtLink>
            </template>
          </i18n-t>
        </div>
        <ul class="grid min-w-0 gap-4 sm:grid-cols-2 xl:col-span-7">
          <li
            v-for="(item, i) in workspace"
            :key="item.title"
            class="flex min-w-0 flex-col rounded-tile p-6 md:p-8"
            :class="i === 0 ? 'bg-accent-50 ring-1 ring-accent-100' : 'bg-surface-muted'"
          >
            <Icon :name="item.icon" class="size-6! text-accent-600" aria-hidden="true" />
            <h3 class="hyphens-manual mt-10 font-display text-display-3 text-ink">
              {{ item.title }}
            </h3>
            <p class="mt-3 text-sm leading-relaxed text-ink-muted">
              {{ item.body }}
            </p>
          </li>
        </ul>
      </div>
    </section>

    <!-- Responsible use -->
    <section id="responsible-use" aria-labelledby="sec-responsible" class="scroll-mt-16 py-20 md:py-28">
      <div class="mx-auto max-w-page px-4 sm:px-6">
        <SectionHeading id="sec-responsible" :title="t('security.responsible.title')" :continuation="t('security.responsible.continuation')" />
        <div class="mt-12 grid gap-12 md:mt-16 lg:grid-cols-12 lg:gap-12">
          <div class="min-w-0 lg:col-span-7">
            <ul class="divide-y divide-line border-y border-line">
              <li v-for="item in responsible" :key="item.title" class="flex gap-4 py-5">
                <Icon :name="item.icon" class="mt-0.5 size-5! shrink-0 text-accent-600" aria-hidden="true" />
                <div class="min-w-0">
                  <h3 class="hyphens-manual text-base font-semibold text-ink">
                    {{ item.title }}
                  </h3>
                  <p class="mt-1.5 max-w-[60ch] text-sm leading-relaxed text-ink-muted">
                    {{ item.body }}
                  </p>
                </div>
              </li>
            </ul>
            <NuxtLink :to="localePath('/how-it-works')" class="mt-6 inline-flex items-center gap-1.5 text-sm" :class="link">
              {{ t('security.responsible.link') }}
              <Icon name="hugeicons:arrow-right-02" class="size-4!" aria-hidden="true" />
            </NuxtLink>
          </div>
          <MockFrame class="reveal lg:col-span-5" :caption="t('security.responsible.caption')" tile-class="p-3 sm:p-6">
            <MockMemoExport />
          </MockFrame>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section id="faq" aria-labelledby="sec-faq" class="scroll-mt-16 border-t border-line py-20 md:py-28">
      <div class="mx-auto grid max-w-page gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12">
        <!-- 5/7, not the 4/8 used elsewhere: RU «Вопросы о безопасности» keeps «о безопасности» together (U+00A0, glossary 2.4),
             and that unit is wider than 4 columns at 1024-1440, so the wrap guard split the word mid-way. -->
        <div class="min-w-0 lg:col-span-5">
          <div class="lg:sticky lg:top-24">
            <h2 id="sec-faq" class="font-display text-display-2 text-ink">
              {{ t('security.faq.title') }}
            </h2>
            <i18n-t keypath="security.faq.more" scope="global" tag="p" class="mt-5 text-base text-ink-muted">
              <template #email>
                <a :href="`mailto:${CONTACT_EMAIL}`" :class="link">{{ CONTACT_EMAIL }}</a>
              </template>
            </i18n-t>
          </div>
        </div>
        <FaqList :items="faq" open class="min-w-0 lg:col-span-7" />
      </div>
    </section>

    <!-- AI providers and sub-processors: the dark block starts here and runs through the CTA band and footer -->
    <section id="providers" aria-labelledby="sec-providers" class="scroll-mt-16 bg-night py-24 text-stone-300 md:py-32 [&_:focus-visible]:outline-accent-300">
      <div class="mx-auto grid max-w-page gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12">
        <div class="min-w-0 lg:col-span-6 xl:col-span-5">
          <div class="lg:sticky lg:top-24">
            <SectionHeading id="sec-providers" dark :eyebrow="t('security.providers.eyebrow')" :title="t('security.providers.title')" :lead="t('security.providers.lead')" />
            <p class="mt-5 max-w-[52ch] text-base leading-relaxed text-stone-300">
              {{ t('security.providers.body') }}
            </p>
            <a :href="subprocessorMail" class="mt-8 inline-flex items-center gap-2 text-sm font-medium text-accent-300 underline decoration-accent-300/30 underline-offset-4 transition-colors hover:decoration-accent-300">
              {{ t('security.providers.request') }}
              <Icon name="hugeicons:mail-01" class="size-4!" aria-hidden="true" />
            </a>
            <p class="mt-8 border-t border-white/10 pt-6 text-sm leading-relaxed text-stone-300">
              {{ t('security.providers.custom') }}
              <NuxtLink :to="localePath('/contact')" class="font-medium whitespace-nowrap text-accent-300 underline decoration-accent-300/40 underline-offset-4 hover:decoration-accent-300">
                {{ t('security.providers.customLink') }}
              </NuxtLink>
            </p>
          </div>
        </div>
        <SecurityFlow dark class="reveal min-w-0 lg:col-span-6 lg:col-start-7 lg:self-start" :title="t('security.providers.flow.title')" :steps="requestFlow" />
      </div>
    </section>

    <CtaBand :title="t('security.cta.title')" :text="t('security.cta.text')" />
  </div>
</template>
