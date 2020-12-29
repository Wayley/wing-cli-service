import Vue from 'vue';
import VueRouter from 'vue-router';
import JsCookie from 'js-cookie';

import routes from './routes';
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = JsCookie.get('token');
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      next({
        path: '/login',
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  } else {
    next();
  }
});
export default router;
