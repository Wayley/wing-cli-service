import { useHistory, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Button } from 'antd';

import { useAuth } from '@/hooks/useAuth';
import { name } from '@root/package.json';
export default function Header(props) {
  let history = useHistory();
  let auth = useAuth();
  let { state, setState } = auth;
  // 具体取何key值 根据loginPage的setState而定
  const { account, token } = state;

  // 退出时记忆当前path 再次登录后直接跳转到退出之前的路由页面
  let location = useLocation();
  let { pathname } = location || { pathname: '/' };
  let logout = () => {
    // 模拟登出请求
    setTimeout(() => {
      // 清空state
      setState({});
      // 清除cookie; TODO:
      Cookies.remove('token');
      Cookies.remove('account');
      Cookies.remove('SESSION');
      history.push(pathname);
    }, 500);
  };
  return token ? (
    <div className="main-layout-header" {...props}>
      <div class="demo">
        <b>` {name} `</b> Rendered With `React`
      </div>
      <div className="main-layout-header-right">
        <div className="main-layout-header-right-item"> {account} </div>
        <Button onClick={logout}>Sign out</Button>
      </div>
    </div>
  ) : (
    <p>You are not logged in.</p>
  );
}
