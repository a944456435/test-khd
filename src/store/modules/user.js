import {post_json,get,post} from '@/http/axios' 
import {setToken,getToken,removeToken} from "@/utils/auth"
export default{
    namespaced:true,
    state:{
        token:getToken(),
        info:{}
    },
    getters:{

    },
    mutations:{
        refreshToken(state,token){
            state.token=token;
        },
        refreshInfo(state,info){
            state.info=info;
        }
    },
    actions:{
        //登陆
        async login({commit},payload){
            let response=await post_json('/user/login',payload)
            let token=response.data.token;
            //2、将token缓存起来 localStorage
            setToken(token);
            //3、将token维护到状态机中
            commit('refreshToken',token)
        },
        //得到用户信息
        async getInfo({commit},token){
            let response=await get('/user/info',{token})
            await commit('refreshInfo',response.data)
            return response;
        },
        //退出
        async logout({commit}){
            await post('/user/logout')
            removeToken();
            commit('refreshToken','');
            commit('refreshInfo',{});
        }

    }
}