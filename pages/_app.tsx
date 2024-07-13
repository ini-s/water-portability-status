import Head from "next/head";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { type ReactElement, type ReactNode } from "react";

import "../styles/vars.css";
import "../styles/global.css";

export type NextPageWithLayout<P = unknown, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & { Component: NextPageWithLayout };

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppPropsWithLayout): ReactElement {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <QueryClientProvider client={queryClient}>
        {getLayout(<Component {...pageProps} />)}

        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
