import { Footer, Header } from '@waweb/components';
import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
// import config from '@waweb/config`

import { Fira_Sans_Condensed, Fira_Mono } from '@next/font/google';
import clsx from 'clsx';

const sansFont = Fira_Sans_Condensed({
  weight: ['300', '400', '700', '900'],
  style: ['italic', 'normal'],
  subsets: ['latin-ext'],
});

const monoFont = Fira_Mono({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['latin-ext'],
});

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Watheia Labs | A technology partner that delivers.</title>
      </Head>
      <Header />
      <main className={clsx(sansFont, monoFont)}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default CustomApp;
