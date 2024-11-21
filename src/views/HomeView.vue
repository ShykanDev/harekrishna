<template>
  <div class="">
    <MainLayout>
      <template #main>

        <!-- header title -->
        <article class="flex flex-col items-center justify-center mt-5">
          <!-- Título con estilo llamativo -->
          <h1 class="relative flex mb-6 text-4xl font-extrabold text-center font-sour-gummy sm:text-5xl lg:text-6xl text-cyan-700 animate-flip-up">
            <img class="w-14"
              src="https://storage.googleapis.com/a1aa/image/fO5eCOzsRedFeTyU7imln4fjnsv0vP1cmBTUTc0giaYhgkXeE.jpg"
              alt="">
            CONOZCA EL HARE KRISHNA
            <span class="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-cyan-400 to-cyan-600"></span>
            <img class="w-14"
              src="https://storage.googleapis.com/a1aa/image/Edq99IcOZKIkDRoUe3U6KmzfCtmfAVI0j2vBOGzeXkF6vxLPB.jpg"
              alt="">
          </h1>
          <article class="w-full">
            <HareSlider/>
          </article>
          <!-- Contenedor de imagen con listas dentro -->
          <div class="w-full overflow-hidden rounded-lg shadow-xl animate-fade-up">
            <img src="../assets/mainImg.jpg" alt="Hare Krishnaaaa"  />
          </div>
        </article>

        <article class="flex flex-wrap justify-around w-full gap-3 my-3">
            <LiveCard :title="'Templo Sri Krishna Balaram, Vrindavan, India.'" description="Transmisión en vivo desde el Templo ISKCON Vrindavan, situado a orillas del río Yamuna en Vrindavan, India." href-link="https://iskconvrindavan.com/live-darshan" image="https://static.toiimg.com/thumb/msid-111548272,width-1070,height-580,imgsize-2596576,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"/>
            <LiveCard title="Templo ISKCON Juhu, Mumbai, India." description="Transmisión en vivo desde el  Templo ISKCON Juhu, uno de los templos más importantes de la India." image="https://storage.googleapis.com/a1aa/image/ukdCv4QToAIcHVLgo9D64X4tMFfspwawjWBteFQ2ACelGimnA.jpg" href-link="https://www.iskconmumbai.com/live"/>
            <LiveCard title="Templo ISKCON Vaikuntha Hill,Bengaluru, India." href-link="https://www.iskconbangalore.org/live-darshan/" image="https://media3.giphy.com/media/48HUcXwM5Yt6E/200.webp?cid=ecf05e4724yzc1mq3uq9926zuorktul87khj98nr6ucfdzo4&ep=v1_gifs_search&rid=200.webp&ct=g" description="Transmisión en vivo desde el Templo ISKCON Vaikuntha Hill, ubicado en la ciudad de Bengaluru, India."/>
        </article>
        <section class="flex justify-center w-full p-6 my-6 space-x-4">
          <div class="max-w-4xl p-6 bg-white rounded-lg shadow-lg md:flex md:flex-row md:items-center">
   <img alt="Imagen de una persona cantando Hare Krishna con un fondo sereno" class="w-full h-auto mb-4 rounded-lg md:w-1/3 md:mb-0 md:mr-6" height="300" src="https://storage.googleapis.com/a1aa/image/ENu4Z8DXxNa6AFKmj0pPdSBb3zFDS5NGhjwuRwOZ44Aiw08E.jpg" width="300"/>
   <div class="md:flex-1">
    <h2 class="mb-2 text-2xl font-bold">
     Hare Krishna
    </h2>
    <p class="mb-4 text-gray-600">
     Significado 
    </p>
    <p class="mb-4 text-gray-700">
     El mantra Hare Krishna, también conocido como el Maha Mantra, es un mantra vaisnava de 16 palabras mencionado en el Kali-Santarana Upanishad. Es un canto que se cree que trae un estado superior de conciencia y despertar espiritual.
    </p>
    <p class="mb-4 text-gray-700">
     El mantra está compuesto por los nombres sánscritos del Ser Supremo en la tradición vaisnava: "Hare," "Krishna," y "Rama." Cantar este mantra es una forma de conectarse con lo divino y es una práctica central en el movimiento Hare Krishna.
    </p>
    <p class="mb-4 text-gray-700">
     El mantra completo es: "Hare Krishna, Hare Krishna, Krishna Krishna, Hare Hare, Hare Rama, Hare Rama, Rama Rama, Hare Hare."
    </p>
    <div class="flex justify-end">
     <a class="text-blue-500 hover:underline" href="https://es.wikipedia.org/wiki/Asociaci%C3%B3n_Internacional_para_la_Conciencia_de_Krishna" target="_blank">
      Aprende más
      <i class="fas fa-external-link-alt">
      </i>
     </a>
    </div>
   </div>
  </div>
        </section>
        <div class="w-full h-[1px] my-4 bg-cyan-800" />

        <section class="flex flex-col items-center">
          <div data-aos="fade-up">
            <h1 class="my-4 mt-10 text-6xl font-bold text-center font-poppins text-cyan-800">Introducción</h1>
          </div>
          <CardInfoSm :img-right="false" :description="info1.content" :title="info1.title" :description2="info1.content2" :img-center="'https://storage.googleapis.com/a1aa/image/6WoHzrNSidpENx7df9DfvP9DMboImsKK9l5ektRieDfktvXeE.jpg'"/>
          <CardInfoSm :img-right="false" :description="info1a.content" :title="info1a.title" :description2="info1a.content2" :img-center="'https://storage.googleapis.com/a1aa/image/pEUpf2IwRdThCqhNJJPCOB0MKGWefAPLqH0JOgPvH0Z197lnA.jpg'" />
          <CardInfoSm :img-right="false" :description="info1b.content" :title="info1b.title" :description2="info1b.content2" :img-center="'https://storage.googleapis.com/a1aa/image/ocVkrYSH4459G9qglNSJGgQ5fASSGlsikMHSd99pnoo2f9yTA.jpg'" /> 
          <CardInfoSm :img-right="false" :description="info1c.content" :title="info1c.title" :description2="info1c.content2" :img-center="'https://storage.googleapis.com/a1aa/image/36xZ4arNgy5KE1NyNVL6Q1HJGmPfWP4dfgbh9lED7YF1AelnA.jpg'" />
          <div data-aos="fade-up">
            <h1 class="my-4 mt-32 text-6xl font-bold text-center font-poppins text-cyan-800">Significado</h1>
          </div>
          <CardInfoSm :img-right="true" :description="info2.content" :title="info2.title" :description2="info2.content2" :img-center="'https://storage.googleapis.com/a1aa/image/3VbrTY3KKWqrEpNzVVeZEIP5ifUeQQtlfrKGGxt55AHfawXeE.jpg'"/>
          <CardInfoSm :img-right="true" :description="info2a.content" :title="info2a.title" :description2="info2a.content2" :img-center="'https://storage.googleapis.com/a1aa/image/cjfZ8OVapdRfZkzQGykGmTp6DwEW1N6SVglHHvUVCojHnelnA.jpg'"/>
          <CardInfoSm :img-right="true" :description="info2b.content" :title="info2b.title" :description2="info2b.content2" :img-center="'https://storage.googleapis.com/a1aa/image/3XujdBkgRtZDKlBrWexSv6LWPjeCBThPxJHtzxdZ65awnelnA.jpg'"/>
          <CardInfoSm :img-right="true" :description="info2c.content" :title="info2c.title" :description2="info2c.content2" :img-center="'https://storage.googleapis.com/a1aa/image/7WbuICdyZWb9Ptg4Cp2tlv7hSe8jc096zH9NyE8gTYWXUfyTA.jpg'"/>
          <h1 class="my-4 mt-32 text-6xl font-bold text-center font-poppins text-cyan-800">Orígenes</h1>
          <CardInfoSm :img-right="false" :description="info3.content" :title="info3.title" :description2="info3.content2" :img-center="'https://storage.googleapis.com/a1aa/image/okjRfhgI9flTqEJCJA8We5aarI86yfhB4ngKFNCovby9P4LPB.jpg'"/>
          <CardInfoSm :img-right="false" :description="info3a.content" :title="info3a.title" :description2="info3a.content2" :img-center="'https://storage.googleapis.com/a1aa/image/pMfdR6ZMfWk0J08kvASfnPObry7n3HkyYLKpeudybeYzw2XeE.jpg'"/>
          <CardInfoSm :img-right="false" :description="info3b.content" :title="info3b.title" :description2="info3b.content2" :img-center="'https://storage.googleapis.com/a1aa/image/885fhBkVWFTqICQpfCXjW10TvI6J2kTRnaUpf0KIg2Jgt9lnA.jpg'"/>
          <CardInfoSm :img-right="false" :description="info3c.content" :title="info3c.title" :description2="info3c.content2" :img-center="'https://storage.googleapis.com/a1aa/image/JrnVg3Oe55VwZC4mJkWM6VN4FScG5Cuu5FcIo1ZyVI2BcfyTA.jpg'"/>
          <!-- <h1 class="my-4 mt-32 text-6xl font-bold text-center font-poppins text-cyan-800">Prácticas</h1>
          <CardInfoSm :img-right="true" :description="info4.content" :title="info4.title" :description2="info4.content2" :img-center="'https://storage.googleapis.com/a1aa/image/xzjV5vzwTnIbARwRpdueIfXvc043FqIcIGkbrHqHsoDIFelnA.jpg'"/>
          <h1 class="my-4 mt-32 text-6xl font-bold text-center font-poppins text-cyan-800">Comunidad</h1>
          <CardInfoSm :img-right="true" :description="info5.content" :title="info5.title" :description2="info5.content2" :img-center="'https://storage.googleapis.com/a1aa/image/JncBafyljGWlPq4nNAsOOyeCPs9XApMmFJcsTyMaAaQDIelnA.jpg'"/> -->
        </section>
        <div class="w-full h-[1px] my-4 bg-cyan-800" />

        <section>
          <h2 class="my-4 text-3xl font-bold text-center font-poppins text-cyan-800">Le recomendamos vea este video
            sobre el Hare Krishna, conozca que significado tiene para la gente y como se practica en la vida diaria</h2>
          <iframe data-aos="zoom-in-left" class="w-full h-52 lg:h-[550px]"
            src="https://www.youtube.com/embed/iBc1Y7SPXhY?si=BrszPAp-Z4Wg66iJ" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </section>
        <div class="w-full h-[1px] my-4 bg-cyan-800" />

        <h2 class="my-4 text-3xl font-semibold text-center text-cyan-800">Noticias 📰</h2>
        <section class="flex flex-col flex-wrap w-full px-3 space-y-5 font-poppins mt-11 md:flex-row md:justify-around">
          <NewsCard data-aos="flip-right" title="¿Qué es el Hare Krishna y en qué países está instalado?"
            description="Desde hace unos años, ciertas religiones y disciplinas asiáticas han influenciado a unos occidentales ávidos por abrazar nuevas conductas, preceptos y modos de vida. El concepto de vida sana, la práctica del yoga o la meditación, y la adopción de creencias budistas e hinduistas alimentan la fe de una sociedad que necesita creer en algo nuevo."
            href-link="https://www.univision.com/explora/que-es-el-hare-krishna-y-en-que-paises-esta-instalado"
            img-src="https://st1.uvnimg.com/dims4/default/a8ac333/2147483647/thumbnail/1024x576%3E/quality/75/?url=https%3A%2F%2Fuvn-brightspot.s3.amazonaws.com%2Fassets%2Fvixes%2Fimj%2Fh%2Fhare-krishna1.jpg" />
          <NewsCard data-aos="flip-right" title="¿De qué trata la filosofía del movimiento Hare Krishna ?"
            description=" El primer paso es saber la diferencia entre un cuerpo vivo y uno muerto. ¿Cuál es la diferencia? La diferencia es que cuando alguien muere, el alma espiritual, o la fuerza vital, abandona el cuerpo. Por ello, el cuerpo es llamado muerto. Luego hay dos cosas: una, este cuerpo, y la otra, la fuerza vital dentro del cuerpo."
            href-link="https://harekrishna.es/preguntas-y-respuestas/"
            img-src="https://storage.googleapis.com/a1aa/image/4VFvSFZTxm49MhueWCrf2L2YNLTMYGMFBSXySmS4E51oFflnA.jpg" />
          <NewsCard data-aos="flip-right"
            title="La importancia de la comunidad para los Hare Krishna"
            description="El movimiento Hare Krishna fue establecido en los países occidentales a mediados de los sesenta. Aunque en sus inicios fue catalogado dentro de los Nuevos Movimientos Religiosos, sus raíces se remontan a la ancestral cultura védica de la India."
            href-link="https://observatoriolibertadreligiosa.org/?p=87299"
            img-src="https://storage.googleapis.com/a1aa/image/4ur27h43BFZ9Fhsf6ooxOAR6H4jqS2kRep7QKfdfWOAYf4XeE.jpg" />
          <NewsCard data-aos="flip-right" title="Descubriendo el Maha mantra"
            description="¿Has escuchado alguna vez el Maha mantra? ¿Te suena el término Hare Krishna?"
            href-link="https://xuanlanyoga.com/maha-mantra/"
            img-src="https://xuanlanyoga.com/wp-content/uploads/2020/08/maha-mantra.jpg" />
          <NewsCard data-aos="flip-right" title="Estilo de vida y salud: Comunidad Hare Krishna de Santa Marta"
            description="El término sánscrito para Mantra se compone de 'hombre' el espíritu, y el sufijo '-tra', protección. Un mantra es una herramienta para la protección de la mente, desde un punto de vista etimológico. "
            href-link="https://www.achamana.com/es/blogs/infos/maha-mantra?srsltid=AfmBOopC32QoqkYTUP1E9Q0EPwzPDXETgPsQR28t2S_9iuBk9p7yloSW"
            img-src="https://www.achamana.com/cdn/shop/articles/99d6e92f94422a1883f8d6d023590ab8.jpg?format=webp&v=1647936120&width=1800" />
        </section>
        <div class="w-full h-[1px] my-4 bg-cyan-800" />

        <!-- Ads Section -->
        <h3 class="mt-6 text-2xl font-bold text-center text-rose-900 font-poppins">Le puede interesar</h3>
        <section class="flex justify-center w-full my-6 space-x-4"> <!-- ads section -->
          <div
            class="relative flex items-center justify-center w-1/2 p-4 border-2 rounded-lg shadow-md border-slate-400 bg-slate-100">
            <span
              class="absolute px-2 py-1 text-sm font-semibold text-white rounded -top-4 left-4 bg-slate-500">Anuncio</span>
            <a href="https://shykandev.github.io/medicinaparadiabetes/" class="relative w-full h-full" target="_blank"
              rel="noopener noreferrer">
              <div
                class="absolute flex flex-col items-center w-full h-full transition-opacity duration-300 ease-out bg-black opacity-0 hover:opacity-70 justify-evenly">
                <p class="text-xs font-bold text-center text-white font-poppins md:text-3xl">Medicina Ayurvédica</p>
                <p class="text-sm font-bold text-center text-white font-poppins md:text-3xl">100% Natural</p>
              </div>
              <img class="w-full h-full bg-contain rounded-md"
                src="https://www.prasadam.mx/img1/productos.png" alt="">
              <p class="absolute text-xs font-bold text-center text-white bg-yellow-600 top-1 font-poppins md:text-3xl">
                Conozca Prasadam</p>
              <p class="absolute text-xs font-bold text-center text-white bottom-1 font-poppins md:text-3xl">
                Productos 100% Naturales</p>
            </a>
          </div>

          <div
            class="relative flex items-center justify-center w-1/2 p-4 border-2 rounded-lg shadow-md border-slate-400 bg-slate-100">
            <span
              class="absolute px-2 py-1 text-sm font-semibold text-white rounded -top-4 left-4 bg-slate-500">Anuncio</span>
            <a href="https://www.prasadam.mx/typography.html" class="relative w-full h-full" target="_blank"
              rel="noopener noreferrer">
              <div
                class="absolute flex flex-col items-center w-full h-full transition-opacity duration-300 ease-out bg-black opacity-0 hover:opacity-70 justify-evenly">
                <p class="text-sm font-bold text-center text-white font-poppins md:text-3xl">100% Natural</p>
                <!-- <p class="text-sm font-bold text-center text-white font-poppins md:text-3xl">Tu </p> -->
                <p class="hidden text-sm font-bold text-center text-white font-poppins md:text-3xl md:block">Esta es su
                  solución</p>
              </div>
              <img class="w-full h-full bg-contain rounded-md"
                src="https://shykandev.github.io/medicinaparadiabetes/assets/mainHome-EGZr2Qar.jpg" alt="">
              <p class="absolute top-0 text-xs font-bold text-center text-white bg-yellow-600 font-poppins md:text-3xl">
                ¿Tienes Diabetes?</p>
              <p
                class="absolute px-3 text-xs font-bold text-center text-white md:px-0 bottom-3 font-poppins md:text-3xl">
                Le recomendamos GLUFAC</p>
            </a>
          </div>
        </section>

        <div class="flex items-center justify-center min-h-screen font-poppins">
          <div class="p-6 rounded-lg shadow-md bg-gray-50 lg:p-8">
            <div class="flex justify-center mb-6 text-green-600">
              <v-icon name="bi-shield-lock-fill" class="text-green-500" scale="5" />
            </div>
            <h1 class="mb-4 text-2xl font-extrabold text-center text-gray-800 lg:text-3xl">
              Esta página es segura
            </h1>
            <p class="mb-6 text-center text-gray-600">
              Esta página cuenta con <strong>HTTPS</strong> y un certificado <strong>SSL</strong> válido.
            </p>

            <div class="mb-8">
              <h2 class="mb-3 text-xl font-bold text-gray-700 lg:text-2xl">¿Qué es HTTPS?</h2>
              <p class="leading-relaxed text-gray-600">
                HTTPS (<strong>Hypertext Transfer Protocol Secure</strong>) es una versión segura de HTTP, el protocolo
                que permite la comunicación entre su navegador y el sitio web al que se conecta.
                La 'S' significa 'Seguro', y utiliza cifrado <strong>SSL/TLS</strong> para proteger la integridad y
                confidencialidad de los datos durante la transferencia.
              </p>
            </div>

            <div class="mb-8">
              <h2 class="mb-3 text-xl font-bold text-gray-700 lg:text-2xl">¿Qué es un certificado SSL?</h2>
              <p class="leading-relaxed text-gray-600">
                <strong>SSL (Secure Sockets Layer)</strong> es una tecnología estándar que garantiza la comunicación
                cifrada entre un navegador y un servidor web.
                Un certificado SSL habilita el candado en el navegador y el protocolo <strong>HTTPS</strong>, ofreciendo
                conexiones seguras que protegen los datos.
              </p>
            </div>

            <div class="flex justify-center">
              <img class="w-32 rounded-lg shadow-md lg:w-40"
                src="https://logowik.com/content/uploads/images/ssl-secured7869.jpg" alt="Certificado SSL">
            </div>
          </div>

        </div>
      </template>
    </MainLayout>
  </div>

