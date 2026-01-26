export const animations = `
.animated-grid-image {
  width: 300px;
  height: 100%;
  display: block;
}

.image-wrapper {
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
.expand-enter-from .image-wrapper .animated-grid-image {
  clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
}

/* Animação da imagem - expande de cima para baixo */
.expand-enter-active .image-wrapper .animated-grid-image {
  clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
  animation: revealDown 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  will-change: clip-path;
}

.expand-leave-active .image-wrapper .animated-grid-image {
  animation: hideUp 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  will-change: clip-path;
}

/* Animação do texto - aparece depois da imagem */
.content-text {
  opacity: 0;
  transform: translateY(20px);
  will-change: opacity, transform;
}

.expand-enter-active .content-text {
  animation: fadeInUp 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  animation-delay: 0.6s;
}

.expand-leave-active .content-text {
  animation: fadeOut 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

/* Quando o texto precisa aparecer (após animação da imagem) */
.content-text.animate-text {
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

export const initServicesAnimations = (
  servicesContainer: Ref<HTMLElement | null>,
  onItemOpen: () => void
) => {

  const styleId = "services-animations";
  if (!document.getElementById(styleId)) {
    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = animations;
    document.head.appendChild(style);
  }


  const animateVisibleTexts = () => {
    document.querySelectorAll('.content-text').forEach((el) => {
      if (el instanceof HTMLElement) {
        const parent = el.parentElement?.parentElement;
        if (parent && window.getComputedStyle(parent).display !== 'none') {
          el.classList.add('animate-text');
        }
      }
    });
  };


  const animateTextOnOpen = () => {
    requestAnimationFrame(() => {
      document.querySelectorAll('.content-text').forEach((el) => {
        if (el instanceof HTMLElement) {
          const container = el.closest('.expand-enter-to, .expand-enter-active');
          if (container) {
            el.classList.remove('animate-text');
            requestAnimationFrame(() => {
              el.classList.add('animate-text');
            });
          }
        }
      });
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

  const checkContainer = () => {
    if (servicesContainer.value) {
      observer.observe(servicesContainer.value);
    } else {
      setTimeout(checkContainer, 100);
    }
  };

  checkContainer();
  return {
    cleanup: () => {
      observer.disconnect();
    },
    animateTextOnOpen,
  };
};

