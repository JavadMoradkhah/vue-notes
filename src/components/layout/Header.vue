<script setup>
import Logo from './Logo.vue';
import ThemeDropdown from '../common/ThemeDropdown.vue';
</script>

<template>
  <header class="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-sm z-50">
    <div class="layout-container px-4 py-2 flex justify-between items-center">
      <Logo />
      <ThemeDropdown />
    </div>
  </header>
</template>
