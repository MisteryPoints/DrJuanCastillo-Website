import "../styles/globals.css";
import { Playfair_Display } from "next/font/google";
import Head from "next/head";

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className={playfair.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
