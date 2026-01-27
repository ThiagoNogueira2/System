import { onMounted, onUnmounted } from 'vue';
import Lenis from 'lenis';

declare global {
  interface Window {
    gsap: any;
    ScrollTrigger: any;
  }
}

export function useSmoothScroll() {
  let lenis: Lenis | null = null;

  const initSmoothScroll = () => {
    lenis = new Lenis({
      duration: 2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      smoothTouch: false, 
      touchMultiplier: 2,
    });

    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    
    if (gsap && ScrollTrigger) {
      lenis.on('scroll', ScrollTrigger.update);

      gsap.ticker.add((time: number) => {
        lenis?.raf(time * 1000);
      });

      gsap.ticker.lagSmoothing(0);
    } else {
      function raf(time: number) {
        lenis?.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }
  };

  onMounted(() => {
    initSmoothScroll();
  });

  onUnmounted(() => {
    if (lenis) {
      lenis.destroy();
    }
  });

  return {
    lenis,
  };
}

