import { useRouter } from "next/router";
import { useEffect } from "react";
import { UseMutationLogout } from "./../mutation/UseMutationLogout";
export const useLogout = () => {
  const [logOut] = UseMutationLogout();

  const onClickLogOut = async () => {
    const result = await logOut;
    if (localStorage.accessToken) {
      localStorage.removeItem("accessToken");
      window.location.reload();
    }
  };

  return {
    onClickLogOut,
  };
};
