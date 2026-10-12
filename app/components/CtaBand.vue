<script setup lang="ts">
// Closing CTA band on the night background (put it directly before the dark footer). Book a demo (primary), Sign in
// (existing customers) and the support e-mail. Copy defaults to home.ctaBand.*; pass title/text to override.
const props = defineProps<{ title?: string, text?: string }>()
const { t } = useI18n()
</script>

<template>
  <section aria-labelledby="cta-band-title" class="relative isolate overflow-hidden bg-night">
    <div class="cta-star pointer-events-none absolute -z-10 hidden bg-white/[0.04] md:block" aria-hidden="true" />
    <div class="mx-auto max-w-page px-4 sm:px-6">
      <div class="border-t border-white/10 py-24 md:py-32">
        <h2 id="cta-band-title" class="max-w-[18ch] font-display text-display-1 text-stone-50 [:lang(kk)_&]:max-w-[28ch] [:lang(ru)_&]:max-w-[28ch]">
          {{ props.title || t('home.ctaBand.title') }}
        </h2>
        <p class="mt-6 max-w-[52ch] text-lead text-stone-300">
          {{ props.text || t('home.ctaBand.text') }}
        </p>
        <div class="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <AppButton :href="CALENDLY_URL" variant="inverted" size="lg" icon="hugeicons:arrow-right-02">
            {{ t('common.cta.demo') }}
          </AppButton>
          <AppButton :href="APP_URL" variant="inverted-ghost" size="lg">
            {{ t('common.cta.signIn') }}
          </AppButton>
        </div>
        <i18n-t keypath="home.ctaBand.email" scope="global" tag="p" class="mt-6 text-sm text-stone-400">
          <template #email>
            <a :href="`mailto:${CONTACT_EMAIL}`" class="font-medium text-stone-100 underline decoration-white/30 underline-offset-4 hover:decoration-white">{{ CONTACT_EMAIL }}</a>
          </template>
        </i18n-t>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* The logo's 8-point star as a faint watermark: the PNG is only a mask, the colour comes from bg-white/4. */
.cta-star {
  width: 34rem;
  height: 34rem;
  right: -9rem;
  top: 50%;
  translate: 0 -50%;
  -webkit-mask: url('/logo.png') center / contain no-repeat;
  mask: url('/logo.png') center / contain no-repeat;
}
</style>
