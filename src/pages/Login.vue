<template>
  <div class="login">
  <!-- 顶部 -->
    <!-- <div>
      <van-nav-bar title="e洁家政" left-text="返回" left-arrow @click-left="back">
        <van-icon name="search" slot="right" />
    </van-nav-bar>
    </div> -->
    <!-- <van-row>
        <img src="@/assets/images/ej.png" alt="" width="100%">
      </van-row> -->
      <div class="login">
        <div class="header">
          <div class="logo">jz</div>
          <div class="title">家政服务-顾客端</div>
        </div>
      </div>
    <div class="from-login">
        <van-cell-group>
          <van-row>
            <van-col>
                <van-field
              v-model="form.username"
              required
              clearable
              label="用户名"
              right-icon="question-o"
              placeholder="请输入用户名"
              @click-right-icon="$toast('忘记账号密码请联系我们：#tel:133333333')"
            />
       </van-col>
     </van-row>

      <van-row>
        <van-col>
            <van-field
              v-model="form.password"
              type="password"
              label="密码"
              placeholder="请输入密码"
              required/>  
        </van-col>  
      </van-row>
  </van-cell-group>
    </div>
    <!-- <van-button size="small" @click="loginHander">登陆</van-button>   -->
     <div style="text-align:center">
       <van-button plain  type="default" @click="loginHander">登录</van-button>
      </div>
  </div>
  
</template>



<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
  data(){
    return {
      form:{
        username:'customer1',
        password:'123321',
        type:'customer'
      }
    }
  },
  computed:{
   // ...mapState('login',['info']),
  },
  methods:{
    // ...mapActions('login',['login','getInfo']),
    //...mapMutations('login',['refreInfo']),

    ...mapActions('user',['login']),
    ...mapMutations('usr',['refreshToken']),
    
    //普通方法
    loginHander(){
      this.login(this.form)
      .then(()=>{
        this.$router.push('/home')
      })
    },
    back(){
          this.$router.go(-1)
      }
  }
}
</script>

<style scoped>
.header{
  height:90px;
  padding:50px;
  color:white;
  background-color: lightsteelblue;
  text-align: center
}
.logo{
  width:40px;
  height:40px;
  border:1px solid #efefef;
  border-radius: 50%;
  line-height: 50px;
  margin:0 auto;
  margin-bottom:1em
}
/* .title{
  width: 100px;
  height: 100px;
  line-height: 50px;
  border-radius: 50%;
  border: 1px solid #efefef;
  margin: 0 auto;
  color:#efefef;
  background-color: lightblue;
  font-weight: bold;
  margin-bottom: 1em;
  font-size: 1.5em
} */
  .from-login{
    width:80%;
    margin-top:20%;
    margin: 0 auto;
  }
</style>