import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { GlobalStyle } from "../src/commons/GlobalStyles";
import { RecoilRoot } from "recoil";
import ApolloSetting from "../src/components/commons/apollo";
import MapTest from "../src/components/atomic/templates/MapTest";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <>
          <Global styles={GlobalStyle}></Global>
          {/* <Layout> */}
          {/* <MapTest /> */}
          <Component {...pageProps} />
          {/* </Layout> */}
        </>
      </ApolloSetting>
    </RecoilRoot>
  );
}
