<script setup lang="ts">
// Contents list shared by every blog post: a numbered card on phones and tablets, a sticky list with a left rule at lg
// (the page puts it in the right grid column). Items are the H2 ids and labels the post body renders.
defineProps<{ items: { id: string, label: string }[] }>()
const { t } = useI18n()
</script>

<template>
  <nav
    aria-labelledby="post-toc"
    class="rounded-card border border-line bg-surface p-5 lg:sticky lg:top-24 lg:max-h-[calc(100dvh-7rem)] lg:overflow-y-auto lg:rounded-none lg:border-0 lg:border-l lg:bg-transparent lg:py-1 lg:pr-0 lg:pl-6"
  >
    <p id="post-toc" class="text-sm font-medium text-ink">
      {{ t('blog.post.toc') }}
    </p>
    <ol class="mt-4 space-y-2.5 text-sm leading-snug">
      <li v-for="(s, i) in items" :key="s.id" class="flex min-w-0 gap-2.5 hyphens-manual">
        <span class="w-5 shrink-0 text-ink-subtle tabular-nums" aria-hidden="true">{{ i + 1 }}.</span>
        <a
          :href="`#${s.id}`"
          class="min-w-0 rounded-sm text-ink-muted transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-600"
        >{{ s.label }}</a>
      </li>
    </ol>
  </nav>
</template>
