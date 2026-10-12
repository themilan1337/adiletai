<script setup lang="ts">
// Terms of use (B2B): covers adiletai.com and the platform at business.adiletai.com. The legal text is one plain SFC
// per locale (app/components/content/legal/terms/<locale>.vue); meta, section headings and page chrome live in
// legalTerms.json. Section order is defined once here (TOC numbers); the body gets its headings through `h(id)` and its
// numbers from the same CSS counter as legal/privacy, so contents and body headings stay in step. No CtaBand: legal page.
const bodies = {
  en: defineAsyncComponent(() => import('~/components/content/legal/terms/en.vue')),
  ru: defineAsyncComponent(() => import('~/components/content/legal/terms/ru.vue')),
  kk: defineAsyncComponent(() => import('~/components/content/legal/terms/kk.vue')),
}

// Static on purpose (never new Date()): change it together with the text.
const UPDATED = '2026-10-12'
const SECTIONS = ['scope', 'site', 'platform', 'access', 'use', 'output', 'content', 'fees', 'ip', 'warranty', 'liability', 'termination', 'changes', 'law', 'contact'] as const

const { t, locale } = useI18n()
const localePath = useLocalePath()

// Body headings get their number from the CSS counter below (as on legal/privacy), so h(id) returns the title only.
const h = (id: string) => t(`legalTerms.sections.${id}`)
// TOC renders the number in its own column so wrapped (RU/KK) titles hang-indent under the text, not the number.
const toc = computed(() => SECTIONS.map((id, i) => ({ id, n: `${i + 1}.`, label: t(`legalTerms.sections.${id}`) })))
const related = computed(() => [
  { to: '/legal/privacy', label: t('common.legalLinks.privacy') },
  { to: '/legal/disclaimer', label: t('common.legalLinks.disclaimer') },
  { to: '/security', label: t('common.nav.security') },
])

useSeoMeta({
  title: () => t('legalTerms.meta.title'),
  description: () => t('legalTerms.meta.description'),
  ogTitle: () => t('legalTerms.meta.title'),
  ogDescription: () => t('legalTerms.meta.description'),
  twitterTitle: () => t('legalTerms.meta.title'),
  twitterDescription: () => t('legalTerms.meta.description'),
})

// Same absolute @id as the WebPage node @nuxtjs/seo emits for this URL, so dateModified merges into it.
const site = useSiteConfig()
const route = useRoute()
useSchemaOrg([{ '@type': 'WebPage', '@id': () => `${site.url}${route.path}#webpage`, 'dateModified': UPDATED }])
</script>

<template>
  <div class="mx-auto max-w-page px-4 pt-10 pb-24 sm:px-6 md:pt-16 md:pb-32">
    <Breadcrumbs :items="[{ label: t('legalTerms.title') }]" class="mb-10 md:mb-14" />

    <div class="lg:grid lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-16 xl:gap-24">
      <div class="min-w-0">
        <!-- max-w-copy: the lead's own 60ch overhangs the body column at md/lg; keep one right edge (as privacy does). -->
        <ArticleHeader class="max-w-copy" :title="t('legalTerms.title')" :description="t('legalTerms.lead')" :updated="UPDATED" />

        <!-- Phones and tablets: collapsible contents -->
        <details class="group mt-10 max-w-copy rounded-card border border-line bg-surface lg:hidden">
          <summary class="flex cursor-pointer list-none items-center justify-between gap-4 rounded-card px-5 py-4 text-sm font-medium text-ink focus-visible:-outline-offset-2 [&::-webkit-details-marker]:hidden">
            {{ t('legalTerms.toc') }}
            <Icon name="hugeicons:arrow-down-01" class="size-4! shrink-0 text-ink-subtle transition-transform duration-200 group-open:rotate-180" aria-hidden="true" />
          </summary>
          <nav :aria-label="t('legalTerms.toc')" class="border-t border-line px-5 py-3">
            <ol class="text-sm">
              <li v-for="s in toc" :key="s.id" class="hyphens-none">
                <a :href="`#${s.id}`" class="flex gap-2 rounded-sm py-1.5 text-ink-muted transition-colors hover:text-ink">
                  <span class="w-5 shrink-0 text-ink-subtle tabular-nums">{{ s.n }}</span>
                  <span class="min-w-0">{{ s.label }}</span>
                </a>
              </li>
            </ol>
          </nav>
        </details>

        <!-- Links never auto-hyphenate (RU body has hyphens: auto): a split link label reads as two links. -->
        <ProseArticle class="legal-body mt-12 md:mt-14 [&_a]:hyphens-manual">
          <component :is="bodies[locale as keyof typeof bodies]" :h="h" />
        </ProseArticle>

        <nav aria-labelledby="terms-related" class="mt-16 max-w-copy border-t border-line pt-8">
          <h2 id="terms-related" class="text-sm font-medium text-ink-subtle">
            {{ t('legalTerms.related') }}
          </h2>
          <ul class="mt-4 border-t border-line">
            <li v-for="r in related" :key="r.to" class="border-b border-line">
              <NuxtLink :to="localePath(r.to)" class="group flex items-center justify-between gap-4 py-4 text-[17px] font-medium text-ink transition-colors hover:text-accent-700">
                {{ r.label }}
                <Icon name="hugeicons:arrow-right-02" class="size-4! shrink-0 text-ink-subtle transition-transform group-hover:translate-x-0.5 group-hover:text-accent-700" aria-hidden="true" />
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>

      <!-- Desktop: sticky contents -->
      <aside class="hidden lg:block">
        <nav :aria-label="t('legalTerms.toc')" class="sticky top-28 max-h-[calc(100dvh-8rem)] overflow-y-auto">
          <p class="text-sm font-medium text-ink-subtle">
            {{ t('legalTerms.toc') }}
          </p>
          <ol class="mt-4 border-l border-line text-sm">
            <li v-for="s in toc" :key="s.id" class="hyphens-none">
              <!-- Inset focus ring: the scroll container clips an outset outline on the left and right. -->
              <a :href="`#${s.id}`" class="-ml-px flex gap-2 border-l border-transparent py-1.5 pl-4 leading-snug text-ink-muted transition-colors hover:border-ink hover:text-ink focus-visible:-outline-offset-2">
                <span class="w-5 shrink-0 text-ink-subtle tabular-nums">{{ s.n }}</span>
                <span class="min-w-0">{{ s.label }}</span>
              </a>
            </li>
          </ol>
        </nav>
      </aside>
    </div>
  </div>
</template>

<style scoped>
/* Same numbering as legal/privacy: a CSS counter over the body's section H2s (the only H2s with an id), in a flex row
   so a wrapped (RU/KK) title hangs under its own text, not under the number. */
.legal-body { counter-reset: legal-section; }
.legal-body :deep(h2[id]) { display: flex; gap: 0.45em; counter-increment: legal-section; scroll-margin-top: 6rem; }
.legal-body :deep(h2[id]::before) {
  content: counter(legal-section) ".";
  flex: none;
  color: var(--color-ink-subtle);
  font-variant-numeric: lining-nums tabular-nums;
}
</style>
