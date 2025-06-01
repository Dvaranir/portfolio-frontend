<script lang="ts" setup>
const coreStore = useCoreStore()
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com', icon: 'mdi:github' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'mdi:linkedin' },
  { name: 'Telegram', url: 'https://t.me/', icon: 'mdi:telegram' },
]

const navItems = [
  { name: 'Главная', href: '/' },
  { name: 'Проекты', href: '/projects' },
  { name: 'Контакты', href: '#contacts' },
]

onMounted(() => {
  const { $gsap } = useNuxtApp()

  $gsap.fromTo('.header-logo', { scale: 0, rotation: -180 }, { scale: 1, rotation: 0, duration: 1, ease: 'back.out(1.7)' },
  )

  $gsap.fromTo('.nav-item', { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, delay: 0.3 },
  )

  $gsap.fromTo('.social-link', { x: 50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, stagger: 0.1, delay: 0.8 },
  )
})

watch(isMenuOpen, (newValue) => {
  const { $gsap } = useNuxtApp()

  if (newValue) {
    $gsap.to('.mobile-menu', {
      x: 0,
      duration: 0.3,
      ease: 'power2.out',
    })
    $gsap.fromTo('.mobile-nav-item', { x: -30, opacity: 0 }, { x: 0, opacity: 1, duration: 0.3, stagger: 0.1, delay: 0.1 },
    )
  }
  else {
    $gsap.to('.mobile-menu', {
      x: '100%',
      duration: 0.3,
      ease: 'power2.in',
    })
  }
})
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-gray-1/80 backdrop-blur-md border-b border-gray-4">
    <div class="container mx-auto px-4 h-16 flex items-center justify-between">
      <NuxtLink to="/" class="header-logo flex items-center space-x-3 group">
        <div class="relative">
          <img
            src="https://avatars.githubusercontent.com/u/87989392?v=4"
            alt="Developer Logo"
            class="w-10 h-10 rounded-full ring-2 ring-green transform transition-all duration-300 group-hover:ring-4 group-hover:scale-110"
          >
          <div class="absolute -top-1 -right-1 w-4 h-4 bg-green rounded-full animate-pulse" />
        </div>
        <span class="font-bold text-lg text-gray-12 hidden sm:block">DevPortfolio</span>
      </NuxtLink>

      <nav class="hidden lg:flex items-center space-x-8">
        <NuxtLink
          v-for="item in navItems"
          :key="item.name"
          :to="item.href"
          class="nav-item text-gray-11 hover:text-green transition-colors duration-300 font-medium relative group"
        >
          {{ item.name }}
          <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-green transition-all duration-300 group-hover:w-full" />
        </NuxtLink>
      </nav>

      <div class="flex items-center space-x-4">
        <button
          class="w-10 h-10 rounded-full bg-gray-3 hover:bg-gray-4 flex items-center justify-center transform transition-all duration-300 hover:scale-110"
          :title="coreStore.isThemeDark ? 'Светлая тема' : 'Тёмная тема'"
          @click="coreStore.toggleTheme"
        >
          <Icon
            :name="coreStore.isThemeDark ? 'mdi:white-balance-sunny' : 'mdi:moon-waning-crescent'"
            class="w-5 h-5 text-gray-11 transition-transform duration-300"
            :class="{ 'rotate-180': !coreStore.isThemeDark }"
          />
        </button>

        <div class="hidden md:flex items-center space-x-2">
          <a
            v-for="social in socialLinks"
            :key="social.name"
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            class="social-link w-10 h-10 rounded-full bg-gray-3 hover:bg-green flex items-center justify-center transform transition-all duration-300 hover:scale-110 group"
            :title="social.name"
          >
            <Icon
              :name="social.icon"
              class="w-5 h-5 text-gray-11 group-hover:text-white transition-colors duration-300"
            />
          </a>
        </div>

        <button
          class="lg:hidden w-10 h-10 rounded-lg bg-gray-3 hover:bg-gray-4 flex items-center justify-center transition-all duration-300"
          @click="toggleMenu"
        >
          <Icon
            :name="isMenuOpen ? 'mdi:close' : 'mdi:menu'"
            class="w-6 h-6 text-gray-11 transition-transform duration-300"
            :class="{ 'rotate-180': isMenuOpen }"
          />
        </button>
      </div>
    </div>

    <div
      class="mobile-menu fixed top-16 right-0 w-80 h-[calc(100vh-4rem)] bg-gray-1 border-l border-gray-4 transform translate-x-full lg:hidden"
    >
      <div class="p-6 space-y-6">
        <nav class="space-y-4">
          <NuxtLink
            v-for="item in navItems"
            :key="item.name"
            :to="item.href"
            class="mobile-nav-item block px-4 py-3 rounded-lg bg-gray-2 hover:bg-green hover:text-white transition-all duration-300 text-gray-11 font-medium"
            @click="toggleMenu"
          >
            {{ item.name }}
          </NuxtLink>
        </nav>

        <div class="pt-6 border-t border-gray-4">
          <h3 class="text-sm font-semibold text-gray-8 mb-4">
            Социальные сети
          </h3>
          <div class="grid grid-cols-3 gap-3">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="mobile-nav-item flex flex-col items-center p-4 rounded-lg bg-gray-2 hover:bg-green hover:text-white transition-all duration-300 group"
            >
              <Icon
                :name="social.icon"
                class="w-6 h-6 text-gray-11 group-hover:text-white transition-colors duration-300 mb-2"
              />
              <span class="text-xs font-medium">{{ social.name }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="isMenuOpen"
      class="fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden z-[-1]"
      @click="toggleMenu"
    />
  </header>
</template>
