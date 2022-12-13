<script setup>
import { defineProps } from 'vue';
import BackIcon from '../icon/BackIcon.vue';

const props = defineProps(['url']);
</script>

<template>
  <router-link class="flex items-center text-primary" :to="props.url">
    <BackIcon width="1.6rem" height="1.6rem" />
    <span class="font-bold text-lg">Back</span>
  </router-link>
</template>
