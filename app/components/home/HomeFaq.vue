<script setup lang="ts">
// FAQ: sticky heading left, native <details> list right. The page emits the FAQPage JSON-LD from the same items.
defineProps<{ items: { q: string, a: string }[] }>()
const { t } = useI18n()
const localePath = useLocalePath()
</script>

<template>
  <section id="faq" aria-labelledby="home-faq-title" class="scroll-mt-16 border-t border-line py-20 md:py-28">
    <div class="mx-auto grid max-w-page gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12">
      <div class="lg:col-span-4">
        <div class="lg:sticky lg:top-24">
          <h2 id="home-faq-title" class="font-display text-display-2 text-ink">
            {{ t('home.faq.title') }}
          </h2>
          <p class="mt-5 text-base text-ink-muted hyphens-manual">
            {{ t('home.faq.contactLead') }}
            <NuxtLink :to="localePath('/contact')" class="font-medium text-accent-600 underline decoration-accent-600/30 underline-offset-4 transition-colors hover:decoration-accent-600">
              {{ t('home.faq.contactLabel') }}
            </NuxtLink>
          </p>
        </div>
      </div>
      <FaqList :items="items" open class="lg:col-span-8" />
    </div>
  </section>
</template>
