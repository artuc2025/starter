<template>
    <header class="flex items-center justify-between px-6 py-4 shadow">
      <div class="flex items-center gap-4">
        <NuxtLink :to='`/${locale}`' class="text-2xl font-bold text-primary-1">My Blog</NuxtLink>
        <NavBar />
      </div>
      <LanguageSwitcher />
    </header>
  </template>

  <script setup>
    import { useI18n } from 'vue-i18n'
    const { locale } = useI18n()
  </script>
  