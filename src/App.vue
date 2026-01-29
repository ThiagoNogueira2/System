<template>
   <!-- <PreLoader /> -->
   <Home />
   <About />
   <Services />
   <Projects />
</template>

<script setup lang="ts">
    import PreLoader from './components/PreLoader.vue'
    import Home from './modules/Home/Home.vue'
    import About from './modules/About/Sobre.vue'
    import Services from './modules/Services/Servico.vue'
    import Projects from './modules/Project/Projeto.vue'
    import { useSmoothScroll } from './composables/useSmoothScroll'

    useSmoothScroll()
</script>