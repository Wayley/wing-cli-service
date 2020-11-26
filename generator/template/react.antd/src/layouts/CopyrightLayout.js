import Footer from '@/components/Footer';

export default function CopyrightLayout({ children }) {
  return (
    <div className="copyright-layout">
      <div className="copyright-layout-wrapper">{children}</div>
      <div className="copyright-layout-footer">
        <Footer />
      </div>
    </div>
  );
}
