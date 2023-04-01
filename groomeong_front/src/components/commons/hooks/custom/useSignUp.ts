import { Modal } from "antd";
import { useRouter } from "next/router";
import { IMutationCreateUserArgs } from "../../../../commons/types/generated/types";
import { UseMutationCreateUser } from "../mutation/UseMutationCreateUser";
import { UseQueryFetchUsers } from "../query/UseQueryFetchUsers";

interface IuseSignUp {
  onClickSignUp: (data: IMutationCreateUserArgs) => Promise<void>;
}

export const useSignUp = (): IuseSignUp => {
  const [createUser] = UseMutationCreateUser();
  const router = useRouter();
  const { data: fetchUsersData } = UseQueryFetchUsers();

  const onClickSignUp = async (
    data: IMutationCreateUserArgs
  ): Promise<void> => {
    const UsersEmail = fetchUsersData?.fetchUsers.map((el) => el.email);
    if (UsersEmail?.includes(String(data.email)) === false) {
      try {
        void createUser({
          variables: {
            name: data.name,
            email: data.email,
            password: data.password,
            phone: data.phone,
          },
        });
        Modal.success({
          content: `${data.name}님 반갑습니다!`,
        });
        void router.push(`/login`);
      } catch (error) {
        if (error instanceof Error) Modal.error({ content: error.message });
      }
    } else {
      Modal.error({ content: "이미 가입된 이메일입니다." });
    }
  };
  return {
    onClickSignUp,
  };
};
