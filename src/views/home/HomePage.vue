<template>
  <div class="wrapper">
    <StaticPart />
    <NearBy />
    <div class="spacer"></div>
  </div>
  <DockerPart />
</template>

<script>
import StaticPart from './StaticPart.vue'
import NearBy from './NearBy.vue'
import DockerPart from './DockerPart.vue'
export default {
  name: 'HomeView',
  components: { StaticPart, NearBy, DockerPart }
}
</script>

<style lang="scss" scoped>
.wrapper {
  overflow-y: scroll;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0.05rem;
  right: 0;
  padding: 0 0.18rem 0.3rem 0.18rem;
}

.spacer {
  height: 0.4rem;
  width: 100%;
}
</style>
