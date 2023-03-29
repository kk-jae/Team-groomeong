import { UseQueryFetchLoginUser } from "./../query/UseQueryFetchLoginUser";
import { UseMutationUpdateUser } from "./../mutation/UseMutationUpdateUser";
import { Modal } from "antd";
export const useInitPassword = () => {
  const [updateUser] = UseMutationUpdateUser();
  const { data: fetchLoginUserData } = UseQueryFetchLoginUser();

  interface IData {
    password: string;
    password2: string;
  }

  const onClickInitPassword = async (data: IData) => {
    if (data.password === data.password2) {
      try {
        await updateUser({
          variables: {
            userId: String(fetchLoginUserData?.fetchLoginUser.id),
            updateUserInput: {
              password: data.password2,
            },
          },
        });
        Modal.success({
          content: "비밀번호 변경 성공!",
        });
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
