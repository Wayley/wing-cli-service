import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { ProvideAuth } from '@/hooks/useAuth';
import Cookies from 'js-cookie';
import routes from '@/routes';
function PrivateRoute({ children, ...rest }) {
  const isAuthenticated = Cookies.get('token');
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
function RenderRoute({ privateRoute, children, ...rest }) {
  return privateRoute ? (
    <PrivateRoute {...rest}>{children}</PrivateRoute>
  ) : (
    <Route {...rest}>{children}</Route>
  );
}
function RenderPage({ Wrapper, children, ...rest }) {
  return Wrapper ? <Wrapper {...rest}>{children}</Wrapper> : <>{children}</>;
}

export default function AuthenticRouter() {
  const basename = window.__POWERED_BY_QIANKUN__ ? '/react16' : '/';
  return (
    <ProvideAuth>
      <Router basename={basename}>
        <Switch>
          {routes &&
            routes.map((route) => (
              <RenderRoute {...route} key={route.path}>
                <RenderPage
                  Wrapper={route.Layout}
                  children={<RenderPage Wrapper={route.Page} />}
                />
              </RenderRoute>
            ))}
        </Switch>
      </Router>
    </ProvideAuth>
  );
}
