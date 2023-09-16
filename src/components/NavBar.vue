<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { mdiMenu, mdiBellOutline, mdiClose } from "@mdi/js";
import SvgIcon from "@jamescoyle/vue-icon";
import { ref } from 'vue';
import type { Navigation } from '../types';
let hash = ref<string>('#');
const setPage = () => {
  setTimeout(() => {
    if (!window.location.hash) {
      hash.value = '#';
    } else {
      hash.value = window.location.hash;
    }
  }, 100)
}
const opened = ref<boolean>(false);
const navigation: Navigation[] = [
  { name: 'Home', href: '#' },
  {
    name: 'About me',
    href: '#me',
  },
  {
    name: 'Contact',
    href: '#contact',
  }
]
</script>
<template>
    <Disclosure as="nav" class="bg-gray-500 border bg-opacity-25 backdrop-blur-sm border-gray-50 border-opacity-30 shadow-md shadow-slate-950 w-11/12 rounded-full mx-auto mt-2" v-slot="{ open }" :class="opened ? 'rounded-none absolute w-full top-0 right-0 left-0 mt-0' : 'rounded-full'" >
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <img class="h-8 w-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.href == hash ? 'text-green-500 border border-green-500 hover:cursor-default font-bold' : 'text-gray-300 hover:border hover:border-slate-500 hover:text-slate', 'rounded-md px-3 py-2 text-sm font-medium']" :aria-current="item.href == hash ? 'page' : undefined" @click="setPage">{{ item.name }}</a>
              </div>
            </div>
          </div>
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <h1 class="block md:hidden">Iamdayy</h1>
            </div>
          </div>
          <div class="hidden md:block">
            <div class="ml-4 flex items-center md:ml-6">
              <button type="button" class="relative rounded-full p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span class="absolute -inset-1.5" />
                <span class="sr-only">View notifications</span>
                <SvgIcon type="mdi" class="h-6 w-6" aria-hidden="true" :path="mdiBellOutline" />
              </button>
            </div>
          </div>
          <div class="-mr-2 flex md:hidden">
            <!-- Mobile menu button -->
            <DisclosureButton @click="opened = !opened" class="relative inline-flex items-center justify-center rounded-full p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-1 focus:ring-white">
              <span class="absolute -inset-0.5" />
              <span class="sr-only">Open main menu</span>
              
              <SvgIcon type="mdi" :path="mdiMenu" v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <SvgIcon type="mdi" :path="mdiClose" v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel class="md:hidden">
        <div class="space-y-1 px-2 pb-3 pt-2 sm:px-3">
          <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href" :class="[item.href == hash ? 'text-green-500 border border-green-500 hover:cursor-default font-bold' : 'text-gray-300 hover:border hover:border-slate-500 hover:text-slate', 'block rounded-md px-3 py-2 text-base font-medium']" :aria-current="item.href == hash ? 'page' : undefined">{{ item.name }}</DisclosureButton>
        </div>
        <div class="border-t border-gray-700 pb-3 pt-4">
          <div class="flex items-center px-5">
            <button type="button" class="relative ml-auto flex-shrink-0 rounded-full p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-1">
              <span class="absolute -inset-1.5" />
              <span class="sr-only">View notifications</span>
              <BellIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
</template>
<style scoped></style>