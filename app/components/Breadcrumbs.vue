<script setup lang="ts">
// Breadcrumb trail with Home prepended, plus the matching BreadcrumbList JSON-LD (absolute URLs from site config).
// items: [{ label, to }] in order; the last one is the current page (rendered as text with aria-current).
const props = defineProps<{ items: { label: string, to?: string }[] }>()

const { t } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
const site = useSiteConfig()

const trail = computed(() => [{ label: t('common.breadcrumbs.home'), to: '/' }, ...props.items])
const absolute = (to?: string) => {
  const path = to ? localePath(to) : route.path
  return path === '/' ? site.url : `${site.url}${path}`
}

useSchemaOrg([{
  '@type': 'BreadcrumbList',
  'itemListElement': () => trail.value.map((item, i) => ({
    '@type': 'ListItem',
    'position': i + 1,
    'name': item.label,
    'item': absolute(i === trail.value.length - 1 ? undefined : item.to),
  })),
}])
</script>

<template>
  <nav :aria-label="t('common.breadcrumbs.label')">
    <ol class="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-sm text-ink-subtle">
      <!-- The chevron ends the previous crumb, so a wrapped line (long Kazakh titles at 390) never starts with one. -->
      <li v-for="(item, i) in trail" :key="i" class="flex min-w-0 items-center gap-1.5">
        <span v-if="i === trail.length - 1" aria-current="page" class="truncate text-ink-muted">{{ item.label }}</span>
        <template v-else>
          <NuxtLink :to="localePath(item.to ?? '/')" class="rounded-sm transition-colors hover:text-ink">
            {{ item.label }}
          </NuxtLink>
          <Icon name="hugeicons:arrow-right-01" class="size-3.5! shrink-0 text-stone-400" aria-hidden="true" />
        </template>
      </li>
    </ol>
  </nav>
</template>
