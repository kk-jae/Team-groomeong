import { accessTokenState } from "./../../../../commons/Store/index";
import { useRecoilState, useRecoilValue } from "recoil";
import { useRouter } from "next/router";
import { UseMutationLogout } from "./../mutation/UseMutationLogout";

// interface IuseLogout {
//   onClickLogOut: () => Promise<void>;
// }

export const useLogout = () => {
  const [logOut] = UseMutationLogout();
  const router = useRouter();
  const [accessToken] = useRecoilState(accessTokenState);

  const onClickLogOut = (): void => {
    void logOut();
    if (accessToken === "") {
      void router.push("/home");
    }
  };

  return {
    onClickLogOut,
  };
};
