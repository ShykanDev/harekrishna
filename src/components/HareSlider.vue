<template>
    <div class="p-4 text-2xl font-bold bg-white rounded-lg shadow-sm text-sky-800 marquee font-funnel-display">
      <span class="font-sour-gummy word-spacing">
        <strong>Maha Mantra:</strong>
        Hare Krishna Hare Krishna Krishna Krishna Hare Hare Hare Rama Hare Rama Rama Rama Hare Hare
      </span>
    </div>
  </template>
  
  <script lang="ts" setup>
  </script>
  
  <style scoped>
  .word-spacing {
    word-spacing: 0.5rem; /* Ajusta el valor según el espacio que desees */
  }
  
  @keyframes slide {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  
  @keyframes slide-android {
    0% {
      transform: translateX(10%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  
  .marquee {
    white-space: nowrap;
    overflow: hidden;
    box-sizing: border-box;
  }
  
  .marquee span {
    display: inline-block;
    animation: slide 55s linear infinite; /* Animación por defecto */
  }
  
  /* Optimización para dispositivos móviles */
  @media screen and (max-width: 768px) {
    .marquee span {
      animation: slide-android 40s linear infinite; /* Más rápida para Android */
      will-change: transform; /* Mejora el rendimiento en móviles */
    }
  }
  </style>
  