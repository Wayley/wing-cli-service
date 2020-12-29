import React, { useContext, createContext, useState } from 'react';
import Cookies from 'js-cookie';

const authContext = createContext();

function useProvideAuth() {
  // 初始化的token
  const token = Cookies.get('token');
  const account = Cookies.get('account');
  const [state, setState] = useState({ token, account });
  return {
    state,
    setState,
  };
}
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
export function useAuth() {
  return useContext(authContext);
}
