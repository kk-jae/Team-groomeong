import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/Store";

const GLOBAL_STATE = new InMemoryCache();

interface IApolloSettingProps {
  children: JSX.Element;
}

export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
  const [, setAccessToken] = useRecoilState(accessTokenState);

  useEffect(() => {
    // console.log("지금은 브라우저");
    // 1. refreshToken배우기 이전방식
    const result = localStorage.getItem("accessToken");
    setAccessToken(result ?? ""); // 기존방법. 다만 이제는 쿠키로 바뀌었으니 쿠키안에있는 refreshToken가져와야함. 그러나 얘는 secure옵션과 httpOnly설정이 되어있어 document.~~으로 꺼내오지 못함

    // 2. refreshToken 이후 방식 // (refreshToken없애기 => 로그아웃 api요청)
    // 글로벌 스테이트랑 비슷한 방법. 글로벌에 저장하고 뽑는것.요청 받은결과를 필요한곳에서 뽑아사용
    // void aaa.toPromise().then((newAccessToken) => {
    //   setAccessToken(newAccessToken ?? "");
    // });
    // void getAccessToken().then((newAccessToken) => {
    //   // 받아온 refreshToken을 다시 넣어줌으로써 새로고침시에도 사라지지않게함.
    //   setAccessToken(newAccessToken ?? "");
    // });
  }, []);

  const uploadLink = createUploadLink({
    uri: "http://34.64.53.80:3000/graphql",
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: GLOBAL_STATE,
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
