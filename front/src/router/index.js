import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Recetas from '../views/Recetas.vue'
import Crear from '../views/Crear.vue'
import Ver from '../views/Ver.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/crear',
    name: 'Crear',
    component: Crear
  },
  {
    path: '/recetas',
    name: 'Recetas',
    component: Recetas
  },
  {
    path: '/ver/:ver',
    name: 'Ver',
    component: Ver
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
