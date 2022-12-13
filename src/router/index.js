import { createRouter, createWebHistory } from 'vue-router';

import Main from '../pages/Main.vue';
import CreateNote from '../pages/CreateNote.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Main },
    { path: '/create-note', component: CreateNote },
  ],
});
