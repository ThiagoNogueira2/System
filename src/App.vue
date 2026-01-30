<template>
   <!-- <PreLoader /> -->
   <Home />
   <About />
   <Services />
   <Projects />
   <Information />
   <Gallery />
</template>

<script setup lang="ts">
    import PreLoader from './components/PreLoader.vue'
    import Home from './modules/Home/Home.vue'
    import About from './modules/About/Sobre.vue'
    import Services from './modules/Services/Servico.vue'
    import Information from './modules/information/Informacao.vue'
    import Gallery from './modules/Gallery/Galeria.vue'
    import Projects from './modules/Project/Projeto.vue'
    import { useSmoothScroll } from './composables/useSmoothScroll'

    useSmoothScroll()
</script>