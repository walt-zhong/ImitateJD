<template>
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
</template>
<script>
export default {
  name: 'DockerPart'
}
</script>

<style lang="scss">
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
