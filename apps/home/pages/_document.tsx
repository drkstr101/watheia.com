import Document, { Html, Head, Main, NextScript } from 'next/document';

const GA_VERIFICATION_ID = process.env['NEXT_PUBLIC_GA_VERIFICATION_ID'];

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <meta name="application-name" content="Watheia Labs" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="Watheia Labs" />
          <meta
            name="description"
            content="A capabilities test of the modern web"
          />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="msapplication-config" content="browserconfig.xml" />
          <meta name="msapplication-TileColor" content="#111" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#111" />

          <link rel="apple-touch-icon" href="apple-touch-icon.png" />

          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="favicon-16x16.png"
          />
          <link rel="manifest" href="manifest.json" />
          <link rel="mask-icon" href="safari-pinned-tab.svg" color="#5bbad5" />
          <link rel="shortcut icon" href="favicon.ico" />
          <meta name="google-site-verification" content={GA_VERIFICATION_ID} />
        </Head>
        <body className="bg-gray-50 transition-colors duration-100 ease-linear">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
