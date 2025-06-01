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

  const getColorClass = (type: string) => {
    switch (type) {
      case 'keyword': {
        return 'text-purple-400'
      }
      case 'string': {
        return 'text-yellow-300'
      }
      case 'property': {
        return 'text-blue-300'
      }
      case 'number': {
        return 'text-orange-400'
      }
      default: {
        return 'text-gray-200'
      }
    }
  }

  const codeLines = [
    { text: 'const', type: 'keyword' },
    { text: ' developer = {', type: 'normal' },
    { text: '\n  name: ', type: 'normal' },
    { text: '"FullStack Dev"', type: 'string' },
    { text: ',', type: 'normal' },
    { text: '\n  skills: [', type: 'normal' },
    { text: '"JavaScript"', type: 'string' },
    { text: ', ', type: 'normal' },
    { text: '"TypeScript"', type: 'string' },
    { text: ', ', type: 'normal' },
    { text: '"Python"', type: 'string' },
    { text: '],', type: 'normal' },
    { text: '\n  passion: ', type: 'normal' },
    { text: '"Creating amazing apps"', type: 'string' },
    { text: ',', type: 'normal' },
    { text: '\n  experience: ', type: 'normal' },
    { text: '"5+ years"', type: 'string' },
    { text: '\n};', type: 'normal' },
  ]

  const createCursor = () => {
    const cursor = document.createElement('span')
    cursor.className = 'typing-cursor text-white font-mono text-sm'
    cursor.textContent = '|'
    return cursor
  }

  let currentToken = 0
  let activeCursor: HTMLElement | undefined

  const typeCode = () => {
    if (currentToken < codeLines.length) {
      const token = codeLines[currentToken]
      const codeContainer = document.querySelector('.code-content')
      if (codeContainer) {
        if (activeCursor) {
          activeCursor.remove()
          activeCursor = undefined
        }

        const span = document.createElement('span')
        span.className = `${getColorClass(token.type)} font-mono text-sm whitespace-pre`
        codeContainer.append(span)

        let index = 0
        const typing = setInterval(() => {
          const currentText = token.text.slice(0, Math.max(0, index + 1))
          span.textContent = currentText

          if (activeCursor) {
            activeCursor.remove()
          }
          activeCursor = createCursor()
          span.after(activeCursor)

          index++
          if (index >= token.text.length) {
            clearInterval(typing)
            currentToken++
            setTimeout(typeCode, 100)
          }
        }, 30)
      }
    }
    else {
      if (activeCursor) {
        activeCursor.remove()
        activeCursor = undefined
      }
    }
  }

  setTimeout(typeCode, 1000)

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
  <section class="about-section section-fade py-10 lg:py-16 relative overflow-hidden">
    <div class="container mx-auto px-4">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
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

        <div class="code-animation relative">
          <div class="bg-gray-900 border border-gray-700 rounded-2xl p-6 shadow-2xl">
            <div class="flex items-center gap-2 mb-4 pb-4 border-b border-gray-700">
              <div class="w-3 h-3 bg-red-500 rounded-full" />
              <div class="w-3 h-3 bg-yellow-500 rounded-full" />
              <div class="w-3 h-3 bg-green-500 rounded-full" />
              <span class="ml-4 text-sm text-gray-400 font-mono">developer.js</span>
            </div>

            <div class="typing-code min-h-[150px] bg-gray-900 text-gray-200 font-mono text-sm leading-relaxed p-4">
              <div class="code-content" />
            </div>
          </div>

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

    <div class="absolute top-20 left-10 w-2 h-2 bg-green/40 rounded-full animate-pulse" />
    <div class="absolute bottom-20 right-20 w-3 h-3 bg-green/30 rounded-full animate-pulse" style="animation-delay: 1s;" />
  </section>
</template>
