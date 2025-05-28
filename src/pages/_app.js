import "@/styles/globals.css";
import NavbarOutreach from "@/components/navbarOutreach";
import NavbarMain from "@/components/navbarMain";
import Footer from "@/components/footer";
import Head from "next/head";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const path = router.pathname;

  const isOutreachRoute = path.startsWith("/outreach") || 
                          path.startsWith("/sustainability") || 
                          path.startsWith("/eventsContent") || 
                          path.startsWith("/newsContent");

  return (
    <>
      {isOutreachRoute ? <NavbarOutreach /> : <NavbarMain />}
      <Head>
        <title>CETSD - IIT Jodhpur</title>
      </Head>
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}
