import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',

    component: () => import('../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',

    component: () => import('../components/Login.vue')
  },
  {
    path: '/modelo/:modelo/:reigao/:vendedor/:cidade/:dia/:mes/:ano',
    name: 'Modelo',
    props: true,

    component: () => import('../components/Modelo.vue')
  },
  {
    path: '/sazonalidade',
    name: 'Sazonalidade',

    component: () => import('../components/Sazonalidade.vue')
  },
  {
    path: '/cadastro/usuario',
    name: 'NewUser',

    component: () => import('../components/NewUser.vue')
  },
  {
    path: '/planejado',
    name: 'Planejado',

    component: () => import('../components/Planejado.vue')
  },
  {
    path: '/planejado/cota',
    name: 'PlanejadoCota',

    component: () => import('../components/PlanejadoCota.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
