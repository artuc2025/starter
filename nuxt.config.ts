// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n', '@nuxt/content'],
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', name: 'English', file: 'en.json' },
      { code: 'de', iso: 'de-DE', name: 'Deutsch', file: 'de.json' }
    ],
    strategy: 'prefix',
    defaultLocale: 'de',
    lazy: true,
  },
  app: {
    head: {
      title: 'My Blog',
      meta: [
        { name: 'description', content: 'Welcome to my Nuxt-powered blog.' },
        { property: 'og:title', content: 'My Blog' },
        { property: 'og:description', content: 'Welcome to my Nuxt-powered blog.' },
        { property: 'og:image', content: '/default-og-image.png' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ]
    }
  }
})