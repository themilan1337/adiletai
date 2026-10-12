<script setup lang="ts">
const { t, locale, locales } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()
const route = useRoute()

const isMenuOpen = ref(false)
const menuId = useId()

watch(() => route.fullPath, () => { isMenuOpen.value = false })

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') isMenuOpen.value = false
}
onMounted(() => document.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => document.removeEventListener('keydown', onKeydown))
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-line bg-canvas/85 backdrop-blur-md">
    <a href="#main" class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-control focus:bg-surface focus:px-3 focus:py-2 focus:text-sm focus:shadow-popover">
      {{ t('common.skipToContent') }}
    </a>
    <div class="mx-auto flex h-16 max-w-page items-center justify-between gap-6 px-4 sm:px-6">
      <NuxtLink :to="localePath('/')" class="flex shrink-0 items-center gap-2.5 text-ink" :aria-label="t('common.logoAlt')">
        <NuxtImg src="/logo.png" alt="" width="28" height="28" class="size-7" />
        <span class="text-lg font-semibold tracking-tight">AdiletAI</span>
      </NuxtLink>

      <nav class="hidden xl:block" :aria-label="t('common.nav.mainLabel')">
        <ul class="flex items-center gap-1">
          <li v-for="link in NAV_LINKS" :key="link.key">
            <NuxtLink
              :to="localePath(link.to)"
              class="rounded-control px-3 py-2 text-sm text-ink-muted transition-colors hover:bg-stone-100 hover:text-ink"
              active-class="text-ink"
            >
              {{ t(`common.nav.${link.key}`) }}
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <div class="flex items-center gap-1 sm:gap-2">
        <LanguageSwitcher />
        <div class="hidden items-center gap-2 sm:flex">
          <AppButton :href="APP_URL" variant="ghost" size="sm">
            {{ t('common.cta.signIn') }}
          </AppButton>
          <AppButton :href="CALENDLY_URL" size="sm">
            {{ t('common.cta.demo') }}
          </AppButton>
        </div>
        <button
          type="button"
          class="grid size-9 place-items-center rounded-control text-ink-muted hover:bg-stone-100 hover:text-ink xl:hidden"
          :aria-expanded="isMenuOpen"
          :aria-controls="menuId"
          :aria-label="isMenuOpen ? t('common.nav.closeMenu') : t('common.nav.openMenu')"
          @click="isMenuOpen = !isMenuOpen"
        >
          <Icon :name="isMenuOpen ? 'hugeicons:cancel-01' : 'hugeicons:menu-01'" class="size-5" aria-hidden="true" />
        </button>
      </div>
    </div>

    <div v-show="isMenuOpen" :id="menuId" class="border-t border-line bg-canvas xl:hidden">
      <nav class="mx-auto max-w-page px-4 py-4 sm:px-6" :aria-label="t('common.nav.mainLabel')">
        <ul class="flex flex-col">
          <li v-for="link in NAV_LINKS" :key="link.key">
            <NuxtLink :to="localePath(link.to)" class="block rounded-control px-3 py-2.5 text-base text-ink hover:bg-stone-100">
              {{ t(`common.nav.${link.key}`) }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink :to="localePath('/contact')" class="block rounded-control px-3 py-2.5 text-base text-ink hover:bg-stone-100">
              {{ t('common.nav.contact') }}
            </NuxtLink>
          </li>
        </ul>
        <ul class="mt-3 flex gap-1 border-t border-line pt-3" :aria-label="t('common.langSwitcher.label')">
          <li v-for="l in locales" :key="l.code">
            <NuxtLink
              :to="switchLocalePath(l.code)"
              :hreflang="l.language"
              :lang="l.language"
              :aria-current="l.code === locale ? 'true' : undefined"
              class="flex items-center gap-2 rounded-control px-3 py-2 text-sm"
              :class="l.code === locale ? 'bg-stone-200/70 font-medium text-ink' : 'text-ink-muted hover:bg-stone-100'"
            >
              <Icon :name="LOCALE_FLAGS[l.code]!" mode="svg" class="size-4 shrink-0" aria-hidden="true" />
              {{ l.name }}
            </NuxtLink>
          </li>
        </ul>
        <div class="mt-4 grid gap-2 sm:hidden">
          <AppButton :href="CALENDLY_URL" size="lg">
            {{ t('common.cta.demo') }}
          </AppButton>
          <AppButton :href="APP_URL" variant="secondary" size="lg">
            {{ t('common.cta.signIn') }}
          </AppButton>
        </div>
      </nav>
    </div>
  </header>
</template>
