<script setup lang='ts'>
import { PropType } from 'vue';
import type { Timeline } from '../types';

defineProps({
    data: Array as PropType<Timeline[]>
})
</script>
<template>
    <ol class="relative w-full border-l border-gray-200 dark:border-gray-200">
        <li class="mb-10 ml-4" v-for="item, i in data" :key="i">
            <div class="flex justify-between w-full">
                <div>
                    <div
                        class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-200 dark:bg-gray-300">
                    </div>
                    <time class="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-100">{{ item.date }}</time>
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ item.title }}</h3>
                    <p class="mb-4 text-base font-normal text-gray-800 dark:text-gray-100">{{ item.description }}</p>
                </div>
                <div v-if="item.image">
                    <img :src="item.image" alt="" class="w-32 h-32 object-contain hidden md:flex" />
                </div>
            </div>
        </li>
</ol></template>
<style scoped></style>