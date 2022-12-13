<script setup>
import { defineProps } from 'vue';

const props = defineProps(['width', 'height']);
</script>

<template>
  <svg :width="props.width || '1em'" :height="props.height || '1em'" viewBox="0 0 24 24">
    <path fill="currentColor" d="M11 19v-6H5v-2h6V5h2v6h6v2h-6v6Z"></path>
  </svg>
</template>
