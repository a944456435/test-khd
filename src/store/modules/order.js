// import request from '@/utils/request'
import { get, post, post_array,post_obj_array } from '@/http/axios'
export default {
  namespaced: true,
  state: {
    orders: [],//分页的订单信息
    allOrders:[],//全部的订单信息
  },
  getters: {
  statusDpd:(state)=>{
    return function(status){
      if(status){
        return state.orders.filter((item)=>item.status==status)
      }else{
          return state.allOrders;
      }
     
      }
    }
  },
  mutations: {
    // 刷新分页查询结果的数据
    refreQuery(state, query) {
      state.orders = query
    },

    refreshAllOrders(state, data) {
      state.allOrders = data
    },
  },
  actions: {
    // 顾客确认收单
    async confirmOrder({ dispatch }, orderId) {
      await get('/order/confirmOrder', { orderId })
      dispatch('query')
    },
    // async findAllOrders({commit,dispatch,getters,state}){
    async findAllOrders(context) {
      console.log('context->', context)
      // 1. 查询所有顾客信息
      const response = await get('/order/findAll')
      // alert(JSON.stringify(response));
      // 2. 将顾客信息设置到state.orders中
      context.commit('refreshAllOrders', response.data)
    },
    async deleteOrderById({ dispatch }, id) {
      // 1. 删除顾客信息
      const response = await get('/order/deleteById', { id })
      // 2. 刷新
      // dispatch("findAllOrders")
      // 3. 提示成功
      return response
    },
    // 分页查询
    async query({ commit, dispatch }) {
      const response = await get('/order/query')
      commit('refreQuery', response.data)
    },
    //保存订单
    async saveOrder({commit,rootState}){
      //组合数据
      let data={
        customerId:rootState.user.info.id,
        addressId:rootState.address.address[0].id,
        orderLines:Array.from(rootState.shopCar.orderLines.values())
      }
      //调接口
      let response=await post_obj_array('/order/save',data)
      //清空购物车,访问外部的状态机中的突变
      commit('shopCar/clearShopCar',null,{root:true})
      return response;
    }
  }
}
