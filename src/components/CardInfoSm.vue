<template>
  <div class="p-5 font-poppins min-h-36">
    <div 
      class="relative rounded-lg lg:flex lg:items-center lg:text-2xl lg:gap-x-6" 
      :class="imgRight ? 'lg:flex-row-reverse' : 'lg:flex-row'"
    >
      <!-- Contenedor del texto -->
      <div class="lg:w-1/2 lg:px-4">
        <!-- Título -->
        <h2 class="z-10 text-2xl font-semibold text-center text-sky-800 lg:text-5xl">
          {{ title }}
        </h2>
        <!-- Descripciones -->
        <p class="mt-3 leading-relaxed text-gray-600" v-html="highlightGastritis(description)"></p>
        <p class="mt-3 leading-relaxed text-gray-600" v-html="highlightGastritis(description2)"></p>
      </div>

      <!-- Contenedor de la imagen -->
      <div class="flex items-center justify-center lg:w-1/2 lg:px-4">
        <img
          v-if="showImgCenter"
          :class="imgCenterWidth"
          class="rounded-lg w-[450px] lg:w-[450px]"
          :src="imgCenter"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    default: 'Lorem ipsum dolor.',
  },
  description: {
    type: String,
    default: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. epsum dolor sit amet consectetur adipisicing elit. epsum dolor sit amet.',
  },
  description2: {
    type: String,
    default: 'lorem ipsum dolor sit amet consectetur adipisicing elit. epsum dolor sit amet consectetur adipisicing elit.',
  },
  imgCenter: {
    type: String,
    default: 'https://images.pexels.com/photos/29019699/pexels-photo-29019699/free-photo-of-elegant-rose-vase-in-minimalist-niche-display.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  },
  imgCenterWidth: {
    type: String,
    default: 'w-20',
  },
  showImgCenter: {
    type: Boolean,
    default: true,
  },
  imgRight: {
    type: Boolean,
    default: true, // Imagen a la derecha por defecto
  },
});

/**
 * Función para resaltar "gastritis" en las descripciones.
 * Envuelve la palabra "gastritis" en un <strong>.
 */
const highlightGastritis = (text: string) => {
  return text.replace(/Hare Krishna/gi, '<strong class="text-3xl text-cyan-600 font-oleo-script">Hare Krishna</strong>').replace(/krishna/gi, '<strong class="text-3xl italic text-cyan-600 font-oleo-script">Krishna</strong>').replace(/Hare/gi, '<strong class="text-3xl italic text-cyan-600 font-oleo-script">Hare</strong>').replace(/Rama/gi, '<strong class="text-3xl italic text-cyan-600 font-oleo-script">Rama</strong>');
};
</script>

<style scoped>
/* Estilos personalizados */
</style>

<!-- 
https://krishnastore.com/images/cache/Incense_variety_Pack_1-200x216.jpg
Masala INcense Variety Pack 
https://krishnastore.com/images/cache/seven-star-masala-incense-pack-200x216.jpg
Seven Masala Oncense variety Pack


-->