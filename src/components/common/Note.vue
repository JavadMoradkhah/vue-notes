<script setup>
import { defineProps } from 'vue';

const props = defineProps(['note']);
</script>

<template>
  <li class="bg-white rounded-md shadow-sm">
    <router-link :to="`/edit-note/${props.note.id}`" class="block p-4">
      <h2 class="text-gray-800 text-lg font-bold line-clamp-1">{{ props.note.title }}</h2>
      <p class="min-h-[100px] mt-2 text-gray-600 text-sm line-clamp-5">{{ props.note.body }}</p>
    </router-link>
  </li>
</template>
