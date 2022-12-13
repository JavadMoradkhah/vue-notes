<script setup>
import ThemeIcon from '../icon/ThemeIcon.vue';
import SunIcon from '../icon/SunIcon.vue';
import MoonIcon from '../icon/MoonIcon.vue';

function enableDarkTheme() {
  document.documentElement.classList.add('dark');
}

function disableDarkTheme() {
  document.documentElement.classList.remove('dark');
}
</script>

<template>
  <div class="relative group">
    <button
      class="flex px-3 py-1 items-center text-gray-600 dark:text-white font-semibold border dark:border-gray-600 rounded-md outline-primary dark:outline-gray-300 focus:outline focus:text-primary"
    >
      <ThemeIcon />
      <span class="ml-1">Theme</span>
    </button>
    <div class="absolute top-full left-0 right-0 hidden group-hover:block">
      <ul
        class="bg-white dark:bg-gray-800 rounded-md border dark:border-gray-600 shadow-xl mt-1 overflow-hidden"
      >
        <li
          @click="disableDarkTheme"
          class="flex items-center px-3 py-2 text-sm dark:text-white cursor-pointer hover:bg-gray-100 dark:hover:bg-slate-700"
        >
          <SunIcon />
          <span class="ml-1">Light</span>
        </li>
        <li
          @click="enableDarkTheme"
          class="flex items-center px-3 py-2 text-sm dark:text-white cursor-pointer hover:bg-gray-100 dark:hover:bg-slate-700"
        >
          <MoonIcon />
          <span class="ml-1">Dark</span>
        </li>
      </ul>
    </div>
  </div>
</template>
