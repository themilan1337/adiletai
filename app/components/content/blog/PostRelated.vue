<script setup lang="ts">
// "Related articles" under every blog post: the other posts in BLOG_POSTS that have a title in the current locale.
const props = defineProps<{ slug: string }>()
const { t, te, locale } = useI18n()
const localePath = useLocalePath()
const posts = computed(() => BLOG_POSTS.filter(p => p.slug !== props.slug && te(`${p.ns}.meta.title`, locale.value)))
</script>

<template>
  <nav v-if="posts.length" aria-labelledby="post-related" class="mt-16 max-w-copy border-t border-line pt-8">
    <h2 id="post-related" class="text-sm font-medium text-ink">
      {{ t('blog.post.related') }}
    </h2>
    <ul class="mt-4 space-y-3">
      <li v-for="p in posts" :key="p.slug">
        <NuxtLink
          :to="localePath(`/blog/${p.slug}`)"
          class="group flex items-start justify-between gap-4 rounded-tile bg-surface p-5 ring-1 ring-line transition-shadow hover:shadow-card hover:ring-line-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-600"
        >
          <span class="min-w-0">
            <span class="block font-display text-lg leading-snug text-ink">{{ displayTitle(t(`${p.ns}.meta.title`)) }}</span>
            <span v-if="te(`${p.ns}.meta.excerpt`, locale)" class="mt-1.5 block text-sm leading-relaxed text-ink-muted">{{ t(`${p.ns}.meta.excerpt`) }}</span>
          </span>
          <Icon name="hugeicons:arrow-right-02" class="mt-1 size-5! shrink-0 text-ink-subtle transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
