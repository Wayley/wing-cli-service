<template>
  <div class="main-layout">
    <Sider class="main-layout-aside" :width="260">
      <div style="text-align: center; padding: 17px 10px;">LOGO</div>
      <side-menu></side-menu>
      <div style="text-align: right; padding: 10px;">ICON</div>
    </Sider>
    <section class="main-layout-wrapper">
      <header class="main-layout-header">
        <button @click="logout">Log Out</button>
      </header>
      <section class="main-layout-container">
        <div style="flex: 1"><slot></slot></div>
        <Footer />
      </section>
    </section>
  </div>
</template>

<script>
import Footer from '../components/Footer.vue';
import SideMenu from '../components/SideMenu.vue';

export default {
  name: 'MainLayout',
  components: { Footer, SideMenu },
  methods: {
    logout() {
      this.$Cookie.remove('token');
      this.$Cookie.remove('account');
      this.$router.push('login');
    },
  },
};
</script>
<style lang="less" scoped>
.main-layout {
  display: flex;
  height: 100%;
}
.main-layout-aside {
  background-color: #ccc;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.main-layout-wrapper {
  flex: 1 1;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.main-layout-header {
  background-color: #aaa;
  text-align: right;
  padding: 15px 10px;
}
.main-layout-container {
  flex: 1 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}
</style>
