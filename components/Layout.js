import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children, name }) {
  return (
    <>
      <Head>
        <title>{name ? `${name} | Sergio Rey ` : "Sergio Rey"}</title>
        <meta name="description" content="Personal website of Sergio Rey" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
