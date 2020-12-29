<template>
  <div class="login-page">
    <div class="login-page-wrapper">
      <p>You must log in to view the page at: :{{ redirect }}</p>

      <div class="login-form-item">
        用户名：<input type="text" v-model="formData.username" />
      </div>
      <div class="login-form-item">
        密 码：<input type="password" v-model="formData.password" />
      </div>
      <div class="login-form-item login-form-item-verify">
        验证码：<input type="text" v-model="formData.verifyCode" />
        <img :src="verification" alt="" @click="updateImg" />
      </div>
      <button class="login-form-submit" @click="login">
        {{ loading ? 'Logging in...' : 'Log in' }}
      </button>
    </div>
  </div>
</template>

<script>
const IDS_PROXY = process.env.VUE_APP_PROXY_IN_DEV_IDS || '';
export default {
  name: 'LoginPage',
  data() {
    return {
      loading: false,
      verification: `${IDS_PROXY}/verification`,
      formData: {
        username: '',
        password: '',
        verifyCode: '',
      },
    };
  },

  computed: {
    redirect() {
      return this.$route.query.redirect || '/';
    },
  },
  methods: {
    updateImg() {
      this.verification = `${IDS_PROXY}/verification?t=${new Date().getTime()}`;
    },
    login() {
      this.loading = true;
      const { username, password, verifyCode } = this.formData;
      let form = new FormData();
      form.append('username', username);
      form.append('password', password);
      form.append('verifyCode', verifyCode);
      fetch(`${IDS_PROXY}/login`, {
        method: 'POST',
        body: form,
        credentials: 'include',
      })
        .then((response) => {
          return response.json();
        })
        .then((res) => {
          if (res && res.code === 200) {
            const { username, access_token } = res.data;

            this.$Cookie.set('token', access_token);
            this.$Cookie.set('account', username);
            this.loading = false;
            this.$router.push(this.redirect);
          } else {
            this.loading = false;
            this.updateImg();
          }
        });
    },
  },
};
</script>
<style lang="less" scoped>
.login-page {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.login-form-item {
  padding-top: 10px;
  padding-bottom: 10px;
}
.login-form-item input {
  width: 230px;
  height: 24px;
}
.login-form-item-verify {
  display: flex;
}
.login-form-item-verify input {
  width: 170px;
}
.login-form-item-verify img {
  width: 60px;
}
.login-form-submit {
  background-color: #1890ff;
  height: 32px;
  width: 100%;
  margin-top: 20px;
  color: #fff;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  -ms-border-radius: 4px;
  -o-border-radius: 4px;
}
</style>
