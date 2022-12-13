<script setup>
import { defineProps } from 'vue';

const props = defineProps(['text']);
</script>

<template>
  <div class="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center">
    <p class="text-center">{{ props.text }}</p>
  </div>
</template>
