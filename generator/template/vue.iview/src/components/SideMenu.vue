<template>
  <Menu
    class="global-side-menu"
    :open-names="openNames"
    :active-name="$route.path"
    width="auto"
    accordion
    @on-select="(path) => $router.push(path)"
  >
    <Submenu name="sub_example">
      <template slot="title">
        <Icon type="ios-paper" />Navigation Base
      </template>
      <MenuItem name="/">Index Page</MenuItem>
      <MenuItem name="/auth">Auth Page</MenuItem>
      <MenuItem name="/login">Login Page</MenuItem>
      <MenuItem name="/role">Role Page</MenuItem>
      <MenuItem name="/proxy">Proxy Page</MenuItem>
    </Submenu>
    <Submenu name="sub1">
      <template slot="title">
        <Icon type="ios-paper" />Navigation One
      </template>
      <MenuItem name="1">Option 1</MenuItem>
      <MenuItem name="2">Option 2</MenuItem>
      <MenuItem name="3">Option 3</MenuItem>
      <MenuItem name="4">Option 4</MenuItem>
    </Submenu>
    <Submenu name="sub2">
      <template slot="title">
        <Icon type="ios-filing" />Navigation Two
      </template>
      <MenuItem name="5">Option 5</MenuItem>
      <MenuItem name="6">Option 6</MenuItem>
      <Submenu name="sub3">
        <template slot="title">Submenu</template>
        <MenuItem name="7">Option 7</MenuItem>
        <MenuItem name="8">Option 8</MenuItem>
      </Submenu>
    </Submenu>
    <Submenu name="sub4">
      <template slot="title">
        <Icon type="ios-stats" />Navigation Three
      </template>
      <MenuItem name="9">Option 9</MenuItem>
      <MenuItem name="10">Option 10</MenuItem>
      <MenuItem name="11">Option 11</MenuItem>
      <MenuItem name="12">Option 12</MenuItem>
    </Submenu>
    <MenuItem name="13"><Icon type="ios-apps" />Option 13</MenuItem>
  </Menu>
</template>

