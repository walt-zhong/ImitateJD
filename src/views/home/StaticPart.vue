<template>
  <div class="position">
    <span class="iconfont position__icon">&#xe7f1;</span>
    北京联合大学北四环东路97号
    北京联合大学北四环东路97号北京联合大学北四环东路97号北京联合大学北四环东路97号北京联合大学北四环东路97号北京联合大学北四环东路97号
    <span class="iconfont position__notice">&#xe7c4;</span>
  </div>
  <div class="search">
    <span class="iconfont">&#xe741;</span>
    <span class="search__text">山姆会员商店优惠卷</span>
  </div>
  <div class="banner">
    <img
      class="banner__img"
      src="http://www.dell-lee.com/imgs/vue3/banner.jpg"
    />
  </div>
  <div class="icons">
    <div class="icons__item">
      <img
        src="http://www.dell-lee.com/imgs/vue3/超市.png"
        class="icons__item__img"
      />
      <p class="icons__item__desc">超市便利</p>
    </div>
    <div class="icons__item">
      <img
        src="http://www.dell-lee.com/imgs/vue3/菜市场.png"
        class="icons__item__img"
      />
      <p class="icons__item__desc">菜市场</p>
    </div>
    <div class="icons__item">
      <img
        src="http://www.dell-lee.com/imgs/vue3/水果店.png"
        class="icons__item__img"
      />
      <p class="icons__item__desc">水果店</p>
    </div>
    <div class="icons__item">
      <img
        src="http://www.dell-lee.com/imgs/vue3/家居.png"
        class="icons__item__img"
      />
      <p class="icons__item__desc">家居时尚</p>
    </div>
    <div class="icons__item">
      <img
        src="http://www.dell-lee.com/imgs/vue3/蛋糕.png"
        class="icons__item__img"
      />
      <p class="icons__item__desc">烘培蛋糕</p>
    </div>
    <div class="icons__item">
      <img
        src="http://www.dell-lee.com/imgs/vue3/签到.png"
        class="icons__item__img"
      />
      <p class="icons__item__desc">签到</p>
    </div>
    <div class="icons__item">
      <img
        src="http://www.dell-lee.com/imgs/vue3/鲜花.png"
        class="icons__item__img"
      />
      <p class="icons__item__desc">鲜花绿植</p>
    </div>
    <div class="icons__item">
      <img
        src="http://www.dell-lee.com/imgs/vue3/医药健康.png"
        class="icons__item__img"
      />
      <p class="icons__item__desc">医药健康</p>
    </div>
    <div class="icons__item">
      <img
        src="http://www.dell-lee.com/imgs/vue3/大牌免运.png"
        class="icons__item__img"
      />
      <p class="icons__item__desc">大牌免运</p>
    </div>
    <div class="icons__item">
      <img
        src="http://www.dell-lee.com/imgs/vue3/红包.png"
        class="icons__item__img"
      />
      <p class="icons__item__desc">红包套餐</p>
    </div>
  </div>
  <div class="gap"></div>
</template>

<script>
export default {
  name: 'StaticPart'
}
</script>
<style lang="scss">
@import "../../style/viriable.scss";
@import "../../style/mixins.scss";
.position {
    position: relative;
    @include ellipsis;
    padding: 0.16rem 0.24rem 0.16rem 0;
    line-height: 0.22rem;
    font-size: 0.16rem;
    color: $content-font-color;

    .position__icon {
        position: relative;
        top: 0.01rem;
        font-size: 0.2rem;
    }

    .position__notice {
        position: absolute;
        right: 0;
        top: 0.17rem;
        font-size: 0.2rem;
    }
}

.search {
    margin-bottom: 0.12rem;
    line-height: 0.32rem;
    background: #f5f5f5;
    color: #b7b7b7;
    border-radius: 0.16rem;
    font-size: 0.14rem;

    .iconfont {
        display: inline-block;
        padding: 0 0.1rem 0 0.16rem;
        font-size: 0.2rem;
    }

    &__text {
        display: inline-block;
    }
}

.banner {
    height: 0;
    overflow: hidden;
    padding-bottom: 25.4%; //计算图片的高度，

    &__img {
        width: 100%;
    }
}

.icons {
    display: flex;
    flex-wrap: wrap;
    margin-top: 0.16rem;

    &__item {
        width: 20%;
        padding: 0.05rem 0 0.05rem 0;

        &__img {
            display: block;
            width: 0.4rem;
            height: 0.4rem;
            margin: 0 auto;
        }

        &__desc {
            margin: 0.06rem 0 0.16rem 0;
            text-align: center;
            color: $content-font-color;
        }
    }
}

.gap {
    margin: 0 -0.18rem;
    height: 0.01rem;
    background: $content-bgColor;
}
</style>
