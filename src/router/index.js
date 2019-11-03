import Vue from 'vue'
import VueRouter from 'vue-router'
import Manager from '../pages/manager/Layout.vue'
import store from '../store'
import { Toast } from 'vant'
import { getToken } from '../utils/auth'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'manager',
    redirect:'/user',
    component: Manager,
    beforeEnter:(to,from,next)=>{ //属于路由自己的拦截器
      let token =getToken();
      if(token){
        store.dispatch('user/getInfo',token)
        .then(()=>{
          next();//当获取用户信息之后才允许跳转
        })
      }else{
        Toast('Token失效！')
        next({path:'/login'})
      }
    },
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
      },
      {
        path:"addressList",
        component:()=>import('../pages/manager/AddressList.vue')
      },
      {
        path:"addressEdit",
        component:()=>import('../pages/manager/AddressEdit.vue')
      },
      {
        path:"product_list",
        component:()=>import('../pages/manager/Product_List.vue')
      },
      {
        path:"order_detail",
        component:()=>import('../pages/manager/Order_Detail.vue')
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
