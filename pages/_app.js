import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import AuthProvider from "../context/AuthProvider";
import "../styles/globals.css";
import { appWithTranslation } from "next-i18next"
import { useEffect } from "react";
import "../styles/Custom.css"
import Script from "next/script";


function App({ Component, pageProps }) {
  const queryDataClient = new QueryClient();
  const router = useRouter();

  const { isFallback, events } = useRouter()

  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element')
  }

  useEffect(() => {
    const id = 'google-translate-script'

    const addScript = () => {
      const s = document.createElement('script')
      s.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit')
      s.setAttribute('id', id)
      const q = document.getElementById(id)
      if (!q) {
        document.body.appendChild(s)
        window.googleTranslateElementInit = googleTranslateElementInit
      }
    }

    const removeScript = () => {
      const q = document.getElementById(id)
      if (q) q.remove()
      const w = document.getElementById('google_translate_element')
      if (w) w.innerHTML = ''
    }

    isFallback || addScript()

    events.on('routeChangeStart', removeScript)
    events.on('routeChangeComplete', addScript)

    return () => {
      events.off('routeChangeStart', removeScript)
      events.off('routeChangeComplete', addScript)
    }
  }, [])


  return (
    <>
      <QueryClientProvider client={queryDataClient}>
        <AuthProvider>
          <Navbar></Navbar>
          <ToastContainer position="top-center" />

          <div id="root">

            <Script
              strategy="lazyOnload"
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />

            <Script id="google-analytics-script" strategy="lazyOnload">
              {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
          page_path: window.location.pathname,
          });
    `}
            </Script>

            <Component {...pageProps} />

          </div>

          <Footer></Footer>
        </AuthProvider>
      </QueryClientProvider>
    </>
  );
}
export default appWithTranslation(App)