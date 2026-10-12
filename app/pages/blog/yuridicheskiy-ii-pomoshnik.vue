<script setup lang="ts">
// Blog post "Legal AI assistant" (RU keyword «юридический ИИ-помощник»). The article body is one plain SFC per locale
// (components/content/blog/yuridicheskiy-ii-pomoshnik/<locale>.vue); meta, takeaways, section headings, the figure
// caption and page chrome live in the postYuridicheskiyIiPomoshnik namespace. Headings reach the body as h(id), so the
// contents list and the body cannot drift; the product figure reaches it through the #figure slot.
const bodies = {
  en: defineAsyncComponent(() => import('~/components/content/blog/yuridicheskiy-ii-pomoshnik/en.vue')),
  ru: defineAsyncComponent(() => import('~/components/content/blog/yuridicheskiy-ii-pomoshnik/ru.vue')),
  kk: defineAsyncComponent(() => import('~/components/content/blog/yuridicheskiy-ii-pomoshnik/kk.vue')),
}

const NS = 'postYuridicheskiyIiPomoshnik'
const SECTIONS = ['what', 'tasks', 'rag', 'evaluate', 'limits', 'adiletai', 'sources'] as const
const READING_TIME = 7
const post = BLOG_POSTS.find(p => p.slug === 'yuridicheskiy-ii-pomoshnik')!
// ISO 8601 with Kazakhstan's offset (UTC+5). Dates come from BLOG_POSTS, never new Date().
const iso = (date: string) => `${date}T10:00:00+05:00`

const { t, tm, rt, locale } = useI18n()
const site = useSiteConfig()

const h = (id: string) => t(`${NS}.sections.${id}`)
const toc = computed(() => SECTIONS.map(id => ({ id, label: h(id) })))
const takeaways = computed(() => (tm(`${NS}.takeaways.items`) as string[]).map(i => rt(i)))

useSeoMeta({
  title: () => t(`${NS}.meta.title`),
  description: () => t(`${NS}.meta.description`),
  ogTitle: () => t(`${NS}.meta.title`),
  ogDescription: () => t(`${NS}.meta.description`),
  twitterTitle: () => t(`${NS}.meta.title`),
  twitterDescription: () => t(`${NS}.meta.description`),
  ogType: 'article',
  articlePublishedTime: iso(post.datePublished),
  articleModifiedTime: iso(post.dateModified),
})

// Absolute @ids: the Organization from app.vue and the WebPage node @nuxtjs/seo emits for this URL.
const organization = { '@id': `${site.url}/#organization` }
const route = useRoute()
useSchemaOrg([{
  '@type': 'BlogPosting',
  'mainEntityOfPage': () => ({ '@id': `${site.url}${route.path}#webpage` }),
  'headline': () => t(`${NS}.meta.title`), // the H1 carries display-only U+00A0 / U+2011
  'description': () => t(`${NS}.meta.description`),
  'datePublished': iso(post.datePublished),
  'dateModified': iso(post.dateModified),
  'author': organization,
  'publisher': organization,
  'image': () => `${site.url}/og/${locale.value}.png`,
}])
</script>

<template>
  <div>
    <div class="mx-auto max-w-page px-4 pt-10 pb-20 sm:px-6 md:pt-16 md:pb-28">
      <Breadcrumbs :items="[{ label: t('common.nav.blog'), to: '/blog' }, { label: t(`${NS}.breadcrumb`) }]" class="mb-10 md:mb-14" />

      <!-- Phones: header, takeaways, contents, body. lg: body column on the left, sticky contents on the right. The body
           column stays flexible (not 40rem as in the other posts) so the figure leaves the mock's thread room beside its
           Sources drawer; prose keeps reading width. -->
      <article class="lg:grid lg:grid-cols-[minmax(0,1fr)_13rem] lg:gap-x-12 xl:grid-cols-[minmax(0,1fr)_15rem] xl:gap-x-24">
        <div class="min-w-0 lg:col-start-1 lg:row-start-1">
          <ArticleHeader
            class="max-w-copy"
            :title="t(`${NS}.title`)"
            :description="t(`${NS}.lead`)"
            :author="t('blog.post.author')"
            :published="post.datePublished"
            :updated="post.dateModified"
            :reading-time="READING_TIME"
          />

          <aside aria-labelledby="post-takeaways" class="mt-10 max-w-copy rounded-card border border-line bg-surface p-6 sm:p-7 md:mt-12">
            <h2 id="post-takeaways" class="text-sm font-medium tracking-[0.06em] text-ink-subtle uppercase">
              {{ t(`${NS}.takeaways.title`) }}
            </h2>
            <ul class="mt-4 space-y-3">
              <li v-for="(item, i) in takeaways" :key="i" class="flex gap-3 text-[15px] leading-relaxed text-ink-muted">
                <Icon name="hugeicons:checkmark-circle-02" class="mt-[0.2em] size-[1.1em]! shrink-0 text-accent-600" aria-hidden="true" />
                <span>{{ item }}</span>
              </li>
            </ul>
          </aside>
        </div>

        <aside class="mt-4 max-w-copy lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mt-2">
          <ContentBlogPostToc :items="toc" />
        </aside>

        <div class="min-w-0 lg:col-start-1 lg:row-start-2">
          <!-- Prose stays at reading width; the product figure may use the whole column. -->
          <ProseArticle class="mt-12 max-w-none md:mt-14 [&_h2]:scroll-mt-24 [&>:not(figure)]:max-w-copy">
            <component :is="bodies[locale as keyof typeof bodies]" :h="h">
              <template #figure>
                <MockFrame
                  :caption="t(`${NS}.figure.caption`)"
                  class="my-10! md:my-12!"
                  tile-class="h-[30rem] sm:h-[36rem] lg:h-[42rem]"
                  shell-class="mx-3 mt-5 sm:mx-6 sm:mt-7"
                >
                  <MockAssistant
                    :lang="locale"
                    :question="t('home.hero.chat.question')"
                    :answer="(tm('home.hero.chat.answer') as string[]).map(p => rt(p))"
                    :note-title="t('home.hero.chat.noteTitle')"
                    :note="t('home.hero.chat.note')"
                    :sidebar="false"
                  />
                </MockFrame>
              </template>
            </component>
          </ProseArticle>

          <ContentBlogPostRelated slug="yuridicheskiy-ii-pomoshnik" />
        </div>
      </article>
    </div>

    <CtaBand :title="t(`${NS}.cta.title`)" :text="t(`${NS}.cta.text`)" />
  </div>
</template>
