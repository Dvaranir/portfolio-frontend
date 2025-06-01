<script lang="ts" setup>
import SwiperComponent from '~/components/ui/swiper-component.vue'

const route = useRoute()
const projectId = route.params.id

const project = ref({
  id: Number(projectId),
  title: 'E-Commerce Platform',
  small_description: 'Полнофункциональная платформа электронной коммерции',
  description: `
    <p>Современная платформа электронной коммерции, разработанная с использованием микросервисной архитектуры. Система включает в себя:</p>
    <ul>
      <li>Пользовательский интерфейс с адаптивным дизайном</li>
      <li>Административную панель для управления товарами</li>
      <li>Систему платежей и интеграцию с различными платежными шлюзами</li>
      <li>Систему уведомлений и email-рассылок</li>
      <li>API для мобильных приложений</li>
    </ul>
  `,
  images: [
    'https://picsum.photos/1200/800?random=10',
    'https://picsum.photos/1200/800?random=11',
    'https://picsum.photos/1200/800?random=12',
    'https://picsum.photos/1200/800?random=13',
  ],
  youtube: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  github: 'https://github.com/example/project',
  demo: 'https://demo.example.com',
  technologies: [
    { name: 'Vue.js', icon: 'mdi:vuejs' },
    { name: 'Node.js', icon: 'mdi:nodejs' },
    { name: 'PostgreSQL', icon: 'mdi:database' },
    { name: 'Docker', icon: 'mdi:docker' },
    { name: 'AWS', icon: 'mdi:aws' },
  ],
  tasks: [
    {
      title: 'Frontend разработка',
      description: 'Создание пользовательского интерфейса с использованием Vue.js и современных подходов к разработке',
    },
    {
      title: 'Backend API',
      description: 'Разработка RESTful API с использованием Node.js и Express.js для всех функций платформы',
    },
    {
      title: 'База данных',
      description: 'Проектирование и оптимизация структуры базы данных PostgreSQL для высокой производительности',
    },
  ],
  linked_projects: [
    {
      id: 2,
      title: 'Mobile App',
      small_description: 'Мобильное приложение для платформы',
      images: ['https://picsum.photos/400/300?random=20'],
      technologies: [
        { name: 'React Native', icon: 'mdi:react' },
        { name: 'API', icon: 'mdi:api' },
      ],
    },
    {
      id: 3,
      title: 'Admin Dashboard',
      small_description: 'Административная панель управления',
      images: ['https://picsum.photos/400/300?random=21'],
      technologies: [
        { name: 'Vue.js', icon: 'mdi:vuejs' },
        { name: 'Charts', icon: 'mdi:chart-line' },
      ],
    },
  ],
  project_size: 'big',
  contribution_size: 'full',
  created_at: '2024-12-01',
})

const allSlides = computed(() => {
  const slides = project.value.images.map((image, index) => ({
    id: `image-${index}`,
    type: 'image',
    src: image,
    alt: `${project.value.title} - Изображение ${index + 1}`,
  }))

  if (project.value.youtube) {
    slides.push({
      id: 'youtube',
      type: 'youtube',
      src: project.value.youtube,
      alt: `${project.value.title} - Видео`,
    })
  }

  return slides
})

const breadcrumbs = computed(() => [
  { name: 'Главная', href: '/' },
  { name: 'Проекты', href: '/projects' },
  { name: project.value.title, href: `/projects/${project.value.id}` },
])

onMounted(() => {
  const { $gsap } = useNuxtApp()

  const tl = $gsap.timeline()

  tl.fromTo('.breadcrumbs', { y: -30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
  )
    .fromTo('.project-slider', { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.8, ease: 'back.out(1.7)' }, '-=0.4')
    .fromTo('.project-info', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 }, '-=0.4')

  for (const section of $gsap.utils.toArray('.section-fade') as Element[]) {
    $gsap.fromTo(section, { y: 60, opacity: 0 }, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    })
  }
})

useHead({
  title: `${project.value.title} - DevPortfolio`,
  meta: [
    { name: 'description', content: project.value.small_description },
  ],
})
</script>

