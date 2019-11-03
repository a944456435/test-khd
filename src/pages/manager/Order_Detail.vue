<template>
    <div>
        <whq-fullLayout title="订单详情">
            <van-cell  icon="location-o" is-link>
            <template slot="title">
                <span class="custom-title">{{address[0].province}}{{address[0].city}}{{address[0].area}}{{address[0].address}}</span>
                <van-tag type="danger" style="margin-left:50px">常用地址</van-tag>
            </template>
            </van-cell>
            <van-cell  icon="phone-o" is-link>
            <template slot="title">
                <span class="custom-title" >{{address[0].telephone}}</span>
                <!-- {{address[0]}} -->
            </template>
            </van-cell>
             <van-card v-for="o of orderLines.values()" :key="o.productId" 
                :num="o.number"
                :price="o.price"
                desc="商品详情"  
                :title= 'o.productName'
                thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"/>
            <van-submit-bar
            :price="total*100"
            button-text="提交订单"
            @submit="onSubmit"/>
        </whq-fullLayout>
    </div>
</template>
<script>
import { mapState, mapActions, mapMutations, mapGetters } from 'vuex'
export default {
    data(){
        return {
        }
    },
     created(){
         this.findAddressByCustomerId();
         this.findAllProduct();
   } ,
    computed:{
        ...mapState('shopCar',['orderLines']),
        ...mapState('address',['address']),
        ...mapState('product',['products']),
        ...mapGetters('shopCar',['total']),
        ...mapMutations('order',['clearShopCar']),
    },
    methods:{
        ...mapActions('address',['findAddressByCustomerId']),
        ...mapActions('order',['saveOrder']),
        ...mapActions('product',['findAllProduct']),
       onSubmit(){
           //保存订单并清空购物车
           this.saveOrder();
           this.$router.push({path:'/order'})
       }
    },
  
}
</script>