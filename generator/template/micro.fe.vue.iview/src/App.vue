<template>
  <div id="app">
    <component v-bind:is="layout">
      <router-view></router-view>
    </component>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {};
  },
  computed: {
    layout() {
      return this.$route.meta.layout;
    },
  },
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
html,
body,
#app {
  height: 100%;
}
*::-webkit-scrollbar {
  width: 2px;
  height: 4px;
}

*::-webkit-scrollbar-thumb {
  border-radius: 15px;
  background: @theme-color;
}

*::-webkit-scrollbar-track {
  border-radius: 15px;
  background: #ededed;
}
/* ****************************** View-Design Style Coverage ****************************** */
.ivu-layout-sider {
  .ivu-layout-sider-children {
    display: flex;
    flex-direction: column;
  }
  .ivu-menu-vertical.ivu-menu-light:after {
    content: none;
  }
}
</style>