<script>
const menu = [
  {
    path: '/',
    label: 'Index Page',
  },
  {
    path: '/auth',
    label: 'Auth Page',
  },
  {
    path: '/role',
    label: 'Role Page',
  },
  {
    path: '/proxy',
    label: 'Proxy Page',
  },
  {
    path: '/login',
    label: 'Login Page',
  },
];
const menu2 = [
  {
    path: '/',
    label: 'Index Page',
  },
  {
    path: '/auth',
    label: 'Auth Page',
  },
  {
    path: '/role',
    label: 'Role Page',
  },
  {
    path: '/proxy',
    label: 'Proxy Page',
  },
  {
    path: '/login',
    label: 'Login Page',
  },
  {
    path: '/',
    label: 'Index Page',
  },
  {
    path: '/auth',
    label: 'Auth Page',
  },
  {
    path: '/role',
    label: 'Role Page',
  },
  {
    path: '/proxy',
    label: 'Proxy Page',
  },
  {
    path: '/login',
    label: 'Login Page',
  },
  {
    path: '/',
    label: 'Index Page',
  },
  {
    path: '/auth',
    label: 'Auth Page',
  },
  {
    path: '/role',
    label: 'Role Page',
  },
  {
    path: '/proxy',
    label: 'Proxy Page',
  },
  {
    path: '/login',
    label: 'Login Page',
  },
  {
    path: '/',
    label: 'Index Page',
  },
  {
    path: '/auth',
    label: 'Auth Page',
  },
  {
    path: '/role',
    label: 'Role Page',
  },
  {
    path: '/proxy',
    label: 'Proxy Page',
  },
  {
    path: '/login',
    label: 'Login Page',
  },
  {
    path: '/',
    label: 'Index Page',
  },
  {
    path: '/auth',
    label: 'Auth Page',
  },
  {
    path: '/role',
    label: 'Role Page',
  },
  {
    path: '/proxy',
    label: 'Proxy Page',
  },
  {
    path: '/login',
    label: 'Login Page',
  },
  {
    path: '/',
    label: 'Index Page',
  },
  {
    path: '/auth',
    label: 'Auth Page',
  },
  {
    path: '/role',
    label: 'Role Page',
  },
  {
    path: '/proxy',
    label: 'Proxy Page',
  },
  {
    path: '/login',
    label: 'Login Page',
  },
  {
    path: '/',
    label: 'Index Page',
  },
  {
    path: '/auth',
    label: 'Auth Page',
  },
  {
    path: '/role',
    label: 'Role Page',
  },
  {
    path: '/proxy',
    label: 'Proxy Page',
  },
  {
    path: '/login',
    label: 'Login Page',
  },
  {
    path: '/',
    label: 'Index Page',
  },
  {
    path: '/auth',
    label: 'Auth Page',
  },
  {
    path: '/role',
    label: 'Role Page',
  },
  {
    path: '/proxy',
    label: 'Proxy Page',
  },
  {
    path: '/login',
    label: 'Login Page',
  },
  {
    path: '/',
    label: 'Index Page',
  },
  {
    path: '/auth',
    label: 'Auth Page',
  },
  {
    path: '/role',
    label: 'Role Page',
  },
  {
    path: '/proxy',
    label: 'Proxy Page',
  },
  {
    path: '/login',
    label: 'Login Page',
  },
  {
    path: '/',
    label: 'Index Page',
  },
  {
    path: '/auth',
    label: 'Auth Page',
  },
  {
    path: '/role',
    label: 'Role Page',
  },
  {
    path: '/proxy',
    label: 'Proxy Page',
  },
  {
    path: '/login',
    label: 'Login Page',
  },
  {
    path: '/',
    label: 'Index Page',
  },
  {
    path: '/auth',
    label: 'Auth Page',
  },
  {
    path: '/role',
    label: 'Role Page',
  },
  {
    path: '/proxy',
    label: 'Proxy Page',
  },
  {
    path: '/login',
    label: 'Login Page',
  },
  {
    path: '/',
    label: 'Index Page',
  },
  {
    path: '/auth',
    label: 'Auth Page',
  },
  {
    path: '/role',
    label: 'Role Page',
  },
  {
    path: '/proxy',
    label: 'Proxy Page',
  },
  {
    path: '/login',
    label: 'Login Page',
  },
  {
    path: '/',
    label: 'Index Page',
  },
  {
    path: '/auth',
    label: 'Auth Page',
  },
  {
    path: '/role',
    label: 'Role Page',
  },
  {
    path: '/proxy',
    label: 'Proxy Page',
  },
  {
    path: '/login',
    label: 'Login Page',
  },
  {
    path: '/',
    label: 'Index Page',
  },
  {
    path: '/auth',
    label: 'Auth Page',
  },
  {
    path: '/role',
    label: 'Role Page',
  },
  {
    path: '/proxy',
    label: 'Proxy Page',
  },
  {
    path: '/login',
    label: 'Login Page',
  },
  {
    path: '/',
    label: 'Index Page',
  },
  {
    path: '/auth',
    label: 'Auth Page',
  },
  {
    path: '/role',
    label: 'Role Page',
  },
  {
    path: '/proxy',
    label: 'Proxy Page',
  },
  {
    path: '/login',
    label: 'Login Page',
  },
  {
    path: '/',
    label: 'Index Page',
  },
  {
    path: '/auth',
    label: 'Auth Page',
  },
  {
    path: '/role',
    label: 'Role Page',
  },
  {
    path: '/proxy',
    label: 'Proxy Page',
  },
  {
    path: '/login',
    label: 'Login Page',
  },
  {
    path: '/',
    label: 'Index Page',
  },
  {
    path: '/auth',
    label: 'Auth Page',
  },
  {
    path: '/role',
    label: 'Role Page',
  },
  {
    path: '/proxy',
    label: 'Proxy Page',
  },
  {
    path: '/login',
    label: 'Login Page',
  },
  {
    path: '/',
    label: 'Index Page',
  },
  {
    path: '/auth',
    label: 'Auth Page',
  },
  {
    path: '/role',
    label: 'Role Page',
  },
  {
    path: '/proxy',
    label: 'Proxy Page',
  },
  {
    path: '/login',
    label: 'Login Page',
  },
  {
    path: '/',
    label: 'Index Page',
  },
  {
    path: '/auth',
    label: 'Auth Page',
  },
  {
    path: '/role',
    label: 'Role Page',
  },
  {
    path: '/proxy',
    label: 'Proxy Page',
  },
  {
    path: '/login',
    label: 'Login Page',
  },
  {
    path: '/',
    label: 'Index Page',
  },
  {
    path: '/auth',
    label: 'Auth Page',
  },
  {
    path: '/role',
    label: 'Role Page',
  },
  {
    path: '/proxy',
    label: 'Proxy Page',
  },
  {
    path: '/login',
    label: 'Login Page',
  },
];
export default {
  name: 'Footer',
  data() {
    return {
      menu,
      list: menu.concat(menu2),
    };
  },
  computed: {
    openNames() {
      return ['sub_example'];
    },
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.global-side-menu {
  flex: 1;
  overflow-y: auto;
  // width: 100%;
}
</style>
