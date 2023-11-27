import { createRouter, createWebHistory } from 'vue-router'
import UserList from '../components/pages/UserList.vue'
import UserDetails from '../components/pages/UserDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/list/1'
    },
    {
      path: '/list/:id',
      name: 'list',
      component: UserList,
    },
    {
      path: '/user/:id?',
      name: 'about',
      component: UserDetails,
      alias: '/user'
    }
  ]
})

export default router
