<template>
  <div class="container1 home homeClass flex justify-between">
    <div class="logo-tipo">
      <img src="@/assets/images/logo.svg" alt="logo-tipo" />
    </div>

    <div class="menu flex items-center">
      <ul class="flex gap-6">
        <li>About</li>
        <li>Services</li>
        <li>Projects</li>
        <li>Gallery</li>
        <li>Reviews</li>
        <li>Contact</li>
      </ul>
    </div>
  </div>

  <div class="container1">
    <div
      class="relative overflow-hidden max-h-[85vh] min-h-[85vh] mb-10 ml-auto "
    >
      <div
        ref="backgroundImage"
        class="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat bg-fixed"
        style="
          background-image: url('https://cdn.prod.website-files.com/69737a57e219ee8afab8550b/69737a5ae219ee8afab8561f_hero-bg-sky.webp');
        "
      ></div>

      <div
        ref="titleContainer"
        class="absolute z-[2] inline-flex mr-auto ml-auto px-10 lg:px-16 md:px-5 page-title-position text-black mix-blend-overlay"
      >
        <h1
          class="inline-flex font-bold leading-none satoshi-font large-title-size"
        >
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
        ref="foregroundImage"
        class="absolute inset-0 z-[3] bg-no-repeat bg-fixed bg-[position:50%_0%]"
        style="
          background-image: url('https://cdn.prod.website-files.com/69737a57e219ee8afab8550b/69737a5ae219ee8afab85623_hero-fg.webp');
        "
      ></div>
    </div>
  </div>
</template>

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

.satoshi-font {
  font-family: "Satoshi", sans-serif;
}

.large-title-size {
  font-size: 14.5vw;
}
</style>

<script setup lang="ts">
import { animations } from './animations';
import { ref } from 'vue';
import { useGSAP } from '../../composables/useGSAP';

const { useAutoCleanup, initHomeAnimations } = useGSAP();

const backgroundImage = ref<HTMLElement | null>(null);
const foregroundImage = ref<HTMLElement | null>(null);
const titleContainer = ref<HTMLElement | null>(null);

useAutoCleanup();
initHomeAnimations(backgroundImage, foregroundImage, titleContainer, animations);
</script>

