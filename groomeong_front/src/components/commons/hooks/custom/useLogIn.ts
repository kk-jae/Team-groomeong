import { Modal } from "antd";
import { UseMutationLogin } from "../mutation/UseMutationLogin";

interface IHomePageLogInData {
  email: string;
  password: string;
}

export const useLogInButton = () => {
  const [login] = UseMutationLogin();

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