</template>

<script lang="ts" setup>
import CardInfoSm from '@/components/CardInfoSm.vue';
import HareSlider from '@/components/HareSlider.vue';
import LiveCard from '@/components/LiveCard.vue';
import NewsCard from '@/components/NewsCard.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import AOS from 'aos';
import { ref } from 'vue';
import { onMounted } from 'vue';
AOS.init();


const info1 = {
  title: "Hare Krishna en el Mundo",
  content: "El movimiento Hare Krishna, también conocido como la Sociedad Internacional para la Conciencia de Krishna (ISKCON), es una tradición espiritual basada en la devoción a Krishna, una de las deidades más veneradas del hinduismo. Este movimiento promueve la paz interior, el amor universal y la conexión espiritual a través del canto del santo nombre de Dios, el mantra Hare Krishna.",
  content2: "Hare Krishna es un camino hacia la paz y la trascendencia, y ha tocado miles de vidas en todo el mundo, brindando un sentido de comunidad, devoción y realización espiritual."
};
const info1a = {
  title: "Una Breve Introducción a la Conciencia de Krishna",
  content: "El movimiento Hare Krishna, basado en los principios del Bhakti-yoga (yoga de la devoción), invita a todos a experimentar la vida a través del amor incondicional hacia Krishna, el Señor Supremo. La vida devocional trae consigo un camino de autotransformación y amor divino.",
  content2: "Esta práctica te llevará a explorar el canto del maha-mantra Hare Krishna, una poderosa herramienta para calmar la mente, purificar el corazón y encontrar paz interior. Cada uno de nosotros tiene la oportunidad de acercarse a lo divino a través de este sencillo pero profundo acto de devoción."
};

