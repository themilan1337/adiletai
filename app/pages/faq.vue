<script setup lang="ts">
// FAQ: questions grouped into categories with stable anchors (#product, #accuracy, ...), a sticky category index and
// a FAQPage JSON-LD node that mirrors the visible questions and answers word for word. Copy lives in faq.json.
type Item = { q: string, a: string }
type Category = { title: string, link?: string, items: Item[] }

const { t, tm, rt } = useI18n()
const localePath = useLocalePath()

// Anchor and related page per category, in the same order as faq.categories (Languages has no related page).
const CATEGORY_META: { id: string, to?: string }[] = [
  { id: 'product', to: '/features' },
  { id: 'accuracy', to: '/how-it-works' },
  { id: 'data', to: '/security' },
  { id: 'languages' },
  { id: 'access', to: '/contact' },
  { id: 'company', to: '/about' },
]

const categories = computed(() => (tm('faq.categories') as Category[]).map((c, i) => ({
  ...CATEGORY_META[i]!,
  title: rt(c.title),
  link: c.link ? rt(c.link) : '',
  items: c.items.map(item => ({ q: rt(item.q), a: rt(item.a) })),
})))

useSeoMeta({
  title: () => t('faq.meta.title'),
  description: () => t('faq.meta.description'),
  ogTitle: () => t('faq.meta.title'),
  ogDescription: () => t('faq.meta.description'),
  twitterTitle: () => t('faq.meta.title'),
  twitterDescription: () => t('faq.meta.description'),
})

// On /faq the module already types this page's WebPage node as FAQPage, so the questions go into its mainEntity
// (one FAQPage node, not two).
useSchemaOrg([defineWebPage({
  mainEntity: () => categories.value.flatMap(c => c.items).map(i => ({
    '@type': 'Question',
    'name': i.q,
    'acceptedAnswer': { '@type': 'Answer', 'text': i.a },
  })),
})])
</script>

<template>
  <div>
    <PageHero
      :title="t('faq.hero.title')"
      :lead="t('faq.hero.lead')"
      :breadcrumbs="[{ label: t('common.nav.faq') }]"
    />

    <div class="border-t border-line">
      <div class="mx-auto grid max-w-page gap-10 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-12 lg:gap-12">
        <aside class="min-w-0 lg:col-span-4">
          <div class="lg:sticky lg:top-24">
            <nav aria-labelledby="faq-nav-label">
              <p id="faq-nav-label" class="text-sm font-medium tracking-[0.06em] text-ink-subtle uppercase">
                {{ t('faq.nav.label') }}
              </p>
              <ol class="mt-4 flex flex-wrap gap-2 hyphens-manual lg:flex-col lg:gap-0 lg:border-l lg:border-line">
                <li v-for="c in categories" :key="c.id">
                  <a
                    :href="`#${c.id}`"
                    class="flex items-baseline gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm text-ink-muted transition-colors hover:border-line-strong hover:text-ink lg:-ml-px lg:justify-between lg:gap-4 lg:rounded-none lg:border-y-0 lg:border-r-0 lg:border-l lg:border-transparent lg:bg-transparent lg:py-2 lg:pr-0 lg:pl-5 lg:text-[15px] lg:hover:border-ink"
                  >
                    {{ c.title }}
                    <span class="text-xs text-ink-subtle tabular-nums" aria-hidden="true">{{ c.items.length }}</span>
                  </a>
                </li>
              </ol>
            </nav>
            <p class="mt-8 text-base text-ink-muted hyphens-manual lg:mt-10">
              {{ t('faq.contact.lead') }}
              <NuxtLink :to="localePath('/contact')" class="font-medium text-accent-600 underline decoration-accent-600/30 underline-offset-4 transition-colors hover:decoration-accent-600">
                {{ t('faq.contact.label') }}
              </NuxtLink>
            </p>
          </div>
        </aside>

        <div class="min-w-0 space-y-16 md:space-y-20 lg:col-span-8">
          <section
            v-for="(c, i) in categories"
            :id="c.id"
            :key="c.id"
            :aria-labelledby="`faq-${c.id}-title`"
            class="scroll-mt-24"
          >
            <h2 :id="`faq-${c.id}-title`" class="font-display text-display-3 text-ink">
              {{ c.title }}
            </h2>
            <FaqList :items="c.items" :open="i === 0" class="mt-6" />
            <NuxtLink
              v-if="c.to"
              :to="localePath(c.to)"
              class="group mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent-600 transition-colors hover:text-accent-700"
            >
              {{ c.link }}
              <Icon name="hugeicons:arrow-right-02" class="size-4! transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </NuxtLink>
          </section>
        </div>
      </div>
    </div>

    <CtaBand :title="t('faq.cta.title')" :text="t('faq.cta.text')" />
  </div>
</template>
