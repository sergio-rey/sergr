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
      <style jsx>{`
        main {
          margin: 0 150px;
          width: calc(100% - 300px);
        }
        @media only screen and (max-width: 1080px) {
          main {
            width: calc(100% - 240px);
            margin: 0 120px;
          }
        }
        @media only screen and (max-width: 770px) {
          main {
            width: calc(100% - 150px);
            margin: 0 75px;
          }
        }
      `}</style>
    </>
  );
}
