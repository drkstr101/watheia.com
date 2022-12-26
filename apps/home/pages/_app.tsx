import { Fira_Mono, Fira_Sans_Condensed } from '@next/font/google';
import { Layout } from '@waweb/components';
import clsx from 'clsx';
import { AppProps } from 'next/app';
import './styles.css';

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
    <Layout className={clsx(sansFont, monoFont)}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default CustomApp;
