import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
// import Characters from './views/Characters.vue'
import PageNotFound from './views/PageNotFound'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/characters',
      name: 'characters',
      component: () => import('./views/Characters.vue')
    },
    {
      path: '/characters/:id',
      name: 'character',
      component: () => import('./views/Character.vue')
    },
    {
      path: '/starships',
      name: 'starships',
      component: () => import('./views/Starships.vue')
    },
    {
      path: '/starships/:id',
      name: 'starship',
      component: () => import('./views/Starship.vue')
    },
    {
      path: '/vehicles',
      name: 'vehicles',
      component: () => import('./views/Vehicles.vue')
    },
    {
      path: '/vehicles/:id',
      name: 'vehicle',
      component: () => import('./views/Vehicle.vue')
    },
    {
      path: '/planets',
      name: 'planets',
      component: () => import('./views/Planets.vue')
    },
    {
      path: '/planets/:id',
      name: 'planet',
      component: () => import('./views/Planet.vue')
    },
    {
      path: '*',
      component: PageNotFound
    }
  ]
})
