<template>
  <div class="p-4 text-2xl font-bold bg-white rounded-lg shadow-lg text-sky-800 marquee font-funnel-display">
        <span> 
            <strong class="font-sour-gummy">Maha Mantra:</strong>
            Hare Krishna Hare Krishna Krishna Krishna Hare Hare Hare Rama Hare Rama Rama Rama Hare Hare
        </span>
    </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
  @keyframes slide {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
        }
        .marquee {
            white-space: nowrap;
            overflow: hidden;
            box-sizing: border-box;
        }
        .marquee span {
            display: inline-block;
            animation: slide 55s linear infinite;
        }
</style>