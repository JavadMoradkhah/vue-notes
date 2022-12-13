<script setup>
import Api from '../api/Api';
import { reactive, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import Loading from '../components/layout/Loading.vue';

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
    console.log(error);
  } finally {
    state.loading = false;
  }
}

async function deleteNote() {
  try {
    state.loading = true;

    await Api.delete(`/${route.params.id}`);

    router.push('/');
  } catch (error) {
    console.log(error);
  } finally {
    state.loading = false;
  }
}

async function onFormSubmit(e) {
  const title = e.target.title.value;
  const body = e.target.body.value;

  try {
    await Api.put(`/${route.params.id}`, { title, body });
    router.push('/');
  } catch (error) {
    console.log(error);
  }
}
</script>

<template>
  <main>
    <Loading v-if="state.loading" />
    <section class="max-w-2xl mx-auto px-4 py-8">
      <h1 class="mb-4 text-primary text-2xl text-center font-bold">Edit Note</h1>
      <form @submit.prevent="onFormSubmit">
        <fieldset>
          <label class="block pb-1 text-gray-700" for="title-input">Title</label>
          <input
            id="title-input"
            class="block w-full px-4 py-2 border rounded-md outline-none focus:border-primary"
            name="title"
            type="text"
            placeholder="Enter the title..."
            :value="state.form.title"
          />
        </fieldset>
        <fieldset class="mt-3">
          <label class="block pb-1 text-gray-700" for="body-input">Body</label>
          <textarea
            id="body-input"
            class="block w-full min-h-[160px] px-4 py-2 border rounded-md outline-none focus:border-primary"
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
        <button
          class="block w-full mt-2 px-4 py-2 text-white bg-rose-600 rounded-md active:bg-rose-700"
          @click="deleteNote"
        >
          Delete
        </button>
      </form>
    </section>
  </main>
</template>
