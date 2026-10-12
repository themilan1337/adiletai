<script setup lang="ts">
// Blog index /blog: every post in BLOG_POSTS, newest first, the first one featured. Titles and excerpts come from each
// post's own namespace (<ns>.meta.title / .excerpt); page copy lives in i18n/locales/<locale>/blog.json.
// JSON-LD: Blog with BlogPosting items (absolute URLs of the current locale) + BreadcrumbList (via PageHero).
const { t, te, locale } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
const site = useSiteConfig()

// Newest first (ISO dates sort as strings); a post shows only once its namespace has a title in this locale.
const posts = computed(() => BLOG_POSTS
  .filter(p => te(`${p.ns}.meta.title`, locale.value))
  .toSorted((a, b) => b.datePublished.localeCompare(a.datePublished) || b.dateModified.localeCompare(a.dateModified)))
const featured = computed(() => posts.value[0])
const rest = computed(() => posts.value.slice(1))

// ponytail: same formatter as ArticleHeader (not exported there). Kazakh by hand: browser ICU for kk varies and broke hydration.
const KK_MONTHS = ['қаңтар', 'ақпан', 'наурыз', 'сәуір', 'мамыр', 'маусым', 'шілде', 'тамыз', 'қыркүйек', 'қазан', 'қараша', 'желтоқсан']
const formatDate = (iso: string) => {
  const [y, m, d] = iso.split('-').map(Number) as [number, number, number]
  if (locale.value === 'kk') return `${y} жылғы ${d} ${KK_MONTHS[m - 1]}`
  return new Intl.DateTimeFormat(locale.value === 'en' ? 'en-GB' : locale.value, { dateStyle: 'long', timeZone: 'UTC' }).format(Date.UTC(y, m - 1, d))
}

const NEXT = [
  { key: 'howItWorks', to: '/how-it-works', icon: 'hugeicons:workflow-square-03' },
  { key: 'platform', to: '/features', icon: 'hugeicons:dashboard-square-02' },
  { key: 'security', to: '/security', icon: 'hugeicons:security-lock' },
  { key: 'faq', to: '/faq', icon: 'hugeicons:help-circle' },
] as const

useSeoMeta({
  title: () => t('blog.meta.title'),
  description: () => t('blog.meta.description'),
  ogTitle: () => t('blog.meta.title'),
  ogDescription: () => t('blog.meta.description'),
  twitterTitle: () => t('blog.meta.title'),
  twitterDescription: () => t('blog.meta.description'),
})

const org = { '@id': `${site.url}/#organization` }
useSchemaOrg([{
  '@type': 'Blog',
  'name': () => t('blog.meta.title'),
  'description': () => t('blog.meta.description'),
  'url': () => `${site.url}${route.path}`,
  'publisher': org,
  'blogPost': () => posts.value.map(p => ({
    '@type': 'BlogPosting',
    'headline': t(`${p.ns}.meta.title`),
    'description': t(`${p.ns}.meta.description`),
    'url': `${site.url}${localePath(`/blog/${p.slug}`)}`,
    'datePublished': p.datePublished,
    'dateModified': p.dateModified,
    'author': org,
    'publisher': org,
  })),
}])

// Whole card is clickable through the title link's ::after; the card shows the focus ring instead of the title.
const card = 'group relative flex min-w-0 flex-col bg-surface ring-1 ring-line transition-shadow hover:shadow-card hover:ring-line-strong has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-2 has-[a:focus-visible]:outline-accent-600'
const stretched = 'after:absolute after:inset-0 after:content-[\'\'] focus-visible:outline-none'
</script>

