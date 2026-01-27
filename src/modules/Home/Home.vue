<template>
  <div class="container1 flex justify-between items-center md:items-start">
    <div class="logo-tipo">
      <img src="@/assets/images/logo.svg" alt="logo-tipo" />
    </div>
    <div class="hidden md:flex items-center">
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
      @click="toggleMenu"
      class="md:hidden z-[70] relative w-8 h-8 flex flex-col justify-center gap-1.5"
      aria-label="Menu"
    >
      <span
        class="block w-full h-0.5 bg-black transition-all duration-300"
        :class="isMenuOpen ? 'rotate-45 translate-y-2 bg-white' : ''"
      ></span>
      <span
        class="block w-full h-0.5 bg-black transition-all duration-300"
        :class="isMenuOpen ? 'opacity-0 bg-white' : ''"
      ></span>
      <span
        class="block w-full h-0.5 bg-black transition-all duration-300"
        :class="isMenuOpen ? '-rotate-45 -translate-y-2 bg-white' : ''"
      ></span>
    </button>
  </div>

  <div class="hero-container">
    <div class="relative min-h-[85vh] mb-10">
      <div
        class="absolute w-full h-full bg-cover bg-center bg-fixed"
        style="
          background-image: url('https://cdn.prod.website-files.com/69737a57e219ee8afab8550b/69737a5ae219ee8afab8561f_hero-bg-sky.webp');
        "
      ></div>

      <div
        class="absolute px-10 lg:px-14 md:px-5 page-title-position mix-blend-overlay"
      >
        <h1 class="font-bold leading-none satoshi-font large-title-size whitespace-nowrap">

          <span
            v-for="(letter, index) in 'WOODLAND'.split('')"
            :key="index"
            class="inline-block opacity-0 letter-animation"
            :style="{ animationDelay: `${0.6 + index * 0.1}s` }"
          >
            {{ letter === " " ? "\u00A0" : letter }}
          </span>

        </h1>
      </div>

      <div
        class="absolute inset-0 bg-no-repeat bg-fixed bg-[position:50%_0%]"
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
import { animations, initOverlayAnimation } from "./animations";
import { ref, onMounted } from "vue";
import { useGSAP } from "../../composables/useGSAP";

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
  animations
);

onMounted(() => {
  initOverlayAnimation(leftOverlay, rightOverlay, gsap);
});
</script>

<style scoped>
.page-title-position {
  top: 5vw;
  right: 0%;
  bottom: auto;
  left: 0%;
}

@media screen and (max-width: 991px) {
  .page-title-position {
    top: 10vw;
  }
}

@media screen and (max-width: 767px) {
  .page-title-position {
    top: 15vw;
    padding-left: 20px;
    padding-right: 20px;
  }
}

.satoshi-font {
  font-family: "Satoshi", sans-serif;
}

.large-title-size {
  font-size: 14.5vw;
}

@media screen and (max-width: 991px) {
  .large-title-size {
    font-size: 12vw;
  }
}

@media screen and (max-width: 767px) {
  .large-title-size {
    font-size: 15vw;
  }
}

@media screen and (max-width: 480px) {
  .large-title-size {
    font-size: 16vw;
  }
  
  .page-title-position {
    padding-left: 15px;
    padding-right: 15px;
  }
}

.hero-container {
  padding-right: 40px;
  padding-left: 40px;
  padding-top: 15px;
}

@media (max-width: 767px) {
  .hero-container {
    padding: 0;
  }
}
</style>

