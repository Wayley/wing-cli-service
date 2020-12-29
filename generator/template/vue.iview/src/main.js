import Vue from 'vue';
import JsCookie from 'js-cookie';
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

import App from './App.vue';
import router from './router';
import GlobalLayout from './layouts/GlobalLayout.vue';
import MainLayout from './layouts/MainLayout.vue';

Vue.config.productionTip = false;

Vue.use(ViewUI);

Object.defineProperty(Vue.prototype, '$Cookie', {
  get: function get() {
    return JsCookie;
  },
});

Vue.component('global-layout', GlobalLayout);
Vue.component('main-layout', MainLayout);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
