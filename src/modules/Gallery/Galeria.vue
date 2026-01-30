<template>
    <div class="min-h-screen pt-30">
        <div class="sticky top-[30vh] -z-10 flex flex-col justify-start items-center font-bold">
            <p class="text-sm tracking-normal" style="color: #1e1e1e;">
                AS FEATURED IN
            </p>
            <h1 class="text-[10vw] font-bold" style="color: #1e1e1e;">
                GALLERY
            </h1>
        </div>

        <!-- Container que escala proporcionalmente -->
        <div class="mx-auto mt-20 mb-32 px-4 lg:px-0 max-lg:max-w-[85vw] lg:max-w-[60vw]">
            <div class="relative w-full max-lg:pb-[140%] lg:pb-[140%]">
                
                <!-- Imagem 1 -->
                <div 
                    class="absolute z-[15] max-lg:w-[46%] lg:w-[33.33%]" 
                    :style="{
                        left: '3.78%',
                        top: '-25.57%'
                    }"
                >
                    <img 
                        src="../../assets/images/galeria1.webp" 
                        alt="" 
                        class="w-full h-auto"
                    />
                </div>

                <!-- Imagem 2 -->
                <div 
                    class="absolute z-[3] max-lg:w-[44%] max-lg:top-[10%] lg:w-[33.33%] lg:top-[-4.29%]" 
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

                <!-- Imagem 3 -->
                <div 
                    class="absolute z-[10] max-lg:w-[45%] lg:w-[33.33%]" 
                    :style="{
                        left: '63.67%',
                        top: '-38.43%'
                    }"
                >
                    <img 
                        src="../../assets/images/galeria3.webp" 
                        alt="" 
                        class="w-full h-auto"
                    />
                </div>

                <!-- Imagem 4 -->
                <div 
                    class="absolute z-[4] max-lg:w-[45%] max-lg:top-[8%] lg:w-[33.33%] lg:top-[-1.43%]" 
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

                <!-- Imagem 5 -->
                <div 
                    class="absolute z-[6] max-lg:w-[44%] lg:w-[33.33%]" 
                    :style="{
                        left: '33.33%',
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