<template>
  <div class="docker">
    <div
      v-for="(item, index) in dockerList"
      :class="{'docker__item':true,'docker__item--active': index === 0}"
      :key="item.icon"
    >
    <!--需要使用 v-html来展示图标，否则图标会被转义导致无法显示  -->
      <div class="iconfont" v-html="item.icon" />
      <div class="docker__title">{{ item.text }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DockerPart',
  setup () {
    const dockerList = [
      { icon: '&#xe6d2;', text: '首页' },
      { icon: '&#xe6b1;', text: '购物车' },
      { icon: '&#xe612;', text: '订单' },
      { icon: '&#xe7bd;', text: '我的' }
    ]
    return { dockerList }
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/viriable.scss";
.docker {
  display: flex;
  box-sizing: border-box;
  padding: 0 0.18rem;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  background: #f5f5f5;
  border-top: 0.01rem solid $content-bgColor;
  color: $content-font-color;

  // docer 下的item元素
  &__item {
    flex: 1;
    text-align: center;

    .iconfont {
      margin: 0.07rem 0 0.02rem 0;
      font-size: 0.18rem;
    }

    &--active {
      color: #1fa4fc;
    }
  }

  &__title {
    font-size: 0.2rem;
    transform: scale(0.5, 0.5);
    transform-origin: center top;
  }
}
</style>
