<template>
  <div class="order">
      <div>
        <van-row>
          <van-col :offset="12">订单</van-col>
        </van-row>

        <van-tabs>
        <van-tab v-for="item in statusArr" :title="item" :key="item">
          
            <van-panel v-show='item=="所有订单"' v-for='i in statusDpd()' :key='i+1' :title='"订单编号  "+i.id' :desc=i.remark :status=i.status>
            <div>
              下单时间：{{i.orderTime}}
                <div slot="footer" style="margin-bottom:10px;margin-top:10px;margin-left:300px">
                  <van-button size="small">按钮</van-button>
                  <van-button size="small" type="danger">按钮</van-button>
                </div>
            </div>
          </van-panel>

          <van-panel v-show='item!="所有订单"' v-for='i in statusDpd(item)' :key='i+1' :title='"订单编号  "+i.id' :desc=i.remark :status=i.status>
            <div>
              下单时间：{{i.orderTime}}
                <div slot="footer" style="margin-bottom:10px;margin-top:10px;margin-left:300px">
                  <van-button size="small">按钮</van-button>
                  <van-button size="small" type="danger">按钮</van-button>
                </div>
            </div>
            
          </van-panel>
         


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
      activeKey: 0,
      statusArr:['所有订单','待支付','待派单','待接单','待服务','待确认','已完成'],
    }
  },
  computed:{
      ...mapState('order',['orders','allOrders']),
      ...mapGetters('order',['statusDpd']),
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