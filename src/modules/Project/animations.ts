import type { Ref } from 'vue';

export const animations = `
@keyframes slideOutRight {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(100%);
  }
}
`;

export const initImageOverlayAnimation = (
  imageOverlay: Ref<HTMLElement | null>,
  imageContainer: Ref<HTMLElement | null>,
  gsap: any,
  ScrollTrigger: any
) => {
  if (gsap && ScrollTrigger && imageOverlay.value && imageContainer.value) {
    gsap.set(imageOverlay.value, {
      x: 0,
    });

    gsap.to(imageOverlay.value, {
      x: '100%',
      duration: 2,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: imageContainer.value,
        start: 'top 80%',
        end: 'top 50%',
        toggleActions: 'play none none none',
        once: true,
      },
    });
  }
};

export const initImageOverlayAnimationRight = (
  imageOverlay: Ref<HTMLElement | null>,
  imageContainer: Ref<HTMLElement | null>,
  gsap: any,
  ScrollTrigger: any
) => {
  if (gsap && ScrollTrigger && imageOverlay.value && imageContainer.value) {
    gsap.set(imageOverlay.value, {
      x: 0,
    });

    gsap.to(imageOverlay.value, {
      x: '-100%',
      duration: 2,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: imageContainer.value,
        start: 'top 80%',
        end: 'top 50%',
        toggleActions: 'play none none none',
        once: true,
      },
    });
  }
};

