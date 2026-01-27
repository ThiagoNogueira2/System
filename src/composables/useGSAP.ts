import { onUnmounted, onMounted } from 'vue';
import type { Ref } from 'vue';

declare global {
  interface Window {
    gsap: any;
    ScrollTrigger: any;
  }
}

export function useGSAP() {
  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;

  if (gsap && ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
  }

  const isAvailable = (): boolean => {
    return !!(gsap && ScrollTrigger);
  };

  const cleanup = (): void => {
    if (ScrollTrigger) {
      ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
    }
  };

  const useAutoCleanup = () => {
    onUnmounted(() => {
      cleanup();
    });
  };

  const initHomeAnimations = (
    backgroundImage: Ref<HTMLElement | null>,
    foregroundImage: Ref<HTMLElement | null>,
    titleContainer: Ref<HTMLElement | null>,
    animationsCSS: string,
    delay: number = 100
  ) => {
    onMounted(() => {
      setTimeout(() => {
        if (!isAvailable()) {
          console.error('GSAP ou ScrollTrigger não foram carregados corretamente');
          return;
        }

        if (backgroundImage.value && foregroundImage.value && titleContainer.value) {
          gsap.to(titleContainer.value, {
            y: -200,
            scrollTrigger: {
              trigger: backgroundImage.value,
              start: 'top top',
              end: 'bottom top',
              scrub: true,
            },
          });
        }
      }, delay);
    });
  };

  return {
    gsap,
    ScrollTrigger,
    isAvailable,
    cleanup,
    useAutoCleanup,
    initHomeAnimations,
  };
}
