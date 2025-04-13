<template>
    <div class="max-w-4xl mx-auto px-4 py-10 space-y-6">
      <h1 class="text-4xl font-bold text-primary-1">{{ $t('welcome') }}</h1>
      <p class="text-lg text-text-2">{{ $t('home.description') }}</p>
    </div>
  </template>
  
  <script setup>
  import { useSeoMeta } from '#imports'
  import { useI18n } from 'vue-i18n'
  
  const { t } = useI18n()
  
  useSeoMeta({
    title: () => t('home.title'),
    description: () => t('home.description'),
    ogTitle: () => t('home.title'),
    ogDescription: () => t('home.description')
  })
  </script>
  