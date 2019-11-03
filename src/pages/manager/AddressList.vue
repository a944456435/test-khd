<template>
    <div>
        <whq-fullLayout title="我的地址">
            <!-- <van-address-list
            :list="list"
            disabled-text="以下地址超出配送范围"
            @add="onAdd"
            @edit="onEdit"
            /> -->
            <whq-addressItem v-for="addr in address" :key="addr.id" :data="address[0]"></whq-addressItem>
            <div class="bottom" @click="onAdd">新增地址</div>
        </whq-fullLayout>
       
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
            this.$toast('新增地址');
            this.$router.push({
                path:'/addressEdit'
            })
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
         this.findAddressByCustomerId();
         this.pushList();
    }
}
</script>
<style  scoped>
    .bottom{
        width:100%;
        background-color: red;
        color: #000000;
        position: absolute;
        text-align: center;
        height: 3em;
        line-height: 3em;
        margin-bottom: 0;
    }
</style>