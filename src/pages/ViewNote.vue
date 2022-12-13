<script setup>
import Api from '../api/Api';
import { reactive, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { showSuccessToast, showErrorToast } from '../util/toast';
import Loading from '../components/layout/Loading.vue';
import DeleteIcon from '../components/icon/DeleteIcon.vue';
import EditIcon from '../components/icon/EditIcon.vue';
import BackButton from '../components/common/BackButton.vue';

const state = reactive({ note: { title: '', body: '' }, loading: true });

const route = useRoute();
const router = useRouter();

onMounted(() => {
  fetchNote();
});

async function fetchNote() {
  try {
    const { data } = await Api.get(`/${route.params.id}`);

    state.note = { title: data.title, body: data.body };
  } catch (error) {
    showErrorToast(error.message);
  } finally {
    state.loading = false;
  }
}

async function deleteNote() {
  try {
    state.loading = true;

    await Api.delete(`/${route.params.id}`);

    showSuccessToast('Note deleted successfully');

    router.push('/');
  } catch (error) {
    showErrorToast(error.message);
  } finally {
    state.loading = false;
  }
}
</script>

<template>
  <Loading v-if="state.loading" />

  <main class="layout-container px-4 py-12">
    <div class="flex justify-between items-center mb-4">
      <BackButton url="/" />

      <div class="flex items-center">
        <router-link
          class="flex px-3 py-1 items-center text-white bg-emerald-700 rounded-md"
          :to="`/edit-note/${route.params.id}`"
        >
          <EditIcon width="1rem" height="1rem" />
          <span class="ml-1 text-sm">Edit</span>
        </router-link>

        <hr class="mx-1" />

        <button
          @click="deleteNote"
          class="flex px-3 py-1 items-center text-white bg-rose-600 rounded-md"
        >
          <DeleteIcon width="1rem" height="1rem" />
          <span class="ml-1 text-sm">Delete</span>
        </button>
      </div>
    </div>

    <h1 class="text-3xl text-gray-800 dark:text-white font-bold">{{ state.note.title }}</h1>

    <p class="mt-4 dark:text-gray-300">{{ state.note.body }}</p>
  </main>
</template>