<template>
  <div class="min-h-svh bg-gray-1">
    <section class="breadcrumbs py-6 bg-gray-2 border-b border-gray-4">
      <div class="container mx-auto px-4">
        <nav>
          <ol class="flex items-center space-x-2 text-sm">
            <li v-for="(crumb, index) in breadcrumbs" :key="crumb.name">
              <div class="flex items-center">
                <NuxtLink
                  :to="crumb.href"
                  :class="index === breadcrumbs.length - 1 ? 'text-gray-8' : 'text-green hover:text-green/80'"
                  class="transition-colors duration-300"
                >
                  {{ crumb.name }}
                </NuxtLink>
                <Icon
                  v-if="index < breadcrumbs.length - 1"
                  name="mdi:chevron-right"
                  class="w-4 h-4 text-gray-6 mx-2"
                />
              </div>
            </li>
          </ol>
        </nav>
      </div>
    </section>

    <section class="project-slider py-12">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="relative rounded-2xl overflow-hidden shadow-2xl">
            <div class="absolute top-6 left-6 z-10">
              <span
                :class="project.project_size === 'big' ? 'bg-green' : 'bg-blue-500'"
                class="px-4 py-2 text-white text-sm font-semibold rounded-full backdrop-blur-sm bg-opacity-90"
              >
                {{ project.project_size === 'big' ? 'Большой проект' : 'Маленький проект' }}
              </span>
            </div>

            <SwiperComponent
              :items="allSlides"
              :autoplay="{ delay: 6000, disableOnInteraction: false }"
              :pagination="true"
              :navigation="true"
              :loop="true"
              :slides-per-view="1"
              :space-between="0"
              container-class="project-media-swiper"
              class-name="h-96 lg:h-[600px]"
            >
              <template #default="{ item }">
                <div v-if="item.type === 'youtube'" class="relative w-full h-96 lg:h-[600px] bg-black">
                  <iframe
                    :src="item.src"
                    class="w-full h-full"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  />
                </div>

                <div v-else class="relative">
                  <img
                    :src="item.src"
                    :alt="item.alt"
                    class="w-full h-96 lg:h-[600px] object-cover"
                  >
                  <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              </template>
            </SwiperComponent>
          </div>
        </div>
      </div>
    </section>

    <section class="py-12">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="project-info flex justify-center gap-4 mb-8">
            <div
              v-for="tech in project.technologies"
              :key="tech.name"
              class="flex items-center gap-2 px-4 py-2 bg-gray-2 rounded-lg border border-gray-4"
            >
              <Icon :name="tech.icon" class="w-5 h-5 text-green" />
              <span class="text-sm font-medium text-gray-11">{{ tech.name }}</span>
            </div>
          </div>

          <h1 class="project-info text-4xl lg:text-5xl font-bold text-gray-12 text-center mb-6">
            {{ project.title }}
          </h1>

          <div class="project-info flex justify-center gap-4 mb-12">
            <a
              v-if="project.github"
              :href="project.github"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2 px-6 py-3 bg-gray-12 text-gray-1 rounded-lg hover:bg-gray-11 transition-all duration-300 hover:scale-105"
            >
              <Icon name="mdi:github" class="w-5 h-5" />
              GitHub
            </a>
            <a
              v-if="project.demo"
              :href="project.demo"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2 px-6 py-3 bg-green text-white rounded-lg hover:bg-green/90 transition-all duration-300 hover:scale-105"
            >
              <Icon name="mdi:open-in-new" class="w-5 h-5" />
              Посмотреть проект
            </a>
          </div>

          <div class="project-info prose prose-lg max-w-none">
            <div
              class="text-gray-9 leading-relaxed [&>ul]:list-disc [&>ul]:ml-6 [&>ul]:space-y-2 [&>p]:mb-4"
              v-html="project.description"
            />
          </div>
        </div>
      </div>
    </section>

    <section v-if="project.tasks && project.tasks.length > 0" class="section-fade py-12 bg-gray-2">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-gray-12 text-center mb-12">
            Решённые задачи
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              v-for="(task, index) in project.tasks"
              :key="index"
              class="bg-gray-1 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-4"
            >
              <h3 class="text-xl font-bold text-gray-12 mb-4">
                {{ task.title }}
              </h3>
              <div
                class="text-gray-9 leading-relaxed"
                v-html="task.description"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section v-if="project.linked_projects && project.linked_projects.length > 0" class="section-fade py-12">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-3xl font-bold text-gray-12 text-center mb-12">
            Связанные проекты
          </h2>

          <SwiperComponent
            :items="project.linked_projects"
            :autoplay="false"
            :pagination="true"
            :navigation="true"
            :loop="true"
            :slides-per-view="1"
            :space-between="20"
            container-class="rounded-2xl"
            class-name="rounded-2xl"
          >
            <template #default="{ item }">
              <div class="bg-gray-2 rounded-2xl overflow-hidden shadow-lg mx-4">
                <div class="grid md:grid-cols-2 gap-0">
                  <div class="relative overflow-hidden">
                    <img
                      :src="item.images[0]"
                      :alt="item.title"
                      class="w-full h-64 md:h-80 object-cover hover:scale-110 transition-transform duration-500"
                    >
                  </div>

                  <div class="p-8 flex flex-col justify-center">
                    <h3 class="text-2xl font-bold text-gray-12 mb-4">
                      {{ item.title }}
                    </h3>

                    <p class="text-gray-9 mb-6 leading-relaxed">
                      {{ item.small_description }}
                    </p>

                    <div class="flex items-center gap-3 mb-6">
                      <Icon
                        v-for="tech in item.technologies"
                        :key="tech.name"
                        :name="tech.icon"
                        class="w-6 h-6 text-gray-8 hover:text-green transition-colors duration-300"
                      />
                    </div>

                    <NuxtLink
                      :to="`/projects/${item.id}`"
                      class="inline-flex items-center gap-2 px-6 py-3 bg-green text-white rounded-lg hover:bg-green/90 transition-all duration-300 hover:scale-105 w-fit"
                    >
                      Подробнее
                      <Icon name="mdi:arrow-right" class="w-4 h-4" />
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </template>
          </SwiperComponent>
        </div>
      </div>
    </section>
  </div>
</template>
