<template>
    <div class="text-center mt-20">
      <h1 class="text-3xl font-bold text-red-600">Error {{ error.statusCode }}</h1>
      <p>{{ error.message }}</p>
      <NuxtLink to="/">Go Home</NuxtLink>
    </div>
  </template>
  
  <script setup>
  defineProps(['error'])
  </script>