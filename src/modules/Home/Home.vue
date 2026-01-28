<template>
  <div class="container1 flex !items-center justify-between md:items-start">
    <div class="logo-tipo">
      <img src="@/assets/images/logo.svg" alt="logo-tipo" />
    </div>
    <div class="hidden md:flex ">
      <ul class="flex gap-6">
        <li>About</li>
        <li>Services</li>
        
        <li>Projects</li>
        <li>Gallery</li>
        <li>Reviews</li>
        <li>Contact</li>
      </ul>
    </div>
    <button
      v-if="!isMenuOpen"
      @click="toggleMenu"
      class="md:hidden z-[70] relative w-8 h-8 flex flex-col justify-center gap-1.5"
      aria-label="Menu"
    >
      <span class="block w-full h-0.5 bg-black"></span>
      <span class="block w-full h-0.5 bg-black"></span>
      <span class="block w-full h-0.5 bg-black"></span>
    </button>
  </div>

  <div class="px-0 md:px-10 pt-[15px]">
    <div class="relative min-h-[75vh] md:min-h-[85vh] mb-10">
      <div
        class="absolute w-full h-full bg-cover bg-center bg-fixed"
        style="
          background-image: url('https://cdn.prod.website-files.com/69737a57e219ee8afab8550b/69737a5ae219ee8afab8561f_hero-bg-sky.webp');
        "
      ></div>

      <div
        class="absolute top-[15vw] md:top-[10vw] lg:top-[5vw] left-0 right-0 px-[15px] sm:px-5 md:px-10 lg:px-14 mix-blend-overlay"
        ref="titleContainer"
      >
        <h1 class="font-bold leading-none satoshi-font text-[16vw] sm:text-[15vw] md:text-[12vw] lg:text-[14.5vw] whitespace-nowrap">

          <span
            v-for="(letter, index) in 'WOODLAND'.split('')"
            :key="index"
            class="inline-block letter-animation"
          >
            {{ letter === " " ? "\u00A0" : letter }}
          </span>

        </h1>
      </div>

      <div
        class="absolute inset-0 bg-no-repeat bg-fixed bg-[position:50%_140%] md:bg-[position:45%_25%] lg:bg-[position:50%_0%]"
        style="
          background-image: url('https://cdn.prod.website-files.com/69737a57e219ee8afab8550b/69737a5ae219ee8afab85623_hero-fg.webp');
        "
      ></div>

      <div class="absolute inset-0 z-[4] flex overflow-hidden text-[var(--black)]">
        <div class="w-1/2 bg-[var(--white)]" ref="leftOverlay"></div>
        <div class="w-1/2 bg-[var(--white)]" ref="rightOverlay"></div>
      </div>

      <nav
        class="absolute top-0 left-0 w-full h-full bg-black/90 z-[60] flex items-center justify-center transition-all duration-300"
        :class="isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'"
      >
        <button
          v-if="isMenuOpen"
          @click="closeMenu"
          class="absolute top-4 right-4 text-white text-5xl font-normal"
          aria-label="Fechar menu"
        >
          ×
        </button>
        <ul class="flex flex-col gap-8 text-white text-2xl">
          <li @click="closeMenu" class="cursor-pointer hover:opacity-70 transition">About</li>
          <li @click="closeMenu" class="cursor-pointer hover:opacity-70 transition">Services</li>
          <li @click="closeMenu" class="cursor-pointer hover:opacity-70 transition">Projects</li>
          <li @click="closeMenu" class="cursor-pointer hover:opacity-70 transition">Gallery</li>
          <li @click="closeMenu" class="cursor-pointer hover:opacity-70 transition">Reviews</li>
          <li @click="closeMenu" class="cursor-pointer hover:opacity-70 transition">Contact</li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from "vue";
import { useGSAP } from "../../composables/useGSAP";
import { homeAnimationsCSS, initOverlayAnimation, injectHomeAnimationsCSS, animateLetters } from "../../composables/useAnimations";

injectHomeAnimationsCSS();

const { useAutoCleanup, initHomeAnimations, gsap } = useGSAP();

const backgroundImage = ref<HTMLElement | null>(null);
const foregroundImage = ref<HTMLElement | null>(null);
const titleContainer = ref<HTMLElement | null>(null);
const leftOverlay = ref<HTMLElement | null>(null);
const rightOverlay = ref<HTMLElement | null>(null);
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

useAutoCleanup();
initHomeAnimations(
  backgroundImage,
  foregroundImage,
  titleContainer,
  homeAnimationsCSS
);

onMounted(() => {
  nextTick(() => {
    initOverlayAnimation(leftOverlay, rightOverlay, gsap, () => {
      animateLetters(titleContainer.value, gsap, 0.2);
    });
  });
});
</script>