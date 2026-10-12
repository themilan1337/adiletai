<script setup lang="ts">
// One button/link primitive for the whole site. `to` is an internal path (localized automatically);
// `href` is an external URL and opens in a new tab.
const props = withDefaults(defineProps<{
  to?: string
  href?: string
  variant?: 'primary' | 'secondary' | 'ghost' | 'inverted' | 'inverted-ghost'
  size?: 'sm' | 'md' | 'lg'
  icon?: string
}>(), { variant: 'primary', size: 'md' })

const { t } = useI18n()
const localePath = useLocalePath()

const VARIANTS = {
  'primary': 'bg-stone-900 text-white hover:bg-stone-800',
  'secondary': 'bg-surface text-ink ring-1 ring-inset ring-line-strong hover:bg-stone-100',
  'ghost': 'text-ink-muted hover:text-ink hover:bg-stone-100',
  'inverted': 'bg-white text-stone-900 hover:bg-stone-200',
  'inverted-ghost': 'text-stone-300 hover:text-white hover:bg-white/10',
}
const SIZES = {
  sm: 'h-9 px-3.5 text-sm gap-1.5',
  md: 'h-10 px-4 text-sm gap-2',
  lg: 'h-12 px-6 text-base gap-2',
}

const classes = computed(() => [
  'inline-flex shrink-0 items-center justify-center rounded-control font-medium whitespace-nowrap transition-colors duration-150 select-none',
  VARIANTS[props.variant],
  SIZES[props.size],
])
</script>

<template>
  <a v-if="href" :href="href" target="_blank" rel="noopener" :class="classes">
    <slot />
    <Icon v-if="icon" :name="icon" class="size-4" aria-hidden="true" />
    <span class="sr-only">{{ t('common.cta.opensInNewTab') }}</span>
  </a>
  <NuxtLink v-else :to="localePath(to ?? '/')" :class="classes">
    <slot />
    <Icon v-if="icon" :name="icon" class="size-4" aria-hidden="true" />
  </NuxtLink>
</template>
