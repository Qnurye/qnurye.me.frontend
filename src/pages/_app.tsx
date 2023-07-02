import '../app/globals.css'
import type { AppProps } from "next/app";
import { ReactNode } from "react";
import { NextPage } from "next";
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

type Page<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactNode) => ReactNode;
};

type Props = AppProps & {
  Component: Page;
};

const App = ({ Component, pageProps }: Props) => {
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);
  return getLayout(
      <main className={`scroll-smooth ${roboto.className}`}>
        <Component {...pageProps} />
      </main>
  );
};
export default App;