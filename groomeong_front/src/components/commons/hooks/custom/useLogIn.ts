import { useRouter } from "next/router";
import { Modal } from "antd";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/Store";
import { UseMutationLogin } from "../mutation/UseMutationLogin";
import { useState } from "react";

interface IHomePageLogInData {
  email: string;
  password: string;
}

export const useLogInButton = () => {
  const router = useRouter();
  const [login] = UseMutationLogin();
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const onClickHomePageLogIn = async (
    HomePageLogInData: IHomePageLogInData
  ): Promise<void> => {
    try {
      const createLogIn = await login({
        variables: {
          email: HomePageLogInData.email,
          password: HomePageLogInData.password,
        },
      });

      const accessToken = createLogIn.data?.login;
      if (accessToken !== undefined) {
        setAccessToken(accessToken);
        localStorage.setItem("accessToken", accessToken);
      }
      router.push("/home");
    } catch (error) {
      if (error instanceof Error)
        Modal.error({
          content: error.message,
        });
    }
  };

  return {
    onClickHomePageLogIn,
  };
};
