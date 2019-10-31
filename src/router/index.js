import Vue from 'vue'
import VueRouter from 'vue-router'
import Manager from '../pages/manager/Layout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'manager',
    redirect:'/user',
    component: Manager,
    children:[
      {
      path:"home",
      component:()=>import('../pages/manager/Home.vue')
      },
      {
        path:"order",
        component:()=>import('../pages/manager/Order.vue')
      },
      {
        path:"user",
        component:()=>import('../pages/manager/User.vue'),
        // children:[
        //   {
        //     path: 'addressList',
        //     // name: 'addressList',
        //     component: () => import( '../pages/manager/AddressList.vue')
        //   },
        // ]
      },
      {
        path:"addressList",
        component:()=>import('../pages/manager/AddressList.vue')
        },
      ]
  },
  {
    path: '/login',
    name: 'login',
    
    component: () => import( '../pages/Login.vue')
  },
  
  {
    path: '/area',
    name: 'area',
    component: () => import( '../components/Area')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
