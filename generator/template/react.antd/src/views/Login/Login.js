import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { useAuth } from '@/hooks/useAuth';
import Cookies from 'js-cookie';
import './Login.less';
const idsProxy = process.env.REACT_APP_PROXY_IN_DEV_IDS;
const layout = {
  labelCol: {
    span: 7,
  },
  wrapperCol: {
    span: 17,
  },
};
function commonRule(label) {
  return {
    required: true,
    message: `Please input your ${label}!`,
  };
}
function LoginPage() {
  let history = useHistory();
  let location = useLocation();
  const [loading, setLoading] = useState(false);
  const [verification, setVerification] = useState(`${idsProxy}/verification`);

  let auth = useAuth();

  let { from } = location.state || { from: { pathname: '/' } };

  const onFinish = ({ username, password, verifyCode }) => {
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
          setLoading(false);
          setVerification(`${idsProxy}/verification?t=${new Date().getTime()}`);
        }
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className="login-page">
      <div className="login-page-wrapper">
        <p>You must log in to view the page at: :{from.pathname}</p>
        <Form
          {...layout}
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[commonRule('username')]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[commonRule('password')]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="VerifyCode"
            name="verifyCode"
            rules={[commonRule('verifyCode')]}
          >
            <div className="login-form-item-verify">
              <Input />
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
          </Form.Item>

          <Form.Item
            wrapperCol={{
              span: 24,
            }}
          >
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-submit"
            >
              {loading ? 'Logging in...' : 'Log in'}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default LoginPage;
