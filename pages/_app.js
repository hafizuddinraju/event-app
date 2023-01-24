import Navbar from '../components/Navbar/Navbar'
import AuthProvider from '../context/AuthProvider';
import '../styles/globals.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../components/Footer/Footer';
export default function App({ Component, pageProps }) {
  const queryDataClient = new QueryClient()
  return <>
    <QueryClientProvider client={queryDataClient}>
      <AuthProvider>
        <Navbar></Navbar>
        <ToastContainer position="top-center" />
        <Component {...pageProps} />
        <Footer></Footer>
      </AuthProvider>
    </QueryClientProvider>
  </>
}
