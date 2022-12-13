<script setup>
import { defineProps } from 'vue';
import Note from './Note.vue';

const props = defineProps(['notes']);
</script>

<template>
  <section class="px-4 py-6">
    <div class="layout-container">
      <ul class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <template v-for="note in notes">
          <Note :note="note" />
        </template>
      </ul>
    </div>
  </section>
</template>
