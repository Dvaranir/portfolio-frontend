<script lang="ts" setup>
const isDesktop = ref(true)

const bigProjects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Полнофункциональная платформа электронной коммерции с микросервисной архитектурой',
    image: 'https://picsum.photos/600/400?random=10',
    technologies: ['mdi:vuejs', 'mdi:nodejs', 'mdi:database-settings', 'mdi:docker'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: true,
  },
  {
    id: 2,
    title: 'Analytics Dashboard',
    description: 'Мощный дашборд для аналитики с real-time визуализацией данных',
    image: 'https://picsum.photos/600/400?random=11',
    technologies: ['mdi:react', 'mdi:chart-line', 'mdi:database', 'mdi:aws'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: true,
  },
  {
    id: 3,
    title: 'Task Management System',
    description: 'Система управления проектами и задачами для команд разработки',
    image: 'https://picsum.photos/600/400?random=12',
    technologies: ['mdi:vuejs', 'mdi:laravel', 'mdi:database', 'mdi:web'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    id: 4,
    title: 'Social Media App',
    description: 'Социальная сеть с возможностью создания контента и взаимодействия',
    image: 'https://picsum.photos/600/400?random=13',
    technologies: ['mdi:react', 'mdi:nodejs', 'mdi:database', 'mdi:server-network'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    id: 5,
    title: 'Learning Management System',
    description: 'Платформа для онлайн-обучения с интерактивными курсами',
    image: 'https://picsum.photos/600/400?random=14',
    technologies: ['mdi:vuejs', 'mdi:language-python', 'mdi:database', 'mdi:memory'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    id: 6,
    title: 'IoT Monitoring System',
    description: 'Система мониторинга IoT устройств с предиктивной аналитикой',
    image: 'https://picsum.photos/600/400?random=15',
    technologies: ['mdi:language-python', 'mdi:kubernetes', 'mdi:database-plus', 'mdi:chart-line'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
]

onMounted(() => {
  const { $gsap } = useNuxtApp()

  const updateScreenSize = () => {
    isDesktop.value = window.innerWidth >= 1024
  }

  updateScreenSize()
  window.addEventListener('resize', updateScreenSize)

  $gsap.fromTo('.big-projects-section', { y: 80, opacity: 0 }, {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.big-projects-section',
      start: 'top 70%',
      toggleActions: 'play none none reverse',
    },
  })

  $gsap.fromTo('.project-card', { y: 50, opacity: 0, scale: 0.9 }, {
    y: 0,
    opacity: 1,
    scale: 1,
    duration: 0.6,
    stagger: 0.1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.projects-grid',
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateScreenSize)
  })
})
</script>

<template>
  <section class="big-projects-section py-10 lg:py-16">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-4xl lg:text-5xl font-bold text-gray-12 mb-6">
          Большие проекты
        </h2>
        <p class="text-lg text-gray-9 max-w-2xl mx-auto">
          Масштабные решения, демонстрирующие мой опыт в создании сложных систем
          и архитектурных решений корпоративного уровня
        </p>
      </div>

      <div v-if="isDesktop" class="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div
          v-for="(project, index) in bigProjects"
          :key="project.id"
          class="project-card group cursor-pointer"
          :class="{ 'lg:col-span-2': project.featured && index < 2 }"
        >
          <div class="bg-gray-2 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div class="relative overflow-hidden">
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                :class="{ 'lg:h-80': project.featured && index < 2 }"
              >
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div class="absolute top-4 left-4">
                <span v-if="project.featured" class="px-3 py-1 bg-green text-white text-xs font-semibold rounded-full">
                  Featured
                </span>
              </div>

              <div class="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  :href="project.github"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-green transition-colors duration-300"
                >
                  <Icon name="mdi:github" class="w-6 h-6 text-white" />
                </a>
                <a
                  :href="project.demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-green transition-colors duration-300"
                >
                  <Icon name="mdi:open-in-new" class="w-6 h-6 text-white" />
                </a>
              </div>
            </div>

            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-12 mb-3 group-hover:text-green transition-colors duration-300">
                {{ project.title }}
              </h3>

              <p class="text-gray-9 mb-4 leading-relaxed">
                {{ project.description }}
              </p>

              <div class="flex items-center gap-3">
                <Icon
                  v-for="tech in project.technologies"
                  :key="tech"
                  :name="tech"
                  class="w-5 h-5 text-gray-8 hover:text-green transition-colors duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="mobile-projects-slider">
        <UiSwiperComponent
          :items="bigProjects"
          :autoplay="{ delay: 5000, disableOnInteraction: false }"
          :pagination="true"
          :navigation="true"
          :loop="true"
          :slides-per-view="1"
          :space-between="20"
          container-class="rounded-2xl"
          class-name="rounded-2xl"
        >
          <template #default="{ item }">
            <div class="bg-gray-2 rounded-2xl overflow-hidden shadow-lg mx-2">
              <div class="relative overflow-hidden">
                <img
                  :src="item.image"
                  :alt="item.title"
                  class="w-full h-48 object-cover"
                >
                <div class="absolute top-4 left-4">
                  <span v-if="item.featured" class="px-3 py-1 bg-green text-white text-xs font-semibold rounded-full">
                    Featured
                  </span>
                </div>
              </div>

              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-12 mb-3">
                  {{ item.title }}
                </h3>

                <p class="text-gray-9 mb-4 leading-relaxed">
                  {{ item.description }}
                </p>

                <div class="flex items-center gap-3 mb-4">
                  <Icon
                    v-for="tech in item.technologies"
                    :key="tech"
                    :name="tech"
                    class="w-5 h-5 text-gray-8"
                  />
                </div>

                <div class="flex gap-3">
                  <a
                    :href="item.github"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex-1 px-4 py-2 bg-green text-white rounded-lg text-center text-sm font-medium"
                  >
                    GitHub
                  </a>
                  <a
                    :href="item.demo"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex-1 px-4 py-2 border border-green text-green rounded-lg text-center text-sm font-medium"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
          </template>
        </UiSwiperComponent>
      </div>

      <div class="text-center mt-12">
        <NuxtLink
          to="/projects?size=big"
          class="inline-flex items-center gap-2 px-8 py-4 bg-green text-white rounded-lg font-semibold hover:bg-green/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          Посмотреть все большие проекты
          <Icon name="mdi:arrow-right" class="w-5 h-5" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
