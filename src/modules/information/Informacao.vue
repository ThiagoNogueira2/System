<template>
  <div class="container1 bg-gray-100">
    <h1
      class="satoshi-font font-bold text-[0.87rem] leading-[110%] text-[#1e1e1e] pt-10"
    >
      BY THE NUMBERS
    </h1>
  </div>

  <div class="info container1 overflow-hidden bg-gray-100">
    <div class="flex gap-8 md:gap-12 lg:gap-20 p-8 md:p-12 lg:p-16 animate-scroll-right">
      <div class="flex flex-col">
        <h1
          class="satoshi-font font-medium text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] leading-[100%] text-[#1e1e1e]"
        >
          316+
        </h1>
        <p
          class="satoshi-font font-medium text-[0.7rem] md:text-[0.8rem] lg:text-[0.87rem] leading-[150%] text-[#808080]"
        >
          projects completed
        </p>
      </div>
      <div class="flex flex-col">
        <h1
          class="satoshi-font font-medium text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] leading-[100%] text-[#1e1e1e]"
        >
          740+
        </h1>
        <p
          class="satoshi-font font-medium text-[0.7rem] md:text-[0.8rem] lg:text-[0.87rem] leading-[150%] text-[#808080]"
        >
          satisfied customers
        </p>
      </div>
      <div class="flex flex-col">
        <h1
          class="satoshi-font font-medium text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] leading-[100%] text-[#1e1e1e]"
        >
          215+
        </h1>
        <p
          class="satoshi-font font-medium text-[0.7rem] md:text-[0.8rem] lg:text-[0.87rem] leading-[150%] text-[#808080]"
        >
          YTD transactions
        </p>
      </div>

      <div class="flex flex-col">
        <h1
          class="satoshi-font font-medium text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] leading-[100%] text-[#1e1e1e]"
        >
          316+
        </h1>
        <p
          class="satoshi-font font-medium text-[0.7rem] md:text-[0.8rem] lg:text-[0.87rem] leading-[150%] text-[#808080]"
        >
          projects completed
        </p>
      </div>
      <div class="flex flex-col">
        <h1
          class="satoshi-font font-medium text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] leading-[100%] text-[#1e1e1e]"
        >
          740+
        </h1>
        <p
          class="satoshi-font font-medium text-[0.7rem] md:text-[0.8rem] lg:text-[0.87rem] leading-[150%] text-[#808080]"
        >
          satisfied customers
        </p>
      </div>
      <div class="flex flex-col">
        <h1
          class="satoshi-font font-medium text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] leading-[100%] text-[#1e1e1e]"
        >
          215+
        </h1>
        <p
          class="satoshi-font font-medium text-[0.7rem] md:text-[0.8rem] lg:text-[0.87rem] leading-[150%] text-[#808080]"
        >
          YTD transactions
        </p>
      </div>
    </div>
  </div>

  <div class="container1 bg-gray-100 pb-10">
    <h1
      class="satoshi-font flex justify-end font-bold text-[0.87rem] leading-[110%] text-[#1e1e1e]"
    >
      AS FEATURED IN
    </h1>
  </div>

  <div class="container1 overflow-hidden pb-20 md:pb-32 lg:pb-40 bg-gray-100">
    <div class="flex justify-end gap-8 md:gap-16 lg:gap-30 animate-scroll-left">
      <img src="../../assets/images/info1.svg" alt="logo-1" class="w-12 md:w-20 lg:w-auto" />
      <img src="../../assets/images/info2.svg" alt="logo-2" class="w-12 md:w-20 lg:w-auto" />
      <img src="../../assets/images/info3.svg" alt="logo-3" class="w-12 md:w-20 lg:w-auto" />
      <img src="../../assets/images/info1.svg" alt="logo-1" class="w-12 md:w-20 lg:w-auto" />
      <img src="../../assets/images/info2.svg" alt="logo-2" class="w-12 md:w-20 lg:w-auto" />
      <img src="../../assets/images/info3.svg" alt="logo-3" class="w-12 md:w-20 lg:w-auto" />
    </div>
  </div>
</template>
    
    <style scoped>
@keyframes scroll-right {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes scroll-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(50%);
  }
}

.animate-scroll-right {
  animation: scroll-right 8s linear infinite;
}

.animate-scroll-left {
  animation: scroll-left 8s linear infinite;
}

.animate-scroll-right:hover,
.animate-scroll-left:hover {
  animation-play-state: paused;
}
</style>