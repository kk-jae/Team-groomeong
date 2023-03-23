import { Modal } from "antd";
import { IMutationCreateUserArgs } from "../../../../commons/types/generated/types";
import { UseMutationCreateUser } from "../mutation/UseMutationCreateUser";

export const useSignUp = ()=> {
  const [createUser] = UseMutationCreateUser();

  const onClickSignUp = async (
    data: IMutationCreateUserArgs
  ): Promise<void> => {
    try {
      const { data: userData } = await createUser({
        variables: {
          name: data.name,
          email: data.email,
          password: data.password,
          phone: data.phone,
        },
      });
      console.log(userData);
      // 회원가입 성공 Modal
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  return {
    onClickSignUp,
  };
};
