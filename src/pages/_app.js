import '@lkmx/flare';
import '@/styles/globals.scss';
import { Roboto_Condensed, IBM_Plex_Sans, Inter, Syne } from 'next/font/google';
import Head from 'next/head';
import { useEffect } from 'react';

const syne = Syne({
    subsets: ['latin'],
    weight: ['700'],
    variable: '--lk-font-syne',
  });
const roboto = Roboto_Condensed({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--lk-font-roboto'
})
const ibm = IBM_Plex_Sans({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--lk-font-ibm'
})
const inter = Inter({
    subsets: ['latin'],
    weight: ['800'],
    variable: '--lk-font-inter'
})

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const handlePopState = () => {
      window.location.reload();
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'auto';
      }
    };
  }, []);
  return (
    <>
      <Head>
        {/* Head content if needed */}
      </Head>
      <div className={`${roboto.variable} ${ibm.variable} ${inter.variable} ${syne.variable}`}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;