import { accessTokenState } from "./../../../../commons/Store/index";
import { useRecoilValue } from "recoil";
import { useRouter } from "next/router";
import { UseMutationLogout } from "./../mutation/UseMutationLogout";
import { Modal } from "antd";

interface IuseLogout {
  onClickLogOut: () => Promise<void>;
}

export const useLogout = () => {
  const [logOut] = UseMutationLogout();
  const router = useRouter();

  const onClickLogOut = (): void => {
    try {
      void logOut();
      if (localStorage.accessToken === undefined) {
        void router.push("/home");
      }
    } catch (error) {
      if (error instanceof Error) {
        Modal.error({
          content: error.message,
        });
      }
    }
  };

  return {
    onClickLogOut,
  };
};
