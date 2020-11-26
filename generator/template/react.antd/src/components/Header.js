import { useHistory, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';

import { useAuth } from '@/hooks/useAuth';

export default function Header() {
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
    <div>
      欢迎 <span style={{ color: '#1890ff' }}> {account} </span>
      <button onClick={logout}>Sign out</button>
    </div>
  ) : (
    <p>You are not logged in.</p>
  );
}
