const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      layout: 'main-layout',
      requiresAuth: true,
    },
    component: () => import('../views/Base/Welcome.vue'),
  },
  {
    path: '/auth',
    name: 'auth',
    meta: {
      layout: 'global-layout',
      requiresAuth: false,
    },
    component: () => import('../views/Base/Auth.vue'),
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      layout: 'global-layout',
      requiresAuth: false,
    },
    component: () => import('../views/Base/Login.vue'),
  },
  {
    path: '/proxy',
    name: 'proxy',
    meta: {
      layout: 'main-layout',
      requiresAuth: true,
    },
    component: () => import('../views/Base/Proxy.vue'),
  },
  {
    path: '/role',
    name: 'role',
    meta: {
      layout: 'main-layout',
      requiresAuth: true,
    },
    component: () => import('../views/System/Role/RoleList.vue'),
  },
  {
    path: '/404',
    name: 'noMatch',
    meta: {
      layout: 'global-layout',
      requiresAuth: false,
    },
    component: () => import('../views/Base/NoMatch.vue'),
  },
];
export default [...routes, { path: '*', redirect: '/404' }];
