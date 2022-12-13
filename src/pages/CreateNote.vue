<script setup>
import Api from '../api/Api';
import { useRouter } from 'vue-router';

const router = useRouter();

async function onFormSubmit(e) {
  const title = e.target.title.value;
  const body = e.target.body.value;

  try {
    await Api.post('/', { title, body });
    router.push('/');
  } catch (error) {
    console.log(error);
  }
}
</script>

<template>
  <main>
    <section class="max-w-2xl mx-auto px-4 py-8">
      <h1 class="mb-4 text-primary text-2xl text-center font-bold">Create Note</h1>
      <form @submit.prevent="onFormSubmit">
        <fieldset>
          <label class="block pb-1 text-gray-700" for="title-input">Title</label>
          <input
            id="title-input"
            class="block w-full px-4 py-2 border rounded-md outline-none focus:border-primary"
            name="title"
            type="text"
            placeholder="Enter the title..."
          />
        </fieldset>
        <fieldset class="mt-3">
          <label class="block pb-1 text-gray-700" for="body-input">Body</label>
          <textarea
            id="body-input"
            class="block w-full min-h-[100px] px-4 py-2 border rounded-md outline-none focus:border-primary"
            placeholder="Type note body..."
            name="body"
          ></textarea>
        </fieldset>
        <button
          class="block w-full mt-4 px-4 py-2 text-white bg-primary rounded-md active:bg-emerald-600"
          type="submit"
        >
          Create
        </button>
      </form>
    </section>
  </main>
</template>
