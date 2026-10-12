<script setup lang="ts">
import { Analytics } from '@vercel/analytics/nuxt'

const { t, locale } = useI18n()
const site = useSiteConfig()

// <html lang dir>, canonical, hreflang (+x-default), og:url and og:locale(+alternate) for every page.
const head = useLocaleHead({ dir: true, lang: true, seo: true })
useHead(() => ({
  htmlAttrs: { lang: head.value.htmlAttrs.lang, dir: head.value.htmlAttrs.dir },
  link: head.value.link,
  meta: head.value.meta,
}))

// Site-wide defaults; pages override title/description and may override the image.
useSeoMeta({
  ogType: 'website',
  ogImage: () => `${site.url}/og/${locale.value}.png`,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: () => t('nuxtSiteConfig.description'),
  twitterCard: 'summary_large_image',
})

// One Organization entity for every page and locale (WebSite/WebPage + inLanguage come from @nuxtjs/seo).
useSchemaOrg([
  {
    '@type': 'Organization',
    '@id': `${site.url}/#organization`,
    'name': 'AdiletAI',
    'alternateName': 'Adilet AI',
    'url': site.url,
    'logo': `${site.url}/logo.png`,
    'description': () => t('nuxtSiteConfig.description'),
    'email': CONTACT_EMAIL,
    'address': { '@type': 'PostalAddress', 'addressLocality': 'Shymkent', 'addressCountry': 'KZ' },
    'areaServed': { '@type': 'Country', 'name': 'Kazakhstan' },
    'knowsLanguage': ['kk', 'ru', 'en'],
    'contactPoint': {
      '@type': 'ContactPoint',
      'contactType': 'customer support',
      'email': CONTACT_EMAIL,
      'availableLanguage': ['Kazakh', 'Russian', 'English'],
    },
  },
])
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <SiteHeader />
    <main id="main" class="flex-1">
      <NuxtPage />
    </main>
    <SiteFooter />
    <Analytics />
  </div>
</template>
