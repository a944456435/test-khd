<template>
  <div class="order">
      <van-row>
          <van-col :offset="12">我的</van-col>
      </van-row>
      <div class="photo">
        <div class="photo_wrapper">
          <van-image class="my-photo" round fit="fill" width="10rem" height="10rem" src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
        </div>
        <div style="text-align:center;line-height:3em">{{info.name}}</div>
      </div>
      <div class="line" @click="toAddressListHandler(token)">常用地址</div>
      <div class="line" @click="loginHander">登陆</div>
      <div class="line" @click="logoutHandler">退出</div>
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
      this.$toast('退出成功');
      this.$router.push({path:'/login'});
    },
    loginHander(){
      this.$router.push('/login')
    },
    toAddressListHandler(token){
      this.$router.push({
        path:'/addressList',
        query:{token}
      });
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