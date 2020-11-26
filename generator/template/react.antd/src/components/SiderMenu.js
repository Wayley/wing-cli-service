import { Link } from 'react-router-dom';
export default function SiderMenu() {
  const menus = [
    {
      path: '/auth',
      label: 'Auth Page',
    },
    {
      path: '/',
      label: 'Index Page',
    },
    {
      path: '/protected',
      label: 'Protected Page',
    },
    {
      path: '/role',
      label: 'Role Page',
    },
    {
      path: '/proxy',
      label: 'Proxy Page',
    },
  ];
  const testMenus = [
    {
      path: '/auth',
      label: 'Auth Page',
    },
    {
      path: '/',
      label: 'Index Page',
    },
    {
      path: '/protected',
      label: 'Protected Page',
    },
    {
      path: '/role',
      label: 'Role Page',
    },
    {
      path: '/auth',
      label: 'Auth Page',
    },
    {
      path: '/',
      label: 'Index Page',
    },
    {
      path: '/protected',
      label: 'Protected Page',
    },
    {
      path: '/role',
      label: 'Role Page',
    },
    {
      path: '/auth',
      label: 'Auth Page',
    },
    {
      path: '/',
      label: 'Index Page',
    },
    {
      path: '/protected',
      label: 'Protected Page',
    },
    {
      path: '/role',
      label: 'Role Page',
    },
    {
      path: '/auth',
      label: 'Auth Page',
    },
    {
      path: '/',
      label: 'Index Page',
    },
    {
      path: '/protected',
      label: 'Protected Page',
    },
    {
      path: '/role',
      label: 'Role Page',
    },
    {
      path: '/auth',
      label: 'Auth Page',
    },
    {
      path: '/',
      label: 'Index Page',
    },
    {
      path: '/protected',
      label: 'Protected Page',
    },
    {
      path: '/role',
      label: 'Role Page',
    },
    {
      path: '/auth',
      label: 'Auth Page',
    },
    {
      path: '/',
      label: 'Index Page',
    },
    {
      path: '/protected',
      label: 'Protected Page',
    },
    {
      path: '/role',
      label: 'Role Page',
    },
    {
      path: '/auth',
      label: 'Auth Page',
    },
    {
      path: '/',
      label: 'Index Page',
    },
    {
      path: '/protected',
      label: 'Protected Page',
    },
    {
      path: '/role',
      label: 'Role Page',
    },
    {
      path: '/auth',
      label: 'Auth Page',
    },
    {
      path: '/',
      label: 'Index Page',
    },
    {
      path: '/protected',
      label: 'Protected Page',
    },
    {
      path: '/role',
      label: 'Role Page',
    },
    {
      path: '/auth',
      label: 'Auth Page',
    },
    {
      path: '/',
      label: 'Index Page',
    },
    {
      path: '/protected',
      label: 'Protected Page',
    },
    {
      path: '/role',
      label: 'Role Page',
    },
    {
      path: '/auth',
      label: 'Auth Page',
    },
    {
      path: '/',
      label: 'Index Page',
    },
    {
      path: '/protected',
      label: 'Protected Page',
    },
    {
      path: '/role',
      label: 'Role Page',
    },
  ];
  return (
    <ul className="side-menus">
      {menus.concat(testMenus).map((menu, i) => (
        <li key={i}>
          <Link to={menu.path}>{menu.label}</Link>
        </li>
      ))}
    </ul>
  );
}