<template>
  <div>
    <PageHero
      :title="t('blog.hero.title')"
      :lead="t('blog.hero.lead')"
      :breadcrumbs="[{ label: t('common.nav.blog') }]"
    />

    <section aria-labelledby="blog-list-title" class="pb-20 md:pb-28">
      <div class="mx-auto max-w-page px-4 sm:px-6">
        <h2 id="blog-list-title" class="sr-only">
          {{ t('blog.list.title') }}
        </h2>

        <article
          v-if="featured"
          :class="card"
          class="isolate overflow-hidden rounded-shell p-6 sm:p-8 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:p-12"
        >
          <span class="featured-star pointer-events-none absolute -z-10 hidden bg-accent-500/[0.06] lg:block" aria-hidden="true" />
          <div class="lg:col-span-7">
            <p class="flex items-center gap-2 text-sm font-medium text-accent-600">
              <span class="size-1.5 rounded-full bg-accent-500" aria-hidden="true" />
              {{ t('blog.list.featured') }}
            </p>
            <h3 class="mt-5 font-display text-display-2 text-ink">
              <NuxtLink :to="localePath(`/blog/${featured.slug}`)" :class="stretched">
                {{ displayTitle(t(`${featured.ns}.meta.title`)) }}
              </NuxtLink>
            </h3>
          </div>
          <div class="mt-6 flex flex-col lg:col-span-5 lg:mt-12">
            <p v-if="te(`${featured.ns}.meta.excerpt`, locale)" class="text-lead text-ink-muted">
              {{ t(`${featured.ns}.meta.excerpt`) }}
            </p>
            <p class="mt-6 flex flex-wrap gap-x-4 gap-y-1 text-sm text-ink-subtle">
              <i18n-t keypath="blog.list.published" scope="global" tag="span">
                <template #date><time :datetime="featured.datePublished">{{ formatDate(featured.datePublished) }}</time></template>
              </i18n-t>
              <i18n-t v-if="featured.dateModified !== featured.datePublished" keypath="blog.list.updated" scope="global" tag="span">
                <template #date><time :datetime="featured.dateModified">{{ formatDate(featured.dateModified) }}</time></template>
              </i18n-t>
            </p>
            <span class="mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink lg:mt-auto lg:pt-8" aria-hidden="true">
              {{ t('blog.list.read') }}
              <Icon name="hugeicons:arrow-right-02" class="size-4! transition-transform group-hover:translate-x-0.5" />
            </span>
          </div>
        </article>

        <div v-if="rest.length" class="mt-6 grid gap-6 md:grid-cols-2">
          <article v-for="p in rest" :key="p.slug" :class="card" class="rounded-tile p-6 md:p-8">
            <p class="flex flex-wrap gap-x-4 gap-y-1 text-sm text-ink-subtle">
              <i18n-t keypath="blog.list.published" scope="global" tag="span">
                <template #date><time :datetime="p.datePublished">{{ formatDate(p.datePublished) }}</time></template>
              </i18n-t>
              <i18n-t v-if="p.dateModified !== p.datePublished" keypath="blog.list.updated" scope="global" tag="span">
                <template #date><time :datetime="p.dateModified">{{ formatDate(p.dateModified) }}</time></template>
              </i18n-t>
            </p>
            <h3 class="mt-4 font-display text-display-3 text-ink">
              <NuxtLink :to="localePath(`/blog/${p.slug}`)" :class="stretched">
                {{ displayTitle(t(`${p.ns}.meta.title`)) }}
              </NuxtLink>
            </h3>
            <p v-if="te(`${p.ns}.meta.excerpt`, locale)" class="mt-4 text-ink-muted">
              {{ t(`${p.ns}.meta.excerpt`) }}
            </p>
            <span class="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-medium text-ink" aria-hidden="true">
              {{ t('blog.list.read') }}
              <Icon name="hugeicons:arrow-right-02" class="size-4! transition-transform group-hover:translate-x-0.5" />
            </span>
          </article>
        </div>

        <!-- role="note", not <aside>: a complementary landmark nested in main/section fails axe landmark-complementary-is-top-level. -->
        <div role="note" aria-labelledby="blog-note-title" class="mt-12 max-w-3xl border-l-2 border-line-strong pl-5">
          <h2 id="blog-note-title" class="text-sm font-medium text-ink">
            {{ t('blog.note.title') }}
          </h2>
          <p class="mt-2 text-sm leading-relaxed text-ink-muted">
            {{ t('blog.note.text') }}
          </p>
          <NuxtLink
            :to="localePath('/legal/disclaimer')"
            class="mt-3 inline-flex items-center gap-1.5 rounded-sm text-sm font-medium text-accent-600 underline decoration-accent-600/30 underline-offset-4 transition-colors hover:decoration-accent-600"
          >
            {{ t('common.legalLinks.disclaimer') }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <section aria-labelledby="blog-next" class="border-t border-line py-20 md:py-28">
      <div class="mx-auto max-w-page px-4 sm:px-6">
        <SectionHeading id="blog-next" :title="t('blog.next.title')" :continuation="t('blog.next.continuation')" />
        <ul class="mt-12 grid gap-4 sm:grid-cols-2 md:mt-16 xl:grid-cols-4">
          <li v-for="item in NEXT" :key="item.key" :class="card" class="rounded-tile p-6">
            <Icon :name="item.icon" class="size-6! text-accent-600" aria-hidden="true" />
            <h3 class="mt-6 text-base font-medium text-ink">
              <NuxtLink :to="localePath(item.to)" :class="stretched">
                {{ t(`common.nav.${item.key}`) }}
              </NuxtLink>
            </h3>
            <p class="mt-2 text-sm leading-relaxed text-ink-muted">
              {{ t(`blog.next.items.${item.key}`) }}
            </p>
            <span class="mt-auto pt-6 text-ink-subtle" aria-hidden="true">
              <Icon name="hugeicons:arrow-right-02" class="size-4! transition-transform group-hover:translate-x-0.5" />
            </span>
          </li>
        </ul>
      </div>
    </section>

    <CtaBand :title="t('blog.cta.title')" :text="t('blog.cta.text')" />
  </div>
</template>

<style scoped>
/* The logo's 8-point star as a faint watermark under the featured title (same mask technique as CtaBand). */
.featured-star {
  width: 18rem;
  height: 18rem;
  left: 3rem;
  bottom: -8rem;
  -webkit-mask: url('/logo.png') center / contain no-repeat;
  mask: url('/logo.png') center / contain no-repeat;
}
</style>
