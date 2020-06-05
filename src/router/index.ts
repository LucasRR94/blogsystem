import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Homepage from '../views/Homepage.vue'
import Aboutus from '../views/Aboutus.vue'
import MainUser from '../views/MainUser.vue'
import User from '../views/User.vue'
import ListUsers from '../views/ListUsers.vue'
import NotFound from '../views/NotFound.vue'
import Contact from '../views/Contact.vue'
import test from '../views/test.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Homepage
  },
  {
    path: '/researchuser',
    name: 'Researchuser',
    component: MainUser
  },{
    path: '/listusers',
    name: 'listusers',
    component: ListUsers
  },
  {
    path: '/user/:idUser',
    name:'User',
    component:User
  },
  {
    path: '/about',
    name: 'Aboutus',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: Aboutus
    component:NotFound
  },
  {
    path:'/test',
    name:'test',
    component: test
  },
  {
    path: '/contact',
    name: 'Contact',
    //component:Contact
    component:NotFound
  },
  {
    path: '*',
    name: 'Notfound',
    component: NotFound
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
