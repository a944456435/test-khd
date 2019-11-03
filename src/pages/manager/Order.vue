<template>
  <div class="order">
      <div>
        <van-row>
          <van-col :offset="12">订单</van-col>
        </van-row>
         <van-tabs v-model="active">
          <van-tab title="全部">
            <whq-orderItem v-for='order in orders' :key="order.id" :data='order' :product='products[0]'></whq-orderItem>
          </van-tab>
          <!-- <van-tab title="待支付">
            <whq-orderItem v-for='order in statusDpd("待支付")' :key="order.id" :data='order'></whq-orderItem>
          </van-tab> -->
          <van-tab title="待服务">
            <whq-orderItem v-for='order in statusDpd("待派单")' :key="order.id" :data='order' :product='products[0]'></whq-orderItem>
            <whq-orderItem v-for='order in statusDpd("待接单")' :key="order.id" :data='order' :product='products[0]'></whq-orderItem>
            <whq-orderItem v-for='order in statusDpd("待服务")' :key="order.id" :data='order' :product='products[0]'></whq-orderItem>
          </van-tab>
          <van-tab title="待确认">
            <whq-OrderItem_confirm v-for='order in statusDpd("待确认")' :key="order.id" :data='order' :product='products[0]'>
              <template #inner>
                <div class="btn"><van-button  round size="small" type="primary" @click="confirmOrderHandler(order.id)">确认</van-button></div>
              </template>
            </whq-OrderItem_confirm>
          </van-tab>
          <van-tab title="已完成">
            <whq-orderItem v-for='order in statusDpd("已完成")' :key="order.id" :data='order' :product='products[0]'></whq-orderItem>
          </van-tab>
        </van-tabs>

      </div>
  </div>
</template>

<script>
import {mapState,mapActions, mapGetters} from 'vuex'
export default {
  data(){
    return {
       list: [],
      active: 0,
    }
  },
  computed:{
      ...mapState('order',['orders','allOrders']),
      ...mapState('product',['products']),
      ...mapGetters('order',['statusDpd']),
  },
  methods:{
     ...mapActions("order",['findAllOrders','query','confirmOrder']), 
     ...mapActions('product',['findAllProduct']),
     //顾客确认订单
     confirmOrderHandler(id){
      this.confirmOrder(id);
     }
  },
  created(){
      this.findAllOrders();
      this.findAllProduct();
      this.query()
  }
}
</script>

<style>

</style>