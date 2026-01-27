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
  if (!gsap || !leftOverlay.value || !rightOverlay.value) return;
  
  setTimeout(() => {
    if (!leftOverlay.value || !rightOverlay.value) return;
    
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
    
    const tl = gsap.timeline();
    
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
  }, 300);
};

