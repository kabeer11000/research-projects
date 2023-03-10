import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {Fragment} from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {

  return <Fragment>
    <Head>
      <link rel="manifest" href="/courses/manifest.json" />
    </Head>
    <Component {...pageProps} />
  </Fragment>
}

export default MyApp
