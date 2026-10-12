<script setup lang="ts">
// Native <details> FAQ list: answers stay in the DOM for search and answer engines. No schema here: the page that
// shows the list emits the FAQPage JSON-LD from the same items. `open` opens the first item. Each question is an h3
// inside <summary> (valid HTML: summary allows heading content), so it shows in the outline; every host has an h2 above.
withDefaults(defineProps<{ items: { q: string, a: string }[], open?: boolean }>(), { open: false })
</script>

<template>
  <div class="border-t border-line">
    <details v-for="(item, i) in items" :key="item.q" class="group border-b border-line" :open="open && i === 0">
      <summary class="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-[17px] leading-snug font-medium text-ink transition-colors hover:text-accent-700 [&::-webkit-details-marker]:hidden">
        <h3 class="min-w-0">
          {{ item.q }}
        </h3>
        <!-- The glyph turns, not the circle: a rotated 24px box would stick out ~5px past the row. -->
        <span class="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border border-line-strong text-ink-subtle" aria-hidden="true">
          <Icon name="hugeicons:add-01" class="size-3.5! transition-transform duration-200 group-open:rotate-45" />
        </span>
      </summary>
      <p class="max-w-[65ch] pb-6 text-base leading-relaxed text-ink-muted sm:pr-10">
        {{ item.a }}
      </p>
    </details>
  </div>
</template>
