<script setup>
import { defineProps } from 'vue';

const props = defineProps(['note']);
</script>

<template>
  <li class="p-4 bg-white rounded-md shadow-sm">
    <box-icon name="rocket"></box-icon>
    <h2 class="text-gray-800 text-lg font-bold line-clamp-1">{{ props.note.title }}</h2>
    <p class="mt-2 text-gray-600 text-sm line-clamp-4">{{ props.note.body }}</p>
  </li>
</template>
