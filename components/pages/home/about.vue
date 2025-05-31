<script lang="ts" setup>
onMounted(() => {
  const { $gsap } = useNuxtApp()

  const tl = $gsap.timeline({
    scrollTrigger: {
      trigger: '.about-section',
      start: 'top 70%',
      toggleActions: 'play none none reverse',
    },
  })

  tl.fromTo('.about-title', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
  )
    .fromTo('.about-text', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 }, '-=0.4')
    .fromTo('.code-animation', { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 1, ease: 'back.out(1.7)' }, '-=0.6')

  // Анимация печатания кода
  const codeLines = [
    'const developer = {',
    '  name: "FullStack Dev",',
    '  skills: ["JavaScript", "TypeScript", "Python"],',
    '  passion: "Creating amazing apps",',
    '  experience: "5+ years"',
    '};',
  ]

  let currentLine = 0
  const typeCode = () => {
    if (currentLine < codeLines.length) {
      const line = codeLines[currentLine]
      const codeElement = document.querySelector('.typing-code')
      if (codeElement) {
        const span = document.createElement('div')
        span.className = 'code-line text-green font-mono text-sm'
        codeElement.append(span)

        let index = 0
        const typing = setInterval(() => {
          span.textContent = line.slice(0, Math.max(0, index + 1))
          index++
          if (index >= line.length) {
            clearInterval(typing)
            currentLine++
            setTimeout(typeCode, 300)
          }
        }, 50)
      }
    }
  }

  setTimeout(typeCode, 1000)

  // Анимация парящих элементов
  $gsap.to('.floating-icon', {
    y: -20,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut',
    stagger: 0.3,
  })
})
</script>

<template>
  <section class="about-section section-fade py-20 lg:py-32 relative overflow-hidden">
    <div class="container mx-auto px-4">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Текстовый контент -->
        <div class="space-y-8">
          <h2 class="about-title text-4xl lg:text-5xl font-bold text-gray-12">
            Обо мне
          </h2>

          <div class="space-y-6">
            <p class="about-text text-lg text-gray-10 leading-relaxed">
              Я страстный <span class="text-green font-semibold">фуллстек разработчик</span>
              с опытом создания современных веб-приложений, Chromium расширений и автоматизированных решений.
            </p>

            <p class="about-text text-lg text-gray-9 leading-relaxed">
              Специализируюсь на разработке <span class="text-green">высокопроизводительных</span>
              приложений, создании умных парсеров и Telegram ботов, которые решают реальные бизнес-задачи.
            </p>

            <p class="about-text text-lg text-gray-8 leading-relaxed">
              Моя философия — писать чистый, масштабируемый код и создавать продукты,
              которые приносят <span class="text-green">реальную ценность</span> пользователям.
            </p>
          </div>

          <!-- Технологии -->
          <div class="about-text">
            <h3 class="text-xl font-semibold text-gray-11 mb-4">
              Основные технологии:
            </h3>
            <div class="flex flex-wrap gap-3">
              <span
                v-for="tech in ['JavaScript', 'TypeScript', 'Vue.js', 'Nuxt.js', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB']"
                :key="tech"
                class="px-4 py-2 bg-gray-3 text-gray-11 rounded-full text-sm font-medium hover:bg-green hover:text-white transition-all duration-300 cursor-default"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>

        <!-- Анимация кода -->
        <div class="code-animation relative">
          <div class="bg-gray-2 border border-gray-4 rounded-2xl p-6 shadow-2xl">
            <!-- Заголовок терминала -->
            <div class="flex items-center gap-2 mb-4 pb-4 border-b border-gray-4">
              <div class="w-3 h-3 bg-red-500 rounded-full" />
              <div class="w-3 h-3 bg-yellow-500 rounded-full" />
              <div class="w-3 h-3 bg-green rounded-full" />
              <span class="ml-4 text-sm text-gray-8 font-mono">developer.js</span>
            </div>

            <!-- Код -->
            <div class="typing-code space-y-1 min-h-[150px]">
              <div class="flex items-center">
                <span class="text-gray-6 font-mono text-sm mr-2">1</span>
                <div class="w-2 h-4 bg-green animate-pulse" />
              </div>
            </div>
          </div>

          <!-- Парящие иконки технологий -->
          <div class="absolute -top-4 -right-4 floating-icon">
            <div class="w-12 h-12 bg-gradient-to-br from-green to-green/80 rounded-lg flex items-center justify-center shadow-lg">
              <Icon name="mdi:vuejs" class="w-6 h-6 text-white" />
            </div>
          </div>

          <div class="absolute -bottom-4 -left-4 floating-icon">
            <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
              <Icon name="mdi:nodejs" class="w-6 h-6 text-white" />
            </div>
          </div>

          <div class="absolute top-1/2 -right-8 floating-icon">
            <div class="w-10 h-10 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center shadow-lg">
              <Icon name="mdi:language-javascript" class="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Декоративные элементы -->
    <div class="absolute top-20 left-10 w-2 h-2 bg-green/40 rounded-full animate-pulse" />
    <div class="absolute bottom-20 right-20 w-3 h-3 bg-green/30 rounded-full animate-pulse" style="animation-delay: 1s;" />
  </section>
</template>
