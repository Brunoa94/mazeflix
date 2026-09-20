import { createRouter, createWebHistory } from 'vue-router'
import HomepageView from './views/HomepageView.vue'
import ShowDetailsView from './views/ShowDetailsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomepageView },
    { path: '/show/:id', name: 'showDetails', component: ShowDetailsView },
  ],
})

export default router
