<template>
    <div class="container1">
        <h1 class="satoshi-font font-bold text-[0.75rem] sm:text-[0.87rem] leading-[110%] text-[#1e1e1e]">BY THE NUMBERS</h1>
    </div>
    
    <!-- Carrossel dos NÚMEROS indo para DIREITA -->
    <div class="info container1 flex gap-8 sm:gap-12 md:gap-16 lg:gap-20 p-8 sm:p-12 md:p-16 animate-scroll-right overflow-hidden">
        <div class="flex flex-col min-w-[120px] sm:min-w-[150px]">
            <h1 class="satoshi-font font-medium text-[1.75rem] sm:text-[2rem] md:text-[2.5rem] leading-[100%] text-[#1e1e1e]">316+</h1>
            <p class="satoshi-font font-medium text-[0.75rem] sm:text-[0.87rem] leading-[150%] text-[#808080]">projects completed</p>
        </div>
        <div class="flex flex-col min-w-[120px] sm:min-w-[150px]">
            <h1 class="satoshi-font font-medium text-[1.75rem] sm:text-[2rem] md:text-[2.5rem] leading-[100%] text-[#1e1e1e]">740+</h1>
            <p class="satoshi-font font-medium text-[0.75rem] sm:text-[0.87rem] leading-[150%] text-[#808080]">satisfied customers</p>
        </div>
        <div class="flex flex-col min-w-[120px] sm:min-w-[150px]">
            <h1 class="satoshi-font font-medium text-[1.75rem] sm:text-[2rem] md:text-[2.5rem] leading-[100%] text-[#1e1e1e]">215+</h1>
            <p class="satoshi-font font-medium text-[0.75rem] sm:text-[0.87rem] leading-[150%] text-[#808080]">YTD transactions</p>
        </div>
    </div>
    
    <div class="container1">
        <h1 class="satoshi-font flex justify-end font-bold text-[0.75rem] sm:text-[0.87rem] leading-[110%] text-[#1e1e1e]">AS FEATURED IN</h1>
    </div>
    
    <!-- Carrossel das IMAGENS indo para ESQUERDA -->
    <div class="container1 flex justify-end gap-8 sm:gap-12 md:gap-16 lg:gap-20 pb-20 sm:pb-30 md:pb-40 animate-scroll-left overflow-hidden">
        <img src="../../assets/images/info1.svg" alt="logo-1" class="h-8 sm:h-10 md:h-12 w-auto">
        <img src="../../assets/images/info2.svg" alt="logo-2" class="h-8 sm:h-10 md:h-12 w-auto">
        <img src="../../assets/images/info3.svg" alt="logo-3" class="h-8 sm:h-10 md:h-12 w-auto">
    </div>
</template>

<style scoped>
/* Animação para DIREITA (números) */
@keyframes scroll-right {
    0% {
        transform: translateX(0);
    }
    50% {
        transform: translateX(20%);
    }
    100% {
        transform: translateX(0);
    }
}

/* Animação para ESQUERDA (imagens) */
@keyframes scroll-left {
    0% {
        transform: translateX(0);
    }
    50% {
        transform: translateX(-20%);
    }
    100% {
        transform: translateX(0);
    }
}

.animate-scroll-right {
    animation: scroll-right 8s ease-in-out infinite;
}

.animate-scroll-left {
    animation: scroll-left 8s ease-in-out infinite;
}

/* Pause ao hover */
.animate-scroll-right:hover,
.animate-scroll-left:hover {
    animation-play-state: paused;
}

/* Ajuste de animação em mobile */
@media (max-width: 640px) {
    @keyframes scroll-right {
        0% {
            transform: translateX(0);
        }
        50% {
            transform: translateX(10%);
        }
        100% {
            transform: translateX(0);
        }
    }
    
    @keyframes scroll-left {
        0% {
            transform: translateX(0);
        }
        50% {
            transform: translateX(-10%);
        }
        100% {
            transform: translateX(0);
        }
    }
}
</style>