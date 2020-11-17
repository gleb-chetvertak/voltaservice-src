import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
		name: 'Home',
    component: Home,
		meta: {
			title: 'Главная'
		}
  },
  {
    path: '/store',
    name: 'StorePage',
    component: () => import('../views/StorePage.vue')
  },
  {
    path: '/cart',
    name: 'CartPage',
    component: () => import('../views/CartPage.vue')
  },
  {
    path: '/compare',
    name: 'ComparePage',
    component: () => import('../views/ComparePage.vue')
  },
  {
    path: '/single-item/:id',
    name: 'SingleItemPage',
    component: () => import('../views/SingleItemPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
