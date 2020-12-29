<template>
  <div class="proxy-page">
    <div class="proxy-env">
      <h2>VUE_APP_API: {{ VUE_APP_API }}</h2>
      <h2>VUE_APP_PAGE_SIZE: {{ VUE_APP_PAGE_SIZE }}</h2>
    </div>
    <div class="proxy-page-item">
      代理到 IDS ( http://121.40.88.181:48279 )
      <div>
        <input v-model="verifyCode" />
        <img :src="verification" @click="changeImg" />
        <button @click="testLogin">测试登录</button>
      </div>
    </div>
    <div class="proxy-page-item">
      代理到 fus ( http://121.40.88.181:16088 )
      <div>
        <button @click="testGetUrl">测试获取上传URL</button>
      </div>
    </div>
  </div>
</template>

<script>
const VUE_APP_API = process.env.VUE_APP_API;
const VUE_APP_PAGE_SIZE = process.env.VUE_APP_PAGE_SIZE;
const IDS_PROXY = process.env.VUE_APP_PROXY_IN_DEV_IDS || '';
const FUS_PROXY = process.env.VUE_APP_PROXY_IN_DEV_FUS || '';
export default {
  name: 'ProxyPage',
  data() {
    return {
      VUE_APP_API,
      VUE_APP_PAGE_SIZE,
      verification: `${IDS_PROXY}/verification`,
      verifyCode: '',
    };
  },
  methods: {
    changeImg() {
      this.verification = `${IDS_PROXY}/verification?t=${new Date().getTime()}`;
    },
    testLogin() {
      let form = new FormData();
      form.append('username', 'U20200901');
      form.append('password', '050058');
      form.append('verifyCode', this.verifyCode);
      fetch(`${IDS_PROXY}/login`, {
        method: 'POST',
        body: form,
        credentials: 'include',
      })
        .then((response) => {
          return response.json();
        })
        .then((res) => {
          console.log(res);
        });
    },
    testGetUrl() {
      fetch(`${FUS_PROXY}/fus/ota/getOssUploadUrl?contentType=image`)
        .then((response) => {
          return response.json();
        })
        .then((res) => {
          console.log(res);
        });
    },
  },
};
</script>
<style lang="less" scoped>
.proxy-page {
  .proxy-page-item {
    display: flex;
    align-items: flex-end;
    border: 1px solid #ccc;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;
    padding: 20px;
    margin-top: 30px;
    input {
      height: 24px;
      margin-left: 10px;
      padding-left: 6px;
      outline: none;
    }
    img,
    button {
      height: 30px;
      vertical-align: bottom;
      margin-left: 10px;
    }
    button {
      cursor: pointer;
    }
  }
}
</style>
