import Head from 'next/head';
import clsx from 'clsx';
import { HtmlHTMLAttributes } from 'react';
import { Header } from '../header';
import { Footer } from '../footer';

const defaultTitle = 'Watheia Labs | A technology partner that delivers.';

/* eslint-disable-next-line */
export interface LayoutProps extends HtmlHTMLAttributes<HTMLDivElement> {
  title?: string;
}

export function Layout({
  className,
  children,
  title = defaultTitle,
  ...props
}: LayoutProps) {
  return (
    <div className={clsx('min-h-screen bg-gray-50', className)} {...props}>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
