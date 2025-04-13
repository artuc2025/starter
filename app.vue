<!-- app.vue -->
<template>
  <div>
    <header class="bg-gray-100 p-4">
      <nav class="flex gap-4 text-lg">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/blog">Blog</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
      </nav>
    </header>

    <NuxtPage />
  </div>
</template>
