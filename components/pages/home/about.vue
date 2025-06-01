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
  skills: ["JavaScript", "TypeScript", "Python"],
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

        <div class="code-animation relative mx-auto max-w-full">
          <div class="bg-gray-900 border border-gray-700 rounded-2xl p-3 sm:p-6 shadow-2xl overflow-hidden">
            <div class="flex items-center gap-2 mb-4 pb-4 border-b border-gray-700">
              <div class="w-3 h-3 bg-red-500 rounded-full" />
              <div class="w-3 h-3 bg-yellow-500 rounded-full" />
              <div class="w-3 h-3 bg-green-500 rounded-full" />
              <span class="ml-4 text-xs sm:text-sm text-gray-400 font-mono">developer.js</span>
            </div>

            <div class="typing-code min-h-[120px] sm:min-h-[150px] bg-gray-900 text-gray-200 font-mono text-xs sm:text-sm leading-relaxed p-2 sm:p-4 whitespace-pre overflow-x-auto">
              <span
                v-for="(token, index) in displayedTokens"
                :key="index"
                :class="getColorClass(token.type)"
              >{{ token.currentText }}</span><span v-if="showCursor" class="text-gray-200">|</span>
            </div>
          </div>

          <!-- Floating icons - адаптивные позиции -->
          <div class="hidden sm:block absolute -top-4 -right-4 floating-icon">
            <div class="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-lg">
              <Icon name="mdi:language-go" class="w-6 h-6 text-white" />
            </div>
          </div>

          <div class="hidden sm:block absolute -bottom-4 -left-4 floating-icon">
            <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
              <Icon name="mdi:nodejs" class="w-6 h-6 text-white" />
            </div>
          </div>

          <div class="hidden sm:block absolute top-1/2 -right-8 floating-icon">
            <div class="w-10 h-10 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center shadow-lg">
              <Icon name="mdi:language-javascript" class="w-5 h-5 text-white" />
            </div>
          </div>

          <div class="hidden lg:block absolute -top-8 left-1/4 floating-icon">
            <div class="w-10 h-10 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg">
              <Icon name="mdi:language-php" class="w-5 h-5 text-white" />
            </div>
          </div>

          <div class="hidden lg:block absolute -bottom-8 right-1/4 floating-icon">
            <div class="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-lg">
              <Icon name="mdi:language-python" class="w-5 h-5 text-white" />
            </div>
          </div>

          <!-- Мобильные иконки внизу -->
          <div class="sm:hidden flex justify-center gap-4 mt-6">
            <div class="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-lg">
              <Icon name="mdi:language-go" class="w-5 h-5 text-white" />
            </div>
            <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
              <Icon name="mdi:nodejs" class="w-5 h-5 text-white" />
            </div>
            <div class="w-10 h-10 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center shadow-lg">
              <Icon name="mdi:language-javascript" class="w-5 h-5 text-white" />
            </div>
            <div class="w-10 h-10 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg">
              <Icon name="mdi:language-php" class="w-5 h-5 text-white" />
            </div>
            <div class="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-lg">
              <Icon name="mdi:language-python" class="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="absolute top-20 left-10 w-2 h-2 bg-green/40 rounded-full animate-pulse" />
    <div class="absolute bottom-20 right-20 w-3 h-3 bg-green/30 rounded-full animate-pulse" style="animation-delay: 1s;" />
  </section>
</template>
