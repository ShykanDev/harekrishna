<template>
    <div class="">
        <MainLayout>
            <template #main>
                <h1 class="py-8 text-4xl font-semibold text-center rounded-lg shadow-lg text-slate-700 font-funnel-display">
                    IMPORTACION <span class="text-sky-600">DIRECTA</span> DE LA INDIA POR <span
                        class="text-cyan-600">MAYOREO</span>
                </h1>
                <article class="w-full">
            <HareSlider/>
          </article>
                <h3 class="py-8 text-4xl font-semibold text-center rounded-lg text-slate-700">Todo tipo de producto para ceremonia, somos importadores directos de la India</h3>
                <section class="flex flex-wrap justify-around w-full gap-4 p-3">
                    <ProductCard v-for="product in products" :title="product.title" :imgSrc="product.imgSrc"
                        :description="product.description" />
                </section>

            </template>
        </MainLayout>
    </div>
</template>

<script lang="ts" setup>
import HareSlider from '@/components/HareSlider.vue';
import ProductCard from '@/components/ProductCard.vue';
import MainLayout from '@/layouts/MainLayout.vue';

const products = [
    {
        title: "Aceite de Flor Natural - Aceites Aromáticos Puros de la India",
        imgSrc: "https://krishnastore.com/images/cache/SCENTED-OILS-200x216.jpg",
        description: "Este aceite natural se utiliza en ceremonias religiosas y pujas, brindando una fragancia suave que eleva el ambiente espiritual en los templos."
    },
    {
        title: "Aceite Esencial de Lavanda Natural y Puro - Botella de 10 Gramos",
        imgSrc: "https://krishnastore.com/images/cache/Lavender_view1-200x216.jpg",
        description: "Ideal para la meditación y las ceremonias de purificación, este aceite de lavanda ofrece una fragancia calmante que acompaña las oraciones en los templos."
    },
    {
        title: "Aceites Aromáticos Naturales de Flores - Pack Mixto de 12",
        imgSrc: "https://krishnastore.com/images/cache/P2031161-200x216.jpg",
        description: "Este pack de aceites es perfecto para las festividades y ceremonias del templo, proporcionando una variedad de aromas florales que complementan las oraciones y rituales."
    },
    {
        title: "Aceite Esencial de Sándalo Natural y Puro - Botella de 10 Gramos",
        imgSrc: "https://krishnastore.com/images/cache/Sandal_2-200x216.jpg",
        description: "El aceite de sándalo es un componente esencial en muchas ceremonias religiosas, utilizado para purificar el espacio y elevar la energía espiritual del templo."
    },
    {
        title: "Aceite Esencial de Flor Vrindavan Natural y Puro - Botella de 10 Gramos",
        imgSrc: "https://krishnastore.com/images/cache/VrindavanxFlower_2-200x216.jpg",
        description: "Este aceite, proveniente de la flor Vrindavan, es utilizado en templos y ceremonias para invocar la paz y la serenidad en los rituales espirituales."
    },
    {
        title: "Aceite Esencial de Parijat Natural y Puro - Botella de 10 Gramos",
        imgSrc: "https://krishnastore.com/images/cache/Parijat_2-200x216.jpg",
        description: "El aceite de Parijat es ideal para ceremonias nocturnas y rituales, gracias a su aroma floral que conecta a los participantes con lo divino durante sus oraciones."
    },
    {
        title: "Aceite Esencial de Kadamba Natural y Puro - Botella de 10 Gramos",
        imgSrc: "https://krishnastore.com/images/cache/Kadam_2-200x216.jpg",
        description: "Conocido por su aroma relajante, el aceite de Kadamba es perfecto para crear un ambiente sereno en el templo y para meditaciones profundas durante las ceremonias."
    },
    {
        title: "Aceite Esencial de Rosa Natural y Puro - Botella de 10 Gramos",
        imgSrc: "https://krishnastore.com/images/cache/Rose_2-200x216.jpg",
        description: "La rosa es símbolo de pureza y devoción. Este aceite es comúnmente utilizado en los templos durante rituales de adoración para elevar la vibración espiritual."
    },
    {
        title: "Aceite Esencial de Loto Natural y Puro - Botella de 10 Gramos",
        imgSrc: "https://krishnastore.com/images/cache/Lotus_2-200x216.jpg",
        description: "El loto es considerado un símbolo sagrado. Su aceite es ideal para purificar el ambiente en los templos y crear una atmósfera propicia para la meditación."
    },
    {
        title: "Aceite Esencial de Radha Krishna Natural y Puro - Botella de 10 Gramos",
        imgSrc: "https://krishnastore.com/images/cache/krishna-radha-images-200x216.jpg",
        description: "Este aceite, vinculado con Radha y Krishna, se utiliza en ceremonias devocionales, creando un ambiente sagrado para conectar con la divinidad."
    },
    {
        title: "Aceite Esencial de Nag Champa Natural y Puro - Botella de 10 Gramos",
        imgSrc: "https://krishnastore.com/images/cache/NagxChampa_2-200x216.jpg",
        description: "Un aceite tradicionalmente utilizado en templos y ceremonias, el Nag Champa es conocido por sus propiedades purificadoras y su capacidad para atraer buenas energías."
    },
    {
        title: "Aceite Esencial de Mogra (Jazmín Indio) Natural y Puro - Botella de 10 Gramos",
        imgSrc: "https://krishnastore.com/images/cache/Mogra_2-200x216.jpg",
        description: "El jazmín indio, o Mogra, se utiliza para invocar la belleza y la gracia durante las ceremonias y pujas, creando un ambiente suave y divino en el templo."
    },
    {
        title: "Aceite Esencial de Jazmín Natural y Puro - Botella de 10 Gramos",
        imgSrc: "https://krishnastore.com/images/cache/Jasmine_1-200x216.jpg",
        description: "El aceite de jazmín es ideal para rituales de amor y devoción, utilizado para purificar el aire en el templo y fomentar una conexión más profunda con lo espiritual."
    },
    {
        title: "Aceite Esencial de Almizcle Natural y Puro - Botella de 10 Gramos",
        imgSrc: "https://krishnastore.com/images/cache/Jasmine_1-200x216.jpg",
        description: "El almizcle se utiliza en templos para atraer vibraciones positivas, siendo esencial en rituales de oración y meditación."
    },
    {
        title: "Aceite Esencial de Azafrán (Kesar) Natural y Puro - Botella de 10 Gramos",
        imgSrc: "https://krishnastore.com/images/cache/Saffron_2-200x216.jpg",
        description: "El azafrán es conocido por sus propiedades purificadoras. En las ceremonias del templo, su aceite es utilizado para realzar la energía positiva y la devoción."
    },
    {
        title: "Aceite Dust of Vraja - Aceites Esenciales Puros de la India",
        imgSrc: "https://krishnastore.com/images/cache/DustxofxVraja_Oil_1-200x216.jpg",
        description: "Este aceite es un símbolo de la tierra sagrada de Vrindavan y se utiliza en ceremonias dedicadas a la adoración de las deidades, creando un ambiente lleno de divinidad."
    },
    {
        title: "Aceite Esencial de Lirio Natural y Puro - Botella de 10 Gramos",
        imgSrc: "https://krishnastore.com/images/cache/water-lilies-200x216.jpg",
        description: "El aceite de lirio es perfecto para el ambiente de oración en los templos, asociado con la pureza y la paz espiritual."
    },
    {
        title: "Aceite Esencial de Hina Natural y Puro - Botella de 10 Gramos",
        imgSrc: "https://krishnastore.com/images/cache/Heena_2-200x216.jpg",
        description: "El aceite de Hina es utilizado para ceremonias de consagración y adoración, proporcionando una fragancia fresca y alegre que eleva las vibraciones espirituales."
    },
    {
        title: "Aceite Esencial de Khus / Vetiver Natural y Puro - Botella de 10 Gramos",
        imgSrc: "https://krishnastore.com/images/cache/2968080441-200x216.jpg",
        description: "El vetiver es conocido por su poder para estabilizar y traer tranquilidad, siendo utilizado en templos para crear un ambiente de paz y concentración."
    },
    {
        title: "Aceite Esencial de Vainilla Natural y Puro - Botella de 10 Gramos",
        imgSrc: "https://krishnastore.com/images/cache/vanilla-bean-200x216.jpg",
        description: "El aceite de vainilla se utiliza en templos para ceremonias de relajación y meditación, proporcionando una atmósfera cálida y acogedora durante los rituales."
    },
    {
        title: "Aceite Esencial de Firdos Natural y Puro - Botella de 10 Gramos",
        imgSrc: "https://krishnastore.com/images/cache/Firdous_2-200x216.jpg",
        description: "Firdos, conocido por su aroma revitalizante, se utiliza en ceremonias para invocar la energía positiva y purificar los espacios sagrados del templo."
    },
    {
        title: "Aceite Esencial de Clavo Natural y Puro - Botella de 10 Gramos",
        imgSrc: "https://krishnastore.com/images/cache/cloves-1024x768-200x216.jpg",
        description: "El aceite de clavo es popular en ceremonias para proteger los espacios sagrados, su aroma cálido y picante ayuda a mantener la energía positiva en los templos."
    },
    {
        title: "Aceite Esencial de Cardamomo Natural y Puro - Botella de 10 Gramos",
        imgSrc: "https://krishnastore.com/images/cache/cardamom-09-200x216.jpg",
        description: "Este aceite se utiliza en ceremonias religiosas para purificar y mantener la armonía en el ambiente del templo, ofreciendo un aroma dulce y reconfortante."
    },
    {
        title: "Aceite Esencial de Mango Natural y Puro - Botella de 10 Gramos",
        imgSrc: "https://krishnastore.com/images/cache/Mangoes-Hanging-200x216.jpg",
        description: "El aceite de mango es refrescante y revitalizante, ideal para ceremonias que celebran la prosperidad y la abundancia en los templos."
    },
    {
        title: "Aceite Esencial de Limón Natural y Puro - Botella de 10 Gramos",
        imgSrc: "https://krishnastore.com/images/cache/lemon23423-200x216.jpg",
        description: "El aceite de limón es utilizado para ceremonias de limpieza espiritual, purificando el espacio del templo y creando un ambiente fresco y renovado."
    },
    {
        title: "Aceite Esencial de Menta Natural y Puro - Botella de 10 Gramos",
        imgSrc: "https://krishnastore.com/images/cache/mint1n-200x216.jpg",
        description: "Este aceite es ideal para rituales de meditación y concentración, proporcionando una fragancia fresca que estimula la mente y eleva la energía espiritual en el templo."
    },
  { title: "Pack Variedad de Inciensos Masala", imgSrc: "https://krishnastore.com/images/cache/Incense_variety_Pack_1-200x216.jpg", description: "Un conjunto de inciensos masala naturales con una variedad de aromas ideales para crear un ambiente ceremonial y espiritual." },
  { title: "Pack Variedad de Inciensos Masala Seven Star", imgSrc: "https://krishnastore.com/images/cache/seven-star-masala-incense-pack-200x216.jpg", description: "Pack de inciensos masala Seven Star, conocidos por sus fragancias envolventes, perfectos para rituales y meditaciones." },
  { title: "Pack de Dhoopsticks y Conos Dhoop (200g)", imgSrc: "https://krishnastore.com/images/cache/Aromax12xinx1xDhoop-200x216.jpg", description: "Incienso Dhoop en varitas y conos, perfecto para rituales y ceremonias, con una fragancia intensa que llena el espacio." },
  { title: "Incienso Masala Natural Sugandha Ratna (225 gramos)", imgSrc: "https://krishnastore.com/images/cache/Sugandh_Front-200x216.jpg", description: "Incienso masala natural Sugandha Ratna, ideal para ofrecer durante ceremonias religiosas, proporcionando una fragancia suave y purificadora." },
  { title: "Incienso Masala Pushpanjali Natural", imgSrc: "https://krishnastore.com/images/cache/Pushpanjalixfront-200x216.jpg", description: "Incienso masala Pushpanjali, usado en ceremonias y rituales de adoración, perfecto para crear un ambiente sagrado y tranquilo." },
  { title: "Incienso Floral Vrindavan", imgSrc: "https://krishnastore.com/images/cache/VrindavanFlower_EconomyxLarge_with_Sticks-200x216.jpg", description: "Incienso floral de Vrindavan, ideal para meditaciones y rituales en el templo, evocando la paz y la serenidad." },
  { title: "Incienso Sándalo Supremo", imgSrc: "https://krishnastore.com/images/cache/SandalSupreme_EconomyLarge_3d_view_wSticks-200x216.jpg", description: "Incienso de sándalo, conocido por su poder para purificar y equilibrar el ambiente durante ceremonias y oraciones." },
  { title: "Incienso Nag Champa", imgSrc: "https://krishnastore.com/images/cache/NagChampa_EconomyLarge_3d_view_wSticks-200x216.jpg", description: "Incienso Nag Champa, muy utilizado en rituales hindúes, ofreciendo una fragancia única que facilita la concentración en los momentos espirituales." },
  { title: "Incienso Parijata", imgSrc: "https://krishnastore.com/images/cache/Parijat_EconomyLarge_3d_view_wSticks-200x216.jpg", description: "Incienso Parijata, perfecto para ceremonias sagradas, con una fragancia floral que invita a la reflexión y el devoto." },
  { title: "Incienso de Incienso (Frankincense)", imgSrc: "https://krishnastore.com/images/cache/Parijat_EconomyLarge_3d_view_wSticks-200x216.jpg", description: "Incienso de incienso (frankincense), ideal para rituales de purificación, utilizado en templos y ceremonias religiosas." },
  { title: "Incienso Kesar Chandan", imgSrc: "https://krishnastore.com/images/cache/Frank_EconomyxxLarge_with_Sticks-200x216.jpg", description: "Incienso de sándalo con azafrán, utilizado en prácticas religiosas para invocar energía positiva y serenidad durante los rituales." },
  { title: "Incienso Patchouli", imgSrc: "https://krishnastore.com/images/cache/Pacholi_EconomyxLarge_with_Sticks-200x216.jpg", description: "Incienso Patchouli, conocido por su capacidad para purificar el espacio sagrado y ayudar en la meditación profunda." },
  { title: "Incienso Opium", imgSrc: "https://krishnastore.com/images/cache/Opium_EconomyxLarge_withxSticks-200x216.jpg", description: "Incienso de opio, usado en ceremonias para crear una atmósfera calmante y espiritual durante los rituales devocionales." },
  { title: "Incienso Everest", imgSrc: "https://krishnastore.com/images/cache/Everest_EconomyLarge_3d_view_wSticks-200x216.jpg", description: "Incienso Everest, ideal para ceremonias al aire libre y meditaciones profundas, con un aroma refrescante y purificador." },
  { title: "Incienso Masala Jagannath Natural (225 gramos)", imgSrc: "https://krishnastore.com/images/cache/JagannathaxIncense-200x216.jpg", description: "Incienso masala Jagannath, utilizado en ceremonias de ofrenda, creando una atmósfera perfecta para la devoción y la meditación." },
  { title: "Incienso Tulsi Flora - Aromas de Vrindavan", imgSrc: "https://krishnastore.com/images/cache/TulsixFlora_EconomyxLarge_with_Sticks-200x216.jpg", description: "Incienso Tulsi Flora, que representa las fragancias de Vrindavan, ideal para meditaciones y ceremonias sagradas." },
  { title: "Incienso Agarwood Premium (225 gramos)", imgSrc: "https://krishnastore.com/images/cache/WildxAgarwood-200x216.jpg", description: "Incienso de madera de agar premium, con una fragancia profunda, utilizado en rituales y ceremonias de purificación." },
  { title: "Incienso Tulasi Chandan (200 gramos)", imgSrc: "https://krishnastore.com/images/cache/TulsixChandan-200x216.jpg", description: "Incienso Tulasi Chandan, perfecto para usar durante ofrendas religiosas y ceremonias, proporcionando un aroma purificador y devocional." },
  { title: "Incienso de Rosa (225 gramos)", imgSrc: "https://krishnastore.com/images/cache/Rose_Incense-200x216.jpg", description: "Incienso de rosa, utilizado en ceremonias para traer paz y armonía al templo, con su delicado aroma floral." },
  { title: "Incienso Jazmín Supremo (225 gramos)", imgSrc: "https://krishnastore.com/images/cache/JasminandSticks-200x216.jpg", description: "Incienso de jazmín, utilizado en rituales para elevar el espíritu y fomentar la devoción durante las ceremonias religiosas." },
  { title: "Incienso Lavanda", imgSrc: "https://krishnastore.com/images/cache/Lavender_EconomyxLarge_with_Sticks-200x216.jpg", description: "Incienso de lavanda, conocido por su capacidad para calmar la mente y el cuerpo, ideal para meditaciones y momentos de paz espiritual." },
  { title: "Incienso Night Queen (225 gramos)", imgSrc: "https://krishnastore.com/images/cache/NightQueenandSticks-200x216.jpg", description: "Incienso Night Queen, con una fragancia suave que ayuda a crear un ambiente relajante y espiritual durante las ceremonias nocturnas." },
  { title: "Incienso Rudraksha (225 gramos)", imgSrc: "https://krishnastore.com/images/cache/rudraksa-200x216.jpg", description: "Incienso Rudraksha, usado en ceremonias de meditación y adoración para invocar la paz y la conexión espiritual." },
  { title: "Incienso Almizcle", imgSrc: "https://krishnastore.com/images/cache/Musk_EconomyxLarge_3dView_withSticks-200x216.jpg", description: "Incienso de almizcle, perfecto para utilizar durante rituales y ceremonias, brindando una fragancia envolvente que ayuda en la concentración." },
  { title: "Incienso Rosa Blanca (225 gramos)", imgSrc: "https://krishnastore.com/images/cache/WhitexRose-200x216.jpg", description: "Incienso de rosa blanca, ideal para ceremonias que buscan purificar el ambiente y crear una atmósfera divina y pacífica." },
  { title: "Incienso Valley of Flowers (225 gramos)", imgSrc: "https://krishnastore.com/images/cache/ps-IMG_20210906_200048-200x216.jpg", description: "Incienso Valley of Flowers, con una mezcla de flores que evocan la serenidad y la devoción, utilizado en ceremonias religiosas." },
  { title: "Soporte de Incienso de Madera Sheesham (Pack Assortido de 2)", imgSrc: "https://krishnastore.com/images/cache/WoodStrip_BurningStick_v2-200x216.jpg", description: "Soporte para incienso de madera Sheesham, ideal para sostener incienso durante ceremonias y rituales, en un diseño duradero y sagrado." },
  { title: "Alcanfor 100% Puro y Natural (aprox. 50 gramos)", imgSrc: "https://krishnastore.com/images/cache/Camphor_3-200x216.jpg", description: "Alcanfor 100% puro, utilizado en ceremonias para purificar el ambiente, creando un entorno sagrado para la devoción." },
  { title: "Polvo de Sándalo Puro y Natural (aprox. 90 gramos)", imgSrc: "https://krishnastore.com/images/cache/sandalwood_poweder_in_plastic_container_open-200x216.jpg", description: "Polvo de sándalo puro, esencial para utilizar en rituales y ceremonias de purificación y bendición en templos." },
  { title: "Incienso Dhoop Puro en Varitas 3.5\"", imgSrc: "https://krishnastore.com/images/cache/dhoop-200x216.jpg", description: "Varitas de incienso Dhoop puro, ideales para encender durante las ceremonias de ofrendas y para purificar el espacio." },
  { title: "Incienso Dhoop Puro Radhika en Conos", imgSrc: "https://krishnastore.com/images/cache/dhoop-200x216.jpg", description: "Conos de incienso Dhoop puro Radhika, perfectos para rituales sagrados y para ofrecer en templos y durante meditaciones." },
  { title: "Pack Mixto de Varitas de Incienso Dhoop Puro 3.5\"", imgSrc: "https://krishnastore.com/images/cache/dhoop_3_in_1-200x216.jpg", description: "Pack mixto de varitas de incienso Dhoop puro, ideal para ceremonias y rituales, con una fragancia intensa y purificadora." },
  { title: "Pack Mixto de Conos de Incienso Dhoop Puro (100 gramos)", imgSrc: "https://krishnastore.com/images/cache/Dhoop-Incense-Cones-mixed-4-pack-200x216.jpg", description: "Pack mixto de conos de incienso Dhoop puro, utilizado en ceremonias para atraer energía positiva y espiritualidad." },
  { title: "Conos de Incienso Kesar Chandan", imgSrc: "https://krishnastore.com/images/cache/ps-IMG_20210823_125036-200x216.jpg", description: "Conos de incienso Kesar Chandan, perfectos para ceremonias sagradas, con una fragancia suave que purifica el ambiente." },
  { title: "Soporte de Incienso de Acero", imgSrc: "https://krishnastore.com/images/cache/Incense_Stand_Steel_Bigx-200x216.jpg", description: "Soporte de incienso de acero, adecuado para sostener varitas de incienso durante ceremonias y rituales, asegurando estabilidad." },
  { title: "Torre Soporte para Incienso de Acero", imgSrc: "https://krishnastore.com/images/cache/steelincensetower-200x216.jpg", description: "Torre soporte para incienso de acero, ideal para mantener el incienso en su lugar durante ceremonias religiosas." },
  { title: "Colección Variada de 5 Soportes de Incienso de Latón", imgSrc: "https://krishnastore.com/images/cache/Image3_AssortedIncenseBurners-200x216.jpg", description: "Colección variada de soportes para incienso de latón, utilizados en templos para sostener incienso durante ofrendas y rituales." },
  { title: "Dhoop para Sacrificio de Fuego (Havan Samagri)", imgSrc: "https://krishnastore.com/images/cache/FireSacrificeDhoop_Front-200x216.jpg", description: "Dhoop para sacrificio de fuego, utilizado en rituales de Havan para purificar el aire y traer bendiciones durante la ceremonia." },
  { title: "Polvo de Sándalo para Havan", imgSrc: "https://krishnastore.com/images/cache/seven-flowers-powder-200x216.jpg", description: "Polvo de sándalo para Havan, utilizado en sacrificios rituales, especialmente en ceremonias para purificar el ambiente." },

];

</script>

<style scoped></style>