<template>
  <div>
    Role Detail Page
    <p>roleId：{{ roleId }}</p>
  </div>
</template>

<script>
export default {
  name: 'RoleDetailPage',
  data() {
    return {};
  },
  computed: {
    roleId() {
      return this.$route.params.id;
    },
  },
};
</script>
<style lang="less" scoped></style>
