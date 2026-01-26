<template>
  <div id="project-module-container" class="project-module-wrapper">
    <div class="px-10 pt-4 ">
      <h1 class="text-7xl pt-[35px] pb-8 font-bold satoshi-font text-[#1e1e1e]">
        PROJECTS
      </h1>
    </div>

    <div class="relative px-10 pb-40 ">
      <div class="relative project-image-container" ref="imageContainer1">
      <img
        src="../../assets/images/projeto-2.jpg"
        alt="project-image"
        class="h-[85vh] w-[1620px] max-w-[1800px] object-cover"
      />
      
      <div class="absolute inset-0 z-[4] overflow-hidden">
        <div class="w-full h-full bg-white project-image-overlay" ref="imageOverlay1"></div>
      </div>
    </div>

    <div class="absolute"></div>

    <div
      class="absolute top-[30%] right-[2.2%] z-[5]"
      style="backdrop-filter: blur(5px); background-color: #ffffffd9; min-width: 250px; max-width: 20vw; padding: 30px; box-shadow: 2px 2px 15px #0003;"
    >
      <h2 class="text-2xl">Coastal Villa</h2>
      <div class="flex gap-2.5 mt-2.5">
        <span class="text-sm text-[#666]">Aspen</span>
        <span class="text-sm text-[#666]">•</span>
        <span class="text-sm text-[#666]">Residential</span>
        <span class="text-sm text-[#666]">•</span>
        <span class="text-sm text-[#666]">2024</span>
      </div>
      <p class="text-sm text-[#666] leading-relaxed mt-[50px] mb-[50px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  </div>

  <div class="relative px-10 pb-40 flex justify-end">
    <div class="relative project-image-container" ref="imageContainer2">
      <img
        src="../../assets/images/projeto-3.jpg"
        alt="project-image"
        class="h-[85vh] w-[1650px] max-w-[1800px] object-cover"
      />
      
      <div class="absolute inset-0 z-[4] overflow-hidden">
        <div class="w-full h-full bg-white project-image-overlay" ref="imageOverlay2"></div>
      </div>
    </div>

    <div class="absolute"></div>

    <div
      class="absolute top-[30%] left-[2.2%] z-[5]"
      style="backdrop-filter: blur(5px); background-color: #ffffffd9; min-width: 250px; max-width: 20vw; padding: 30px; box-shadow: 2px 2px 15px #0003;"
    >
      <h2 class="text-2xl">Coastal Villa</h2>
      <div class="flex gap-2.5 mt-2.5">
        <span class="text-sm text-[#666]">Aspen</span>
        <span class="text-sm text-[#666]">•</span>
        <span class="text-sm text-[#666]">Residential</span>
        <span class="text-sm text-[#666]">•</span>
        <span class="text-sm text-[#666]">2024</span>
      </div>
      <p class="text-sm text-[#666] leading-relaxed mt-[50px] mb-[50px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  </div>

  <div class="relative px-10 pb-40 ">
    <div class="relative project-image-container" ref="imageContainer3">
      <img
        src="../../assets/images/project-3.webp"
        alt="project-image3"
        class="h-[85vh] w-[1650px] max-w-[1800px] object-cover"
      />
      
      <div class="absolute inset-0 z-[4] overflow-hidden">
        <div class="w-full h-full bg-white project-image-overlay" ref="imageOverlay3"></div>
      </div>
    </div>

    <div class="absolute"></div>

    <div
      class="absolute top-[30%] right-[2.2%] z-[5]"
      style="backdrop-filter: blur(5px); background-color: #ffffffd9; min-width: 250px; max-width: 20vw; padding: 30px; box-shadow: 2px 2px 15px #0003;"
    >
      <h2 class="text-2xl">Coastal Villa</h2>
      <div class="flex gap-2.5 mt-2.5">
        <span class="text-sm text-[#666]">Aspen</span>
        <span class="text-sm text-[#666]">•</span>
        <span class="text-sm text-[#666]">Residential</span>
        <span class="text-sm text-[#666]">•</span>
        <span class="text-sm text-[#666]">2024</span>
      </div>
      <p class="text-sm text-[#666] leading-relaxed mt-[50px] mb-[50px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  </div>
  </div>
</template>

<script setup lang="ts">
import { initImageOverlayAnimation, initImageOverlayAnimationRight } from "./animations";
import { ref, onMounted } from "vue";
import { useGSAP } from "../../composables/useGSAP";

const { gsap, ScrollTrigger, useAutoCleanup } = useGSAP();
const imageOverlay1 = ref<HTMLElement | null>(null);
const imageContainer1 = ref<HTMLElement | null>(null);
const imageOverlay2 = ref<HTMLElement | null>(null);
const imageContainer2 = ref<HTMLElement | null>(null);
const imageOverlay3 = ref<HTMLElement | null>(null);
const imageContainer3 = ref<HTMLElement | null>(null);

useAutoCleanup();

onMounted(() => {
  initImageOverlayAnimation(imageOverlay1, imageContainer1, gsap, ScrollTrigger);
  initImageOverlayAnimationRight(imageOverlay2, imageContainer2, gsap, ScrollTrigger);
  initImageOverlayAnimation(imageOverlay3, imageContainer3, gsap, ScrollTrigger);
});
</script>