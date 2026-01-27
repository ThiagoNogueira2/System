import type { Ref } from 'vue';

declare global {
  interface Window {
    gsap: any;
    ScrollTrigger: any;
  }
}

export const homeAnimationsCSS = `
.letter-animation {
}

.left-overlay {
  transform: translateX(-100%);
  animation: slideOutLeft 1s ease-in-out forwards;
  animation-delay: 0.3s;
}

.right-overlay {
  transform: translateX(100%);
  animation: slideOutRight 1s ease-in-out forwards;
  animation-delay: 0.3s;
}

@keyframes slideOutLeft {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-100%);
  }
}

@keyframes slideOutRight {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(100%);
  }
}

@keyframes slideUpFadeIn {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
`;

export const injectHomeAnimationsCSS = () => {
  if (!document.getElementById('home-animations')) {
    const style = document.createElement('style');
    style.id = 'home-animations';
    style.textContent = homeAnimationsCSS;
    document.head.appendChild(style);
  }
};

export const servicesAnimationsCSS = `
.services-animated-grid-image {
  width: 300px;
  height: 100%;
  display: block;
}

.services-image-wrapper {
  overflow: hidden;
  width: 300px;
  will-change: transform;
}

.expand-enter-active {
  transition: opacity 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94),
              padding-top 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  overflow: hidden;
  will-change: opacity, padding-top;
}

.expand-leave-active {
  transition: opacity 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94),
              padding-top 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  overflow: hidden;
  will-change: opacity, padding-top;
}

.expand-enter-from {
  opacity: 0;
  padding-top: 0;
}

.expand-enter-to {
  opacity: 1;
  padding-top: 0.75rem;
}

.expand-leave-from {
  opacity: 1;
  padding-top: 0.75rem;
}

.expand-leave-to {
  opacity: 0;
  padding-top: 0;
}

.expand-enter-from .services-image-wrapper .services-animated-grid-image {
  clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
}

.expand-enter-active .services-image-wrapper .services-animated-grid-image {
  clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
  will-change: clip-path;
}

.expand-leave-active .services-image-wrapper .services-animated-grid-image {
  will-change: clip-path;
}

.services-content-text {
  opacity: 0;
  transform: translateY(20px);
  will-change: opacity, transform;
  max-width: 400px;
  flex: 1 1 auto;
}

.expand-enter-active .services-content-text {
  animation: fadeInUp 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  animation-delay: 0.6s;
}

.expand-leave-active .services-content-text {
  animation: fadeOut 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

.services-content-text.animate-text {
  animation: fadeInUp 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  animation-delay: 0.6s;
}

@keyframes revealDown {
  from {
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
  }
  to {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
}

@keyframes hideUp {
  from {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
  to {
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(8px);
  }
}
`;

export const initOverlayAnimation = (
  leftOverlay: Ref<HTMLElement | null>,
  rightOverlay: Ref<HTMLElement | null>,
  gsap: any,
  onComplete?: () => void
): any => {
  if (!gsap || !leftOverlay.value || !rightOverlay.value) return null;
  
  const startAnimation = (): any => {
    if (!leftOverlay.value || !rightOverlay.value) return gsap.timeline();
    
    const leftWidth = leftOverlay.value.offsetWidth;
    const rightWidth = rightOverlay.value.offsetWidth;
    
    gsap.killTweensOf([leftOverlay.value, rightOverlay.value]);
    
    leftOverlay.value.style.transform = '';
    rightOverlay.value.style.transform = '';
    leftOverlay.value.style.transition = 'none';
    rightOverlay.value.style.transition = 'none';
    
    gsap.set([leftOverlay.value, rightOverlay.value], {
      x: 0,
      force3D: true
    });
    
    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) {
          onComplete();
        }
      }
    });
    
    tl.to(leftOverlay.value, {
      x: -leftWidth,
      duration: 2,
      ease: 'power2.inOut',
      force3D: true
    }, 0.5)
    .to(rightOverlay.value, {
      x: rightWidth,
      duration: 2,
      ease: 'power2.inOut',
      force3D: true
    }, 0.5);

    return tl;
  };

  let timeline: any = null;

  if (document.body.classList.contains('preloader-active')) {
    const checkPreloader = setInterval(() => {
      if (!document.body.classList.contains('preloader-active')) {
        clearInterval(checkPreloader);
        setTimeout(() => {
          timeline = startAnimation();
        }, 100);
      }
    }, 50);
  } else {
    setTimeout(() => {
      timeline = startAnimation();
    }, 300);
  }

  return timeline;
};

export const animateLetters = (
  titleContainer: HTMLElement | null,
  gsap: any,
  delayAfterOverlay: number = 0.2
) => {
  if (!gsap || !titleContainer) return;

  const letters = titleContainer.querySelectorAll('.letter-animation');
  if (letters.length === 0) return;

  letters.forEach((letter) => {
    if (letter instanceof HTMLElement) {
      gsap.set(letter, {
        opacity: 0,
        y: 50,
        force3D: true
      });
    }
  });

  const lettersTimeline = gsap.timeline({
    delay: delayAfterOverlay
  });

  letters.forEach((letter, index) => {
    if (letter instanceof HTMLElement) {
      lettersTimeline.to(letter, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        force3D: true
      }, index * 0.1);
    }
  });
};

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

