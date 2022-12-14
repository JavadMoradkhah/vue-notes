import { createRouter, createWebHistory } from 'vue-router';

import Main from '../pages/Main.vue';
import CreateNote from '../pages/CreateNote.vue';
import EditNote from '../pages/EditNote.vue';
import ViewNote from '../pages/ViewNote.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Main },
    { path: '/create-note', component: CreateNote },
    { path: '/edit-note/:id', component: EditNote },
    { path: '/notes/:id', component: ViewNote },
  ],
});
