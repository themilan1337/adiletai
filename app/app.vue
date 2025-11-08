<template>
  <div class="bg-white">
    <NuxtLayout>
      <NuxtPage />
      <Analytics/>
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
import { Analytics } from '@vercel/analytics/nuxt'
</script>