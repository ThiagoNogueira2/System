export const animations = `
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

/* Animação de expansão do container */
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

/* Estado inicial da imagem - sempre começa oculta */
.expand-enter-from .services-image-wrapper .services-animated-grid-image {
  clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
}

/* Animação da imagem - expande de cima para baixo */
.expand-enter-active .services-image-wrapper .services-animated-grid-image {
  clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
  will-change: clip-path;
}

.expand-leave-active .services-image-wrapper .services-animated-grid-image {
  will-change: clip-path;
}

/* Animação do texto - aparece depois da imagem */
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

/* Quando o texto precisa aparecer (após animação da imagem) */
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

import type { Ref } from 'vue';

declare global {
  interface Window {
    ScrollTrigger: any;
  }
}

export const initServicesAnimations = (
  servicesContainer: Ref<HTMLElement | null>,
  onItemOpen: () => void
) => {
  const gsap = window.gsap;

  const styleId = "services-animations";
  if (!document.getElementById(styleId)) {
    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = animations;
    document.head.appendChild(style);
  }

  const animateImageReveal = (image: HTMLElement) => {
    if (!gsap || !image) return;
    
    setTimeout(() => {
      const imageWidth = image.offsetWidth;
      const imageHeight = image.offsetHeight;
      if (!imageWidth || !imageHeight) return;

      gsap.killTweensOf(image);
      image.style.clipPath = '';
      image.style.transition = 'none';
      
      gsap.set(image, {
        clipPath: `polygon(0 0, ${imageWidth}px 0, ${imageWidth}px 0, 0 0)`
      });
      
      void image.offsetWidth;
      
      gsap.to(image, {
        clipPath: `polygon(0 0, ${imageWidth}px 0, ${imageWidth}px ${imageHeight}px, 0 ${imageHeight}px)`,
        duration: 1.3,
        ease: 'power2.inOut',
        force3D: true
      });
    }, 50);
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

  const checkContainer = () => {
    if (servicesContainer.value) {
      observer.observe(servicesContainer.value);
      
      mutationObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            const target = mutation.target as HTMLElement;
            if (target.classList.contains('expand-enter-active') || target.classList.contains('expand-enter-to')) {
              const image = target.querySelector('.services-animated-grid-image') as HTMLElement;
              if (image) {
                animateImageReveal(image);
              }
            }
          }
        });
      });
      
      mutationObserver.observe(servicesContainer.value, {
        attributes: true,
        attributeFilter: ['class'],
        subtree: true
      });
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
    },
    animateTextOnOpen,
  };
};

