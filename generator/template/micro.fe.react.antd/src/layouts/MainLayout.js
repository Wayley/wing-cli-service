import { useState } from 'react';
import { Layout } from 'antd';
import Icon, { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import SiderMenu from '@/components/SiderMenu';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
const { Content, Sider } = Layout;
const CollapsedIcon = (props) => {
  const { collapsed, onClick } = props;
  return (
    <div
      className="side-collapsed-button"
      style={{ textAlign: collapsed ? 'center' : 'right' }}
      onClick={onClick}
    >
      <Icon
        component={collapsed ? MenuUnfoldOutlined : MenuFoldOutlined}
        style={{ fontSize: '18px' }}
        {...props}
      />
    </div>
  );
};
function MainLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="main-layout">
      <Sider
        className="main-layout-sider"
        collapsed={collapsed}
        breakpoint="lg"
        collapsedWidth="48"
      >
        <div className="sider-logo">LOGO</div>
        <SiderMenu />
        <CollapsedIcon
          collapsed={collapsed ? 1 : 0}
          onClick={() => setCollapsed(!collapsed)}
        />
      </Sider>
      <Layout className="main-layout-wrapper">
        <Header />
        <Content className="main-layout-container">
          <div style={{ flex: 'auto' }}>{children}</div>
          <Footer />
        </Content>
      </Layout>
    </Layout>
  );
}

export default MainLayout;
