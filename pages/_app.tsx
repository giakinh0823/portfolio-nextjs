import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import Head from "next/head";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { SWRConfig } from "swr";
import axiosClient from "../api-client/axios-client";
import { store } from "../app/store";
import logo from '../assets/image/logo/logo.png';
import { EmptyLayout } from "../components/layout/empty";
import ToggleColorMode from "../components/layout/ToggleMode";
import { AppPropsWithLayout } from "../models";
import "../styles/editor.css";
import "../styles/globals.css";
import "../styles/phaohoa.css";
import { createEmotionCache } from "../utils";

const clientSideEmotionCache = createEmotionCache();

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout;

  return (
    <Provider store={store}>
      <CacheProvider value={clientSideEmotionCache}>
        <ToggleColorMode>
          <CssBaseline />
          <SWRConfig
            value={{
              fetcher: (url) => axiosClient.get(url),
              shouldRetryOnError: false,
            }}
          >
            {" "}
            <Head>
              <link rel="icon" href={`/image/logo.png`} />
            </Head>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </SWRConfig>
        </ToggleColorMode>
      </CacheProvider>
    </Provider>
  );
}

export default MyApp;
