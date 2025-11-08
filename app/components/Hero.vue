<template>

<div class="max-w-xl">
  <p
    class="text-xs relative font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400 text-blue-500 dark:text-blue-400"
  >
    Молодёжный стартап из Казахстана
    <a href="#_" class="relative text-blue-500 dark:text-blue-400">
      <span class="absolute inset-0" aria-hidden="true"></span> Узнать больше
    </a>
  </p>
  <h2
    class="text-2xl md:text-3xl lg:text-4xl mt-12 font-semibold tracking-tight text-zinc-900 dark:text-white lg:text-balance"
  >
    Юридическая помощь доступна каждому с AdiletAI
  </h2>
  <p class="text-sm mt-4 text-zinc-500 dark:text-zinc-400 lg:text-balance">
    Интеллектуальный юридический помощник на базе искусственного интеллекта с интеграцией RAG. Получайте точные ответы на юридические вопросы, основанные на законодательстве Казахстана.
  </p>
  <div class="flex flex-wrap items-center mt-8 gap-2">
    <NuxtLink to="https://app.adiletai.com/"
      class="relative flex items-center justify-center text-center font-medium transition-colors duration-200 ease-in-out select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:z-10 justify-center rounded-md text-white bg-blue-700 outline outline-blue-700 hover:bg-blue-600 focus-visible:outline-blue-600 dark:bg-blue-600 dark:text-zinc-100 dark:outline-blue-600 dark:hover:bg-blue-700 dark:focus-visible:outline-blue-500 h-9 px-4 text-sm"
    >
      Начать сейчас
    </NuxtLink>
    <NuxtLink to="#"
      class="relative flex items-center justify-center text-center font-medium transition-colors duration-200 ease-in-out select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:z-10 justify-center rounded-md text-zinc-600 bg-zinc-50 outline outline-zinc-100 hover:bg-zinc-200 focus-visible:outline-zinc-600 dark:text-zinc-100 dark:bg-zinc-800 dark:outline-zinc-800 dark:hover:bg-zinc-700 dark:focus-visible:outline-zinc-700 h-9 px-4 text-sm"
    >
      Наши возможности
    </NuxtLink>
  </div>
</div>
<div class="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4">
  <div class="flex flex-col">
    <p class="text-base font-medium text-zinc-900 dark:text-white">+83%</p>
    <h3 class="text-sm font-medium text-zinc-500 dark:text-zinc-400">
      Точность выше ChatGPT
    </h3>
  </div>
  <div class="flex flex-col">
    <p class="text-base font-medium text-zinc-900 dark:text-white">16-17ч.</p>
    <h3 class="text-sm font-medium text-zinc-500 dark:text-zinc-400">
      Экономия в неделю
    </h3>
  </div>
  <div class="flex flex-col">
    <p class="text-base font-medium text-zinc-900 dark:text-white">RAG</p>
    <h3 class="text-sm font-medium text-zinc-500 dark:text-zinc-400">
      Технология проверки
    </h3>
  </div>
  <div class="flex flex-col">
    <p class="text-base font-medium text-zinc-900 dark:text-white">10+</p>
    <h3 class="text-sm font-medium text-zinc-500 dark:text-zinc-400">
      Пользователей
    </h3>
  </div>
</div>
<div
  class="relative mt-4 overflow-hidden mb-24 rounded-2xl shadow outline outline-zinc-200 dark:outline-zinc-800"
>
  <img
    src="/app.png"
    loading="eager"
    decoding="async"
    alt="dashboard"
    fetchpriority="auto"
    width="1200"
    height="1200"
    class="object-cover w-full h-full"
  />
</div>

</template>