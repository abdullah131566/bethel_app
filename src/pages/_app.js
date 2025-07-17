
import '@/styles/globals.css';
import '@/styles/general.css';
import '@/styles/local.css';
import '@/styles/specific.css';
import '@/styles/util_classes.css';
import '@/styles/global-page.css';
import '@/styles/women-ministry.css';
import '@/styles/leadership-development.css';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
