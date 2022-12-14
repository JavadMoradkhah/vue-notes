<script setup>
import Api from '../api/Api';
import { reactive, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { showSuccessToast, showErrorToast } from '../util/toast';
import Loading from '../components/layout/Loading.vue';
import BackButton from '../components/common/BackButton.vue';

const state = reactive({ form: { title: '', body: '' }, loading: true });

const router = useRouter();
const route = useRoute();

onMounted(() => {
  fetchNote();
});

async function fetchNote() {
  try {
    const { data } = await Api.get(`/${route.params.id}`);

    state.form = { title: data.title, body: data.body };
  } catch (error) {
    showErrorToast(error.message);
  } finally {
    state.loading = false;
  }
}

async function onFormSubmit(e) {
  state.loading = true;

  const title = e.target.title.value;
  const body = e.target.body.value;

  try {
    await Api.put(`/${route.params.id}`, { title, body });
    showSuccessToast('Note updated successfully');
    router.push('/');
  } catch (error) {
    showErrorToast(error.message);
  } finally {
    state.loading = false;
  }
}
</script>

<template>
  <main>
    <Loading v-if="state.loading" />
    <section class="max-w-2xl mx-auto px-4 py-8">
      <BackButton url="/" />

      <h1 class="my-4 text-primary text-2xl text-center font-bold">Edit Note</h1>

      <form @submit.prevent="onFormSubmit">
        <fieldset>
          <label class="block pb-1 text-gray-700 dark:text-gray-300" for="title-input">Title</label>
          <input
            id="title-input"
            class="block w-full px-4 py-2 dark:text-white dark:bg-gray-800 border dark:border-gray-700 rounded-md outline-none focus:border-primary"
            name="title"
            type="text"
            placeholder="Enter the title..."
            :value="state.form.title"
          />
        </fieldset>
        <fieldset class="mt-3">
          <label class="block pb-1 text-gray-700 dark:text-gray-300" for="body-input">Body</label>
          <textarea
            id="body-input"
            class="block w-full min-h-[160px] px-4 py-2 dark:text-white dark:bg-gray-800 border dark:border-gray-700 rounded-md outline-none focus:border-primary"
            placeholder="Type note body..."
            name="body"
            :value="state.form.body"
          ></textarea>
        </fieldset>
        <button
          class="block w-full mt-4 px-4 py-2 text-white bg-primary rounded-md active:bg-emerald-600"
          type="submit"
        >
          Save
        </button>
      </form>
    </section>
  </main>
</template>
