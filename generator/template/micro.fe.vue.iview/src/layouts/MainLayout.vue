<template>
  <div class="main-layout">
    <Sider class="main-layout-aside" :width="260">
      <div style="text-align: center; padding: 17px 10px;">LOGO</div>
      <side-menu></side-menu>
      <div style="text-align: right; padding: 10px;">ICON</div>
    </Sider>
    <section class="main-layout-wrapper">
      <header class="main-layout-header">
        <div class="demo">
          <b>` {{ appName }} `</b> Rendered With `Vue.js`
        </div>
        <div class="account">{{ $Cookie.get('account') }}</div>
        <Button @click="logout">Log Out</Button>
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
import { name } from '@root/package.json';

export default {
  name: 'MainLayout',
  components: { Footer, SideMenu },
  data() {
    return {
      appName: name,
    };
  },
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
@test-color: rgb(12, 196, 196);
.main-layout-header {
  height: 55px;
  background-color: #aaa;
  display: flex;
  align-items: center;
  padding: 0 10px;
  .account {
    color: @test-color;
    margin-left: 10px;
    margin-right: 10px;
  }
}
.demo {
  flex: 1;
  font-size: 16px;
  color: @test-color;
}
.main-layout-container {
  flex: 1 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  margin: 24px 16px 0;
}
</style>
