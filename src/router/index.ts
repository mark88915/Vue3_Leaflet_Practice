import OtherPage from '@/views/OtherPage.vue'
import OpenLayers from '@/views/OpenLayers.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'Home',
      path: '/',
      component: OpenLayers
    },
    {
      name: 'OtherPage',
      path: '/otherPage',
      component: OtherPage
    }
  ]
})

export default router
