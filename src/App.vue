<template>
 <div>
  <div class="wrapper">
    <div class="position">
      <span class="iconfont position__icon">&#xe7f1;</span>
      北京联合大学北四环东路97号
      北京联合大学北四环东路97号北京联合大学北四环东路97号北京联合大学北四环东路97号北京联合大学北四环东路97号北京联合大学北四环东路97号
      <span class="iconfont position__notice">&#xe7c4;</span>
    </div>
  </div>
  <div class="docker">
    <div class="docker__item docker__item--active">
      <div class="iconfont">&#xe6d2;</div>
      <div class="docker__title">首页</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe6b1;</div>
      <div class="docker__title">购物车</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe612;</div>
      <div class="docker__title">订单</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe7bd;</div>
      <div class="docker__title">我的</div>
    </div>
  </div>
 </div>
</template>

<style lang="scss">
@import './style/viriable.scss';
@import './style/mixins.scss';
.wrapper{
  position:absolute;
  left: 0;
  top: 0;
  bottom: .5rem;
  right: 0;
  padding: 0 .18rem;
}
.position{
  position: relative;
  @include ellipsis;
  padding: .16rem .24rem .16rem 0;
  line-height: .22rem;
  font-size: .16rem;
  color: $content-font-color;
  .position__icon{
    position: relative;
    top: .01rem;
    font-size: .2rem;
  }

  .position__notice{
    position: absolute;
    right: 0;
    top: .17rem;
    font-size: .2rem;
  }
}
.docker{
  display: flex;
  box-sizing: border-box;
  padding: 0 .18rem;
  position:absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  border-top: .01rem solid #F1F1F1;
  color:$content-font-color;
  // docer 下的item元素
  &__item{
    flex: 1;
  text-align: center;
  .iconfont{
    margin: .07rem 0 .02rem 0;
    font-size: .18rem;
  }
  &--active{
    color: #1FA4FC;
  }
  }

  &__title{
    font-size: .2rem;
    transform: scale(0.5,0.5);
    transform-origin: center top;
  }
}
</style>
