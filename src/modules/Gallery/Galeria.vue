<template>
    <div class="-mb-[200px] pt-0 pb-30 lg:pt-30">
        <div class="sticky top-[30vh] -z-10 flex flex-col justify-start items-center font-bold">
            <p class="text-sm tracking-normal" style="color: #1e1e1e;">
                AS FEATURED IN
            </p>
            <h1 class="text-[10vw] font-bold" style="color: #1e1e1e;">
                GALLERY
            </h1>
        </div>

   
        <div ref="galleryContainer" class="mx-auto mt-20 mb-32 px-4 lg:px-0 max-lg:max-w-[85vw] lg:max-w-[60vw]">
            <div class="relative w-full max-lg:pb-[90%] lg:pb-[90%]">
                
             
                <div 
                    class="absolute z-[15] max-lg:w-[42%] lg:w-[33.33%] gallery-item" 
                    :style="{
                        left: '3.78%',
                        top: '-20.57%'
                    }"
                >
                    <img 
                        src="../../assets/images/galeria1.webp" 
                        alt="" 
                        class="w-full h-auto"
                    />
                </div>

            
                <div 
                    class="absolute z-[7] max-lg:w-[44%] max-lg:top-[55%] lg:w-[33.33%] lg:top-[30.29%] gallery-item" 
                    :style="{
                        right: '68.22%'
                    }"
                >
                    <img 
                        src="../../assets/images/galeria2.webp" 
                        alt="" 
                        class="w-full h-auto"
                    />
                </div>

            
                <div 
                    class="absolute z-[10] max-lg:w-[45%] lg:w-[33.33%] gallery-item" 
                    :style="{
                        left: '63.67%',
                        top: '-43.43%'
                    }"
                >
                    <img 
                        src="../../assets/images/galeria3.webp" 
                        alt="" 
                        class="w-full h-auto"
                    />
                </div>

                
                <div 
                    class="absolute z-[8] max-lg:w-[45%] max-lg:top-[52%] lg:w-[33.33%] lg:top-[30.43%] gallery-item" 
                    :style="{
                        left: '67.98%'
                    }"
                >
                    <img 
                        src="../../assets/images/galeria4.webp" 
                        alt="" 
                        class="w-full h-auto"
                    />
                </div>

          
                <div 
                    class="absolute z-[6] max-lg:w-[44%] max-lg:left-[33.33%] max-md:w-[55%] max-md:left-[20%] lg:w-[33.33%] lg:left-[33.33%] gallery-item" 
                    :style="{
                        top: '-28.57%'
                    }"
                >
                    <img 
                        src="../../assets/images/galeria5.webp" 
                        alt="" 
                        class="w-full h-auto"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const galleryContainer = ref<HTMLElement | null>(null);

onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });

    if (galleryContainer.value) {
        observer.observe(galleryContainer.value);
    }
});
</script>

<style scoped>
.gallery-item {
    transform: scale(0.5);
    opacity: 0;
}

.visible .gallery-item {
    animation: scaleUp 0.8s ease-out forwards;
}

@keyframes scaleUp {
    to {
        transform: scale(1);
        opacity: 1;
    }
}
</style>