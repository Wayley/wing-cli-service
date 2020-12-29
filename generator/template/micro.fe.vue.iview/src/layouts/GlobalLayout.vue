<template>
  <div class="global-layout">
    <div class="global-layout-wrapper">
      <slot></slot>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/Footer.vue';
export default {
  name: 'GlobalLayout',
  components: { Footer },
};
</script>
<style lang="less" scoped>
.global-layout {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.global-layout-wrapper {
  flex: 1;
}
</style>
