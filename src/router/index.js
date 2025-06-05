import { createWebHistory, createRouter } from 'vue-router'

import ShoeView from '@/views/ShoeView.vue'
import HoodieView from '@/views/HoodieView.vue'

const routes = [
    {
        path: '',
        redirect: '/shoes',
        
    },
    {
       
        path: '/shoes',
        component: ShoeView
    },
    {
        path: '/hoodies',
        component: HoodieView
    }

  
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router