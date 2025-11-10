<template>
  <footer class="border-t border-zinc-200 bg-zinc-50 mt-24">
    <div class="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
        <!-- Company Info -->
        <div class="flex flex-col gap-4">
          <NuxtLink to="/" class="flex items-center gap-2 text-zinc-900 hover:text-zinc-700 transition-colors">
            <span class="text-2xl font-bold gs">AdiletAI</span>
          </NuxtLink>
          <p class="text-sm text-zinc-600">
            Юридическая помощь с использованием искусственного интеллекта. Делаем право доступным каждому.
          </p>
        </div>

        <!-- Product Links -->
        <div class="flex flex-col gap-3">
          <h3 class="gs font-medium text-zinc-900 text-sm">Продукт</h3>
          <div class="flex flex-col gap-2">
            <NuxtLink
              to="/features"
              class="text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
            >
              Возможности
            </NuxtLink>
            <NuxtLink
              to="/how-it-works"
              class="text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
            >
              Как это работает
            </NuxtLink>
            <NuxtLink
              to="/pricing"
              class="text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
            >
              Тарифы
            </NuxtLink>
            <NuxtLink
              to="/use-cases"
              class="text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
            >
              Примеры использования
            </NuxtLink>
            <NuxtLink
              to="/security"
              class="text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
            >
              Безопасность
            </NuxtLink>
          </div>
        </div>

        <!-- Company Links -->
        <div class="flex flex-col gap-3">
          <h3 class="gs font-medium text-zinc-900 text-sm">Компания</h3>
          <div class="flex flex-col gap-2">
            <NuxtLink
              to="/about"
              class="text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
            >
              О нас
            </NuxtLink>
            <NuxtLink
              to="/testimonials"
              class="text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
            >
              Отзывы
            </NuxtLink>
            <NuxtLink
              to="/blog"
              class="text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
            >
              Блог
            </NuxtLink>
            <NuxtLink
              to="/contact"
              class="text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
            >
              Контакты
            </NuxtLink>
          </div>
        </div>

        <!-- Support Links -->
        <div class="flex flex-col gap-3">
          <h3 class="gs font-medium text-zinc-900 text-sm">Поддержка</h3>
          <div class="flex flex-col gap-2">
            <NuxtLink
              to="/faq"
              class="text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
            >
              FAQ
            </NuxtLink>
            <NuxtLink
              to="/support"
              class="text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
            >
              Центр поддержки
            </NuxtLink>
            <NuxtLink
              to="/legal/terms"
              class="text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
            >
              Условия использования
            </NuxtLink>
            <NuxtLink
              to="/legal/privacy"
              class="text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
            >
              Политика конфиденциальности
            </NuxtLink>
            <NuxtLink
              to="/legal/disclaimer"
              class="text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
            >
              Дисклеймер
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="mt-12 pt-8 border-t border-zinc-200">
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p class="text-sm text-zinc-600 text-center sm:text-left">
            © {{ currentYear }} AdiletAI. Все права защищены.
          </p>
          <div class="flex items-center gap-6">
            <!-- Social Links - можно добавить позже -->
            <p class="text-xs text-zinc-500">🇰🇿 Made in Shymkent</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>
