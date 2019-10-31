<template>
    <div>
        <h2>增加地址页</h2>token：{{token}}
        <van-address-list
  :list="list"
  disabled-text="以下地址超出配送范围"
  @add="onAdd"
  @edit="onEdit"
/>
    </div>
</template>
<script>
import {mapState, mapActions, mapMutations,} from 'vuex'
export default {
    data(){
        return {
            // token:'',
            list: [
                // {
                // id: '1',
                // name: '张三',
                // tel: '13000000000',
                // address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
                // },
            ]
        }
    },
    computed:{
     ...mapState('user',['token','info']),
     ...mapState('address',['address']),
    },
    methods:{
        ...mapMutations('address',['refreshAddress']),
        ...mapActions('address',['findAddressByCustomerId']),
        ...mapMutations('user',['refreshInfo']),
        ...mapActions('user',['getInfo']),
        onAdd() {
            //Toast('新增地址');
            this.$router.push({
                path:'/addressedit'
            })
            console.log('新增地址')
        },

        onEdit(item, index) {
            //Toast('编辑地址:' + index);
        },
        //把查询到的顾客地址追加到list中
        pushList(){
            this.address.forEach((item)=>{
                var obj={id:item.id,name:this.info.name,tel:item.telephone,address:item.province+item.city+item.area+item.address}
                this.list.push(obj);
            })
        }

    },
    created(){
         //this.token=this.$route.query.token;
         this.findAddressByCustomerId(this.info.id);
         this.pushList();
         this.getInfo(this.token);
    }
}
</script>