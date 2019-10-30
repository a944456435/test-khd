<template>
  <div class="order">
      <van-row>
          <van-col :offset="12">我的</van-col>
      </van-row>

      <!-- <van-row>
        <van-col :offset="12">
          <van-image class="my-photo"
          round fit="fill"
          width="10rem"
          height="10rem"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        </van-col>
      </van-row> -->
      <div class="photo">
        <div class="photo_wrapper">
          <van-image class="my-photo" round fit="fill" width="10rem" height="10rem" src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
        </div>
        <div style="text-align:center;line-height:3em">{{info.name}}</div>
      </div>
      <!-- <van-collapse v-model="activeNames">
        <van-collapse-item title="我的订单" name="1">我的所有订单</van-collapse-item>
        <van-collapse-item title="常用地址" name="2">地址</van-collapse-item>
        <van-collapse-item title="登陆与注销" name="3">
            <van-button size="small" @click="logoutHandler">退出</van-button>
            <van-button size="small" @click="loginHander">登陆</van-button>
            <div class="line" @click="logoutHandler">
        退出
      </div>  
        </van-collapse-item>
      </van-collapse> -->
      <div class="line" @click="toAddressListHandler">常用地址</div>
      <div class="line" @click="loginHander">登陆</div>
      <div class="line" @click="logoutHandler">退出</div>
 {{token}}{{info}}
  </div>
</template>

<script>
import {mapState,mapActions,mapMutations} from 'vuex'
export default {
  data(){
    return {
      activeNames:['1'],
    }
  },
  computed:{
     ...mapState('user',['token','info']),
  },
  methods:{
   
    ...mapActions('user',['getInfo','logout']),
    logoutHandler(){
      this.logout();
    },
    loginHander(){
      this.$router.push('/login')
    },
    toAddressListHandler(){
      
    }
  },
  created(){
    this.getInfo(this.token);
  }
}
</script>

<style  scoped>
.photo{
  margin-top:1em; 
}
.photo_wrapper{
  margin: 0 auto;
  width: 10em;
  height: 10em;
}
.line {
  line-height: 3em;
  border-bottom: 1px solid #ededed;
  padding-left: 1.5em;
}
</style>