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
    path: '/favourite',
    name: 'Favourite',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "favourite" */ '../views/Favourite.vue')
  },
  {
    path: '/watchvideo/:id',
    name: 'WatchVideo',
    component: () => import(/* webpackChunkName: "watchvideo" */ '../views/WatchVideo.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
