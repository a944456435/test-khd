<template>
    <div class="layout">
        <!-- 顶部 -->
        <van-nav-bar title="e洁家政" left-text="返回" left-arrow @click-left="backHandler">
            <van-icon name="search" slot="right" />
        </van-nav-bar>
        <!-- 内容部分 -->
        <router-view/>
        <!-- 底部部分 -->
       <div>
            <van-tabbar v-model="active" @change="tabChangeHandler">
                <van-tabbar-item name="/home" icon="star-o">首页</van-tabbar-item>
                <van-tabbar-item name="/order" icon="search">订单</van-tabbar-item>
                <van-tabbar-item name="/user" icon="user-o">我的</van-tabbar-item>
            </van-tabbar>
        </div> 

    </div>
</template>
<script>
import {mapState,mapActions} from 'axios'
export default {
    data(){
        return {
            active:0
        }
    },
  computed:{
      
  },
  methods:{
      tabChangeHandler(path){
          this.$router.push({path})
      },
      backHandler(){
          this.$router.go(-1);
      }
  },
  created(){
  }
}
</script>