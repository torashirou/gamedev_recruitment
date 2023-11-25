import { createRouter, createWebHistory } from 'vue-router'
import UserList from '../components/pages/UserList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: UserList,
      alias: '/list/:id'
    },
    {
      path: '/user/:id',
      name: 'about',
      component: () => import('../components/pages/UserDetails.vue')
    }
  ]
})

export default router