const info1b = {
  title: "El Camino de la Devoción",
  content: "Al unirte a Hare Krishna, no solo estás aprendiendo una filosofía, sino abrazando una forma de vida basada en la devoción pura. La práctica de cantar el mantra Hare Krishna repetidamente (japa) es un pilar central de esta tradición, y te ayudará a conectar con lo divino de una manera más profunda cada día. Este camino de devoción busca liberarte del sufrimiento y enseñarte a vivir con un propósito divino.",
  content2: "Este viaje no se trata solo de aprender, sino de vivir la devoción en tu día a día. A medida que practicas con sinceridad, encontrarás que todo en tu vida comienza a tener un nuevo sentido: tus pensamientos, palabras y acciones se transforman en un servicio puro a Krishna, y con ello, a los demás."
};

const info1c = {
  title: " Un Nuevo Comienzo Espiritual",
  content: "Tu llegada al mundo Hare Krishna marca el comienzo de un nuevo capítulo en tu vida. Aquí, te invitamos a ser parte de una comunidad global de devotos comprometidos con la práctica espiritual. Al unirte a este movimiento, descubrirás una paz profunda que solo se encuentra cuando vivimos en armonía con lo divino y con todos los seres vivos.",
  content2: "No importa de dónde vengas, lo importante es el deseo sincero de acercarte a Krishna. Cada paso que tomes hacia esta devoción traerá claridad, serenidad y amor en tu vida, llevándote a descubrir un propósito más grande en todo lo que haces."
};



