<template>
    <nav class="flex gap-4 py-4 px-6">
      <NuxtLink
        v-for="link in links"
        :key="link.to"
        :to="`/${locale}${link.to}`"
        class="text-text-2 hover:text-primary-1"
        :class="{ 'text-primary-1 font-bold': $route.path === `/${locale}${link.to}` }"
      >
        {{ $t(link.label) }}
      </NuxtLink>
    </nav>
  </template>
  
  <script setup>
  import { useI18n } from 'vue-i18n'
const { locale } = useI18n()


  const links = [
    { to: '', label: 'nav.home' },
    { to: '/blog', label: 'nav.blog' },
    { to: '/about', label: 'nav.about' }
  ]
  </script>
  