<template>
    <div class="selection:bg-white selection:text-blue-700 overflow-hidden">
        <header class="fixed left-0 right-0 z-50 py-3 shadow-lg md:py-0 bg-slate-50">
  <!-- Navegación principal -->
  <nav class="flex relative items-center justify-between px-6 lg:py-1 lg:px-12">
    <img src="../assets/ssl-certificate.png" class="absolute w-11 right-0 -top-2-0 md:top-8 md:right-1 lg:hidden "  alt="">
    <!-- Logo -->
    <img src="https://medicinaparaansiedad.com/img/logo.png" alt="Logo" class="hidden w-14 md:block lg:w-16" />
    <p :class="{'animate-fade-up' : mainUrl === 'harekrishna.com.mx', 'animate-fade-down' : mainUrl === 'radhakrishna.com.mx'}"  class="hidden text-3xl text-sky-700 font-semibold font-funnel-display md:block animate-delay-500">{{ mainUrl }}</p>
    <!-- Links de navegación -->
    <div class="flex gap-3 md:gap-5  text-sm font-medium text-gray-700 lg:text-base">

      <RouterLink
        :class="{ 'border-b-2 border-blue-600 text-blue-700': route.name === 'home' }"
        :to="{ name: 'home' }"
        class="transition-colors hover:text-blue-600"
      >
        Inicio
      </RouterLink>
      <RouterLink
        :class="{ 'border-b-2 border-blue-600 text-blue-700': route.name === 'beneficts' }"
        :to="{ name: 'beneficts' }"
        class="transition-colors hover:text-blue-600"
      >
        Historia
      </RouterLink>
      <RouterLink
        :class="{ 'border-b-2 border-blue-600 text-blue-700': route.name === 'ingredients' }"
        :to="{ name: 'ingredients' }"
        class="transition-colors hover:text-blue-600"
      >
        Cultura
      </RouterLink>
      <RouterLink
        :class="{ 'border-b-2 border-blue-600 text-blue-700': route.name === 'products' }"
        :to="{ name: 'products' }"
        class="transition-colors hover:text-blue-600"
      >
        Productos
      </RouterLink>
      <RouterLink
        :class="{ 'border-b-2 border-blue-600 text-blue-700': route.name === 'faqs' }"
        :to="{ name: 'faqs' }"
        class="transition-colors hover:text-blue-600"
      >
        Preguntas
      </RouterLink>
      <a
        href="https://www.prasadam.mx/"
        target="_blank"
        class="hidden transition-colors md:block hover:text-blue-600"
      >
        Prasadam
      </a>

    </div>
  </nav>

  <!-- Información de contacto -->
  <div class="justify-center relative hidden gap-8 py-2 text-sm text-gray-600 lg:flex bg-slate-100">
    <img src="../assets/ssl-certificate.png" class="absolute w-11 right-0 top-0"  alt="">

    <!-- Dirección -->
    <div class="flex items-center gap-2">
      <v-icon name="md-locationon" class="text-blue-600" scale="1.2" />
      <a
        href="https://www.google.com.mx/maps/place/Gutenberg+128,+Anzures,+Miguel+Hidalgo,+11590+Ciudad+de+M%C3%A9xico,+CDMX"
        target="_blank"
        class="hover:text-blue-700"
      >
        Gutenberg #128 Anzures, Miguel Hidalgo, 11590 Ciudad de México
      </a>
    </div>
    <!-- Teléfonos -->
    <div class="flex items-center gap-2">
      <v-icon name="bi-telephone-fill" class="text-blue-600" scale="1.2" />
      <a href="tel:+525563950178" class="hover:text-blue-700">
        +52 55 6395 0178
      </a>
    </div>
    <div class="flex items-center gap-2">
      <v-icon name="bi-telephone-fill" class="text-blue-600" scale="1.2" />
      <a href="tel:+525563950179" class="hover:text-blue-700">
        +52 55 6395 0179
      </a>
    </div>
    <!-- WhatsApp -->
    <div class="flex items-center gap-2">
      <v-icon name="co-whatsapp" class="text-blue-600" scale="1.2" />
      <a
        href="https://wa.me/525562516687"
        target="_blank"
        rel="noopener noreferrer"
        class="hover:text-blue-700"
      >
        +52 5562516687
      </a>
    </div>
  </div>
