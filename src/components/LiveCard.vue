<template>
    <div class="relative max-w-full mx-auto overflow-hidden bg-white rounded-lg shadow-lg sm:max-w-80">
      <div class="absolute top-0 left-0 px-2 py-1 text-xs font-bold text-red-600 bg-white">
        <p class="mr-4">En Vivo</p>
        <div class="absolute w-3 h-3 transform -translate-y-1/2 bg-red-600 rounded-full animate-pulse right-1 top-1/2"></div>
      </div>
      
      <img
        alt="Una hermosa representación de un templo Hare Krishna con arquitectura intrincada y colores vibrantes"
        class="object-cover w-full h-32 sm:h-48"
        :src="image ?? 'https://storage.googleapis.com/a1aa/image/MJTTs37etVyFWSSqyblyZwodhOTcSYKQFpGCrYCum9IBxj5JA.jpg'"
        width="600"
      />
      
      <div class="p-2">
        <h2 class="mb-2 text-xl font-bold truncate sm:text-2xl">
          {{ title ?? 'Templo Hare Krishna' }}
        </h2>
        <p class="mb-4 text-sm text-gray-700 sm:text-base">
          {{ description ?? 'Experimenta la atmósfera serena y espiritual del Templo 1.' }}
        </p>
        <a :href="hrefLink ?? 'https://iskconvrindavan.com/live-darshan'" target="_blank" rel="noopener noreferrer">
          <button class="w-full px-4 py-2 text-white rounded bg-rose-500 font-poppins hover:bg-red-700 sm:w-auto">
            Ver Live
          </button>
        </a>
      </div>
    </div>
  </template>
  

<script lang="ts" setup>
const props = defineProps({
    title: String,
    description: String,
    hrefLink: String,   
    image: String
})

</script>

<style scoped>

</style>