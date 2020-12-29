<template>
  <div class="global-footer">
    Copyright © {{ copyright }} 2019-{{ new Date().getFullYear() }}
  </div>
</template>

<script>
import { copyright } from '@root/package.json';
export default {
  name: 'Footer',
  data() {
    return {
      copyright,
    };
  },
};
</script>

<style lang="less" scoped>
.global-footer {
  font-size: 18px;
  text-align: center;
  margin: 20px 0;
}
</style>