const info2 = {
  title: "El Significado de Hare Krishna",
  content: "El mantra Hare Krishna, compuesto por las palabras 'Hare', 'Krishna' y 'Rama', es un canto sagrado que se repite para invocar la presencia de la divinidad. 'Hare' hace referencia a la energía de Dios, mientras que 'Krishna' y 'Rama' son nombres de Dios que significan el Ser Supremo y la Fuente de todo amor y luz.",
  content2: "Repetir este mantra con devoción permite a los practicantes alcanzar la paz mental, purificar el corazón y avanzar espiritualmente, conectando con la esencia divina que reside dentro de todos."
};
const info2a = {
  title: "El Significado de Hare Krishna - Una Introducción Espiritual",
  content: "El mantra Hare Krishna es una invocación poderosa que tiene sus raíces en la tradición védica. Al pronunciar las palabras 'Hare', 'Krishna' y 'Rama', el devoto invoca la energía divina, el amor y la misericordia de Dios. En su forma más pura, este mantra busca limpiar el corazón y la mente, permitiendo que quien lo recite se conecte directamente con lo divino.",
  content2: "A través del canto constante de 'Hare Krishna', los devotos sienten una conexión más profunda con el Señor Krishna, el cual es considerado la fuente de toda la existencia. Este mantra no solo busca la liberación espiritual, sino también un bienestar emocional y físico al calmar la mente y el alma."
};
const info2b = {
  title: "Hare Krishna: El Mantra de la Liberación",
  content: "El canto del mantra Hare Krishna tiene un significado profundo en las enseñanzas del Bhakti Yoga, la disciplina del amor y devoción hacia Dios. Es considerado un medio para la liberación del alma del ciclo de nacimiento y muerte, conocido como samsara. Al recitar el mantra, el devoto experimenta una purificación interna que lo lleva hacia la realización espiritual.",
  content2: "La repetición constante de 'Hare Krishna' no solo expande la conciencia, sino que también libera al individuo de las ataduras materiales, llevándolo a un estado de conciencia pura, libre de deseos egoístas y de las limitaciones terrenales. Este proceso de liberación es el propósito final de quienes siguen el camino del Bhakti."
};
const info2c = {
  title: "El Significado de Hare Krishna - Un Viaje de Devoción y Luz",
  content: "El mantra Hare Krishna, compuesto por las palabras 'Hare', 'Krishna', y 'Rama', es una de las herramientas más poderosas en la tradición védica para conectar al devoto con lo divino. Cada una de estas palabras tiene un profundo significado espiritual. 'Hare' se refiere a la energía divina de Dios, 'Krishna' es el nombre del Señor Supremo, y 'Rama' es otro de sus nombres sagrados que simboliza la fuente de toda la felicidad eterna.",
  content2: "Cantar el mantra Hare Krishna no solo es un acto de devoción, sino también una práctica que purifica la mente y el corazón. Con cada repetición, el devoto se acerca más al amor puro hacia Krishna, y con ello, experimenta una paz interior profunda y duradera. Este mantra es más que un conjunto de palabras; es una llamada a la divinidad que busca restaurar la conexión espiritual con el ser superior."
};



