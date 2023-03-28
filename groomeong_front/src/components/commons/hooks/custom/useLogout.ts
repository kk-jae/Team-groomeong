import { useRouter } from "next/router";
import { UseMutationLogout } from "./../mutation/UseMutationLogout";

interface IuseLogout {
  onClickLogOut: () => Promise<void>;
}

export const useLogout = (): IuseLogout => {
  const [logOut] = UseMutationLogout();
  const router = useRouter();

  const onClickLogOut = async (): Promise<void> => {
    await logOut();
    if (localStorage.accessToken !== "") {
      localStorage.removeItem("accessToken");
      void router.push("/home");
    }
  };

  return {
    onClickLogOut,
  };
};
