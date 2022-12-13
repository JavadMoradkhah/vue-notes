<script setup>
import { defineProps } from 'vue';

const props = defineProps(['width', 'height']);
</script>

<template>
  <svg :width="props.width || '1em'" :height="props.height || '1em'" viewBox="0 0 24 24">
    <path fill="currentColor" d="M6 21h12V7H6v14zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
  </svg>
</template>
