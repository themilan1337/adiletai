<script setup lang="ts">
// Security: the page's single switch to the dark block (continues through the CTA band into the footer).
// Left: sticky heading, lead, link and the pseudonymisation diagram. Right: approved controls as a hairline list,
// then third-party providers with the sub-processor request. No certifications, hosting or residency claims.
// Focus: main.css switches the outline to accent-300 inside .bg-night (accent-600 is under 3:1 on stone-950).
const { t, tm, rt } = useI18n()
const localePath = useLocalePath()
const ICONS = ['hugeicons:key-01', 'hugeicons:fingerprint-scan', 'hugeicons:square-lock-02', 'hugeicons:user-lock-01', 'hugeicons:database-locked']
const rows = computed(() => (tm('home.security.rows') as { title: string, body: string }[]).map((r, i) => ({ icon: ICONS[i]!, title: rt(r.title), body: rt(r.body) })))
</script>

<template>
  <section id="security" aria-labelledby="home-sec-title" class="scroll-mt-16 bg-night py-24 text-stone-300 md:py-32">
    <div class="mx-auto grid max-w-page gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12">
      <div class="lg:col-span-5">
        <div>
          <SectionHeading id="home-sec-title" dark :eyebrow="t('home.security.eyebrow')" :title="t('home.security.title')" />
          <p class="mt-6 max-w-[46ch] text-base leading-relaxed text-stone-300">
            {{ t('home.security.lead') }}
          </p>
          <AppButton to="/security" variant="inverted-ghost" icon="hugeicons:arrow-right-02" class="mt-8 ring-1 ring-white/20 ring-inset">
            {{ t('home.security.link') }}
          </AppButton>
          <MockPseudonymisation class="mt-12" />
        </div>
      </div>

      <div class="lg:col-span-7">
        <ul>
          <li v-for="row in rows" :key="row.title" class="flex gap-5 border-t border-white/10 py-7 first:border-t-0 first:pt-0 lg:first:pt-1">
            <Icon :name="row.icon" class="mt-0.5 size-6! shrink-0 text-accent-300" aria-hidden="true" />
            <div class="min-w-0">
              <h3 class="text-lg font-medium text-stone-50">
                {{ row.title }}
              </h3>
              <p class="mt-2 max-w-[60ch] text-sm leading-relaxed text-stone-400">
                {{ row.body }}
              </p>
            </div>
          </li>
        </ul>
        <div class="mt-4 rounded-tile p-6 ring-1 ring-white/10 md:p-8">
          <h3 class="flex items-center gap-2.5 text-lg font-medium text-stone-50">
            <Icon name="hugeicons:global" class="size-5! shrink-0 text-accent-300" aria-hidden="true" />{{ t('home.security.providers.title') }}
          </h3>
          <p class="mt-3 text-sm leading-relaxed text-stone-400">
            {{ t('home.security.providers.body') }}
          </p>
          <a :href="`mailto:${CONTACT_EMAIL}`" class="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent-300 underline decoration-accent-300/30 underline-offset-4 transition-colors hover:decoration-accent-300">
            {{ t('home.security.providers.link') }}
            <Icon name="hugeicons:mail-01" class="size-4!" aria-hidden="true" />
          </a>
        </div>
        <p class="mt-8 text-sm text-stone-300">
          {{ t('home.security.custom') }}
          <NuxtLink :to="localePath('/contact')" class="font-medium text-accent-300 underline decoration-accent-300/40 underline-offset-4 hover:decoration-accent-300">
            {{ t('home.security.customLink') }}
          </NuxtLink>
        </p>
      </div>
    </div>
  </section>
</template>