const info3 = {
  title: "Orígenes del Movimiento",
  content: "El movimiento Hare Krishna tiene sus raíces en la antigua India, donde fue fundado por A. C. Bhaktivedanta Swami Prabhupada en 1966. Él trajo la enseñanza de la devoción pura a Occidente, fundando templos y comunidades que seguirían el camino del bhakti-yoga, el yoga de la devoción. Su misión fue compartir el conocimiento ancestral y la práctica espiritual de la devoción a Krishna con el mundo.",
  content2: "Desde su fundación, el movimiento ha crecido a nivel global, estableciendo centros de meditación y aprendizaje, y atrayendo seguidores interesados en la vida espiritual y la conexión con lo divino."
};
const info3a = {
  title: "El Inicio del Movimiento Hare Krishna",
  content: "El movimiento Hare Krishna, también conocido como el Movimiento de Conciencia de Krishna (ISKCON), fue fundado por A.C. Bhaktivedanta Swami Prabhupada en 1966 en Nueva York. Su misión era revivir la práctica del mantra Hare Krishna en el mundo moderno y compartir la enseñanza de la devoción pura a Krishna.",
  content2: "Prabhupada llegó a los Estados Unidos desde la India a la edad de 70 años, con el propósito de difundir las enseñanzas del Bhagavad-gita y la filosofía védica. A pesar de las dificultades iniciales, su dedicación y mensaje de amor y devoción atrajo a miles de seguidores en el mundo occidental."
};

