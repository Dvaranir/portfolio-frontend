<script lang="ts" setup>
const { $gsap } = useNuxtApp()

onMounted(() => {
  const tl = $gsap.timeline()

  tl.fromTo('.hero-title', { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' },
  )
    .fromTo('.hero-subtitle', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }, '-=0.8')
    .fromTo('.hero-description', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }, '-=0.4')
    .fromTo('.hero-cta', { scale: 0 }, { scale: 1, duration: 0.5, ease: 'back.out(1.7)' }, '-=0.2')

  for (const section of $gsap.utils.toArray('.section-fade') as Element[]) {
    $gsap.fromTo(section, { y: 80, opacity: 0 }, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    })
  }
})
</script>

<template>
  <div>
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-green/10 via-transparent to-gray-2" />

      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="hero-title text-5xl md:text-7xl font-bold mb-6">
            <span class="text-gray-12">Фуллстек</span>
            <br>
            <span class="text-green">Разработчик</span>
          </h1>

          <p class="hero-subtitle text-xl md:text-2xl text-gray-10 mb-8 font-medium">
            Создаю веб-приложения, Chromium решения, парсеры и Telegram ботов
          </p>

          <p class="hero-description text-lg text-gray-8 mb-12 max-w-2xl mx-auto leading-relaxed">
            Превращаю идеи в эффективные цифровые решения с использованием современных технологий
            и лучших практик разработки
          </p>

          <div class="hero-cta flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink
              to="/projects"
              class="px-8 py-4 bg-green text-white rounded-lg font-semibold hover:bg-green/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Посмотреть проекты
            </NuxtLink>
            <a
              href="#contacts"
              class="px-8 py-4 border-2 border-green text-green rounded-lg font-semibold hover:bg-green hover:text-white transition-all duration-300 hover:scale-105"
            >
              Связаться со мной
            </a>
          </div>
        </div>
      </div>

      <div class="absolute inset-0 pointer-events-none">
        <div class="floating-element absolute top-20 left-10 w-4 h-4 bg-green/30 rounded-full" />
        <div class="floating-element absolute top-40 right-20 w-6 h-6 bg-green/20 rounded-full" />
        <div class="floating-element absolute bottom-40 left-20 w-8 h-8 bg-green/10 rounded-full" />
        <div class="floating-element absolute bottom-20 right-10 w-3 h-3 bg-green/40 rounded-full" />
      </div>
    </section>

    <PagesHomeAbout />

    <PagesHomeSmallProjects />

    <PagesHomeBigProjects />

    <PagesHomeContacts />
  </div>
</template>

<style scoped>
.floating-element {
  animation: float 6s ease-in-out infinite;
}

.floating-element:nth-child(2) {
  animation-delay: -2s;
}

.floating-element:nth-child(3) {
  animation-delay: -4s;
}

.floating-element:nth-child(4) {
  animation-delay: -1s;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px) scale(1);
    opacity: 0.7;
  }
  50% {
    transform: translateY(-20px) scale(1.1);
    opacity: 1;
  }
}
</style>
