import {get} from '@/http/axios'
export default{
    namespaced:'true',
    state:{
        address:[]
    },
    getters:{

    },
    mutations:{
        refreshAddress(state,data){
            state.address=data;
        }
    },
    actions:{
        async findAddressByCustomerId({commit,rootState}){
            let id=rootState.user.info.id
            let response=await get('/address/findByCustomerId',{id})
            commit('refreshAddress',response.data);
            return response;
        },
        //新增地址
        async addAddress({commit},form){
            let response=await post('/address.saveOrUpdate',form)
            commit('refreshAddress',response.data)
        }
    }
}