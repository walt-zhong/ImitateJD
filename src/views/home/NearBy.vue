<template>
  <div class="nearby">
    <h3 class="nearby__title">附近店铺</h3>
    <ShopInfo 
    v-for="item in nearByList" 
    :key="item._id"
    :item="item"/>
  </div>
</template>

<script>

import {ref} from 'vue';
import {get} from '../../utils/request';
import ShopInfo from '../../components/ShopInfo.vue'
const useNearbyListEffect =()=>{
  const nearByList = ref([]);
    const getNearByList = async ()=>{
      const result = await get('api/shop/hot-list');
      console.log(result);
      if(result?.errno === 0 && result?.data?.length){
        nearByList.value = result.data;
      }
    }

    return {nearByList,getNearByList};

}
export default {
  name: 'NearBy',
  components: { ShopInfo },
  setup () {
    const{nearByList,getNearByList} = useNearbyListEffect();
    getNearByList();
    return { nearByList }
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/viriable.scss";
.nearby {
  &__title {
    margin: 0.16rem 0 0.02rem 0;
    font-size: 0.18rem;
    color: $content-font-color;
    font-weight: normal;
  }
}
</style>
