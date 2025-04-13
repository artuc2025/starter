<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">{{ $t('nav.blog') }}</h1>
    <div v-if="posts?.length" class="space-y-4">
      <div v-for="post in posts" :key="post._path" class="p-4 border rounded">
        <NuxtLink :to="post._path" class="text-xl font-semibold text-primary-1 hover:underline">
          {{ post.title }}
        </NuxtLink>
        <p class="text-text-2 mt-2">{{ post.description }}</p>
      </div>
    </div>
    <p v-else>No posts found.</p>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const { data: posts } = await useAsyncData(() =>
  queryContent('/blog')
    .find()
)
console.log('posts', posts.value)
</script>
