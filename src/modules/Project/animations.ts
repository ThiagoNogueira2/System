import type { Ref } from 'vue';

export const initImageOverlayAnimation = (
  imageOverlay: Ref<HTMLElement | null>,
  imageContainer: Ref<HTMLElement | null>,
  gsap: any,
  ScrollTrigger: any
) => {
  if (gsap && ScrollTrigger && imageOverlay.value && imageContainer.value) {
    if (!imageOverlay.value.classList.contains('project-image-overlay')) {
      imageOverlay.value.classList.add('project-image-overlay');
    }
    
    const overlayWidth = imageOverlay.value.offsetWidth;
    
    gsap.killTweensOf(imageOverlay.value);
    imageOverlay.value.style.transform = '';
    imageOverlay.value.style.transition = 'none';
    
    gsap.set(imageOverlay.value, {
      x: 0,
      force3D: true
    });

    const scrollTriggerConfig: any = {
      trigger: imageContainer.value,
      start: 'top 80%',
      end: 'top 50%',
      toggleActions: 'play none none none',
      once: true,
      invalidateOnRefresh: false,
      id: `project-overlay-${Math.random().toString(36).substr(2, 9)}`,
    };

    gsap.to(imageOverlay.value, {
      x: overlayWidth,
      duration: 2.2,
      ease: 'power1.inOut',
      force3D: true,
      scrollTrigger: scrollTriggerConfig,
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
    if (!imageOverlay.value.classList.contains('project-image-overlay')) {
      imageOverlay.value.classList.add('project-image-overlay');
    }
    
    const overlayWidth = imageOverlay.value.offsetWidth;
    
    gsap.killTweensOf(imageOverlay.value);
    imageOverlay.value.style.transform = '';
    imageOverlay.value.style.transition = 'none';
    
    gsap.set(imageOverlay.value, {
      x: 0,
      force3D: true
    });

    const scrollTriggerConfig: any = {
      trigger: imageContainer.value,
      start: 'top 80%',
      end: 'top 50%',
      toggleActions: 'play none none none',
      once: true,
      invalidateOnRefresh: false,
      id: `project-overlay-right-${Math.random().toString(36).substr(2, 9)}`,
    };

    gsap.to(imageOverlay.value, {
      x: -overlayWidth,
      duration: 2,
      ease: 'power1.inOut',
      force3D: true,
      scrollTrigger: scrollTriggerConfig,
    });
  }
};

