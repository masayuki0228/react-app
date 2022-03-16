import "tailwindcss/tailwind.css";
import React from "react";
import Head from "next/head";
import { Layout } from "src/components/Layout";
import { SWRConfig } from "swr";

const fetcher = async (url) => {
  const res = await fetch(url);
  return res.json();
};

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SWRConfig value={{ fetcher }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SWRConfig>
    </>
  );
};
export default MyApp;
