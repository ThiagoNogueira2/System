<template>
  <div id="services-module-container" ref="servicesContainer" class="services-module-wrapper flex flex-col xl:flex-row w-full min-h-screen pt-6 lg:pt-32 xl:pt-60">
    <div class="flex-[0_0_100%] xl:flex-[0_0_50%] p-4 md:p-6 xl:p-10 pt-6 md:pt-8 xl:pt-[60px]">
      <h1 class="text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-bold satoshi-font text-[#1e1e1e]">SERVICES</h1>
      <div class="mt-4 md:mt-6 aspect-[4/3] max-w-full">
        <img
          src="../../assets/images/service2.jpeg"
          alt="Services"
          class="w-full h-[85%] md:h-[90%] object-cover"
        />
      </div>
    </div>

    <div class="px-4 md:px-6 xl:pr-[60px] pt-6 md:pt-8 xl:pt-[60px] w-full">
      <div class="h-px mb-2 bg-[rgb(232,232,232)] w-full"></div>

      <div class="">
        <div class="flex flex-col gap-2">
          <div
            class="flex justify-between items-start cursor-pointer py-2"
            @click="toggleService(1)"
          >
            <div class="flex items-center gap-2 md:gap-3">
              <span class="text-[var(--grey)] font-normal text-xs md:text-sm">01</span>
              <h2 class="text-base md:text-lg xl:text-xl font-medium">Architecture</h2>
            </div>

            <span class="text-xl md:text-2xl font-light min-w-[24px] text-right">
              {{ openService === 1 ? "−" : "+" }}
            </span>
          </div>

          <Transition name="expand">
            <div v-show="openService === 1" class="pt-2 md:pt-3">
              <div class="flex flex-col items-center md:items-start md:flex-row gap-4 md:gap-6 xl:gap-10">
                <div class="flex flex-col services-content-text w-full md:flex-1">
                  <p class="satoshi-font text-[0.8rem] md:text-[0.87rem] leading-relaxed text-[#1e1e1e]">
                    We design buildings that are purposeful, enduring, and
                    deeply connected to their surroundings.
                  </p>

                  <div class="flex flex-col gap-2 mt-2 md:mt-53">
                    <div class="flex items-center gap-3 md:gap-4 text-[var(--grey)]">
                      <div class="w-1 h-1 bg-[var(--grey)] flex-shrink-0"></div>
                      <p class="text-xs md:text-sm">Concept Design</p>
                    </div>
                    <div class="flex items-center gap-3 md:gap-4 text-[var(--grey)]">
                      <div class="w-1 h-1 bg-[var(--grey)] flex-shrink-0"></div>
                      <p class="text-xs md:text-sm">Architectural Planning</p>
                    </div>
                    <div class="flex items-center gap-3 md:gap-4 text-[var(--grey)]">
                      <div class="w-1 h-1 bg-[var(--grey)] flex-shrink-0"></div>
                      <p class="text-xs md:text-sm">3D Visualization & Modeling</p>
                    </div>
                    <div class="flex items-center gap-3 md:gap-4 text-[var(--grey)]">
                      <div class="w-1 h-1 bg-[var(--grey)] flex-shrink-0"></div>
                      <p class="text-xs md:text-sm">Construction Documentation</p>
                    </div>
                  </div>
                </div>

                <div class="services-image-wrapper w-full md:w-auto md:flex-shrink-0 md:ml-auto mt-4 md:mt-0">
                  <img
                    src="../../assets/images/bg-4.webp"
                    alt="architecture"
                    class="services-animated-grid-image object-cover w-full md:w-auto"
                  />
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>

      <div class="h-px my-4 md:my-4 bg-[rgb(232,232,232)]"></div>

      <div class="">
        <div class="flex flex-col gap-2">
          <div
            class="flex justify-between items-start cursor-pointer py-2"
            @click="toggleService(2)"
          >
            <div class="flex items-center gap-2 md:gap-3">
              <span class="text-[var(--grey)] font-normal text-xs md:text-sm">02</span>
              <h2 class="text-base md:text-lg xl:text-xl font-medium">Interior Design</h2>
            </div>

            <span class="text-xl md:text-2xl font-light min-w-[24px] text-right">
              {{ openService === 2 ? "−" : "+" }}
            </span>
          </div>

          <Transition name="expand">
            <div v-show="openService === 2" class="pt-2 md:pt-3">
              <div class="flex flex-col items-center md:items-start md:flex-row gap-4 md:gap-6 xl:gap-10">
                <div class="flex flex-col services-content-text w-full md:flex-1">
                  <p class="satoshi-font text-[0.8rem] md:text-[0.87rem] leading-relaxed text-[#1e1e1e]">
                    Beyond surface-level styling, we craft interiors that feel
                    as good as they look.
                  </p>

                  <div class="flex flex-col gap-2 mt-2 md:mt-53">
                    <div class="flex items-center gap-3 md:gap-4 text-[var(--grey)]">
                      <div class="w-1 h-1 bg-[var(--grey)] flex-shrink-0"></div>
                      <p class="text-xs md:text-sm">Spatial Identity</p>
                    </div>
                    <div class="flex items-center gap-3 md:gap-4 text-[var(--grey)]">
                      <div class="w-1 h-1 bg-[var(--grey)] flex-shrink-0"></div>
                      <p class="text-xs md:text-sm">Material & Finish Selection</p>
                    </div>
                    <div class="flex items-center gap-3 md:gap-4 text-[var(--grey)]">
                      <div class="w-1 h-1 bg-[var(--grey)] flex-shrink-0"></div>
                      <p class="text-xs md:text-sm">Furniture & Lighting Design</p>
                    </div>
                    <div class="flex items-center gap-3 md:gap-4 text-[var(--grey)]">
                      <div class="w-1 h-1 bg-[var(--grey)] flex-shrink-0"></div>
                      <p class="text-xs md:text-sm">Detail Development</p>
                    </div>
                  </div>
                </div>
                <div class="services-image-wrapper w-full md:w-auto md:flex-shrink-0 md:ml-auto mt-4 md:mt-0">
                  <img
                    src="../../assets/images/bg-2.webp"
                    alt="interior design"
                    class="services-animated-grid-image object-cover w-full md:w-auto"
                  />
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>

      <div class="h-px my-4 md:my-4 bg-[rgb(232,232,232)]"></div>

      <div class="">
        <div class="flex flex-col gap-2">
          <div
            class="flex justify-between items-start cursor-pointer py-2"
            @click="toggleService(3)"
          >
            <div class="flex items-center gap-2 md:gap-3">
              <span class="text-[var(--grey)] font-normal text-xs md:text-sm">03</span>
              <h2 class="text-base md:text-lg xl:text-xl font-medium">Layout Planning</h2>
            </div>

            <span class="text-xl md:text-2xl font-light min-w-[24px] text-right">
              {{ openService === 3 ? "−" : "+" }}
            </span>
          </div>

          <Transition name="expand">
            <div v-show="openService === 3" class="pt-2 md:pt-3">
              <div class="flex flex-col items-center md:items-start md:flex-row gap-4 md:gap-6 xl:gap-10">
                <div class="flex flex-col services-content-text w-full md:flex-1">
                  <p class="satoshi-font text-[0.8rem] md:text-[0.87rem] leading-relaxed text-[#1e1e1e]">
                    We organize environments around people, movement, and use,
                    creating clarity, comfort, and adaptability.
                  </p>

                  <div class="flex flex-col gap-2 mt-2 md:mt-53">
                    <div class="flex items-center gap-3 md:gap-4 text-[var(--grey)]">
                      <div class="w-1 h-1 bg-[var(--grey)] flex-shrink-0"></div>
                      <p class="text-xs md:text-sm">Functional Zoning</p>
                    </div>
                    <div class="flex items-center gap-3 md:gap-4 text-[var(--grey)]">
                      <div class="w-1 h-1 bg-[var(--grey)] flex-shrink-0"></div>
                      <p class="text-xs md:text-sm">Human-Centered Design</p>
                    </div>
                    <div class="flex items-center gap-3 md:gap-4 text-[var(--grey)]">
                      <div class="w-1 h-1 bg-[var(--grey)] flex-shrink-0"></div>
                      <p class="text-xs md:text-sm">Circulation Strategy</p>
                    </div>
                    <div class="flex items-center gap-3 md:gap-4 text-[var(--grey)]">
                      <div class="w-1 h-1 bg-[var(--grey)] flex-shrink-0"></div>
                      <p class="text-xs md:text-sm">Flexibility & Future Use</p>
                    </div>
                  </div>
                </div>
                <div class="services-image-wrapper w-full md:w-auto md:flex-shrink-0 md:ml-auto mt-4 md:mt-0">
                  <img
                    src="../../assets/images/bg-3.webp"
                    alt="layout planning"
                    class="services-animated-grid-image object-cover w-full md:w-auto"
                  />
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>

      <div class="h-px my-4 md:my-4 bg-[rgb(232,232,232)]"></div>

      <div class="">
        <div class="flex flex-col gap-2">
          <div
            class="flex justify-between items-start cursor-pointer py-2"
            @click="toggleService(4)"
          >
            <div class="flex items-center gap-2 md:gap-3">
              <span class="text-[var(--grey)] font-normal text-xs md:text-sm">04</span>
              <h2 class="text-base md:text-lg xl:text-xl font-medium">Project Management</h2>
            </div>

            <span class="text-xl md:text-2xl font-light min-w-[24px] text-right">
              {{ openService === 4 ? "−" : "+" }}
            </span>
          </div>

          <Transition name="expand">
            <div v-show="openService === 4" class="pt-2 md:pt-3">
              <div class="flex flex-col items-center md:items-start md:flex-row gap-4 md:gap-6 xl:gap-10">
                <div class="flex flex-col services-content-text w-full md:flex-1">
                  <p class="satoshi-font text-[0.8rem] md:text-[0.87rem] leading-relaxed text-[#1e1e1e]">
                    We ensure your vision is delivered on time, on budget, and
                    to the highest standards.
                  </p>

                  <div class="flex flex-col gap-2 mt-2 md:mt-53">
                    <div class="flex items-center gap-3 md:gap-4 text-[var(--grey)]">
                      <div class="w-1 h-1 bg-[var(--grey)] flex-shrink-0"></div>
                      <p class="text-xs md:text-sm">Concept Design</p>
                    </div>
                    <div class="flex items-center gap-3 md:gap-4 text-[var(--grey)]">
                      <div class="w-1 h-1 bg-[var(--grey)] flex-shrink-0"></div>
                      <p class="text-xs md:text-sm">Stakeholder Coordination</p>
                    </div>
                    <div class="flex items-center gap-3 md:gap-4 text-[var(--grey)]">
                      <div class="w-1 h-1 bg-[var(--grey)] flex-shrink-0"></div>
                      <p class="text-xs md:text-sm">Quality Control</p>
                    </div>
                    <div class="flex items-center gap-3 md:gap-4 text-[var(--grey)]">
                      <div class="w-1 h-1 bg-[var(--grey)] flex-shrink-0"></div>
                      <p class="text-xs md:text-sm">Budget & Timeline Tracking</p>
                    </div>
                  </div>
                </div>
                <div class="services-image-wrapper w-full md:w-auto md:flex-shrink-0 md:ml-auto mt-4 md:mt-0">
                  <img
                    src="../../assets/images/bg-1.webp"
                    alt="project management"
                    class="services-animated-grid-image object-cover w-full md:w-auto"
                  />
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, nextTick } from "vue";
import { initServicesAnimations } from "../../composables/useAnimations";

declare global {
  interface Window {
    ScrollTrigger: any;
  }
}

const servicesContainer = ref<HTMLElement | null>(null);
const openService = ref<number>(4);

const toggleService = (serviceNumber: number) => {
  if (openService.value !== serviceNumber) {
    openService.value = serviceNumber;
  }
};

let animationController: ReturnType<typeof initServicesAnimations> | null = null;

onMounted(() => {
  animationController = initServicesAnimations(servicesContainer, () => {});
});

onUnmounted(() => {
  if (animationController) {
    animationController.cleanup();
  }
});

watch(openService, () => {
  nextTick(() => {
    if (animationController) {
      animationController.animateTextOnOpen();
    }
    // Usa requestAnimationFrame para evitar trava
    requestAnimationFrame(() => {
      setTimeout(() => {
        if (window.ScrollTrigger) {
          window.ScrollTrigger.refresh();
        }
      }, 450);
    });
  });
});
</script>