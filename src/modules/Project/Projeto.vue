<template>
  <div id="project-module-container" class="project-module-wrapper">
    <div class="px-4 md:px-10 pt-4">
      <h1
        class="text-4xl md:text-7xl pt-[20px] md:pt-[35px] pb-4 md:pb-8 font-bold satoshi-font text-[#1e1e1e]"
      >
        PROJECTS
      </h1>
    </div>

    <div class="relative px-4 md:px-10 pb-5 pb-5 xl:pb-40">
      <div
        class="relative project-image-container w-full md:max-w-[85vw] md:max-h-[85vh] overflow-hidden md:h-[610px] xl:h-auto"
        ref="imageContainer1"
      >
        <img
          src="../../assets/images/projeto-5.jpg"
          alt="project-image"
          class="w-full h-auto md:h-full xl:h-auto object-cover max-md:block"
        />

        <div class="absolute inset-0 z-[4] overflow-hidden">
          <div
            class="w-full h-full bg-white project-image-overlay"
            ref="imageOverlay1"
          ></div>
        </div>
      </div>

      <div
        class="mt-6 xl:mt-0 xl:absolute xl:top-[30%] xl:right-[2.2%] z-[5] max-w-full xl:max-w-[20vw] xl:w-fit xl:shadow-[2px_2px_15px_#0003]"
        style="backdrop-filter: blur(5px); background-color: #ffffffd9"
        :style="{
          padding: isMobile ? '5px' : '30px',
          minWidth: isMobile ? 'auto' : '250px',
        }"
      >
        <h2 class="text-xl md:text-2xl">Coastal Villa</h2>
        <div class="flex flex-wrap gap-2 md:gap-2.5 mt-2 md:mt-2.5">
          <span class="text-xs md:text-sm text-[#666]">Aspen</span>
          <span class="text-xs md:text-sm text-[#666]">•</span>
          <span class="text-xs md:text-sm text-[#666]">Residential</span>
          <span class="text-xs md:text-sm text-[#666]">•</span>
          <span class="text-xs md:text-sm text-[#666]">2024</span>
        </div>
        <p
          class="text-xs md:text-sm text-[#666] leading-relaxed mt-4 md:mt-[50px] mb-0 md:mb-[50px]"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>

    <div
      class="relative px-4 md:px-10 pb-5 pb-5 xl:pb-40 xl:flex xl:justify-end"
    >
      <div
        class="relative project-image-container w-full md:max-w-[85vw] md:max-h-[85vh] overflow-hidden md:h-[610px] xl:h-auto md:ml-auto"
        ref="imageContainer2"
      >
        <img
          src="../../assets/images/projeto-7.jpg"
          alt="project-image"
          class="w-full h-auto md:h-full xl:h-auto object-cover max-md:block"
        />

        <div class="absolute inset-0 z-[4] overflow-hidden">
          <div
            class="w-full h-full bg-white project-image-overlay"
            ref="imageOverlay2"
          ></div>
        </div>
      </div>

      <div
        class="mt-6 xl:mt-0 xl:absolute xl:top-[30%] xl:left-[2.2%] z-[5] max-w-full xl:max-w-[20vw] xl:w-fit xl:shadow-[2px_2px_15px_#0003]"
        style="backdrop-filter: blur(5px); background-color: #ffffffd9"
        :style="{
          padding: isMobile ? '5px' : '30px',
          minWidth: isMobile ? 'auto' : '250px',
        }"
      >
        <h2 class="text-xl md:text-2xl">Coastal Villa</h2>
        <div class="flex flex-wrap gap-2 md:gap-2.5 mt-2 md:mt-2.5">
          <span class="text-xs md:text-sm text-[#666]">Aspen</span>
          <span class="text-xs md:text-sm text-[#666]">•</span>
          <span class="text-xs md:text-sm text-[#666]">Residential</span>
          <span class="text-xs md:text-sm text-[#666]">•</span>
          <span class="text-xs md:text-sm text-[#666]">2024</span>
        </div>
        <p
          class="text-xs md:text-sm text-[#666] leading-relaxed mt-4 md:mt-[50px] mb-0 md:mb-[50px]"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>

    <div class="relative px-4 md:px-10 pb-5 pb-5 xl:pb-40">
      <div
        class="relative project-image-container w-full md:max-w-[85vw] md:max-h-[85vh] overflow-hidden md:h-[610px] xl:h-auto"
        ref="imageContainer3"
      >
        <img
          src="../../assets/images/project-3.webp"
          alt="project-image3"
          class="w-full h-auto md:h-full xl:h-auto object-cover max-md:block"
        />

        <div class="absolute inset-0 z-[4] overflow-hidden">
          <div
            class="w-full h-full bg-white project-image-overlay"
            ref="imageOverlay3"
          ></div>
        </div>
      </div>

      <div
        class="mt-6 xl:mt-0 xl:absolute xl:top-[30%] xl:right-[2.2%] z-[5] max-w-full xl:max-w-[20vw] xl:w-fit xl:shadow-[2px_2px_15px_#0003]"
        style="backdrop-filter: blur(5px); background-color: #ffffffd9"
        :style="{
          padding: isMobile ? '5px' : '30px',
          minWidth: isMobile ? 'auto' : '250px',
        }"
      >
        <h2 class="text-xl md:text-2xl">Coastal Villa</h2>
        <div class="flex flex-wrap gap-2 md:gap-2.5 mt-2 md:mt-2.5">
          <span class="text-xs md:text-sm text-[#666]">Aspen</span>
          <span class="text-xs md:text-sm text-[#666]">•</span>
          <span class="text-xs md:text-sm text-[#666]">Residential</span>
          <span class="text-xs md:text-sm text-[#666]">•</span>
          <span class="text-xs md:text-sm text-[#666]">2024</span>
        </div>
        <p
          class="text-xs md:text-sm text-[#666] leading-relaxed mt-4 md:mt-[50px] mb-0 md:mb-[50px]"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { useGSAP } from "../../composables/useGSAP";
import {
  initImageOverlayAnimation,
  initImageOverlayAnimationRight,
} from "../../composables/useAnimations";

const { gsap, ScrollTrigger, useAutoCleanup } = useGSAP();
const imageOverlay1 = ref<HTMLElement | null>(null);
const imageContainer1 = ref<HTMLElement | null>(null);
const imageOverlay2 = ref<HTMLElement | null>(null);
const imageContainer2 = ref<HTMLElement | null>(null);
const imageOverlay3 = ref<HTMLElement | null>(null);
const imageContainer3 = ref<HTMLElement | null>(null);

const isMobile = computed(() => window.innerWidth < 1280);

useAutoCleanup();

onMounted(() => {
  initImageOverlayAnimation(
    imageOverlay1,
    imageContainer1,
    gsap,
    ScrollTrigger
  );
  initImageOverlayAnimationRight(
    imageOverlay2,
    imageContainer2,
    gsap,
    ScrollTrigger
  );
  initImageOverlayAnimation(
    imageOverlay3,
    imageContainer3,
    gsap,
    ScrollTrigger
  );
});
</script>