export const initServicesAnimations = (
  servicesContainer: Ref<HTMLElement | null>,
  onItemOpen: () => void
) => {
  const gsap = window.gsap;

  const styleId = "services-animations";
  if (!document.getElementById(styleId)) {
    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = servicesAnimationsCSS;
    document.head.appendChild(style);
  }

  const animateImageReveal = (image: HTMLElement) => {
    if (!gsap || !image) return;
    
    // Evita animação duplicada
    if (image.dataset.animating === 'true') return;
    image.dataset.animating = 'true';
    
    requestAnimationFrame(() => {
      const imageWidth = image.offsetWidth;
      const imageHeight = image.offsetHeight;
      if (!imageWidth || !imageHeight) {
        image.dataset.animating = '';
        return;
      }

      gsap.killTweensOf(image);
      image.style.clipPath = '';
      image.style.transition = 'none';
      
      const isMobile = window.innerWidth <= 768;
      const duration = isMobile ? 0.9 : 1.3;
      
      gsap.set(image, {
        clipPath: `polygon(0 0, ${imageWidth}px 0, ${imageWidth}px 0, 0 0)`
      });
      
      void image.offsetWidth;
      
      gsap.to(image, {
        clipPath: `polygon(0 0, ${imageWidth}px 0, ${imageWidth}px ${imageHeight}px, 0 ${imageHeight}px)`,
        duration: duration,
        ease: isMobile ? 'power2.out' : 'power2.inOut',
        force3D: true,
        onComplete: () => {
          image.dataset.animating = '';
        }
      });
    });
  };

  const animateVisibleTexts = () => {
    if (!servicesContainer.value) return;
    const container = servicesContainer.value;
    container.querySelectorAll('.services-content-text').forEach((el) => {
      if (el instanceof HTMLElement && container.contains(el)) {
        const parent = el.parentElement?.parentElement;
        if (parent && container.contains(parent) && window.getComputedStyle(parent).display !== 'none') {
          el.classList.add('animate-text');
        }
      }
    });
  };

  const animateTextOnOpen = () => {
    if (!servicesContainer.value) return;
    requestAnimationFrame(() => {
      const container = servicesContainer.value;
      if (!container) return;
      
      container.querySelectorAll('.services-content-text').forEach((el) => {
        if (el instanceof HTMLElement && container.contains(el)) {
          const expandContainer = el.closest('.expand-enter-to, .expand-enter-active');
          if (expandContainer && container.contains(expandContainer)) {
            el.classList.remove('animate-text');
            requestAnimationFrame(() => {
              el.classList.add('animate-text');
            });
          }
        }
      });
      
      if (window.ScrollTrigger) {
        setTimeout(() => {
          window.ScrollTrigger.refresh();
        }, 500);
      }
    });
  };

  let hasAnimated = false;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;

          setTimeout(() => {
            animateVisibleTexts();
          }, 100);
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: '0px',
    }
  );

  let mutationObserver: MutationObserver | null = null;
  let isInitialMount = true;
  let rafPending: number | null = null;

  const checkContainer = () => {
    if (servicesContainer.value) {
      observer.observe(servicesContainer.value);
      
      // Aguarda um pouco antes de iniciar para evitar animação no mount
      setTimeout(() => {
        isInitialMount = false;
        
        mutationObserver = new MutationObserver((mutations) => {
          // Throttle com requestAnimationFrame para evitar múltiplas execuções
          if (rafPending) {
            cancelAnimationFrame(rafPending);
          }
          
          rafPending = requestAnimationFrame(() => {
            mutations.forEach((mutation) => {
              if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                const target = mutation.target as HTMLElement;
                if (target.classList.contains('expand-enter-active') || target.classList.contains('expand-enter-to')) {
                  // Ignora se ainda está no mount inicial
                  if (isInitialMount) return;
                  
                  const image = target.querySelector('.services-animated-grid-image') as HTMLElement;
                  if (image && image.dataset.animating !== 'true') {
                    animateImageReveal(image);
                  }
                }
              }
            });
            rafPending = null;
          });
        });
        
        mutationObserver.observe(servicesContainer.value, {
          attributes: true,
          attributeFilter: ['class'],
          subtree: true
        });
      }, 300);
    } else {
      setTimeout(checkContainer, 100);
    }
  };

  checkContainer();
  
  return {
    cleanup: () => {
      observer.disconnect();
      if (mutationObserver) {
        mutationObserver.disconnect();
      }
      if (rafPending) {
        cancelAnimationFrame(rafPending);
      }
    },
    animateTextOnOpen,
  };
};

