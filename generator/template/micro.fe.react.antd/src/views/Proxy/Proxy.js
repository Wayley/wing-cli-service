import { useState } from 'react';
import './Proxy.less';
const IDS_PROXY = process.env.REACT_APP_PROXY_IN_DEV_IDS || '';
const FUS_PROXY = process.env.REACT_APP_PROXY_IN_DEV_FUS || '';

function ProxyPage() {
  const [verification, setVerification] = useState(`${IDS_PROXY}/verification`);
  const [verifyCode, setVerifyCode] = useState('');

  function testLogin() {
    let form = new FormData();
    form.append('username', 'U20200901');
    form.append('password', '');
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
        console.log(res);
      });
  }
  function testGetUrl() {
    fetch(`${FUS_PROXY}/fus/ota/getOssUploadUrl?contentType=image`)
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        console.log(res);
      });
  }

  return (
    <div className="proxy-page">
      <div className="proxy-page-item">
        代理到 IDS ( http://121.40.88.181:48279 )
        <div>
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
                `${IDS_PROXY}/verification?t=${new Date().getTime()}`
              )
            }
          />
          <button onClick={testLogin}>测试登录</button>
        </div>
      </div>
      <div className="proxy-page-item">
        代理到 fus ( http://121.40.88.181:16088 )
        <div>
          <button onClick={testGetUrl}>测试获取上传URL</button>
        </div>
      </div>
    </div>
  );
}

export default ProxyPage;
