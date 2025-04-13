<template>
  <!-- <div class="p-6">
    <h1 class="text-3xl font-bold mb-2">{{ doc?.title }}</h1>
    <p class="mb-6 text-text-2">{{ doc?.description }}</p>
    <ContentRenderer :value="doc" />
  </div> -->
</template>

<!-- <script setup>
import { useRoute, useContent } from '#imports'
import { useI18n } from 'vue-i18n'

const route = useRoute()
const { locale } = useI18n()

const { data: doc } = await useAsyncData(() =>
  queryContent(`/blog/${route.params.slug}.${locale.value}`).findOne()
)

if (!doc.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post Not Found' })
}
</script> -->
