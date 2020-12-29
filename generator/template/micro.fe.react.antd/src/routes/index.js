import MainLayout from '@/layouts/MainLayout';
import CopyrightLayout from '@/layouts/CopyrightLayout';

import WelcomePage from '@/views/Welcome';
import NoMatchPage from '@/views/NoMatch';
import AuthPage from '@/views/Auth/Auth';
import LoginPage from '@/views/Login/Login';
import RolePage from '@/views/Role/Role';
import ProxyPage from '@/views/Proxy/Proxy';

const routes = [
  {
    path: '/',
    privateRoute: true, // 是否需要鉴权路由
    exact: true,
    Layout: MainLayout,
    Page: WelcomePage,
  },
  {
    path: '/auth',
    Page: AuthPage,
  },
  {
    path: '/login',
    Layout: CopyrightLayout,
    Page: LoginPage,
  },
  {
    path: '/protected',
    privateRoute: true,
    Layout: MainLayout,
    Page: () => <div>Protected Page</div>,
  },
  {
    path: '/role',
    privateRoute: true,
    Layout: MainLayout,
    Page: RolePage,
  },
  {
    path: '/proxy',
    privateRoute: true,
    Layout: MainLayout,
    Page: ProxyPage,
  },
  {
    path: '*',
    Page: NoMatchPage,
  },
];

export default routes;
