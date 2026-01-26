<template>
  <div class="container1 flex justify-between">
    <div class="logo-tipo">
      <img src="@/assets/images/logo.svg" alt="logo-tipo" />
    </div>
    <div class="flex items-center">
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
        <h1 class="font-bold leading-none satoshi-font large-title-size">

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

.satoshi-font {
  font-family: "Satoshi", sans-serif;
}

.large-title-size {
  font-size: 14.5vw;
}
</style>

