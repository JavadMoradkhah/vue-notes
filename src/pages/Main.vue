<script setup>
import { onMounted, reactive } from 'vue';
import Api from '../api/Api';
import NotesList from '../components/common/NotesList.vue';
import AddButton from '../components/common/AddButton.vue';
import DataNotFound from '../components/layout/DataNotFound.vue';
import Loading from '../components/layout/Loading.vue';

const state = reactive({ notes: [], loading: true });

async function fetchNotes() {
  try {
    const { data } = await Api.get('/');
    state.notes = data;
  } catch (error) {
    console.log(error);
  } finally {
    state.loading = false;
  }
}

onMounted(() => {
  fetchNotes();
});
</script>

<template>
  <main>
    <Loading v-if="state.loading" />

    <NotesList v-else-if="state.notes.length" :notes="state.notes" />

    <DataNotFound v-else text="There are no notes yet!" />

    <AddButton />
  </main>
</template>
