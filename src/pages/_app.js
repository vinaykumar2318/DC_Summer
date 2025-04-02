import "@/styles/globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar/>
      <Head>
        <title>CETSD - IIT Jodhpur</title>
      </Head>
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}