const info3b = {
  title: "La Filosofía y Enseñanzas de Prabhupada",
  content: "La filosofía detrás del movimiento Hare Krishna se basa en el principio de la devoción pura (bhakti) a Krishna, el Señor Supremo, a través de la práctica del mantra y la meditación. A.C. Bhaktivedanta Swami Prabhupada enseñó que la meta de la vida es alcanzar la liberación del ciclo de reencarnaciones y regresar al reino espiritual eterno.",
  content2: "Además del canto del mantra, los devotos siguen una serie de principios, como el vegetarianismo, la abstinencia de intoxicantes, la castidad y el respeto a todos los seres vivos. Estas prácticas están diseñadas para purificar el cuerpo y la mente, ayudando al devoto a alcanzar una conexión directa con Krishna."
};

const info3c = {
  title: "Expansión Global del Movimiento Hare Krishna",
  content: "Desde su fundación en los años 60, el movimiento Hare Krishna ha crecido significativamente, estableciendo templos y centros de meditación en ciudades de todo el mundo. El mensaje de devoción y paz espiritual atrajo a una comunidad diversa de personas, desde jóvenes buscadores espirituales hasta individuos interesados en las prácticas de bienestar físico y emocional.",
  content2: "A lo largo de las décadas, el movimiento también ha influido en la cultura popular, con figuras como George Harrison de los Beatles, quien ayudó a popularizar el movimiento en Occidente. A pesar de los desafíos, el Movimiento Hare Krishna sigue siendo una de las comunidades espirituales más importantes y activas a nivel mundial."
};


