import "@/styles/globals.css";
import NavbarOutreach from "@/components/navbarOutreach";
import Footer from "@/components/footer";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavbarOutreach/>
      <Head>
        <title>CETSD - IIT Jodhpur</title>
      </Head>
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}
