<template>
  <div id="services-module-container" ref="servicesContainer" class="services-module-wrapper flex w-full min-h-screen pt-60">
    <div class="flex-[0_0_50%] p-10 pt-[60px]">
      <h1 class="text-7xl font-bold satoshi-font text-[#1e1e1e]">SERVICES</h1>
      <div class="mt-6 aspect-[4/3]">
        <img
          src="../../assets/images/service2.jpeg"
          alt="Services"
          class="w-[100%] h-[90%] object-cover"
        />
      </div>
    </div>

    <div class="pr-[60px] pt-[60px] w-full">
      <div class="h-px mb-2 bg-[rgb(232,232,232)] w-full"></div>

      <div class="pt-3">
        <div class="flex flex-col gap-2">
          <div
            class="flex justify-between cursor-pointer"
            @click="isOpen1 = !isOpen1"
          >
            <div class="flex items-center gap-2">
              <span class="text-[var(--grey)] font-normal text-sm">01</span>
              <h1 class="text-xl">Architecture</h1>
            </div>

            <span class="text-xl font-light">
              {{ isOpen1 ? "−" : "+" }}
            </span>
          </div>

          <Transition name="expand">
            <div v-show="isOpen1" class="pt-3">
              <div class="flex gap-10">
                <div class="flex flex-col services-content-text">
                  <p class="satoshi-font text-[0.87rem] leading-relaxed">
                    We design buildings that are purposeful, enduring, and
                    deeply connected to their surroundings.
                  </p>

                  <div class="flex flex-col gap-2 mt-auto">
                    <div class="flex items-center gap-4 text-[var(--grey)]">
                      <div class="w-1 h-1 bg-[var(--grey)]"></div>
                      <p class="text-sm">Concept Design</p>
                    </div>
                    <div class="flex items-center gap-4 text-[var(--grey)]">
                      <div class="w-1 h-1 bg-[var(--grey)]"></div>
                      <p class="text-sm">Architectural Planning</p>
                    </div>
                    <div class="flex items-center gap-4 text-[var(--grey)]">
                      <div class="w-1 h-1 bg-[var(--grey)]"></div>
                      <p class="text-sm">3D Visualization & Modeling</p>
                    </div>
                    <div class="flex items-center gap-4 text-[var(--grey)]">
                      <div class="w-1 h-1 bg-[var(--grey)]"></div>
                      <p class="text-sm">Construction Documentation</p>
                    </div>
                  </div>
                </div>
                <div class="services-image-wrapper ml-auto">
                  <img
                    src="../../assets/images/bg-4.webp"
                    alt="architecture"
                    class="services-animated-grid-image object-cover"
                  />
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>

      <div class="h-px my-5 bg-[rgb(232,232,232)]"></div>

      <div class="pt-3">
        <div class="flex flex-col gap-2">
          <div
            class="flex justify-between cursor-pointer"
            @click="isOpen2 = !isOpen2"
          >
            <div class="flex items-center gap-2">
              <span class="text-[var(--grey)] font-normal text-sm">02</span>
              <h1 class="text-xl">Interior Design</h1>
            </div>

            <span class="text-xl font-light">
              {{ isOpen2 ? "−" : "+" }}
            </span>
          </div>

          <Transition name="expand">
            <div v-show="isOpen2" class="pt-3">
              <div class="flex gap-10">
                <div class="flex flex-col services-content-text">
                  <p class="satoshi-font text-[0.87rem] leading-relaxed">
                    Beyond surface-level styling, we craft interiors that feel
                    as good as they look.
                  </p>

                  <div class="flex flex-col gap-2 mt-auto">
                    <div class="flex items-center gap-4 text-[var(--grey)]">
                      <div class="w-1 h-1 bg-[var(--grey)]"></div>
                      <p class="text-sm">Spatial Identity</p>
                    </div>
                    <div class="flex items-center gap-4 text-[var(--grey)]">
                      <div class="w-1 h-1 bg-[var(--grey)]"></div>
                      <p class="text-sm">Material & Finish Selection</p>
                    </div>
                    <div class="flex items-center gap-4 text-[var(--grey)]">
                      <div class="w-1 h-1 bg-[var(--grey)]"></div>
                      <p class="text-sm">Furniture & Lighting Design</p>
                    </div>
                    <div class="flex items-center gap-4 text-[var(--grey)]">
                      <div class="w-1 h-1 bg-[var(--grey)]"></div>
                      <p class="text-sm">Detail Development</p>
                    </div>
                  </div>
                </div>
                <div class="services-image-wrapper ml-auto">
                  <img
                    src="../../assets/images/bg-2.webp"
                    alt="interior design"
                    class="services-animated-grid-image object-cover"
                  />
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>

      <div class="h-px my-5 bg-[rgb(232,232,232)]"></div>

      <div class="pt-3">
        <div class="flex flex-col gap-2">
          <div
            class="flex justify-between cursor-pointer"
            @click="isOpen3 = !isOpen3"
          >
            <div class="flex items-center gap-2">
              <span class="text-[var(--grey)] font-normal text-sm">03</span>
              <h1 class="text-xl">Layout Planning</h1>
            </div>

            <span class="text-xl font-light">
              {{ isOpen3 ? "−" : "+" }}
            </span>
          </div>

          <Transition name="expand">
            <div v-show="isOpen3" class="pt-3">
              <div class="flex gap-10">
                <div class="flex flex-col services-content-text">
                  <p class="satoshi-font text-[0.87rem] leading-relaxed">
                    We organize environments around people, movement, and use,
                    creating clarity, comfort, and adaptability.
                  </p>

                  <div class="flex flex-col gap-2 mt-auto">
                    <div class="flex items-center gap-4 text-[var(--grey)]">
                      <div class="w-1 h-1 bg-[var(--grey)]"></div>
                      <p class="text-sm">Functional Zoning</p>
                    </div>
                    <div class="flex items-center gap-4 text-[var(--grey)]">
                      <div class="w-1 h-1 bg-[var(--grey)]"></div>
                      <p class="text-sm">Human-Centered Design</p>
                    </div>
                    <div class="flex items-center gap-4 text-[var(--grey)]">
                      <div class="w-1 h-1 bg-[var(--grey)]"></div>
                      <p class="text-sm">Circulation Strategy</p>
                    </div>
                    <div class="flex items-center gap-4 text-[var(--grey)]">
                      <div class="w-1 h-1 bg-[var(--grey)]"></div>
                      <p class="text-sm">Flexibility & Future Use</p>
                    </div>
                  </div>
                </div>
                <div class="services-image-wrapper ml-auto">
                  <img
                    src="../../assets/images/bg-3.webp"
                    alt="interior design"
                    class="services-animated-grid-image object-cover"
                  />
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>

      <div class="h-px my-5 bg-[rgb(232,232,232)]"></div>

      <div class="pt-3 pb-6">
        <div class="flex flex-col gap-2">
          <div
            class="flex justify-between cursor-pointer"
            @click="isOpen4 = !isOpen4"
          >
            <div class="flex items-center gap-2">
              <span class="text-[var(--grey)] font-normal text-sm">04</span>
              <h1 class="text-xl">Project Management</h1>
            </div>

            <span class="text-xl font-light">
              {{ isOpen4 ? "−" : "+" }}
            </span>
          </div>

          <Transition name="expand">
            <div v-show="isOpen4" class="pt-3">
              <div class="flex gap-10">
                <div class="flex flex-col services-content-text">
                  <p class="satoshi-font text-[0.87rem] leading-relaxed">
                    We ensure your vision is delivered on time, on budget, and
                    to the highest standards.
                  </p>

                  <div class="flex flex-col gap-2 mt-auto">
                    <div class="flex items-center gap-4 text-[var(--grey)]">
                      <div class="w-1 h-1 bg-[var(--grey)]"></div>
                      <p class="text-sm">Concept Design</p>
                    </div>
                    <div class="flex items-center gap-4 text-[var(--grey)]">
                      <div class="w-1 h-1 bg-[var(--grey)]"></div>
                      <p class="text-sm">Stakeholder Coordination</p>
                    </div>
                    <div class="flex items-center gap-4 text-[var(--grey)]">
                      <div class="w-1 h-1 bg-[var(--grey)]"></div>
                      <p class="text-sm">Quality Control</p>
                    </div>
                    <div class="flex items-center gap-4 text-[var(--grey)]">
                      <div class="w-1 h-1 bg-[var(--grey)]"></div>
                      <p class="text-sm">Budget & Timeline Tracking</p>
                    </div>
                  </div>
                </div>
                <div class="services-image-wrapper ml-auto">
                  <img
                    src="../../assets/images/bg-1.webp"
                    alt="interior design"
                    class="services-animated-grid-image object-cover "
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
import { initServicesAnimations } from "./animations";

declare global {
  interface Window {
    ScrollTrigger: any;
  }
}

const servicesContainer = ref<HTMLElement | null>(null);

const isOpen1 = ref(false);
const isOpen2 = ref(false);
const isOpen3 = ref(false);
const isOpen4 = ref(true);

let animationController: ReturnType<typeof initServicesAnimations> | null =
  null;

onMounted(() => {
  animationController = initServicesAnimations(servicesContainer, () => {});
});

onUnmounted(() => {
  if (animationController) {
    animationController.cleanup();
  }
});

watch([isOpen1, isOpen2, isOpen3, isOpen4], () => {
  nextTick(() => {
    if (animationController) {
      animationController.animateTextOnOpen();
    }
    setTimeout(() => {
      if (window.ScrollTrigger) {
        window.ScrollTrigger.refresh();
      }
    }, 450);
  });
});
</script>