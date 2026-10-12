<script setup lang="ts">
// Figure wrapper for every product mockup: a stone tile holding a framed shell (8px padding, 20px outer / 12px inner
// radius). Give the tile a fixed height to crop the UI (reads as part of a larger app) or padding to show it whole.
// The interior is aria-hidden + inert; the visible, localized caption is the figure's accessible description.
withDefaults(defineProps<{
  caption: string
  tileClass?: string
  shellClass?: string
}>(), { tileClass: '', shellClass: '' })
</script>

<template>
  <figure data-nosnippet class="min-w-0">
    <div class="mock-tile relative isolate overflow-hidden rounded-tile" :class="tileClass">
      <div class="rounded-shell bg-stone-100 p-2 shadow-frame ring-1 ring-stone-300/50" :class="shellClass">
        <div aria-hidden="true" inert class="overflow-hidden rounded-card bg-white ring-1 ring-stone-200/90 [&_:is(p,li)]:hyphens-manual">
          <slot />
        </div>
      </div>
    </div>
    <figcaption class="mt-3 max-w-[70ch] text-xs leading-relaxed text-ink-subtle">
      {{ caption }}
    </figcaption>
  </figure>
</template>

<style scoped>
/* Stone backdrop with a soft light from the top left, so the frame sits on a surface rather than a flat swatch. */
.mock-tile {
  background:
    radial-gradient(110% 80% at 0% 0%, var(--color-stone-100) 0%, transparent 60%),
    linear-gradient(180deg, var(--color-stone-200) 0%, color-mix(in oklch, var(--color-stone-200) 70%, var(--color-stone-300)) 100%);
}
</style>
