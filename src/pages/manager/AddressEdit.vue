<template>
    <div>新增加地址{{address_form}}
      <whq-fullLayout title="添加地址">
        <!-- 增加地址信息 -->
        <van-address-edit v-model="address_form"
            :area-list="areaList"
            show-postal
            show-delete
            show-set-default
            show-search-result
            :search-result="searchResult"
            @save="onSave"
            @delete="onDelete"
            @change-detail="onChangeDetail"
            />
        <!-- /增加地址信息 -->
      </whq-fullLayout>
    </div>
</template>
<script>
import areaList from '@/components/Area'
import { mapActions } from 'vuex'
export default {
   data() {
    return {
      areaList,
      searchResult: [],
      address_form:{},
    }
  },

  methods: {
      ...mapActions('address',['addAddress']),
    onSave(content) {
      //Toast('save');
      console.log('新增加地址：',content)
      this.address_form={name:content.name,telephone:content.tel,province:content.province,city:content.city,area:content.county,address:content.addressDetail}
      this.addAddress(this.address_form)
    },
    onDelete() {
      Toast('delete');
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [{
          name: '黄龙万科中心',
          address: '杭州市西湖区'
        }];
      } else {
        this.searchResult = [];
      }
    }
  } ,
  created(){
      this.areaList=this.areaList.data().areaList
  }
}
</script>