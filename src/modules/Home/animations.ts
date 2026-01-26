import type { Ref } from 'vue';

export const animations = `
.letter-animation {
  transform: translateY(50px);
  animation: slideUpFadeIn 0.8s ease-out forwards;
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

export const initOverlayAnimation = (
  leftOverlay: Ref<HTMLElement | null>,
  rightOverlay: Ref<HTMLElement | null>,
  gsap: any
) => {
  if (gsap && leftOverlay.value && rightOverlay.value) {
    gsap.to(leftOverlay.value, {
      x: '-100%',
      duration: 1.2,
      ease: 'power2.inOut',
      delay: 0.2,
    });
    
    gsap.to(rightOverlay.value, {
      x: '100%',
      duration: 1.2,
      ease: 'power2.inOut',
      delay: 0.2,
    });
  }
};

