import type { AppProps } from "next/app";
import { Global, ThemeProvider } from "@emotion/react";

import { global } from "@/styles/global-styles";
import { theme } from "@/styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={global} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
