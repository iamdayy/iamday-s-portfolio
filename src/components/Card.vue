<script setup lang="ts">
defineProps({
  title: String,
  subTitle: String,
  text: String,
  isActive: Boolean,
  background: String,
})
</script>
<template>
    <div class="mt-2 h-screen flex flex-row w-full mx-auto" v-show="isActive">
      <!-- Card body -->
      <div :class="`relative bg-gradient-to-t  md:bg-gradient-to-r from-gray-400 from-35% md:from-45%  overflow-scroll hidden-scroll shadow-lg bg-cover bg-bottom rounded-md mx-4 md:mx-0 my-0 md:my-4 w-full h-5/6`">
        <img class="absolute object-cover right-0 h-full overflow-hidden -z-1" :src="background" alt="" />
        <!-- Card body - outer wrapper -->
        <div class="h-full mx-auto px-6 md:px-0 md:-mr-6">
          <!-- Card body - inner wrapper -->
          <div class="bg-gray-400 md:bg-transparent lg:h-full rounded-xl p-6 mt-24 md:mt-0 md:mb-0 flex flex-wrap items-start z-10">
            <!-- Card title and subtitle -->
            <div class="w-full lg:w-3/4 text-center md:text-left">
              <h3 class="text-4xl font-bold">{{ title }}</h3>
              <p class="mb-0 mt-3 text-grey-dark text-lg italic font-semibold">{{ subTitle }}</p>
              <hr class="w-3/4 md:w-1/4 mx-auto md:ml-0 mt-4  border">
            </div>
            <!-- Card description -->
            <div class="w-full lg:w-4/5 lg:px-3 p-2">
              <slot />
              <p class="text-md mt-4 text-justify md:text-left text-sm" v-if="text">{{ text }}
              </p>
            </div>
            <!-- ./Card description -->
          </div>
          <!-- ./Card body - inner wrapper -->
        </div>
        <!-- ./Card body - outer wrapper -->
      </div>
      <!-- ./Card body -->
    </div>
<!-- ./Container -->
</template>
<style scoped>
.-z-1 {
  z-index: -1;
}
</style>