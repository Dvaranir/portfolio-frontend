<script lang="ts" setup>
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

const fullCode = `const developer = {
  name: "FullStack Dev",
  skills: [
    "JavaScript", 
    "TypeScript", 
    "Python", 
    "PHP", 
    "Go"
  ],
  passion: "Creating amazing apps",
  experience: "5+ years"
};`

const keywords = new Set(['const', 'let', 'var', 'function', 'class', 'if', 'else', 'for', 'while', 'return', 'import', 'export'])
const showCursor = ref(true)

const getTokenType = (token: string) => {
  if (keywords.has(token)) {
    return 'keyword'
  }
  if (/^\d+$/.test(token)) {
    return 'number'
  }
  if (/^\w+$/.test(token)) {
    return 'property'
  }
  return 'normal'
}

const parseTokens = (code: string) => {
  const tokens: Array<{ text: string, type: string }> = []
  let current = ''
  let inString = false
  let stringChar = ''

  for (const char of code) {
    if (!inString && (char === '"' || char === '\'' || char === '`')) {
      if (current) {
        tokens.push({ text: current, type: getTokenType(current) })
        current = ''
      }
      inString = true
      stringChar = char
      current = char
    }
    else if (inString && char === stringChar) {
      current += char
      tokens.push({ text: current, type: 'string' })
      current = ''
      inString = false
      stringChar = ''
    }
    else if (inString) {
      current += char
    }
    else if (/\s/.test(char) || /[{}(),;:[\]]/.test(char)) {
      if (current) {
        tokens.push({ text: current, type: getTokenType(current) })
        current = ''
      }
      tokens.push({ text: char, type: 'normal' })
    }
    else {
      current += char
    }
  }

  if (current) {
    tokens.push({ text: current, type: getTokenType(current) })
  }

  return tokens
}

const codeTokens = parseTokens(fullCode)
const displayedTokens = ref<Array<{ text: string, type: string, currentText: string }>>([])
const currentTokenIndex = ref(0)
const currentCharIndex = ref(0)

