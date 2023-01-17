import Navbar from '../components/Navbar/Navbar'
import '../styles/globals.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function App({ Component, pageProps }) {
  const queryDataClient = new QueryClient()
  return <>
  <QueryClientProvider client={queryDataClient}>
    <Navbar></Navbar>
    <Component {...pageProps} />
  </QueryClientProvider>
  </>
}
