<template>
  <header class="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200">
    <div class="container mx-auto px-4 sm:px-0">
      <nav class="flex items-center justify-between h-14" aria-label="Главная навигация">
        <NuxtLink to="/" class="flex items-center gap-2 text-zinc-900 hover:text-zinc-700 transition-colors">
          <NuxtImg src="/logo.png" class="h-8"></NuxtImg>
          <span class="text-xl sm:text-2xl font-bold gs">AdiletAI</span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center gap-1">
          <NuxtLink
            to="/about"
            class="gs px-3 py-2 text-sm text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 rounded-md transition-colors"
          >
            О нас
          </NuxtLink>
          <NuxtLink
            to="/features"
            class="gs px-3 py-2 text-sm text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 rounded-md transition-colors"
          >
            Возможности
          </NuxtLink>
          <NuxtLink
            to="/how-it-works"
            class="gs px-3 py-2 text-sm text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 rounded-md transition-colors"
          >
            Как это работает
          </NuxtLink>
          <NuxtLink
            to="/use-cases"
            class="gs px-3 py-2 text-sm text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 rounded-md transition-colors"
          >
            Примеры
          </NuxtLink>
          <NuxtLink
            to="/faq"
            class="gs px-3 py-2 text-sm text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 rounded-md transition-colors"
          >
            FAQ
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="gs px-3 py-2 text-sm text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 rounded-md transition-colors"
          >
            Контакты
          </NuxtLink>
          <NuxtLink
            to="https://docs.adiletai.com/"
            class="gs px-3 py-2 text-sm text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 rounded-md transition-colors"
          >
            AdiletDocs
          </NuxtLink>
        </div>

        <!-- CTA Button Desktop -->
        <div class="hidden lg:flex items-center gap-3">
          <NuxtLink
            to="https://console.adiletai.com/auth/register"
            class="relative flex gs items-center justify-center text-center font-medium transition-colors duration-200 ease-in-out select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:z-10 rounded-md text-white bg-zinc-700 outline outline-zinc-700 hover:bg-zinc-600 focus-visible:outline-zinc-600 h-9 px-4 text-sm"
          >
            Начать сейчас
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMenu"
          class="lg:hidden p-2 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 rounded-md transition-colors"
          aria-label="Открыть меню"
          aria-expanded="false"
        >
          <svg v-if="!isMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </nav>

      <!-- Mobile Menu -->
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div v-if="isMenuOpen" class="lg:hidden py-4 border-t border-zinc-200">
          <div class="flex flex-col gap-1">
            <NuxtLink
              to="/about"
              @click="closeMenu"
              class="gs px-3 py-2 text-sm text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 rounded-md transition-colors"
            >
              О нас
            </NuxtLink>
            <NuxtLink
              to="/features"
              @click="closeMenu"
              class="gs px-3 py-2 text-sm text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 rounded-md transition-colors"
            >
              Возможности
            </NuxtLink>
            <NuxtLink
              to="/how-it-works"
              @click="closeMenu"
              class="gs px-3 py-2 text-sm text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 rounded-md transition-colors"
            >
              Как это работает
            </NuxtLink>
            <NuxtLink
              to="/use-cases"
              @click="closeMenu"
              class="gs px-3 py-2 text-sm text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 rounded-md transition-colors"
            >
              Примеры использования
            </NuxtLink>
            <NuxtLink
              to="/faq"
              @click="closeMenu"
              class="gs px-3 py-2 text-sm text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 rounded-md transition-colors"
            >
              FAQ
            </NuxtLink>
            <NuxtLink
              to="/contact"
              @click="closeMenu"
              class="gs px-3 py-2 text-sm text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 rounded-md transition-colors"
            >
              Контакты
            </NuxtLink>
            <NuxtLink
              to="https://docs.adiletai.com/"
              @click="closeMenu"
              class="gs px-3 py-2 text-sm text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 rounded-md transition-colors"
            >
              AdiletDocs
            </NuxtLink>
            <div class="pt-2 mt-2 border-t border-zinc-200">
              <NuxtLink
                to="https://console.adiletai.com/auth/register"
                @click="closeMenu"
                class="relative flex gs items-center justify-center text-center font-medium transition-colors duration-200 ease-in-out select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:z-10 rounded-md text-white bg-zinc-700 outline outline-zinc-700 hover:bg-zinc-600 focus-visible:outline-zinc-600 h-10 px-4 text-sm"
              >
                Начать сейчас
              </NuxtLink>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </header>
</template>

<script setup lang="ts">
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>
