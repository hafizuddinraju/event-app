import Navbar from '../components/Navbar/Navbar'
import AuthProvider from '../context/AuthProvider';
import '../styles/globals.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function App({ Component, pageProps }) {
  const queryDataClient = new QueryClient()
  return <>
    <QueryClientProvider client={queryDataClient}>
      <AuthProvider>
        <Navbar></Navbar>
        <Component {...pageProps} />
      </AuthProvider>
    </QueryClientProvider>
  </>
}
