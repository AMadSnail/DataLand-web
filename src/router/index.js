import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      // {
      //   path: '/soother',
      //   component: () => import(/* webpackChunkName: "about" */ '../views/soulSoother/index.vue')
      // }
    ]
  },
  {
    path: '/soother',
    name: 'Soother',
    component: () => import('../views/soulSoother/index.vue')
  },
  {
    path: '/blcg',
    name: 'Blcg',
    component: () => import('../views/blcg/index.vue')
  },
  {
    path: '/mycode',
    name: 'MyCode',
    component: () => import('../views/myCode/index.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
