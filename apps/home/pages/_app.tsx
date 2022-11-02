import { Footer, Header } from '@waweb/components';
import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to home!</title>
      </Head>
      <Header />
      <main className="app">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default CustomApp;
