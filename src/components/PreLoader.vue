<template>
  <Transition name="preloader-exit">
    <div
      v-if="isVisible"
      class="fixed inset-0 z-[10000] flex items-center justify-center pointer-events-none overflow-hidden"
    >
      <div class="absolute inset-0 bg-black"></div>

      <div
        class="relative z-[5] flex flex-col items-center justify-center gap-8 w-full max-w-[90vw]"
      >
        <div
          class="h-px bg-white w-0 opacity-0 animate-line-expand"
          :style="{ animationDelay: '0.3s' }"
        ></div>

        <div class="overflow-visible h-auto relative">
          <span
            class="inline-block satoshi-font text-[clamp(2rem,8vw,6rem)] font-bold tracking-[0.1em] text-white uppercase whitespace-nowrap"
            :class="{ 'animate-text-reveal': true }"
            :style="{ animationDelay: '0.7s' }"
          >
            WOODLAND
          </span>
        </div>

        <div
          class="h-px bg-white w-0 opacity-0 animate-line-expand"
          :style="{ animationDelay: '0.5s' }"
        ></div>
      </div>

      <div
        class="absolute inset-0 bg-black z-[2] transition-[clip-path] duration-1000 ease-in-out"
        :class="isExiting ? 'clip-path-full' : 'clip-path-top'"
      ></div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const isVisible = ref(true);
const isExiting = ref(false);

onMounted(() => {
  document.body.classList.add("preloader-active");

  setTimeout(() => {
    isExiting.value = true;

    setTimeout(() => {
      isVisible.value = false;
      document.body.classList.remove("preloader-active");
    }, 1000);
  }, 1500);
});
</script>

<style scoped>
@keyframes line-expand {
  from {
    width: 0;
    opacity: 0;
  }
  to {
    width: 100%;
    opacity: 1;
  }
}

@keyframes text-reveal {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-line-expand {
  animation: line-expand 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.animate-text-reveal {
  opacity: 0;
  transform: translateY(20px);
  animation: text-reveal 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}


.clip-path-top {
  clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
}

.clip-path-full {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
}

.preloader-exit-enter-active,
.preloader-exit-leave-active {
  transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.preloader-exit-enter-from,
.preloader-exit-leave-to {
  opacity: 0;
}
</style>
