import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Menu } from 'antd';
import {
  BorderOuterOutlined,
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;
const rootSubmenuKeys = ['sub_example', 'sub1', 'sub2', 'sub4'];
export default function SiderMenu() {
  const history = useHistory();
  const [openKeys, setOpenKeys] = useState(['sub_example']);
  const [selectedKeys, setSelectedKeys] = useState('');

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  const onClick = ({ key, keyPath }) => {
    keyPath.indexOf('sub_example') > -1 && history.push(key);
    setSelectedKeys(key);
  };
  return (
    <Menu
      className="side-menus"
      mode="inline"
      openKeys={openKeys}
      selectedKeys={selectedKeys}
      onOpenChange={onOpenChange}
      onClick={onClick}
    >
      <SubMenu
        key="sub_example"
        icon={<BorderOuterOutlined />}
        title="Navigation Base"
      >
        <Menu.Item key="/">Index Page</Menu.Item>
        <Menu.Item key="/auth">Auth Page</Menu.Item>
        <Menu.Item key="/login">Login Page</Menu.Item>
        <Menu.Item key="/protected">Protected Page</Menu.Item>
        <Menu.Item key="/role">Role Page</Menu.Item>
        <Menu.Item key="/proxy">Proxy Page</Menu.Item>
      </SubMenu>
      <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
        <Menu.Item key="1">Option 1</Menu.Item>
        <Menu.Item key="2">Option 2</Menu.Item>
        <Menu.Item key="3">Option 3</Menu.Item>
        <Menu.Item key="4">Option 4</Menu.Item>
      </SubMenu>
      <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
        <Menu.Item key="5">Option 5</Menu.Item>
        <Menu.Item key="6">Option 6</Menu.Item>
        <SubMenu key="sub3" title="Submenu">
          <Menu.Item key="7">Option 7</Menu.Item>
          <Menu.Item key="8">Option 8</Menu.Item>
        </SubMenu>
      </SubMenu>
      <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
        <Menu.Item key="9">Option 9</Menu.Item>
        <Menu.Item key="10">Option 10</Menu.Item>
        <Menu.Item key="11">Option 11</Menu.Item>
        <Menu.Item key="12">Option 12</Menu.Item>
      </SubMenu>
    </Menu>
  );
}
