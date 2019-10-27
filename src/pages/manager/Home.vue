<template>
  <div class="home">
      <van-row>
        <img src="../../assets/images/ej.png" alt="" width="100%">
      </van-row>
      <van-grid :column-num="3">
        <van-grid-item
          v-for="c in categories"
          :key="c.id"
          :icon="c.icon"
          :text="c.name"
        />
      </van-grid>
      <!-- {{categories}} -->
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
  data(){
    return {
      active:0,
    }
  },
  computed:{
    ...mapState('category',['categories'])
  },
  methods:{
    ...mapActions('category',['findAllCategories'])
  },
  created(){
    this.findAllCategories();
  }
}
</script>

<style>

</style>