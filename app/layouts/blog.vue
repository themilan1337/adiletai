<template>
  <div class="min-h-screen bg-white">
    <!-- Optional: Add a simple blog-specific header if needed, 
         otherwise it will use the main app's header if it's in app.vue -->
    
    <main class="py-12 sm:py-16 md:py-24">
      <slot />
    </main>

    <!-- Blog Footer / CTA -->
    <section class="bg-zinc-50 border-t border-zinc-200 py-16 sm:py-24">
      <div class="container mx-auto px-4 sm:px-6">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl sm:text-4xl font-bold text-zinc-900 mb-6 gs">
            Готовы автоматизировать вашу юридическую работу?
          </h2>
          <p class="text-lg text-zinc-600 mb-10">
            Присоединяйтесь к тысячам юристов, которые уже используют AdiletAI для повышения эффективности и точности.
          </p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <NuxtLink
              to="https://app.adiletai.com/auth/register"
              class="w-full sm:w-auto px-8 py-4 bg-zinc-900 text-white rounded-xl font-semibold hover:bg-zinc-800 transition-all shadow-lg hover:shadow-xl text-center gs"
            >
              Попробовать бесплатно
            </NuxtLink>
            <NuxtLink
              to="/features"
              class="w-full sm:w-auto px-8 py-4 bg-white text-zinc-900 border border-zinc-200 rounded-xl font-semibold hover:bg-zinc-50 transition-all text-center gs"
            >
              Узнать больше
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Layout logic here
</script>

<style scoped>
.gs {
  font-family: 'Outfit', sans-serif;
}
</style>
