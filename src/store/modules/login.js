import { get, post, post_array,post_json } from '@/http/axios'
export default{
    namespaced:true,
    state:{
        info:{},
    },
    getters:{

    },
    mutations:{
        refreInfo(state,data){
            state.info=data;
        }
    },
    actions:{
        async getInfo({commit},token){
            let response=await get('/user/info',{token})
            commit('refreInfo',response);
        },
        async login({dispatch},form){
            let response=await post_json('/user/login',form)
            let info=response.data.token;
            dispatch('getInfo',info)
        }
    }
}