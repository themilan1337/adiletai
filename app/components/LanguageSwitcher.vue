<script setup lang="ts">
// Accessible language menu (WAI-ARIA menu button). Every option is a real <a href> rendered on the server
// (v-show, not v-if), so crawlers can follow it before hydration.
const { locale, locales, t } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const route = useRoute()

// Kazakhstan convention for compact labels (kaspi.kz, egov.kz): Қаз / Рус / Eng.
const SHORT: Record<string, string> = { kk: 'Қаз', ru: 'Рус', en: 'Eng' }
const ORDER = ['kk', 'ru', 'en']

const open = ref(false)
const root = useTemplateRef<HTMLElement>('root')
const button = useTemplateRef<HTMLButtonElement>('button')
const items = useTemplateRef<{ $el: HTMLAnchorElement }[]>('items')
const menuId = useId()

const current = computed(() => locales.value.find(l => l.code === locale.value))
const options = computed(() => [...locales.value]
  .sort((a, b) => ORDER.indexOf(a.code) - ORDER.indexOf(b.code))
  .map(l => ({ ...l, to: switchLocalePath(l.code) || '/' })))

function focusItem(i: number) {
  const els = items.value?.map(c => c.$el) ?? []
  if (els.length) els[(i + els.length) % els.length]?.focus()
}
async function openMenu(focusIndex = 0) {
  open.value = true
  await nextTick()
  focusItem(focusIndex)
}
function close(returnFocus = false) {
  open.value = false
  if (returnFocus) button.value?.focus()
}
function onButtonKeydown(e: KeyboardEvent) {
  if (e.key === 'ArrowDown') { e.preventDefault(); openMenu(0) }
  if (e.key === 'ArrowUp') { e.preventDefault(); openMenu(-1) }
}
function onMenuKeydown(e: KeyboardEvent) {
  const els = items.value?.map(c => c.$el) ?? []
  const i = els.indexOf(document.activeElement as HTMLAnchorElement)
  switch (e.key) {
    case 'ArrowDown': e.preventDefault(); focusItem(i + 1); break
    case 'ArrowUp': e.preventDefault(); focusItem(i - 1); break
    case 'Home': e.preventDefault(); focusItem(0); break
    case 'End': e.preventDefault(); focusItem(-1); break
    case 'Escape': e.preventDefault(); close(true); break
    case 'Tab': close(); break
  }
}
function onPointerDown(e: PointerEvent) {
  if (open.value && !root.value?.contains(e.target as Node)) close()
}
onMounted(() => document.addEventListener('pointerdown', onPointerDown))
onBeforeUnmount(() => document.removeEventListener('pointerdown', onPointerDown))
watch(() => route.fullPath, () => close())
</script>

<template>
  <div ref="root" class="relative">
    <button
      ref="button"
      type="button"
      class="inline-flex h-9 items-center gap-1.5 rounded-control px-2.5 text-sm font-medium text-ink-muted transition-colors hover:bg-stone-100 hover:text-ink"
      aria-haspopup="menu"
      :aria-expanded="open"
      :aria-controls="menuId"
      :aria-label="t('common.langSwitcher.current', { language: current?.name })"
      @click="open ? close() : openMenu()"
      @keydown="onButtonKeydown"
    >
      <Icon :name="LOCALE_FLAGS[locale]!" mode="svg" class="size-4.5" aria-hidden="true" />
      <span>{{ SHORT[locale] }}</span>
      <Icon name="hugeicons:arrow-down-01" class="size-3.5 transition-transform" :class="{ 'rotate-180': open }" aria-hidden="true" />
    </button>
    <ul
      v-show="open"
      :id="menuId"
      role="menu"
      :aria-label="t('common.langSwitcher.label')"
      class="absolute right-0 z-50 mt-2 min-w-44 rounded-card border border-line bg-surface p-1 shadow-popover"
      @keydown="onMenuKeydown"
    >
      <li v-for="l in options" :key="l.code" role="none">
        <NuxtLink
          ref="items"
          role="menuitem"
          tabindex="-1"
          :to="l.to"
          :hreflang="l.language"
          :lang="l.language"
          :aria-current="l.code === locale ? 'true' : undefined"
          class="flex items-center gap-2.5 rounded-control px-3 py-2 text-sm text-ink-muted hover:bg-stone-100 hover:text-ink focus:bg-stone-100 focus:text-ink focus:outline-none"
          @click="close()"
        >
          <Icon :name="LOCALE_FLAGS[l.code]!" mode="svg" class="size-4.5 shrink-0" aria-hidden="true" />
          <span class="flex-1">{{ l.name }}</span>
          <Icon v-if="l.code === locale" name="hugeicons:tick-02" class="size-4 text-accent-600" aria-hidden="true" />
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
