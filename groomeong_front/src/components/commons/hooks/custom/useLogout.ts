import { useRouter } from "next/router";
import { UseMutationLogout } from "./../mutation/UseMutationLogout";
export const useLogout = () => {
  const [logOut] = UseMutationLogout();
  const router = useRouter();

  const onClickLogOut = async () => {
    const result = await logOut;
    if (localStorage.accessToken) {
      localStorage.removeItem("accessToken");
      router.push("/home");
    }
  };

  return {
    onClickLogOut,
  };
};
