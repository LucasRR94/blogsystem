import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Homepage from '../views/Homepage.vue'
import Aboutus from '../views/Aboutus.vue'
import MainUser from '../views/MainUser.vue'
import User from '../views/User.vue'
import UserPost from '../views/UserPost.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Homepage
  },
  {
    path: '/user',
    name:'User',
    component: MainUser,
    children:[
      {path:':idUser',
       component:User,
       children:[
        {
          path:'/:idpost',
          name:'UserPost',
          component:UserPost
        }
       ]
      }, 
    ]
  },
  {
    path: '/about',
    name: 'Aboutus',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Aboutus
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
