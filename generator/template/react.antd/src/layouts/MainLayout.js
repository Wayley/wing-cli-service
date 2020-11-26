import SiderMenu from '@/components/SiderMenu';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function MainLayout({ children }) {
  return (
    <div className="main-layout">
      <aside className="main-layout-sider">
        <div>LOGO</div>
        <SiderMenu />
        <div>ICON</div>
      </aside>
      <section className="main-layout-wrapper">
        <header className="main-layout-header">
          <Header></Header>
        </header>

        <section className="main-layout-container">
          <div style={{ flex: 'auto' }}>{children}</div>
          <Footer />
        </section>
      </section>
    </div>
  );
}

export default MainLayout;