</header>


        <main class="lg:pt-[107px] pt-9">
            <slot name="main" />
        </main>
        <footer class="relative flex flex-col items-center gap-6 p-6 text-blue-700 bg-sky-50 font-sour-gummy lg:p-10">
            <!-- Contact Title -->
            <h2 class="text-2xl font-bold lg:text-4xl">Contacto</h2>

            <!-- SSL Logo -->
            <img class="absolute w-10 top-2 right-4"
                src="https://shykandev.github.io/medicinaparadiabetes/assets/ssl-Cjd7i8VT.png" alt="SSL Logo">

            <!-- Location Section -->
            <div class="flex flex-col items-center gap-4">
                <div class="flex items-center gap-2">
                    <v-icon name="md-locationon" class="text-3xl" scale="1.5"></v-icon>
                    <a class="text-sm font-bold text-center lg:text-lg hover:text-orange-300"
                        href="https://www.google.com.mx/maps/place/Gutenberg+128,+Anzures,+Miguel+Hidalgo,+11590+Ciudad+de+M%C3%A9xico,+CDMX/@19.4322888,-99.1760704,17z/data=!3m1!4b1!4m6!3m5!1s0x85d1f8b32758939b:0xf34fbd07bc47d6dd!8m2!3d19.4322888!4d-99.1760704!16s%2Fg%2F11c4n3lm2g?entry=ttu&g_ep=EgoyMDI0MTEwNS4wIKXMDSoASAFQAw%3D%3D">
                        Gutenberg #128 Anzures, Miguel Hidalgo, 11590 Ciudad de México
                    </a>
                </div>

                <!-- Google Maps Embed -->
                <iframe class="w-full rounded-md shadow-md lg:w-4/4"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.5395970522604!2d-99.1760704!3d19.4322888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f8b32758939b%3A0xf34fbd07bc47d6dd!2sGutenberg%20128%2C%20Anzures%2C%20Miguel%20Hidalgo%2C%2011590%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1sen!2smx!4v1730328617197!5m2!1sen!2smx"
                    allowfullscreen="false" loading="lazy" referrerpolicy="no-referrer-when-downgrade" height="250"
                    style="border: 0;"></iframe>
            </div>

            <!-- Contact Info Section -->
            <div class="flex flex-wrap justify-center gap-6">
                <!-- Phone Numbers -->
                <div class="flex items-center gap-2">
                    <v-icon name="bi-telephone-fill" class="text-2xl"></v-icon>
                    <a href="tel:+525563950178" class="text-sm font-bold lg:text-lg hover:text-orange-300">
                        +52 55 6395 0178
                    </a>
                </div>
                <div class="flex items-center gap-2">
                    <v-icon name="bi-telephone-fill" class="text-2xl"></v-icon>
                    <a href="tel:+525563950179" class="text-sm font-bold lg:text-lg hover:text-orange-300">
                        +52 55 6395 0179
                    </a>
                </div>

                <!-- Email -->
                <div class="flex items-center gap-2">
                    <v-icon name="md-email" class="text-2xl"></v-icon>
                    <a href="mailto:informes@prasadam.mx" class="text-sm font-bold lg:text-2xl hover:text-orange-300">
                        informes@prasadam.mx
                    </a>
                </div>

                <!-- WhatsApp -->
                <div class="flex items-center gap-2">
                    <v-icon name="co-whatsapp" class="text-xl"></v-icon>
                    <a href="https://wa.me/525562516687" class="text-sm font-bold lg:text-2xl hover:text-orange-300"
                        target="_blank" rel="noopener noreferrer">
                        +52 5562516687
                    </a>
                </div>
            </div>

            <!-- Footer Bottom -->
            <div class="text-center">
                <p class="text-sm font-bold lg:text-lg">
                    Todos los derechos reservados &copy; {{ new Date().getFullYear() }}
                </p>
                <p class="text-sm lg:text-lg">
                    Design: <strong class="font-normal">PACA</strong>
                </p>
            </div>
            <!-- Audio -->
            <audio  controls ref="audioElement" id="audio"  loop volume="0.009">
                 <source src="../assets/mantraHareR.mp3" type="audio/mp3">
               </audio>
        </footer>
    </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import AOS from 'aos';
import { onMounted, ref } from 'vue';
AOS.init();
const route = useRoute();
const audioElement = ref(null);

let isMounted = ref(false);
onMounted(() => {
  isMounted.value = true;
  
  // Configura el volumen del audio
  if (audioElement.value) {
    audioElement.value.volume = 0.2;
    
    // Intentar reproducir el audio de manera automática
    audioElement.value.play().catch((error) => {
      console.error('No se pudo reproducir el audio automáticamente:', error);
    });
  }
});

let mainUrl = ref('harekrishna.com.mx')

let timeout = ref(null);
const toggleTitle = () => {
  if (timeout.value) {
    clearTimeout(timeout.value);
  }
  timeout.value = setInterval(() => {
    if(mainUrl.value === 'harekrishna.com.mx'){
      mainUrl.value = 'radhakrishna.com.mx';
    } else {
      mainUrl.value = 'harekrishna.com.mx';
    }
  }, 3000);
}

onMounted(() => {
  toggleTitle();
})
</script>

<style scoped></style>