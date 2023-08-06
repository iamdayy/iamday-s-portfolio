<script setup lang="ts">
import NavBar from './components/NavBar.vue';
</script>

<template>
  <div class="min-h-full">
    <div class="grid gap-2 p-2 background shadow-md">
      <NavBar />
      <header class="shadow">
        <div class="border border-slate-500 rounded-2xl mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div class="flex flex-wrap justify-around">
            <img src="./assets/person.png" alt="i'am" class="max-w-md" />
            <div class="bg-gray-600 bg-opacity-25 backdrop-blur-sm shadow-slate-900 shadow-inner rounded-xl max-w-2xl break-words p-3">
              <h1 class="font-bold text-3xl md:text-5xl">Hello</h1>
              <h2 class="text-5xl md:text-7xl font-semibold">I'am Dayyan Sauqy</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, nostrum? Recusandae optio ipsa, possimus et quidem amet repudiandae voluptates quos, eligendi adipisci blanditiis earum consectetur quia nobis! Dicta, voluptate voluptas.</p>
            </div>
          </div>
        </div>
      </header>
    </div>
    <main>
      <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <!-- Your content -->
      </div>
    </main>
  </div>
</template>

<style scoped>
</style>
