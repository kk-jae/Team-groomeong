import { useRouter } from "next/router";
import { UseQueryFetchLoginUser } from "./../query/UseQueryFetchLoginUser";
import { Modal } from "antd";
import { UseMutationResetPwd } from "../mutation/UseMutationResetPwd";
export const useInitPassword = () => {
  const router = useRouter();
  const [resetPwd] = UseMutationResetPwd();
  const { data: fetchLoginUserData } = UseQueryFetchLoginUser();

  interface IData {
    password: string;
    password2: string;
  }

  let email = "";
  const onClickInitPassword = async (data: IData) => {
    if (fetchLoginUserData !== undefined) {
      email = fetchLoginUserData.fetchLoginUser.email;
    }
    if (data.password === data.password2) {
      email = localStorage.email;
      try {
        await resetPwd({
          variables: {
            email,
            newPassword: data.password2,
          },
        });
        Modal.success({
          content: "비밀번호 변경 성공!",
        });
        localStorage.removeItem("email");
        void router.push("/home");
      } catch (error) {
        if (error instanceof Error) {
          Modal.error({
            content: "비밀번호 변경에 실패하였습니다. 관리자에게 문의해주세요",
          });
        }
      }
    } else {
      Modal.error({
        content: "패스워드를 동일하게 입력해주세요",
      });
    }
  };

  return {
    onClickInitPassword,
  };
};
