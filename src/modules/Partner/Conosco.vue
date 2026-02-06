<template>
  <div class="container1">
    <div class="flex flex-col lg:flex-row justify-between items-center lg:items-start pt-10 lg:pt-40 gap-8 lg:gap-24 lg:px-0">
      <div class="flex-1 w-full lg:w-auto">
        <h1 class="text-4xl md:text-5xl lg:text-7xl font-bold pb-6 text-center lg:text-left" style="color: #1e1e1e">
          PARTNER WITH US
        </h1>
        <p
          class="text-[#666] leading-[150%] font-medium  leading-[170%] mb-12 text-center lg:text-left"
          style="font-size: 0.87rem"
        >
          If you're someone who's looking to bring a space to life, share a few
          details to help me reach out to you so we can discuss how to bring your
          vision to life.
        </p>

        <div class="flex flex-col gap-2">
          <label
            for="Your full Name"
            class="satoshi-font  font-bold text-[0.9rem] text-[#777] "
            >Your full Name</label
          >
          <input
            type="text"
            id="Your full Name"
            class="w-full  bg-[#f7f7f7] py-2 text-sm leading-[1.42857] "
          />

          <label
            for="Your Email Address"
            class="satoshi-font font-bold text-[0.9rem] text-[#777]"
            >Your Email Address</label
          >
          <input
            type="email"
            id="Your Email Address"
            class="w-full  bg-[#f7f7f7] py-2 text-sm leading-[1.42857]"
          />

          <label
            for="A little bit about your project"
            class="satoshi-font font-bold text-[0.9rem] text-[#777]"
            >A little bit about your project</label
          >
          <textarea
            id="A little bit about your project"
            rows="4"
            class="w-full  bg-[#f7f7f7] py-1 text-sm leading-[1.00000]"
          ></textarea>
        </div>

        <div class="">
          <button class="w-full  mt-2 py-2 text-white cursor-pointer" style="background: #1e1e1e;">SUBMIT</button>
        </div>
      </div>

      <div class="flex-1 w-full lg:w-auto flex justify-center lg:justify-end">
        <img 
          src="/src/assets/images/partner.jpeg" 
          alt="Partner" 
          class="w-full h-auto object-cover rounded-xl lg:rounded-none shadow-lg lg:shadow-none mt-0 lg:-mt-[320px]"
        />
      </div>
    </div>
  </div>
</template>