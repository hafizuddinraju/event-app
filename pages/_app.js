import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import AuthProvider from "../context/AuthProvider";
import ProtectRoute from "../layout/ProtectRoute";
import "../styles/globals.css";

const noAuthRequired = ["/", "/login", "/signup"];
export default function App({ Component, pageProps }) {
  const queryDataClient = new QueryClient();
  const router = useRouter();
  return (
    <>
      <QueryClientProvider client={queryDataClient}>
        <AuthProvider>
          <Navbar></Navbar>
          <ToastContainer position="top-center" />
          {/* {noAuthRequired.includes(router.pathname) ? (
            <Component {...pageProps} />
          ) : ( */}
            {/* <ProtectRoute> */}
              <Component {...pageProps} />
            {/* </ProtectRoute> */}
          {/* )} */}

          <Footer></Footer>
        </AuthProvider>
      </QueryClientProvider>
    </>
  );
}
