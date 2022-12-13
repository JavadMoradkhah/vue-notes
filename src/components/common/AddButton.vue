<script setup>
import AddIcon from '../icon/AddIcon.vue';
</script>

<template>
  <router-link
    class="fixed bottom-6 right-6 p-2 bg-primary text-white rounded-full"
    to="/create-note"
  >
    <AddIcon width="36px" height="36px" />
  </router-link>
</template>