const typeCode = () => {
  if (currentTokenIndex.value >= codeTokens.length) {
    showCursor.value = false
    return
  }

  const token = codeTokens[currentTokenIndex.value]

  if (currentCharIndex.value === 0) {
    displayedTokens.value.push({
      text: token.text,
      type: token.type,
      currentText: '',
    })
  }

  const currentDisplayToken = displayedTokens.value.at(-1)!
  const targetText = token.text

  if (currentCharIndex.value < targetText.length) {
    currentDisplayToken.currentText = targetText.slice(0, currentCharIndex.value + 1)
    currentCharIndex.value++
    setTimeout(typeCode, 50)
  }
  else {
    currentTokenIndex.value++
    currentCharIndex.value = 0
    setTimeout(typeCode, 20)
  }
}

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

  setTimeout(typeCode, 1000)

  $gsap.set('.floating-icon', { transformOrigin: 'center center' })
  $gsap.set('.mobile-tech-icon', { transformOrigin: 'center center' })

  const floatingTl = $gsap.timeline({ repeat: -1 })
  floatingTl
    .to('.floating-icon', {
      y: -25,
      rotation: 5,
      scale: 1.1,
      duration: 3,
      ease: 'sine.inOut',
      stagger: {
        amount: 1.2,
        from: 'random',
      },
    })
    .to('.floating-icon', {
      y: 0,
      rotation: -3,
      scale: 1,
      duration: 2.5,
      ease: 'sine.inOut',
      stagger: {
        amount: 0.8,
        from: 'random',
      },
    })
    .to('.floating-icon', {
      rotation: 0,
      duration: 1.5,
      ease: 'elastic.out(1, 0.3)',
      stagger: 0.1,
    })

  const mobileTl = $gsap.timeline({ repeat: -1 })
  mobileTl
    .to('.mobile-tech-icon', {
      y: -12,
      rotation: 8,
      scale: 1.15,
      duration: 2.2,
      ease: 'power2.inOut',
      stagger: {
        amount: 0.6,
        from: 'center',
      },
    })
    .to('.mobile-tech-icon', {
      y: 3,
      rotation: -5,
      scale: 0.95,
      duration: 1.8,
      ease: 'bounce.out',
      stagger: {
        amount: 0.4,
        from: 'edges',
      },
    })
    .to('.mobile-tech-icon', {
      y: 0,
      rotation: 0,
      scale: 1,
      duration: 2,
      ease: 'elastic.out(1.2, 0.4)',
      stagger: 0.08,
    })

  $gsap.to('.floating-icon', {
    boxShadow: '0 10px 30px rgba(0,0,0,0.3), 0 0 20px rgba(59, 130, 246, 0.4)',
    duration: 4,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
    stagger: 0.5,
  })

  $gsap.to('.mobile-tech-icon', {
    boxShadow: '0 8px 25px rgba(0,0,0,0.2), 0 0 15px rgba(34, 197, 94, 0.3)',
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
    stagger: 0.3,
  })

  for (const icon of document.querySelectorAll('.hover-icon')) {
    icon.addEventListener('mouseenter', () => {
      $gsap.to(icon, {
        scale: 1.3,
        rotation: 360,
        duration: 0.6,
        ease: 'back.out(1.7)',
      })
    })

    icon.addEventListener('mouseleave', () => {
      $gsap.to(icon, {
        scale: 1,
        rotation: 0,
        duration: 0.4,
        ease: 'power2.out',
      })
    })
  }

  for (const icon of document.querySelectorAll('.hover-mobile-icon')) {
    icon.addEventListener('touchstart', () => {
      $gsap.to(icon, {
        scale: 1.2,
        rotation: 180,
        duration: 0.3,
        ease: 'back.out(1.7)',
      })
    })

    icon.addEventListener('touchend', () => {
      $gsap.to(icon, {
        scale: 1,
        rotation: 0,
        duration: 0.3,
        ease: 'power2.out',
      })
    })
  }
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

        <div class="code-animation relative w-full max-w-full">
          <div class="bg-gray-900 border border-gray-700 rounded-lg xs:rounded-xl sm:rounded-2xl p-2 xs:p-3 sm:p-4 lg:p-6 shadow-2xl overflow-hidden mx-auto max-w-full">
            <div class="flex items-center gap-1 xs:gap-2 mb-2 xs:mb-3 sm:mb-4 pb-2 xs:pb-3 sm:pb-4 border-b border-gray-700">
              <div class="w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3 bg-red-500 rounded-full" />
              <div class="w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3 bg-yellow-500 rounded-full" />
              <div class="w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full" />
              <span class="ml-2 xs:ml-3 sm:ml-4 text-[10px] xs:text-xs sm:text-sm text-gray-400 font-mono">developer.js</span>
            </div>

            <div class="typing-code min-h-[80px] xs:min-h-[100px] sm:min-h-[120px] md:min-h-[140px] lg:min-h-[150px] bg-gray-900 text-gray-200 font-mono text-[9px] xs:text-[10px] sm:text-xs md:text-sm leading-tight xs:leading-snug sm:leading-relaxed p-1 xs:p-2 sm:p-3 lg:p-4 whitespace-pre overflow-x-auto">
              <span
                v-for="(token, index) in displayedTokens"
                :key="index"
                :class="getColorClass(token.type)"
              >{{ token.currentText }}</span><span v-if="showCursor" class="text-gray-200">|</span>
            </div>
          </div>

          <div class="hidden lg:block absolute -top-4 lg:right-0 xl:-right-2 2xl:-right-4 floating-icon hover-icon">
            <div class="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-lg transition-all duration-300">
              <Icon name="mdi:language-go" class="w-6 h-6 text-white" />
            </div>
          </div>

          <div class="hidden lg:block absolute -bottom-4 -left-4 floating-icon hover-icon">
            <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg transition-all duration-300">
              <Icon name="mdi:nodejs" class="w-6 h-6 text-white" />
            </div>
          </div>

          <div class="hidden lg:block absolute top-1/2 lg:right-2 xl:right-0 2xl:-right-4 floating-icon hover-icon">
            <div class="w-10 h-10 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center shadow-lg transition-all duration-300">
              <Icon name="mdi:language-javascript" class="w-5 h-5 text-white" />
            </div>
          </div>

          <div class="hidden lg:block absolute lg:-top-4 xl:-top-6 2xl:-top-8 lg:left-1/6 xl:left-1/5 2xl:left-1/4 floating-icon hover-icon">
            <div class="w-10 h-10 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg transition-all duration-300">
              <Icon name="mdi:language-php" class="w-5 h-5 text-white" />
            </div>
          </div>

          <div class="hidden lg:block absolute lg:-bottom-4 xl:-bottom-6 2xl:-bottom-8 lg:right-1/6 xl:right-1/5 2xl:right-1/4 floating-icon hover-icon">
            <div class="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-lg transition-all duration-300">
              <Icon name="mdi:language-python" class="w-5 h-5 text-white" />
            </div>
          </div>

          <div class="lg:hidden flex justify-center flex-wrap gap-2 xs:gap-3 sm:gap-4 mt-3 xs:mt-4 sm:mt-6">
            <div class="mobile-tech-icon hover-mobile-icon w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-md xs:rounded-lg flex items-center justify-center shadow-lg cursor-pointer transition-all duration-300">
              <Icon name="mdi:language-go" class="w-4 h-4 xs:w-5 xs:h-5 text-white" />
            </div>
            <div class="mobile-tech-icon hover-mobile-icon w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-md xs:rounded-lg flex items-center justify-center shadow-lg cursor-pointer transition-all duration-300">
              <Icon name="mdi:nodejs" class="w-4 h-4 xs:w-5 xs:h-5 text-white" />
            </div>
            <div class="mobile-tech-icon hover-mobile-icon w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-md xs:rounded-lg flex items-center justify-center shadow-lg cursor-pointer transition-all duration-300">
              <Icon name="mdi:language-javascript" class="w-4 h-4 xs:w-5 xs:h-5 text-white" />
            </div>
            <div class="mobile-tech-icon hover-mobile-icon w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-md xs:rounded-lg flex items-center justify-center shadow-lg cursor-pointer transition-all duration-300">
              <Icon name="mdi:language-php" class="w-4 h-4 xs:w-5 xs:h-5 text-white" />
            </div>
            <div class="mobile-tech-icon hover-mobile-icon w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-md xs:rounded-lg flex items-center justify-center shadow-lg cursor-pointer transition-all duration-300">
              <Icon name="mdi:language-python" class="w-4 h-4 xs:w-5 xs:h-5 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="absolute top-20 left-10 w-2 h-2 bg-green/40 rounded-full animate-pulse" />
    <div class="absolute bottom-20 right-20 w-3 h-3 bg-green/30 rounded-full animate-pulse" style="animation-delay: 1s;" />
  </section>
</template>
