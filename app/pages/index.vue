<script setup lang="ts">
// Home page. Section copy lives in i18n/locales/<locale>/home.json; product mockups keep their Russian chrome.
// JSON-LD: a SoftwareApplication node for the platform and a FAQPage node that mirrors the visible FAQ exactly.
const { t, tm, rt } = useI18n()
const site = useSiteConfig()

const faq = computed(() => (tm('home.faq.items') as { q: string, a: string }[]).map(i => ({ q: rt(i.q), a: rt(i.a) })))
// Visible copy carries U+2011 (non-breaking hyphen) and U+00A0 (typography); JSON-LD gets plain hyphens and spaces.
const plain = (s: string) => s.replace(/\u2011/g, '-').replace(/\u00A0/g, ' ')

useSeoMeta({
  title: () => t('home.meta.title'),
  description: () => t('home.meta.description'),
  ogTitle: () => t('home.meta.title'),
  ogDescription: () => t('home.meta.description'),
  twitterTitle: () => t('home.meta.title'),
  twitterDescription: () => t('home.meta.description'),
})

useSchemaOrg([
  {
    '@type': 'SoftwareApplication',
    'name': 'AdiletAI',
    'applicationCategory': 'BusinessApplication',
    'operatingSystem': 'Web',
    'url': APP_URL,
    'description': () => plain(`${t('home.about.statement')} ${t('home.about.continuation')}`),
    'featureList': () => (['assistant', 'vault', 'review', 'court'] as const).map(k => plain(`${t(`home.platform.${k}.name`)}: ${t(`home.platform.${k}.title`)}`)),
    'publisher': { '@id': `${site.url}/#organization` },
  },
  {
    '@type': 'FAQPage',
    'mainEntity': () => faq.value.map(i => ({
      '@type': 'Question',
      'name': plain(i.q),
      'acceptedAnswer': { '@type': 'Answer', 'text': plain(i.a) },
    })),
  },
])
</script>

<template>
  <div>
    <HomeHero />
    <HomeAbout />
    <HomeModules />
    <HomeGrounding />
    <HomeKazakhstan />
    <HomeAudiences />
    <HomeFaq :items="faq" />
    <HomeSecurity />
    <CtaBand />
  </div>
</template>
