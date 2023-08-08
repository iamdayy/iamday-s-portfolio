<script setup lang="ts">
import Card from './components/Card.vue';
import Footer from './components/Footer.vue';
import Jumbotron from './components/Jumbotron.vue';
import NavBar from './components/NavBar.vue';
import Aos from "aos";
import Contact from "./components/Contact.vue";
Aos.init();
</script>

<template>
  <div class="min-h-full snap-start">
    <div class="grid gap-2 background shadow-md overflow-hidden">
      <NavBar />
      <Jumbotron />
    </div>
  </div>
  <main>
    <div class="w-full py-6 sm:px-6 lg:px-8 snap-center h-screen" data-aos="fade-zoom-in" data-aos-duration="1000" data-aos-easing="ease-in-sine" data-aos-offset="200" data-aos-delay="600">
      <Card />
    </div>
    <div class="w-full p-4 h-screen snap-center">
      <Contact />
    </div>
  </main>
  <Footer />
</template>

<style scoped>
</style>
