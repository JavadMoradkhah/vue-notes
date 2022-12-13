<script setup>
import { ref } from 'vue';
import Note from './Note.vue';

const notesBody =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam non corporis assumenda fugiat soluta debitis molestiae autem earum dolor asperiores?';

const notes = ref([{ id: 1, title: 'Test Note 1', body: notesBody }]);
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