// const info4 = {
//   title: "Prácticas Espirituales del Hare Krishna",
//   content: "Las principales prácticas del Hare Krishna incluyen el canto del maha-mantra (Hare Krishna, Hare Krishna, Krishna Krishna, Hare Hare, Hare Rama, Hare Rama, Rama Rama, Hare Hare), la meditación, el estudio de los textos sagrados como el Bhagavad-gita, y la devoción a través del servicio altruista. Los devotos buscan cultivar una relación personal con Krishna a través de estas prácticas diarias.",
//   content2: "Estas prácticas no solo sirven para la purificación espiritual, sino que también promueven un sentido de comunidad y armonía en la vida cotidiana, ayudando a los practicantes a mantenerse centrados y enfocados en lo divino."
// };

// const info5 = {
//   title: "La Comunidad Hare Krishna",
//   content: "La comunidad Hare Krishna es diversa y global, con miles de centros en todo el mundo, incluidos templos, escuelas y hogares espirituales. Estos lugares sirven como puntos de encuentro para quienes buscan aprendizaje espiritual, meditación y una vida dedicada a la devoción.",
//   content2: "Además de la devoción personal, la comunidad organiza festivales, celebraciones y programas de servicio, fomentando una atmósfera de amor y hermandad. Los devotos se apoyan mutuamente en su camino espiritual y participan activamente en la difusión de la conciencia de Krishna."
// };


