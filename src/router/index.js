import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/store',
    name: 'store',
    component: () => import('@/views/store.vue'),
    redirect: '/store/goods',
    children: [
      {
        path: 'goods',
        name: 'goods',
        component: () => import('@/views/modules/goods.vue'),
      },
      {
        path: 'storedetail',
        name: 'storedetail',
        component: () => import('@/views/modules/storedetail.vue'),
      },
      {
        path: 'evaluate',
        name: 'evaluate',
        component: () => import('@/views/modules/evaluate.vue'),
      },
    ]
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
