<script setup lang="ts">
// One button/link primitive for the whole site. `to` is an internal path (localized automatically);
// `href` is an external URL and opens in a new tab (mailto: links stay in this tab).
const props = withDefaults(defineProps<{
  to?: string
  href?: string
  variant?: 'primary' | 'secondary' | 'ghost' | 'inverted' | 'inverted-ghost'
  size?: 'sm' | 'md' | 'lg'
  icon?: string
}>(), { variant: 'primary', size: 'md' })

const { t } = useI18n()
const localePath = useLocalePath()

const newTab = computed(() => !!props.href && !props.href.startsWith('mailto:'))

// Raised buttons: a bottom-lit gradient, a heavier bottom border, a soft drop shadow and an inner
// highlight ring; hover/active only change brightness. Ghost variants stay flat.
const RAISED = 'border border-b-2 shadow-md ring-1 ring-inset bg-linear-to-t'
const VARIANTS = {
  'primary': `${RAISED} from-stone-900 to-stone-700 text-white border-stone-950/60 shadow-stone-900/20 ring-white/15 hover:brightness-125 active:brightness-95`,
  'secondary': `${RAISED} from-stone-100 to-white text-ink border-stone-900/15 shadow-stone-900/5 ring-white/70 hover:brightness-[0.97] active:brightness-[0.93]`,
  'ghost': 'text-ink-muted hover:text-ink hover:bg-stone-100',
  'inverted': `${RAISED} from-stone-200 to-white text-stone-900 border-black/40 shadow-black/25 ring-white/60 hover:brightness-105 active:brightness-95`,
  'inverted-ghost': 'text-stone-300 hover:text-white hover:bg-white/10',
}
const SIZES = {
  sm: 'h-9 px-3.5 text-sm gap-1.5',
  md: 'h-10 px-4 text-sm gap-2',
  lg: 'h-12 px-6 text-base gap-2',
}

const classes = computed(() => [
  'inline-flex shrink-0 items-center justify-center rounded-md font-semibold whitespace-nowrap select-none transition-[filter,color,background-color] duration-200',
  VARIANTS[props.variant],
  SIZES[props.size],
])
</script>

<template>
  <a v-if="href" :href="href" :target="newTab ? '_blank' : undefined" :rel="newTab ? 'noopener' : undefined" :class="classes">
    <slot />
    <Icon v-if="icon" :name="icon" class="size-4" aria-hidden="true" />
    <span v-if="newTab" class="sr-only">{{ t('common.cta.opensInNewTab') }}</span>
  </a>
  <NuxtLink v-else :to="localePath(to ?? '/')" :class="classes">
    <slot />
    <Icon v-if="icon" :name="icon" class="size-4" aria-hidden="true" />
  </NuxtLink>
</template>