const info6 = {
  title: "PILOGUARD: Una solución completa para las hemorroides",
  content: "PILOGUARD no solo trata los síntomas de las hemorroides, sino que también promueve un equilibrio integral en su salud. Este suplemento reduce la inflamación, alivia el dolor y mejora la circulación sanguínea en la región afectada. Además, optimiza la digestión y previene el estreñimiento, ayudando a evitar recaídas frecuentes.",
  content2: "Con un enfoque holístico, PILOGUARD actúa para mejorar su calidad de vida de manera natural. Su fórmula también contribuye a reducir el estrés y a promover el bienestar general, asegurando una recuperación completa y duradera."
};

const info7 = {
  title: "El compromiso de PILOGUARD con el cuidado de las hemorroides",
  content: "Desde su creación, PILOGUARD ha sido diseñado para ser una solución confiable y efectiva en el tratamiento de las hemorroides. Su fórmula combina la tradición ayurvédica con la investigación científica moderna, garantizando un producto seguro y eficaz. Cada cápsula contiene la dosis óptima de ingredientes naturales para aliviar el dolor y la inflamación de manera efectiva.",
  content2: "Miles de personas han encontrado alivio con PILOGUARD, mejorando significativamente su calidad de vida. Este suplemento sigue evolucionando para ofrecer la mejor solución natural para el cuidado de las hemorroides y la salud general del sistema digestivo."
};


</script>

<style scoped>



</style>