import React from "react"; // Add the missing import statement for React

import Layout from "../components/layout";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import {} from "@next/font/google"; // Add the missing import statement for the Inter font

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </React.Fragment>
  );
}
