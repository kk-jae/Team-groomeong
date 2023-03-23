import { Modal } from "antd";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/Store";
import { UseMutationLogin } from "../mutation/UseMutationLogin";

interface IHomePageLogInData {
  email: string;
  password: string;
}

export const useLogInButton = () => {
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
      console.log(createLogIn);
      const accessToken = createLogIn.data?.login;
      if (accessToken !== undefined) {
        setAccessToken(accessToken);
        localStorage.setItem("accessToken", accessToken);
      }
      Modal.success({
        content: "로그인에 성공하였습니다.",
      });
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
