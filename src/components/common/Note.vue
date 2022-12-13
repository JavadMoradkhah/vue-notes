<script setup>
import { defineProps } from 'vue';

const props = defineProps(['note']);
</script>

<template>
  <li class="p-4 bg-white rounded-md shadow-sm">
    <box-icon name="rocket"></box-icon>
    <h2 class="text-gray-800 text-lg font-bold">{{ props.note.title }}</h2>
    <p class="text-gray-600 text-sm">{{ props.note.body }}</p>
  </li>
</template>
