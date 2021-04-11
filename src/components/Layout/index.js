import Header from '../Header';
import Footer from '../Footer';
import './index.css';

function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
