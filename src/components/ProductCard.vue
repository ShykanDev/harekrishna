<template>
      <div class="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg">
        <div class="flex items-center p-4">
            <h2 class="flex-1 text-lg font-bold text-sky-900">{{ title }}</h2>
            <img :src="imgSrc" alt="A bottle of Patchouli essential oil with a green label and a white cap" class="object-cover w-24 h-24 rounded-lg">
        </div>
        <div class="p-4">
            <p class="mb-4 text-gray-600">{{ description }}</p>
            <a
        href="https://wa.me/525562516687"
        target="_blank"
        rel="noopener noreferrer"
        class="hover:text-blue-700"
      >  
      <button class="flex items-center justify-center px-4 py-2 text-white transition duration-300 bg-blue-500 rounded-full shadow-md hover:bg-blue-600">
          <span>Contacto</span>
          <v-icon name="co-whatsapp" class="ml-2" scale="1.2" />
        </button>
    </a>
        </div>
    </div>
    
</template>

<script lang="ts" setup>
const props = defineProps({
        title:{
            type:String,
        },
        description:{   
            type:String,
        },
        imgSrc: {
            type:String,
        }
})
</script>

<style scoped>

</style>