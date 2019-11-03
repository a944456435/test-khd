import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/vant.js'
import moment from 'moment'

//引进自定义组件
import FullLayout from '@/components/FullLayout' 
import AddressItem from '@/components/AddressItem' 
import OrderItem from '@/components/OrderItem' 
import OrderItem_confirm from '@/components/OrderItem_confirm' 
import ProductItem from '@/components/ProductItem' 

Vue.component('whq-fullLayout',FullLayout)
Vue.component('whq-addressItem',AddressItem)
Vue.component('whq-orderItem',OrderItem)
Vue.component('whq-OrderItem_confirm',OrderItem_confirm)
Vue.component('whq-productItem',ProductItem)
// 全局注册过滤器
Vue.filter('datefmt',function(val){
  if(val){
    return moment(val).format('YYYY-MM-DD HH:mm:ss')
  }
  return val;
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
