import { accessTokenState } from "./../../../../commons/Store/index";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";
import { UseMutationLogout } from "./../mutation/UseMutationLogout";

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
