<template>
  <div class="order">
      <div>
        <van-row>
          <van-col :offset="12">订单</van-col>
        </van-row>
      </div>
      <!-- {{orders}} -->
     <div>
        <van-col :offset="1">
            <van-list v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
          >
            <van-cell v-for="item in orders" :key="item.id" :title="item.orderTime" />
        </van-list>
      </van-col>
     </div>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
  data(){
    return {
       list: [],
      loading: false,
      finished: false
    }
  },
  computed:{
      ...mapState('order',['orders']),
  },
  methods:{
     ...mapActions("order",['findAllOrders']), 
  },
  created(){
      this.findAllOrders();
  }
}
</script>

<style>

</style>