// import request from '@/utils/request'
import { get, post, post_array } from '@/http/axios'
export default {
  namespaced: true,
  state: {
    visible: false,
    orders: [],
    queryResult: {},
    formLabelWidth: '80px',
    title: '添加订单信息'
  },
  getters: {

  },
  mutations: {
    showModal(state) {
      state.visible = true
    },
    closeModal(state) {
      state.visible = false
    },
    // 需要接受一个参数，这个参数就是orders
    refreshOrders(state, orders) {
      console.log('state->', state)
      state.orders = orders
    },
    // 刷新分页查询结果的数据
    refreQuery(state, queryResult) {
      state.queryResult = queryResult
      state.orders = queryResult.list
    },
    setTitle(state, title) {
      state.title = title
    }
  },
  actions: {
    async batchDeleteOrders(context, ids) {
      const response = await post_array('/order/batchDelete', { ids }) // //参数为对象
      context.dispatch('findAllOrders')
      return response
    },
    // async findAllOrders({commit,dispatch,getters,state}){
    async findAllOrders(context) {
      console.log('context->', context)
      // 1. 查询所有顾客信息
      const response = await get('/order/findAll')
      // alert(JSON.stringify(response));
      // 2. 将顾客信息设置到state.orders中
      context.commit('refreshOrders', response.data)
    },
    async deleteOrderById({ dispatch }, id) {
      // 1. 删除顾客信息
      const response = await get('/order/deleteById', { id })
      // 2. 刷新
      // dispatch("findAllOrders")
      // 3. 提示成功
      return response
    },
    async saveOrder({ dispatch, commit }, order) {
      // 1. 提交请求
      const response = await post('/order/save', order)
      // 2. 关闭模态
      commit('closeModal')
      // 3. 刷新页面
      //   dispatch("findAllOrders");
      // 4. 提示成功 react
      return response
    },
    // 分页查询
    async query({ commit, dispatch }, search) {
      const response = await post('/order/queryPage', search)
      commit('refreQuery', response.data)
    }
  }
}
