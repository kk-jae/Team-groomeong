import { useRouter } from "next/router";
import { Modal } from "antd";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/Store";
import { UseMutationLogin } from "../mutation/UseMutationLogin";

interface IHomePageLogInData {
  email: string;
  password: string;
}

interface IuseLogInButton {
  onClickHomePageLogIn: (
    HomePageLogInData: IHomePageLogInData
  ) => Promise<void>;
}

export const useLogInButton = (): IuseLogInButton => {
  const router = useRouter();
  const [login] = UseMutationLogin();
  const [, setAccessToken] = useRecoilState(accessTokenState);

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
      Modal.success({
        content: "로그인에 성공하였습니다.",
      });
      void router.push("/home");
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
