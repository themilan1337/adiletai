<script setup lang="ts">
// The product's app sidebar (adilet-b2b AppSidebar): logo mark, module nav, Аккаунт / Выйти footer. Russian chrome.
defineProps<{ active: 'assistant' | 'vault' | 'analytics' }>()

const ITEMS = [
  { id: 'assistant', label: 'Ассистент', icon: 'hugeicons:asterisk' },
  { id: 'vault', label: 'Хранилище', icon: 'hugeicons:folder-01' },
  { id: 'analytics', label: 'Аналитика', icon: 'hugeicons:analytics-01' },
  { id: 'billing', label: 'Биллинг', icon: 'hugeicons:credit-card' },
] as const
</script>

<template>
  <div lang="ru" class="flex w-52 shrink-0 flex-col border-r border-stone-200/90 bg-white">
    <div class="flex items-center gap-2 px-5 pt-6 pb-5">
      <img src="/logo.png" alt="" width="22" height="22" class="size-[22px]">
      <span class="text-[1.15rem] leading-none font-bold tracking-tight text-stone-900">AdiletAI</span>
    </div>
    <div class="space-y-0.5 px-2.5">
      <div
        v-for="item in ITEMS"
        :key="item.id"
        class="flex items-center gap-2.5 rounded-lg px-3 py-2 text-[13px] font-medium"
        :class="item.id === active ? 'bg-stone-100 text-stone-900' : 'text-stone-500'"
      >
        <Icon :name="item.icon" class="size-4!" :class="item.id === active ? 'text-stone-900' : 'text-stone-400'" />
        {{ item.label }}
      </div>
    </div>
    <div class="mt-auto space-y-0.5 border-t border-stone-100 p-2.5 text-[13px] text-stone-500">
      <div class="flex items-center gap-2.5 px-3 py-2">
        <Icon name="hugeicons:user-circle" class="size-4! text-stone-400" /> Аккаунт
      </div>
      <div class="flex items-center gap-2.5 px-3 py-2">
        <Icon name="hugeicons:logout-01" class="size-4! text-stone-400" /> Выйти
      </div>
    </div>
  </div>
</template>
