import Head from "next/head";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { type ReactElement, type ReactNode } from "react";

import "../styles/base.css";
import "../styles/vars.css";
import "../styles/global.css";

export type NextPageWithLayout<P = unknown, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & { Component: NextPageWithLayout };

const queryClient = new QueryClient();
function MyApp({ Component, pageProps }: AppPropsWithLayout): ReactElement {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />

        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
