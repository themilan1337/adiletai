<script setup lang="ts">
// The Assistant's compact composer with attached files (adilet-b2b: ChatComposer + attachment chips). Russian chrome,
// fictional files in the formats the product reads. The microphone is left out (voice input is not available).
const FILES = [
  { name: 'Договор поставки № 14-П.pdf', ext: 'PDF', tile: 'bg-red-500', icon: 'hugeicons:file-02' },
  { name: 'Протокол разногласий.docx', ext: 'DOCX', tile: 'bg-blue-500', icon: 'hugeicons:file-02' },
  { name: 'Спецификация.xlsx', ext: 'XLSX', tile: 'bg-emerald-500', icon: 'hugeicons:file-02' },
  { name: 'Письмо поставщика.msg', ext: 'MSG', tile: 'bg-stone-500', icon: 'hugeicons:mail-01' },
  { name: 'Сенімхат (скан).jpg', ext: 'JPG', tile: 'bg-stone-500', icon: 'hugeicons:image-02', kk: true },
]
</script>

<template>
  <div lang="ru" class="rounded-[1.5rem] border border-stone-200 bg-white p-3 text-stone-900 shadow-card">
    <div class="flex flex-wrap gap-1.5">
      <div v-for="f in FILES" :key="f.name" class="flex max-w-full min-w-0 items-center gap-2 rounded-lg border border-stone-200/90 bg-white py-1 pr-2.5 pl-1">
        <span class="flex size-6 shrink-0 items-center justify-center rounded-md text-white" :class="f.tile"><Icon :name="f.icon" class="size-3!" /></span>
        <span :lang="f.kk ? 'kk' : undefined" class="truncate text-[11.5px] font-medium text-stone-800">{{ f.name }}</span>
        <span class="text-[9.5px] font-medium text-stone-500 uppercase">{{ f.ext }}</span>
      </div>
    </div>
    <div class="mt-3 flex items-center gap-2">
      <span class="flex size-8 shrink-0 items-center justify-center rounded-full text-stone-500"><Icon name="hugeicons:attachment-02" class="size-4!" /></span>
      <span class="min-w-0 flex-1 truncate text-[13px] text-stone-500">Напишите сообщение...</span>
      <span class="flex size-8 shrink-0 items-center justify-center rounded-full bg-stone-900 text-white"><Icon name="hugeicons:arrow-up-02" class="size-4!" /></span>
    </div>
  </div>
</template>
