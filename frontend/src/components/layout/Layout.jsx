import { Helmet } from 'react-helmet';
import Navbar from '../ui/Navbar';
import Footer from '../ui/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>TEST-MERN</title>
        <link rel='canonical' href='https://events-test-mern' />
      </Helmet>

      <Navbar />
      <main>
        {children}
      </main>
      <Footer />

    </>
  )
}

export default Layout;