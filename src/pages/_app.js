
import '@/styles/globals.css';
import '@/styles/general.css';
import '@/styles/local.css';
import '@/styles/specific.css';
import '@/styles/util_classes.css';
import '@/styles/global-page.css';
import '@/styles/women-ministry.css';
import '@/styles/leadership-development.css';
import "../styles/compassion-and-relief.css";
import "../styles/give.css";
import { Toaster } from "react-hot-toast";

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#111",
            color: "#fff",
            borderRadius: "10px",
            fontSize: "14px",
          },
        }}
      />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
