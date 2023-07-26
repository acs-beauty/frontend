import type { AppProps } from "next/app";
import { Global, ThemeProvider } from "@emotion/react";

import { global } from "@/styles/global-styles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={global} />
      <Component {...pageProps} />
    </>
  );
}
