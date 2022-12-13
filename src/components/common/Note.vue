<script setup>
import { defineProps } from 'vue';

const props = defineProps(['note']);
</script>

<template>
  <li class="p-4 bg-white rounded-md shadow-sm">
    <box-icon name="rocket"></box-icon>
    <h2 class="text-gray-800 text-lg font-bold line-clamp-1">{{ props.note.title }}</h2>
    <p class="min-h-[100px] mt-2 text-gray-600 text-sm line-clamp-5">{{ props.note.body }}</p>
  </li>
</template>
