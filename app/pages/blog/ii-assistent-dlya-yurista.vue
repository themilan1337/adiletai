<script setup lang="ts">
// Blog post /blog/ii-assistent-dlya-yurista ("AI assistant for lawyers"). The long-form body is one plain SFC per locale
// (components/content/blog/ii-assistent-dlya-yurista/<locale>.vue, i18n-tech.md section 7). Section headings and ids come
// from postIiAssistentDlyaYurista.toc, shared by the body and the table of contents. Every product statement maps to
// claims.md. Dates come from BLOG_POSTS; bump dateModified there when any of the three bodies changes.
// JSON-LD: BlogPosting here, BreadcrumbList from <Breadcrumbs>.
const SLUG = 'ii-assistent-dlya-yurista'
const NS = 'postIiAssistentDlyaYurista'
const post = BLOG_POSTS.find(p => p.slug === SLUG)!
// Order = order of the H2 sections in every body.
const SECTIONS = ['research', 'contracts', 'tables', 'disputes', 'translation', 'verification', 'data', 'start'] as const
const READING_TIME = 7 // minutes; the bodies run 1,200-1,600 words in every locale

const bodies: Record<string, Component> = {
  en: defineAsyncComponent(() => import('~/components/content/blog/ii-assistent-dlya-yurista/en.vue')),
  ru: defineAsyncComponent(() => import('~/components/content/blog/ii-assistent-dlya-yurista/ru.vue')),
  kk: defineAsyncComponent(() => import('~/components/content/blog/ii-assistent-dlya-yurista/kk.vue')),
}

const { t, locale } = useI18n()
const site = useSiteConfig()
const toc = computed(() => SECTIONS.map(id => ({ id, label: t(`${NS}.toc.${id}`) })))

useSeoMeta({
  title: () => t(`${NS}.meta.title`),
  description: () => t(`${NS}.meta.description`),
  ogTitle: () => t(`${NS}.meta.title`),
  ogDescription: () => t(`${NS}.meta.description`),
  twitterTitle: () => t(`${NS}.meta.title`),
  twitterDescription: () => t(`${NS}.meta.description`),
  ogType: 'article',
  articlePublishedTime: post.datePublished,
  articleModifiedTime: post.dateModified,
})

useSchemaOrg([{
  '@type': 'BlogPosting',
  'headline': () => t(`${NS}.meta.title`), // the H1 carries display-only U+00A0 / U+2011
  'description': () => t(`${NS}.meta.description`),
  'image': () => `${site.url}/og/${locale.value}.png`,
  'datePublished': post.datePublished,
  'dateModified': post.dateModified,
  'author': { '@id': `${site.url}/#organization` },
  'publisher': { '@id': `${site.url}/#organization` },
}])
</script>

<template>
  <div>
    <div class="mx-auto max-w-page px-4 pt-10 pb-20 sm:px-6 md:pt-16 md:pb-28">
      <Breadcrumbs :items="[{ label: t('common.nav.blog'), to: '/blog' }, { label: t(`${NS}.breadcrumb`) }]" class="mb-10 md:mb-14" />

      <!-- Phones and tablets: header, contents, body in one 40rem column (figures and contents align with the text).
           lg: body column on the left, sticky contents on the right. -->
      <article class="max-w-copy lg:grid lg:max-w-none lg:grid-cols-[minmax(0,40rem)_minmax(0,15rem)] lg:justify-between lg:gap-x-16">
        <ArticleHeader
          class="lg:col-start-1 lg:row-start-1"
          :title="t(`${NS}.title`)"
          :description="t(`${NS}.lead`)"
          :author="t('blog.post.author')"
          :published="post.datePublished"
          :updated="post.dateModified"
          :reading-time="READING_TIME"
        />

        <aside class="mt-10 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mt-2">
          <ContentBlogPostToc :items="toc" />
        </aside>

        <div class="min-w-0 lg:col-start-1 lg:row-start-2">
          <div class="post-body mt-12 md:mt-14">
            <component :is="bodies[locale]" />
          </div>

          <ContentBlogPostRelated :slug="SLUG" />
        </div>
      </article>
    </div>

    <CtaBand :title="t(`${NS}.cta.title`)" :text="t(`${NS}.cta.text`)" />
  </div>
</template>

<style scoped>
/* The body alternates ProseArticle segments (one per section) with product figures, so the mockups stay outside the
   prose typography. These rules style the pieces the bodies share. */
.post-body :deep(h2[id]) { scroll-margin-top: 6rem; }
.post-body :deep(.post-section + .post-section),
.post-body :deep(figure + .post-section) { margin-top: 3.5rem; }
.post-body :deep(.post-section + figure) { margin-top: 2.5rem; }

/* Example prompt: a quiet card, set apart from the running text. */
.post-body :deep(.post-prompt) {
  margin-top: 1.5em;
  border: 1px solid var(--color-line);
  border-left: 2px solid var(--color-accent-500);
  border-radius: var(--radius-card);
  background: var(--color-surface);
  padding: 0.9rem 1.15rem 1rem;
  font-size: 0.96em;
  line-height: 1.65;
  color: var(--color-ink);
}
.post-body :deep(.post-prompt-label) {
  margin: 0;
  font-size: var(--text-micro);
  line-height: var(--text-micro--line-height);
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-ink-subtle);
}
.post-body :deep(.post-prompt > :not(.post-prompt-label)) { margin-top: 0.4em; }
.post-body :deep(.post-prompt ul) { padding-left: 1.2em; }
/* A prompt is text the reader types, so no automatic hyphens (the RU running text has them). */
.post-body :deep(.post-prompt :is(p, li)) { hyphens: manual; }

/* Closing note: general information, not legal advice. No rule of its own: the related-pages rule follows right after. */
.post-body :deep(.post-note) { margin-top: 2.5em; font-size: 0.875rem; line-height: 1.6; color: var(--color-ink-subtle); }
</style>
