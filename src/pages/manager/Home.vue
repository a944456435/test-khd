<template>
  <div class="home">
      <van-row>
        <img src="../../assets/images/ej.png" alt="" width="100%">
      </van-row>
      <van-grid :column-num="3">
        <van-grid-item
          @click="toProductListHandler(c.id,index)"
          v-for="(c,index) in categories"
          :key="c.id"
          :icon="c.icon"
          :text="c.name"
        />
      </van-grid>
       <div class="product_img">
         <!-- <van-grid :column-num="2" square> 
        <van-grid-item
          @click="toProductListHandler(c.id,index)"
          v-for="(c,index) in products"
          :key="c.id"
          :icon="c.photo"
          :text="c.name"
        />
      </van-grid> -->
          <van-image
      width="50%"
      height=width
      @click="toProductListHandler(c.categoryId,index)"
      v-for="(c,index) in products"
      :key="c.id"
      :src="c.photo"
/>
       </div>
      <!-- {{products}} -->
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
  data(){
    return {
      active:0,
    }
  },
  computed:{
    ...mapState('category',['categories']),
    ...mapState('product',['products'])
  },
  methods:{
    ...mapActions('category',['findAllCategories']),
    ...mapActions('product',['queryProduct']),
    // 跳转到产品列表页面
    toProductListHandler(id,activeKey){
      this.$router.push({path:'/product_list',query:{id,activeKey}})
    }
  },
  created(){
    this.findAllCategories();
    this.queryProduct({page:0,pageSize:200});
  }
}
</script>

<style>
.product_img{
  background-color: aliceblue;
}
</style>