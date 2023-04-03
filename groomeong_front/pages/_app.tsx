import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { GlobalStyle } from "../src/commons/GlobalStyles";
import { RecoilRoot } from "recoil";
import ApolloSetting from "../src/components/commons/apollo";
import v8 from 'v8'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <>
          <Global styles={GlobalStyle}></Global>
          {/* <Layout> */}
          <Component {...pageProps} />
          {/* </Layout> */}
        </>
      </ApolloSetting>
    </RecoilRoot>
  );
}

export async function getServerSideProps() {
  console.log(v8.getHeapStatistics())
}