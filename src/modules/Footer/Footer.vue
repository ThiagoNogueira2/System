<template>
  <div class="pt-20 flex flex-col md:flex-row md:justify-between gap-0 md:gap-8">
    <div class="container1 border-b border-gray-200 md:border-b-0 pb-5 md:pb-0">
      <button @click="toggle(1)" class="w-full flex justify-between items-center mb-2 md:cursor-default">
        <h1 class="satoshi-font font-medium text-[1.25rem] leading-[120%] ">Quick Links</h1>
        <span class="text-2xl md:hidden">{{ open === 1 ? '−' : '+' }}</span>
      </button>
      <div :class="open === 1 ? 'block' : 'hidden md:block'">
        <p><a href="#" class="footer-link">About</a></p>
        <p><a href="#" class="footer-link">Services</a></p>
        <p><a href="#" class="footer-link">Projects</a></p>
        <p><a href="#" class="footer-link">Gallery</a></p>
        <p><a href="#" class="footer-link">Reviews</a></p>
      </div>
    </div>

    <div class="container1 border-b border-gray-200 md:border-b-0 py-5 md:py-0">
      <button @click="toggle(2)" class="w-full flex justify-between items-center mb-2 md:cursor-default">
        <h1 class="satoshi-font font-medium text-[1.25rem] leading-[120%]">Resources</h1>
        <span class="text-2xl md:hidden">{{ open === 2 ? '−' : '+' }}</span>
      </button>
      <div :class="open === 2 ? 'block' : 'hidden md:block'">
        <p><a href="#" class="footer-link">Style guide</a></p>
        <p><a href="#" class="footer-link">Licenses</a></p>
        <p><a href="#" class="footer-link">Changelog</a></p>
      </div>
    </div>

    <div class="container1 border-b border-gray-200 md:border-b-0 py-5 md:py-0">
      <button @click="toggle(3)" class="w-full flex justify-between items-center mb-2 md:cursor-default">
        <h1 class="satoshi-font font-medium text-[1.25rem] leading-[120%]">Contact</h1>
        <span class="text-2xl md:hidden">{{ open === 3 ? '−' : '+' }}</span>
      </button>
      <div :class="open === 3 ? 'block' : 'hidden md:block'">
        <p><a href="#" class="footer-link">hi@woodland.com</a></p>
        <p><a href="#" class="footer-link">Twitter</a></p>
        <p><a href="#" class="footer-link">Linkedin</a></p>
      </div>
    </div>

    <div class="container1 flex-1 min-w-[300px] max-w-[750px] pt-5 md:pt-0">
      <h1 class="satoshi-font font-medium text-[1.25rem] leading-[120%] mb-2">Newsletter</h1>
      <label for="Your email address" class="footer-link">Your email address</label>
      <input type="email" id="Your email address" class="w-full bg-[#f7f7f7] py-2 text-sm leading-[1.42857]" />
      <button class="w-full mt-2 py-2 text-white cursor-pointer text-sm leading-[1.42857] bg-[#1e1e1e]">
        SUBMIT
      </button>
    </div>
  </div>

  <div class="controle container1 flex flex-col md:flex-row justify-between gap-4 md:gap-0">
    <div class="privacy flex gap-12 pt-6 justify-center md:justify-start">
      <p class="footer-link">Privacy Policy</p>
      <p class="footer-link">Cookie Policy</p>
    </div>
    <div class="text-center md:text-left">
      <p class="footer-link">Created by Zoya Aqib</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const open = ref(null);
const toggle = (n) => open.value = open.value === n ? null : n;
</script>

<style scoped>
.footer-link {
  display: block;
  color: var(--grey);
  font-size: 0.875rem;
  text-transform: none;
  margin-bottom: 5px;
  transition: color 0.3s cubic-bezier(0.785, 0.135, 0.15, 0.86);
}

.footer-link:hover {
  color: var(--black);
}
</style>