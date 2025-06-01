<script lang="ts" setup>
const contactLinks = [
  {
    name: 'Telegram',
    description: 'Быстрый ответ в любое время',
    url: 'https://t.me/yourusername',
    icon: 'mdi:telegram',
    color: 'from-blue-500 to-blue-600',
    username: '@yourusername',
  },
  {
    name: 'LinkedIn',
    description: 'Профессиональное общение',
    url: 'https://linkedin.com/in/yourprofile',
    icon: 'mdi:linkedin',
    color: 'from-blue-700 to-blue-800',
    username: 'linkedin.com/in/yourprofile',
  },
  {
    name: 'GitHub',
    description: 'Просмотр проектов и кода',
    url: 'https://github.com/yourusername',
    icon: 'mdi:github',
    color: 'from-gray-700 to-gray-800',
    username: 'github.com/yourusername',
  },
  {
    name: 'Email',
    description: 'Для детального обсуждения',
    url: 'mailto:your.email@example.com',
    icon: 'mdi:email',
    color: 'from-green to-green/80',
    username: 'your.email@example.com',
  },
]

onMounted(() => {
  const { $gsap } = useNuxtApp()

  const tl = $gsap.timeline({
    scrollTrigger: {
      trigger: '.contacts-section',
      start: 'top 70%',
      toggleActions: 'play none none reverse',
    },
  })

  tl.fromTo('.contacts-title', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
  )
    .fromTo('.contacts-description', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.4')
    .fromTo('.contact-card', { y: 50, opacity: 0, scale: 0.9 }, { y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.1, ease: 'back.out(1.7)' }, '-=0.3')

  $gsap.to('.floating-contact-element', {
    y: -15,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut',
    stagger: 0.5,
  })
})
</script>

<template>
  <section id="contacts" class="contacts-section py-20 lg:py-32 bg-gray-2 relative overflow-hidden">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="contacts-title text-4xl lg:text-5xl font-bold text-gray-12 mb-6">
          Давайте создадим что-то крутое вместе
        </h2>
        <p class="contacts-description text-lg text-gray-9 max-w-2xl mx-auto leading-relaxed">
          Готов обсудить ваш проект, поделиться опытом или просто поболтать о технологиях.
          Выберите удобный способ связи!
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <a
          v-for="contact in contactLinks"
          :key="contact.name"
          :href="contact.url"
          target="_blank"
          rel="noopener noreferrer"
          class="contact-card group block"
        >
          <div class="bg-gray-1 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-4 hover:border-green/50">
            <div class="relative mb-6">
              <div
                class="w-16 h-16 rounded-2xl bg-gradient-to-br flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300"
                :class="contact.color"
              >
                <Icon :name="contact.icon" class="w-8 h-8 text-white" />
              </div>
              <div class="absolute -top-2 -right-2 w-6 h-6 bg-green rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Icon name="mdi:arrow-top-right" class="w-3 h-3 text-white" />
              </div>
            </div>

            <h3 class="text-xl font-bold text-gray-12 mb-2 group-hover:text-green transition-colors duration-300">
              {{ contact.name }}
            </h3>

            <p class="text-gray-9 text-sm mb-4 leading-relaxed">
              {{ contact.description }}
            </p>

            <p class="text-green text-sm font-medium break-all">
              {{ contact.username }}
            </p>
          </div>
        </a>
      </div>

      <div class="text-center">
        <div class="inline-block bg-gray-1 rounded-2xl p-8 shadow-lg border border-gray-4">
          <h3 class="text-2xl font-bold text-gray-12 mb-4">
            Есть интересная идея?
          </h3>
          <p class="text-gray-9 mb-6 max-w-md mx-auto">
            Расскажите о своём проекте, и мы обсудим, как воплотить его в жизнь
          </p>
          <a
            href="mailto:your.email@example.com"
            class="inline-flex items-center gap-2 px-8 py-4 bg-green text-white rounded-lg font-semibold transform hover:bg-green/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <Icon name="mdi:rocket-launch" class="w-5 h-5" />
            Начать проект
          </a>
        </div>
      </div>
    </div>

    <div class="absolute top-20 left-10 floating-contact-element">
      <div class="w-4 h-4 bg-green/30 rounded-full" />
    </div>
    <div class="absolute top-40 right-20 floating-contact-element">
      <div class="w-6 h-6 bg-green/20 rounded-full" />
    </div>
    <div class="absolute bottom-20 left-20 floating-contact-element">
      <div class="w-3 h-3 bg-green/40 rounded-full" />
    </div>
    <div class="absolute bottom-40 right-10 floating-contact-element">
      <div class="w-5 h-5 bg-green/25 rounded-full" />
    </div>
  </section>
</template>
