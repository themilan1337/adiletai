<script setup lang="ts">
// Privacy policy (/legal/privacy). The long-form body is one plain SFC per locale
// (components/content/legal/privacy/<locale>.vue, i18n-tech.md section 7). Section headings and ids come from
// legalPrivacy.toc, shared by the body and the table of contents, so the two never drift.
// Every statement maps to claims.md. Bump UPDATED whenever any of the three bodies changes.
const UPDATED = '2026-10-12'
// Order = section numbering in the body (CSS counter below) and in the table of contents.
const SECTIONS = ['scope', 'data', 'purposes', 'grounds', 'providers', 'pseudonymisation', 'security', 'retention', 'rights', 'changes', 'contact'] as const

const bodies: Record<string, Component> = {
  en: defineAsyncComponent(() => import('~/components/content/legal/privacy/en.vue')),
  ru: defineAsyncComponent(() => import('~/components/content/legal/privacy/ru.vue')),
  kk: defineAsyncComponent(() => import('~/components/content/legal/privacy/kk.vue')),
}

const related = [
  { label: 'common.legalLinks.terms', to: '/legal/terms' },
  { label: 'common.legalLinks.disclaimer', to: '/legal/disclaimer' },
  { label: 'common.nav.security', to: '/security' },
]

const { t, locale } = useI18n()
const localePath = useLocalePath()

useSeoMeta({
  title: () => t('legalPrivacy.meta.title'),
  description: () => t('legalPrivacy.meta.description'),
  ogTitle: () => t('legalPrivacy.meta.title'),
  ogDescription: () => t('legalPrivacy.meta.description'),
  twitterTitle: () => t('legalPrivacy.meta.title'),
  twitterDescription: () => t('legalPrivacy.meta.description'),
})

// Same absolute @id as the WebPage node @nuxtjs/seo emits for this URL, so dateModified merges into it.
const site = useSiteConfig()
const route = useRoute()
useSchemaOrg([{ '@type': 'WebPage', '@id': () => `${site.url}${route.path}#webpage`, 'dateModified': UPDATED }])
</script>

<template>
  <div class="mx-auto max-w-page px-4 pt-10 pb-24 sm:px-6 md:pt-16 md:pb-32">
    <Breadcrumbs :items="[{ label: t('common.legalLinks.privacy') }]" class="mb-10 md:mb-14" />

    <!-- Same frame as legal/terms and legal/disclaimer: collapsible contents below lg, sticky contents column at lg. -->
    <div class="lg:grid lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-16 xl:gap-24">
      <div class="min-w-0">
        <!-- hyphens-auto on the H1: RU «конфиденциальности» is wider than the column below 390px, and the global heading
             overflow-wrap guard otherwise cuts it with no hyphen («конфиденциальнос / ти»). -->
        <ArticleHeader
          class="max-w-copy [&_h1]:hyphens-auto"
          :title="t('legalPrivacy.title')"
          :description="t('legalPrivacy.lead')"
          :updated="UPDATED"
        />

        <!-- Phones and tablets: collapsible contents -->
        <details class="group mt-10 max-w-copy rounded-card border border-line bg-surface lg:hidden">
          <summary class="flex cursor-pointer list-none items-center justify-between gap-4 rounded-card px-5 py-4 text-sm font-medium text-ink focus-visible:-outline-offset-2 [&::-webkit-details-marker]:hidden">
            {{ t('legalPrivacy.tocLabel') }}
            <Icon name="hugeicons:arrow-down-01" class="size-4! shrink-0 text-ink-subtle transition-transform duration-200 group-open:rotate-180" aria-hidden="true" />
          </summary>
          <nav :aria-label="t('legalPrivacy.tocLabel')" class="border-t border-line px-5 py-3">
            <ol class="text-sm">
              <li v-for="(id, i) in SECTIONS" :key="id" class="hyphens-none">
                <a :href="`#${id}`" class="flex gap-2 rounded-sm py-1.5 text-ink-muted transition-colors hover:text-ink">
                  <span class="w-6 shrink-0 text-ink-subtle tabular-nums">{{ i + 1 }}.</span>
                  <span class="min-w-0">{{ t(`legalPrivacy.toc.${id}`) }}</span>
                </a>
              </li>
            </ol>
          </nav>
        </details>

        <!-- Links never wrap: every link in the bodies is short, and a split "6-/бөлімде" or "section/6" reads as two links. -->
        <ProseArticle class="privacy-body mt-12 md:mt-14 [&_a]:whitespace-nowrap">
          <component :is="bodies[locale]" />
        </ProseArticle>

        <nav aria-labelledby="privacy-related" class="mt-16 max-w-copy border-t border-line pt-8">
          <h2 id="privacy-related" class="text-sm font-medium text-ink-subtle">
            {{ t('legalPrivacy.related') }}
          </h2>
          <ul class="mt-4 border-t border-line">
            <li v-for="link in related" :key="link.to" class="border-b border-line">
              <NuxtLink :to="localePath(link.to)" class="group flex items-center justify-between gap-4 py-4 text-[17px] font-medium text-ink transition-colors hover:text-accent-700">
                {{ t(link.label) }}
                <Icon name="hugeicons:arrow-right-02" class="size-4! shrink-0 text-ink-subtle transition-transform group-hover:translate-x-0.5 group-hover:text-accent-700" aria-hidden="true" />
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>

      <!-- Desktop: sticky contents -->
      <aside class="hidden lg:block">
        <nav :aria-label="t('legalPrivacy.tocLabel')" class="sticky top-28 max-h-[calc(100dvh-8rem)] overflow-y-auto">
          <p class="text-sm font-medium text-ink-subtle">
            {{ t('legalPrivacy.tocLabel') }}
          </p>
          <ol class="mt-4 border-l border-line text-sm">
            <li v-for="(id, i) in SECTIONS" :key="id" class="hyphens-none">
              <!-- Inset focus ring: the scroll container clips an outset outline on the left and right. -->
              <a :href="`#${id}`" class="-ml-px flex gap-2 border-l border-transparent py-1.5 pl-4 leading-snug text-ink-muted transition-colors hover:border-ink hover:text-ink focus-visible:-outline-offset-2">
                <span class="w-6 shrink-0 text-ink-subtle tabular-nums">{{ i + 1 }}.</span>
                <span class="min-w-0">{{ t(`legalPrivacy.toc.${id}`) }}</span>
              </a>
            </li>
          </ol>
        </nav>
      </aside>
    </div>
  </div>
</template>

<style scoped>
/* Number the body's section headings (only H2s with an id, i.e. the TOC sections) and keep them clear of the sticky header. */
.privacy-body { counter-reset: privacy-section; }
/* Flex row: a wrapped (RU/KK) title hangs under its own text, not under the number. */
.privacy-body :deep(h2[id]) { display: flex; gap: 0.45em; counter-increment: privacy-section; scroll-margin-top: 6rem; }
.privacy-body :deep(h2[id]::before) {
  content: counter(privacy-section) ".";
  flex: none;
  color: var(--color-ink-subtle);
  font-variant-numeric: lining-nums tabular-nums;
}
</style>
