import { UseMutationLogout } from "./../mutation/UseMutationLogout";

export const useLogout = () => {
  const [logOut] = UseMutationLogout();

  const onClickLogOut = (): void => {
    void logOut();
    window.location.replace("/home");
  };

  return {
    onClickLogOut,
  };
};
