import { createRouter, createWebHistory } from 'vue-router'
import HomepageView from './views/HomepageView/HomepageView.vue'
import ShowDetailsView from './views/ShowDetailsView/ShowDetailsView.vue'
import NotFoundView from './views/NotFoundView/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomepageView },
    { path: '/show/:id', name: 'showDetails', component: ShowDetailsView },
    { path: '/:pathMatch(.*)*', name: 'notFound', component: NotFoundView },
  ],
})

export default router
