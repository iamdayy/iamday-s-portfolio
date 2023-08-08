<script setup lang="ts">
import Person from "../assets/person.png";
import WEB from "../assets/web.png";
import Android from "../assets/android.png";
import IOS from "../assets/apple.png";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JS from "../assets/js.png";
import Vue from "../assets/vue.svg";
import Tailwind from "../assets/tailwind.png";
import Flutter from "../assets/flutter.png";
import Ionic from "../assets/ionic.png";
</script>
<template>
  <header class="shadow mx-2">
    <div
      class="border border-slate-500 rounded-2xl mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8"
    >
      <div class="flex flex-wrap justify-around">
        <img :src="Person" alt="i'am" class="w-64 md:w-profile" />
        <div>
          <div
            class="bg-gray-600 bg-opacity-25 backdrop-blur-sm shadow-slate-900 shadow-inner rounded-xl max-w-2xl break-words p-3"
          >
            <h1 class="font-bold text-2xl md:text-4xl">Hello</h1>
            <h2 class="text-4xl md:text-5xl font-semibold">
              I'am <span class="typed"></span>
            </h2>
            <p class="p-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit consequatur totam eaque inventore optio! Aliquam
              laborum debitis eius delectus expedita? Nam aperiam nulla
              veritatis eum dolorem, quis ipsum obcaecati suscipit.
            </p>
          </div>
          <div class="flex justify-center p-4">
            <div class="grid grid-cols-3 gap-8">
              <img :src="WEB" alt="html" class="w-16" />
              <img :src="Android" alt="html" class="w-16" />
              <img :src="IOS" alt="html" class="w-16" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div
    class="logo-slider w-full bg-indigo-400 bg-opacity-20 ease-in duration-300 backdrop-blur-sm hover:backdrop-filter-none shadow-inner shadow-slate-950 mx-0"
  >
    <div v-for="i in 3" :key="i">
      <img :src="HTML" alt="html" class="w-16" />
      <img :src="CSS" alt="html" class="w-16" />
      <img :src="JS" alt="html" class="w-16" />
      <img :src="Vue" alt="html" class="w-16" />
      <img :src="Tailwind" alt="html" class="w-16" />
      <img :src="Flutter" alt="html" class="w-16" />
      <img :src="Ionic" alt="html" class="w-16" />
    </div>
  </div>
</template>
<style scoped>
.logo-slider {
  --image-size: 80px;
  padding: 20px;
  overflow: hidden;
  width: 100%;
  margin: 0 auto;
  /* position: relative; */
  display: flex;
}
.logo-slider:hover div {
  animation-play-state: paused;
}
.logo-slider div {
  display: flex;
  position: relative;
  animation: marquee 10s linear infinite;
  justify-content: space-around;
}
.logo-slider img {
  display: block;
  min-width: var(--image-size);
  height: var(--image-size);
  margin: 0 1vw;
}

.logo-slider img,
img {
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  -ms-transition: all 1s ease;
  transition: all 1s ease;
}
.logo-slider img:hover,
img:hover {
  transform: scale(1.3);
  -webkit-transform: scale(1.3);
  -moz-transform: scale(1.3);
  -o-transform: scale(1.3);
  -ms-transform: scale(1.3);
  transform: scale(1.3);
  cursor: pointer;
}
.logo-slider:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}
@keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
<style scoped lang="scss">
/* Google Fonts */
@import url(https://fonts.googleapis.com/css?family=Anonymous+Pro);

@import "typed";
.typed {
  font-family: "Anonymous Pro", monospace;
  letter-spacing: 0.15em;
  @include typed(
    "Dayyan Sauqy",
    1,
    (
      caret-width: 2px,
      caret-space: 2px,
    )
  );
}
</style>
