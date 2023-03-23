import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { GlobalStyle } from "../src/commons/GlobalStyles";
import { RecoilRoot } from "recoil";
import ApolloSetting from "../src/components/commons/apollo";
import { ShopDetail } from "../src/components/atomic/organisms/ShopDetail";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <>
          <Global styles={GlobalStyle}></Global>
          {/* <Layout> */}
          <Component {...pageProps} />
          <ShopDetail
              shoppingLabel={"댕댕샵"}
              shopRating={3}
              time={"10:00~20:00"}
              address={"서울 금천구 구로동"}
              phone={"010-2232-2322"}
              isLoggedIn={false}
            />
          {/* </Layout> */}
        </>
      </ApolloSetting>
    </RecoilRoot>
  );
}
