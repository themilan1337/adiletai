<template>

<div class="w-full max-w-xl px-4 sm:px-0">
  <!-- <p
    class="text-xs gs relative font-semibold uppercase tracking-wide text-zinc-500 text-blue-500"
  >
    Молодёжный стартап из Казахстана
    <a href="#_" class="relative text-blue-500 underline">
      <span class="absolute inset-0" aria-hidden="true"></span> Узнать больше
    </a>
  </p> -->
  <h2
    class="text-3xl gs text-center sm:text-left font-bold sm:font-normal sm:text-2xl md:text-3xl lg:text-4xl mt-6 sm:mt-8 md:mt-12 tracking-tight text-zinc-900 lg:text-balance"
  >
    Юридическая помощь доступна каждому с AdiletAI
  </h2>
  <p class="text-sm text-center sm:text-left sm:text-base mt-3 sm:mt-4 text-zinc-600 lg:text-balance">
    Интеллектуальный юридический помощник на базе искусственного интеллекта с интеграцией RAG. Получайте точные ответы на юридические вопросы, основанные на законодательстве Казахстана.
  </p>
  <div class="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center mt-6 sm:mt-8 gap-3 sm:gap-2">
    <NuxtLink to="https://app.adiletai.com/"
      class="relative flex gs items-center justify-center text-center font-medium transition-colors duration-200 ease-in-out select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:z-10 rounded-md text-white bg-blue-700 outline outline-blue-700 hover:bg-blue-600 focus-visible:outline-blue-600 h-10 sm:h-9 px-4 text-sm sm:text-sm"
    >
      Начать сейчас
    </NuxtLink>
    <NuxtLink to="#"
      class="relative flex gs items-center justify-center text-center font-medium transition-colors duration-200 ease-in-out select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:z-10 rounded-md text-zinc-600 bg-zinc-50 outline outline-zinc-100 hover:bg-zinc-200 focus-visible:outline-zinc-600 h-10 sm:h-9 px-4 text-sm sm:text-sm"
    >
      Наши возможности
    </NuxtLink>
  </div>
</div>
<div class="mt-8 sm:mt-10 md:mt-12 px-4 sm:px-0 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
  <div class="flex flex-col gap-1">
    <p class="text-lg sm:text-xl md:text-base font-medium text-zinc-900">+83%</p>
    <h3 class="gs text-xs sm:text-sm font-medium text-zinc-600">
      Точность выше ChatGPT
    </h3>
  </div>
  <div class="flex flex-col gap-1">
    <p class="text-lg sm:text-xl md:text-base font-medium text-zinc-900">16-17ч.</p>
    <h3 class="gs text-xs sm:text-sm font-medium text-zinc-600">
      Экономия в неделю
    </h3>
  </div>
  <div class="flex flex-col gap-1">
    <p class="text-lg sm:text-xl md:text-base font-medium text-zinc-900">RAG</p>
    <h3 class="gs text-xs sm:text-sm font-medium text-zinc-600">
      Технология проверки
    </h3>
  </div>
  <div class="flex flex-col gap-1">
    <p class="text-lg sm:text-xl md:text-base font-medium text-zinc-900">10+</p>
    <h3 class="gs text-xs sm:text-sm font-medium text-zinc-600">
      Пользователей
    </h3>
  </div>
</div>
<div
  class="relative mt-6 sm:mt-8 md:mt-4 overflow-hidden mb-16 sm:mb-20 md:mb-24 rounded-xl sm:rounded-2xl shadow outline outline-zinc-200 mx-4 sm:mx-0"
>
  <NuxtImg
    src="/app.png"
    loading="eager"
    decoding="async"
    alt="dashboard"
    fetchpriority="auto"
    width="1200"
    height="1200"
    :placeholder="[50, 25, 75, 5]"
    class="object-cover w-full h-full"
  />
</div>

</template>