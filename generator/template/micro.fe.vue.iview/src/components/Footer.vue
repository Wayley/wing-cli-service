<template>
  <div class="global-footer">
    Copyright © <span>{{ copyright }}</span> 2019-{{ new Date().getFullYear() }}
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
  font-weight: normal;
  font-size: 17px;
  text-align: center;
  margin: 20px 0;
  span {
    color: #2d8cf0;
  }
}
</style>
