<template>
  <div class="min-h-screen -mb-40 pt-20 lg:pt-30 pt-60-at-1200">
    <div
      class="sticky top-[30vh] -z-10 flex flex-col justify-start items-center font-bold"
    >
      <p class="text-sm tracking-normal" style="color: #1e1e1e">
        AS FEATURED IN
      </p>
      <h1 class="text-[10vw] font-bold" style="color: #1e1e1e">GALLERY</h1>
    </div>

    <div
      ref="galleryContainer"
      class="mx-auto mt-20 mb-32 px-4 lg:px-0 max-lg:max-w-[85vw] lg:max-w-[60vw]"
    >
      <div 
        class="relative w-full max-lg:pb-[140%] lg:pb-[80%]"
        :style="{ marginTop: '235px' }"
      >
        <div
          ref="image1"
          class="absolute z-[15] max-lg:w-[46%] lg:w-[33.33%]"
          :style="{
            left: '3.78%',
            top: '-25.57%',
          }"
        >
          <img
            src="../../assets/images/galeria1.webp"
            alt=""
            class="w-full h-auto"
          />
        </div>

        <div
          ref="image2"
          class="absolute z-[3] max-lg:w-[44%] max-lg:top-[20%] lg:w-[33.33%] lg:top-[19.29%]"
          :style="{
            right: '68.22%',
          }"
        >
          <img
            src="../../assets/images/galeria2.webp"
            alt=""
            class="w-full h-auto"
          />
        </div>

        <div
          ref="image3"
          class="absolute z-[10] max-lg:w-[45%] lg:w-[33.33%]"
          :style="{
            left: '63.67%',
            top: '-38.43%',
          }"
        >
          <img
            src="../../assets/images/galeria3.webp"
            alt=""
            class="w-full h-auto"
          />
        </div>

        <div
          ref="image4"
          class="absolute z-[4] max-lg:w-[45%] max-lg:top-[17%] lg:w-[33.33%] lg:top-[25.43%]"
          :style="{
            left: '67.98%',
          }"
        >
          <img
            src="../../assets/images/galeria4.webp"
            alt=""
            class="w-full h-auto"
          />
        </div>

        <div
          ref="image5"
          class="absolute z-[6] max-lg:w-[44%] lg:w-[33.33%]"
          :style="{
            left: '33.33%',
            top: '-28.57%',
          }"
        >
          <img
            src="../../assets/images/galeria5.webp"
            alt=""
            class="w-full h-auto"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useGSAP } from '../../composables/useGSAP';
import { initGalleryAnimations } from '../../composables/useAnimations';

const galleryContainer = ref<HTMLElement | null>(null);
const image1 = ref<HTMLElement | null>(null);
const image2 = ref<HTMLElement | null>(null);
const image3 = ref<HTMLElement | null>(null);
const image4 = ref<HTMLElement | null>(null);
const image5 = ref<HTMLElement | null>(null);

const { gsap, ScrollTrigger, isAvailable } = useGSAP();

let cleanup: (() => void) | undefined;

onMounted(() => {
  if (!isAvailable()) {
    console.warn('GSAP ou ScrollTrigger não disponíveis');
    return;
  }

  const images = [image1, image2, image3, image4, image5];
  cleanup = initGalleryAnimations(galleryContainer, images, gsap, ScrollTrigger);
});

onUnmounted(() => {
  if (cleanup) {
    cleanup();
  }
});
</script>