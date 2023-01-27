import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import AuthProvider from "../context/AuthProvider";
import "../styles/globals.css";


export default function App({ Component, pageProps }) {
  const queryDataClient = new QueryClient();
  const router = useRouter();
  return (
    <>
      <QueryClientProvider client={queryDataClient}>
        <AuthProvider>
          <Navbar></Navbar>
          <ToastContainer position="top-center" />
          
              <Component {...pageProps} />
           


          <Footer></Footer>
        </AuthProvider>
      </QueryClientProvider>
    </>
  );
}
