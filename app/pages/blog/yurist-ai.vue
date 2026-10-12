<script setup lang="ts">
// Blog post /blog/yurist-ai: AI and the legal profession in Kazakhstan. The long-form body is one plain SFC per locale
// (components/content/blog/yurist-ai/<locale>.vue, i18n-tech.md section 7), rendered in two parts around the Sources figure.
// H2 text and ids come from postYuristAi.toc, shared by the body and the contents list. Dates come from BLOG_POSTS.
// JSON-LD: BlogPosting (here) + BreadcrumbList (Breadcrumbs). Product statements map to claims.md.
const SLUG = 'yurist-ai'
const SECTIONS = ['tasks', 'limits', 'sources', 'responsibility', 'law', 'skills', 'adoption', 'unchanged'] as const
const READING_MINUTES = 7

const bodies: Record<string, Component> = {
  en: defineAsyncComponent(() => import('~/components/content/blog/yurist-ai/en.vue')),
  ru: defineAsyncComponent(() => import('~/components/content/blog/yurist-ai/ru.vue')),
  kk: defineAsyncComponent(() => import('~/components/content/blog/yurist-ai/kk.vue')),
}

// The Sources panel for the penalty answer used across the site (same sample as MockAssistant). Mockup chrome and
// legislation quotes stay Russian, as in the product.
const SOURCES = [
  { group: 'Документы', icon: 'hugeicons:file-01', items: [
    { n: 1, kind: 'doc' as const, label: 'Договор поставки № 14-П.pdf', subtitle: 'Файл чата', quote: '7.2. За нарушение сроков оплаты Покупатель уплачивает Поставщику пеню за каждый день просрочки без ограничения общей суммы.' },
  ] },
  { group: 'База знаний', icon: 'hugeicons:books-02', items: [
    { n: 2, kind: 'kb' as const, label: 'Статья 297. Уменьшение размера неустойки', subtitle: 'Кодекс · Гражданский кодекс РК (Общая часть)', quote: 'Если подлежащая уплате неустойка (штраф, пеня) чрезмерно велика по сравнению с убытками кредитора, суд по требованию должника вправе уменьшить неустойку (штраф, пеню), учитывая степень выполнения обязательства должником и заслуживающие внимания интересы должника и кредитора.' },
    { n: 3, kind: 'kb' as const, label: 'Статья 293. Понятие неустойки', subtitle: 'Кодекс · Гражданский кодекс РК (Общая часть)', quote: 'По требованию об уплате неустойки кредитор не обязан доказывать причинение ему убытков.' },
  ] },
]

const post = BLOG_POSTS.find(p => p.slug === SLUG)!
const { t, locale } = useI18n()
const route = useRoute()
const site = useSiteConfig()
const toc = computed(() => SECTIONS.map(id => ({ id, label: t(`postYuristAi.toc.${id}`) })))

useSeoMeta({
  title: () => t('postYuristAi.meta.title'),
  description: () => t('postYuristAi.meta.description'),
  ogTitle: () => t('postYuristAi.meta.title'),
  ogDescription: () => t('postYuristAi.meta.description'),
  twitterTitle: () => t('postYuristAi.meta.title'),
  twitterDescription: () => t('postYuristAi.meta.description'),
  ogType: 'article',
  articlePublishedTime: post.datePublished,
  articleModifiedTime: post.dateModified,
})

useSchemaOrg([{
  '@type': 'BlogPosting',
  'headline': () => t('postYuristAi.meta.title'), // the H1 carries display-only U+00A0 / U+2011
  'description': () => t('postYuristAi.meta.description'),
  'datePublished': post.datePublished,
  'dateModified': post.dateModified,
  'image': () => `${site.url}/og/${locale.value}.png`,
  'author': { '@id': `${site.url}/#organization` },
  'publisher': { '@id': `${site.url}/#organization` },
  'mainEntityOfPage': () => ({ '@id': `${site.url}${route.path}#webpage` }),
}])
</script>

<template>
  <div>
    <div class="mx-auto max-w-page px-4 pt-10 pb-20 sm:px-6 md:pt-16 md:pb-28">
      <Breadcrumbs :items="[{ label: t('common.nav.blog'), to: '/blog' }, { label: t('postYuristAi.breadcrumb') }]" class="mb-10 md:mb-14" />

      <!-- Phones: header, contents, body. lg: body column on the left, sticky contents on the right. -->
      <article class="lg:grid lg:grid-cols-[minmax(0,40rem)_minmax(0,15rem)] lg:justify-between lg:gap-x-16">
        <ArticleHeader
          class="max-w-copy lg:col-start-1 lg:row-start-1"
          :title="t('postYuristAi.title')"
          :description="t('postYuristAi.lead')"
          :author="t('blog.post.author')"
          :published="post.datePublished"
          :updated="post.dateModified"
          :reading-time="READING_MINUTES"
        />

        <aside class="mt-10 max-w-copy lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mt-2">
          <ContentBlogPostToc :items="toc" />
        </aside>

        <div class="min-w-0 lg:col-start-1 lg:row-start-2">
          <ProseArticle class="yurist-body mt-12 md:mt-14">
            <component :is="bodies[locale]" :part="1" />
          </ProseArticle>

          <MockFrame :caption="t('postYuristAi.figure.caption')" class="mt-10 max-w-copy" tile-class="p-3 sm:p-8" shell-class="mx-auto max-w-[26rem]">
            <div lang="ru" class="bg-stone-50/60">
              <div class="flex items-start justify-between gap-3 border-b border-stone-200/80 bg-white px-5 py-4">
                <div>
                  <p class="flex items-center gap-1.5 text-[10px] font-medium tracking-wider text-stone-500 uppercase">
                    <Icon name="hugeicons:bookmark-02" class="size-3!" /> Цитирование
                  </p>
                  <p class="mt-0.5 text-base leading-snug font-semibold text-stone-900">
                    Источники · 3
                  </p>
                </div>
                <Icon name="hugeicons:cancel-01" class="size-4! text-stone-400" />
              </div>
              <div class="space-y-5 px-4 py-4">
                <div v-for="group in SOURCES" :key="group.group" class="space-y-2">
                  <p class="flex items-center gap-1.5 px-1 text-[10px] font-medium tracking-[0.12em] text-stone-500 uppercase">
                    <Icon :name="group.icon" class="size-3!" /> {{ group.group }} · {{ group.items.length }}
                  </p>
                  <MockSourceCard
                    v-for="s in group.items"
                    :key="s.n"
                    :index="s.n"
                    :kind="s.kind"
                    :label="s.label"
                    :subtitle="s.subtitle"
                    :quote="s.quote"
                    :highlighted="s.n === 2"
                  />
                </div>
              </div>
            </div>
          </MockFrame>

          <ProseArticle class="yurist-body mt-14">
            <component :is="bodies[locale]" :part="2" />
          </ProseArticle>

          <ContentBlogPostRelated :slug="SLUG" />
        </div>
      </article>
    </div>

    <CtaBand :title="t('postYuristAi.cta.title')" :text="t('postYuristAi.cta.text')" />
  </div>
</template>

<style scoped>
/* Keep the section headings clear of the sticky header when reached from the contents list. */
.yurist-body :deep(h2[id]) { scroll-margin-top: 6rem; }
</style>
