import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import Cookies from 'js-cookie';
import './Login.css';
const idsProxy = '/ids';
function LoginPage() {
  let history = useHistory();
  let location = useLocation();
  const [loading, setLoading] = useState(false);
  const [verification, setVerification] = useState(`${idsProxy}/verification`);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [verifyCode, setVerifyCode] = useState('');

  let auth = useAuth();

  let { from } = location.state || { from: { pathname: '/' } };
  let login = () => {
    setLoading(true);
    let form = new FormData();
    form.append('username', username);
    form.append('password', password);
    form.append('verifyCode', verifyCode);
    fetch(`${idsProxy}/login`, {
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
          auth.setState({
            account: username,
            token: access_token,
          });
          Cookies.set('token', access_token);
          Cookies.set('account', username);
          setLoading(false);
          history.replace(from);
        } else {
          setVerification(`${idsProxy}/verification?t=${new Date().getTime()}`);
        }
      });
  };

  return (
    <div className="login-page">
      <p>You must log in to view the page at: :{from.pathname}</p>

      <div>
        用户名：
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        密码：
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        验证码：
        <input
          type="text"
          value={verifyCode}
          onChange={(e) => setVerifyCode(e.target.value)}
        />
        <img
          src={verification}
          alt=""
          onClick={() =>
            setVerification(
              `${idsProxy}/verification?t=${new Date().getTime()}`
            )
          }
        />
      </div>
      <button onClick={login}>{loading ? 'Logging in...' : 'Log in'}</button>
    </div>
  );
}

export default LoginPage;
