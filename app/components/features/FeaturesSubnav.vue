<script setup lang="ts">
// Sticky in-page navigation for the platform page, docked under the 64px site header. Plain hash links (they work
// without JS); on the client an IntersectionObserver marks the section in view and keeps its link scrolled into the
// row on narrow screens. Labels never truncate: the row scrolls sideways with an edge fade instead.
const props = defineProps<{ label: string, items: { id: string, label: string }[] }>()

const active = ref('')
const list = ref<HTMLElement>()
let observer: IntersectionObserver | undefined

onMounted(() => {
  // A section counts as "in view" while any part of it crosses the band under the header and the sub-nav.
  observer = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) active.value = e.target.id
    }
  }, { rootMargin: '-140px 0px -55% 0px' })
  for (const { id } of props.items) {
    const el = document.getElementById(id)
    if (el) observer.observe(el)
  }
})
onBeforeUnmount(() => observer?.disconnect())

watch(active, (id) => {
  const row = list.value
  const link = row?.querySelector<HTMLElement>(`a[href="#${id}"]`)
  if (!row || !link || row.scrollWidth <= row.clientWidth) return
  const smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  row.scrollTo({ left: link.offsetLeft - 24, behavior: smooth ? 'smooth' : 'auto' })
})
</script>

<template>
  <nav :aria-label="label" class="sticky top-16 z-30 border-y border-line bg-canvas/90 backdrop-blur-md">
    <div class="mx-auto max-w-page">
      <!-- Chrome's focus scrolling can leave a tabbed-to link half outside the row; reveal it fully, clear of the edge fade -->
      <ul ref="list" class="subnav-row relative flex scroll-px-6 overflow-x-auto px-1 py-2 sm:px-3" @focusin="($event.target as HTMLElement).scrollIntoView({ block: 'nearest', inline: 'nearest' })">
        <li v-for="item in items" :key="item.id" class="shrink-0">
          <a
            :href="`#${item.id}`"
            :aria-current="active === item.id ? 'true' : undefined"
            class="block rounded-control px-3 py-1.5 text-sm whitespace-nowrap text-ink-muted transition-colors hover:bg-stone-100 hover:text-ink aria-[current=true]:bg-surface aria-[current=true]:text-ink aria-[current=true]:shadow-card aria-[current=true]:ring-1 aria-[current=true]:ring-line"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
/* Fades the outer edges (row padding plus link padding), so text is faded only once the row has been scrolled. */
.subnav-row {
  scrollbar-width: none;
  mask-image: linear-gradient(to right, transparent, #000 1rem, #000 calc(100% - 1rem), transparent);
}
.subnav-row::-webkit-scrollbar {
  display: none;
}
</style>
