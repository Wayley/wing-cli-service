<template>
  <div class="role-list-page">
    <div v-for="item in list" :key="item">{{ item }}</div>
    Role List Page
  </div>
</template>

<script>
const list = [];
for (let i = 1; i < 100; i++) {
  list.push(`${i}-role-item`);
}
export default {
  name: 'RoleListPage',
  data() {
    return {
      list,
    };
  },
};
</script>
<style lang="less" scoped>
.role-list-page {
  text-align: center;
  div {
    margin: 10px 0;
  }
}
</style>
