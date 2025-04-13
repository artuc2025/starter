<template>
    <div class="flex gap-2">
      <button
        v-for="loc in availableLocales"
        :key="loc.code"
        @click="switchLocale(loc.code)"
        :class="[
          'px-3 py-1 border rounded',
          loc.code === locale ? 'bg-primary-1 text-white' : 'bg-white text-primary-1'
        ]"
      >
        {{ loc.name }}
      </button>
    </div>
  </template>
  
  <script setup>
    import { computed } from 'vue'
  import { useI18n } from 'vue-i18n'
  
  const { locale, locales, setLocale } = useI18n()

  
  const availableLocales = computed(() => {
    return locales.value.filter(loc => loc.code !== locale.value)
})
  
  function switchLocale(code) {
    setLocale(code)
  }
  </script>
  