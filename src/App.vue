<script setup lang="ts">
import Card from './components/Card.vue';
import Footer from './components/Footer.vue';
import Jumbotron from './components/Jumbotron.vue';
import NavBar from './components/NavBar.vue';
import Aos from "aos";
import Contact from "./components/Contact.vue";
import Timeline from "./components/Timeline.vue";
import Learning from "./assets/learning.png";
import Projects from "./assets/projects.png";
import { ref } from 'vue';
import type { Tab } from './types';
import { academics, projects } from './database';
Aos.init();

const tabs: Tab[] = [
  {
    title: "academics",
    subtitle: "This my academic histories",
    background: Learning,
    component: Timeline,
    componentProp: {
      data: academics.reverse()
    }
  },
  {
    title: "projects",
    subtitle: "This is my projects",
    background: Projects,
    component: Timeline,
    componentProp: {
      data: projects.reverse()
    }
  }
];
const tabVal = ref<string>("academics");
</script>

<template>
  <div class="min-h-full snap-start">
    <div class="grid gap-2 background shadow-md overflow-hidden">
      <NavBar />
      <Jumbotron />
    </div>
  </div>
  <main class="bg-indigo-500 dark:bg-slate-600" id="me">
    <div class="w-full py-6 sm:px-6 lg:px-8 snap-start min-h-screen">

      <div class="sm:hidden p-4">
        <select v-model="tabVal"
          class="bg-gray-50 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white">
          <option v-for="tab, i in tabs" :key="i" :value="tab.title" :label="tab.title"></option>
        </select>
      </div>
      <ul
        class="hidden overflow-hidden shadow-md text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-full sm:flex dark:divide-gray-700 dark:text-gray-400">
        <li class="w-full" v-for="tab, i in tabs" :key="i">
          <button @click="tabVal = tab.title"
            :class="`inline-block w-full p-4 text-gray-900 bg-gray-100 active focus:outline-none dark:bg-gray-700 dark:text-white ${tab.title == tabVal ? 'border-b border-slate-400' : ''}`"
            aria-current="page">{{ tab.title }}</button>
        </li>
      </ul>

      <div data-aos="fade-zoom-in" data-aos-duration="1000" data-aos-easing="ease-in-sine"
        data-aos-offset="200" data-aos-delay="600">
        <Card v-for="tab, i in tabs" :key="i" :title="tab.title" :sub-title="tab.subtitle" :background="tab.background" :text="tab.text"
          :is-active="tabVal == tab.title">
          <component :is="tab.component" v-bind="tab.componentProp" v-if="tab.component"></component>
        </Card>
      </div>
    </div>
    <div
      class="w-full py-6 sm:px-6 lg:px-8 min-h-screen snap-center  bg-[url('./assets/WorldMap.svg')] bg-opacity-20 bg-cover bg-center">
      <Contact />
    </div>
  </main>
<Footer  id="contact" /></template>

<style scoped></style>
