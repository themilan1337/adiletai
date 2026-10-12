<script setup lang="ts">
// Asymmetric split hero: serif H1 left, lead + CTAs right (shared top), over a full-width product frame cropped by the
// tile edge. The frame holds the Assistant answering in the page language (lang = page locale), chrome in Russian.
// lg height: the Kazakh answer is the longest; 48rem keeps its action row ("Источники · 3") inside the tile.
const { t, tm, rt, locale } = useI18n()
const answer = computed(() => (tm('home.hero.chat.answer') as string[]).map(p => rt(p)))
</script>

<template>
  <section aria-labelledby="home-hero-title" class="pt-12 md:pt-20">
    <div class="mx-auto max-w-page px-4 sm:px-6">
      <div class="grid gap-6 lg:grid-cols-12 lg:items-start lg:gap-8">
        <h1 id="home-hero-title" class="animate-rise font-display text-display-1 text-ink max-w-[20ch] lg:col-span-7 lg:max-w-none [:lang(kk)_&]:max-w-[22ch] [:lang(kk)_&]:lg:max-w-none">
          {{ t('home.hero.title') }}
        </h1>
        <div class="animate-rise lg:col-span-5 lg:pt-2.5" style="animation-delay: 80ms">
          <p class="max-w-[46ch] text-lead text-ink-muted">
            {{ t('home.hero.lead') }}
          </p>
          <div class="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <AppButton :href="CALENDLY_URL" size="lg" icon="hugeicons:arrow-right-02">
              {{ t('common.cta.demo') }}
            </AppButton>
            <AppButton to="/#platform" variant="secondary" size="lg" icon="hugeicons:arrow-down-02">
              {{ t('home.hero.secondary') }}
            </AppButton>
          </div>
        </div>
      </div>
    </div>

    <div class="animate-rise mx-auto mt-12 max-w-wide px-4 sm:px-6 md:mt-16" style="animation-delay: 160ms">
      <MockFrame
        :caption="t('home.hero.caption')"
        tile-class="h-[32rem] sm:h-[36rem] md:h-[42rem] lg:h-[48rem]"
        shell-class="mx-3 mt-5 sm:mx-6 sm:mt-8 md:mx-10 md:mt-10 lg:mx-14"
      >
        <MockAssistant
          :lang="locale"
          :question="t('home.hero.chat.question')"
          :answer="answer"
          :note-title="t('home.hero.chat.noteTitle')"
          :note="t('home.hero.chat.note')"
        />
      </MockFrame>
    </div>
  </section>
</template>
