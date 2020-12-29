import './public-path';
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

let instance = null;

function render(props = {}) {
  const { container } = props;
  instance = new Vue({
    router,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');
}
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}
export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}

export async function mount(props) {
  console.log('[vue] props from main framework', props);
  render(props);
}

export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
}
