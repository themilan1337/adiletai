<script setup lang="ts">
const { t, locale, locales } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()
const year = new Date().getFullYear()

const columns = [
  { key: 'product', links: [...NAV_LINKS.filter(l => l.key !== 'blog'), { key: 'faq', to: '/faq' }].map(l => ({ label: `common.nav.${l.key}`, to: l.to })) },
  { key: 'company', links: [
    { label: 'common.nav.about', to: '/about' },
    { label: 'common.nav.blog', to: '/blog' },
    { label: 'common.nav.contact', to: '/contact' },
  ] },
  { key: 'legal', links: [
    { label: 'common.legalLinks.terms', to: '/legal/terms' },
    { label: 'common.legalLinks.privacy', to: '/legal/privacy' },
    { label: 'common.legalLinks.disclaimer', to: '/legal/disclaimer' },
  ] },
]
</script>

<template>
  <footer class="bg-night text-stone-400">
    <div class="mx-auto max-w-page px-4 py-16 sm:px-6">
      <div class="grid gap-12 lg:grid-cols-12">
        <div class="lg:col-span-4">
          <NuxtLink :to="localePath('/')" class="inline-flex items-center gap-2.5 text-white" :aria-label="t('common.logoAlt')">
            <NuxtImg src="/logo.png" alt="" width="28" height="28" class="size-7" />
            <span class="text-lg font-semibold tracking-tight">AdiletAI</span>
          </NuxtLink>
          <p class="mt-4 max-w-xs text-sm leading-relaxed">
            {{ t('common.footer.tagline') }}
          </p>
          <div class="mt-6 flex flex-wrap gap-2">
            <AppButton :href="CALENDLY_URL" variant="inverted" size="sm">
              {{ t('common.cta.demo') }}
            </AppButton>
            <AppButton :href="APP_URL" variant="inverted-ghost" size="sm">
              {{ t('common.cta.signIn') }}
            </AppButton>
          </div>
        </div>

        <nav v-for="col in columns" :key="col.key" class="lg:col-span-2" :aria-labelledby="`footer-${col.key}`">
          <h2 :id="`footer-${col.key}`" class="text-sm font-medium text-white">
            {{ t(`common.footer.${col.key}`) }}
          </h2>
          <ul class="mt-4 space-y-3 text-sm">
            <li v-for="link in col.links" :key="link.to">
              <NuxtLink :to="localePath(link.to)" class="transition-colors hover:text-white">
                {{ t(link.label) }}
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <div class="lg:col-span-2">
          <h2 class="text-sm font-medium text-white">
            {{ t('common.footer.languages') }}
          </h2>
          <ul class="mt-4 space-y-3 text-sm">
            <li v-for="l in locales" :key="l.code">
              <NuxtLink
                :to="switchLocalePath(l.code)"
                :hreflang="l.language"
                :lang="l.language"
                :aria-current="l.code === locale ? 'true' : undefined"
                class="transition-colors hover:text-white"
                :class="{ 'text-white': l.code === locale }"
              >
                {{ l.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs sm:flex-row sm:items-start sm:justify-between">
        <div class="space-y-1 sm:shrink-0">
          <p>{{ t('common.footer.rights', { year }) }}</p>
          <p>
            {{ t('common.footer.location') }} ·
            <a :href="`mailto:${CONTACT_EMAIL}`" class="hover:text-white">{{ CONTACT_EMAIL }}</a>
          </p>
        </div>
        <p class="max-w-md leading-relaxed sm:text-right">
          {{ t('common.footer.notAdvice') }}
        </p>
      </div>
    </div>
  </footer>
</template>
