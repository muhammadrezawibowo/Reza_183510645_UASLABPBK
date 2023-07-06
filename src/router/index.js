import { createRouter, createWebHistory } from 'vue-router';

import Lokasi from '../components/MLokasi.vue';
import Cuaca from '../components/MCuaca.vue';
import Stopwatch from '../components/MStopwatch.vue';
import Game from '../components/MGame.vue';

const routes = [
  { path: '/', component: Lokasi },
  { path: '/game', component: Game},
  { path: '/cuaca', component: Cuaca },
  { path: '/stopwatch', component: Stopwatch},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;