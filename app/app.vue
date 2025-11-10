<template>
  <div class="bg-white min-h-screen flex flex-col">
    <Header />
    <NuxtLayout>
      <main class="flex-1">
        <NuxtPage />
      </main>
      <Analytics/>
    </NuxtLayout>
    <Footer />
  </div>
</template>
<script setup lang="ts">
import { Analytics } from '@vercel/analytics/nuxt'
</script>