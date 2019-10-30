<template>
  <div class="login">
  <!-- 顶部 -->
    <van-nav-bar title="e洁家政" left-text="返回" left-arrow @click="back">
        <van-icon name="search" slot="right" />
    </van-nav-bar>
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
  {{form}}
    </div>
    <van-button size="small" @click="loginHander">登陆</van-button>  
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
        this.$router.push('/user')
      })
    },
    back(){
          this.$router.go(-1)
      }
  }
}
</script>

<style scoped>
  .from-login{
    margin: 0 auto;
  }
</style>