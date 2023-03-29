import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import { useRecoilValueLoadable } from "recoil";
import { restoreAccessTokenLoadable } from "../../../../commons/Store";

export const UseGoogleLogin = (): JSX.Element => {
  return (
    <>
      <GoogleOAuthProvider clientId="600256369394-uj9fsrj28pdk5pun2fkpldvpjqp2gg4j.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse?.credential?.split("."));
          }}
          shape="circle"
          type="icon"
          onError={() => {
            alert("Login Failed");
          }}
        ></GoogleLogin>
      </GoogleOAuthProvider>
    </>
  );
};
