<script setup>
import { defineProps } from 'vue';

const props = defineProps(['width', 'height']);
</script>

<template>
  <svg :width="props.width || '1em'" :height="props.height || '1em'" viewBox="0 0 20 20">
    <path
      fill="currentColor"
      d="M10 3.5a6.5 6.5 0 1 1 0 13v-13ZM10 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16Z"
    ></path>
  </svg>
</template>
