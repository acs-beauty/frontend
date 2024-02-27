import type { AppProps } from "next/app";
import { Global, ThemeProvider } from "@emotion/react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { global } from "@/styles/global-styles";
import { theme } from "@/styles/theme";
import { store, persistor } from "@/redux/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <Global styles={global} />
            <Component {...pageProps} />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </>
  );
}
