<script setup lang="ts">
// Typography wrapper for long-form bodies (blog articles, legal pages): serif H2/H3, 17px/1.75 body, teal links,
// lists, tables, blockquotes. Width is max-w-copy; put it inside the page container. No typography plugin.
</script>

<template>
  <div class="prose-article max-w-copy">
    <slot />
  </div>
</template>

<style>
/* Not scoped: the slotted body is compiled in the parent. Kept in the components layer so utilities still win. */
@layer components {
  .prose-article { font-size: 1.0625rem; line-height: 1.75; color: var(--color-ink-muted); }
  .prose-article > :first-child { margin-top: 0; }
  .prose-article :where(p, ul, ol, table, blockquote, figure, pre) { margin-top: 1.25em; }
  .prose-article :where(h2) {
    margin-top: 2.2em; font-family: var(--font-display); font-size: var(--text-display-3);
    line-height: var(--text-display-3--line-height); letter-spacing: var(--text-display-3--letter-spacing);
    font-weight: 500; color: var(--color-ink);
  }
  .prose-article :where(h3) { margin-top: 1.8em; font-family: var(--font-display); font-size: 1.3rem; line-height: 1.3; font-weight: 500; color: var(--color-ink); }
  .prose-article :where(h2, h3) + * { margin-top: 0.75em; }
  .prose-article :where(strong) { font-weight: 600; color: var(--color-ink); }
  .prose-article :where(a) {
    color: var(--color-accent-600); text-decoration: underline; text-underline-offset: 4px;
    text-decoration-color: color-mix(in oklch, var(--color-accent-600) 35%, transparent);
  }
  .prose-article :where(a:hover) { text-decoration-color: var(--color-accent-600); }
  .prose-article :where(ul, ol) { padding-left: 1.4em; }
  .prose-article :where(ul) { list-style: disc; }
  .prose-article :where(ol) { list-style: decimal; }
  .prose-article :where(li) { margin-top: 0.4em; padding-left: 0.2em; }
  .prose-article :where(li)::marker { color: var(--color-stone-400); }
  .prose-article :where(blockquote) { border-left: 2px solid var(--color-accent-500); padding-left: 1.1em; color: var(--color-ink); font-style: italic; }
  .prose-article :where(table) { width: 100%; border-collapse: collapse; font-size: 0.9rem; line-height: 1.55; }
  .prose-article :where(th, td) { border-bottom: 1px solid var(--color-line); padding: 0.6em 0.75em 0.6em 0; text-align: left; vertical-align: top; }
  .prose-article :where(th) { font-weight: 600; color: var(--color-ink); }
  .prose-article :where(code) { font-family: var(--font-mono); font-size: 0.9em; background: var(--color-surface-muted); border-radius: 4px; padding: 0.1em 0.35em; }
  .prose-article :where(hr) { margin: 2.5em 0; border-color: var(--color-line); }
}
</style>
