<template>
  <div class="nearby">
    <h3 class="nearby__title">附近店铺</h3>
    <div class="nearby__item"
    v-for="item in nearByList"
    :key="item._id">
      <img class="nearby__item__img" :src="item.imgUrl"/>
      <div class="nearby__content">
        <div class="nearby__content__title">{{ item.name }}</div>
        <div class="nearby__content__tags">
          <span class="nearby__content__tag">月售: {{ item.sales }}</span>
          <span class="nearby__content__tag">起送: {{ item.expressLimit }}</span>
          <span class="nearby__content__tag">基础运费: {{ item.expressPrice }}</span>
          <!-- <span
          class="nearby__content__tag"
          v-for="(innerItem,index) in item.tags"
          :key="index"
          >{{ innerItem }}</span> -->
        </div>
        <p class="nearby__content__highlight">
          {{ item.slogan }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>

import {ref} from 'vue';
import {get} from '../../utils/request';
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

  &__item {
    display: flex;
    padding-top: 0.12rem;

    &__img {
      width: 0.56rem;
      height: 0.56rem;
    }
  }

  &__content {
    padding-bottom: 0.12rem;
    border-bottom: 1px solid $content-font-color;
    margin-left: 0.16rem;
    flex: 1;

    &__title {
      line-height: 0.22rem;
      font-size: 0.16rem;
      color: $content-font-color;
    }

    &__tags {
      margin-top: 0.08rem;
      line-height: 0.18rem;
      font-size: 0.13rem;
      color: $content-font-color;
    }

    &__tag {
      margin-right: 0.16rem;
    }

    &__highlight {
      margin: 0.08rem 0 0 0;
      line-height: 0.18rem;
      font-size: 0.13rem;
      color: #e93b3b;
    }
  }
}
</style>
