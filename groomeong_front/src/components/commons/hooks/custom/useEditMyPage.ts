import { useRouter } from "next/router";
import { IQueryFetchUserArgs } from "../../../../commons/types/generated/types";
import { UseMutationUpdateUser } from "../mutation/UseMutationUpdateUser";
import { UseQueryFetchLoginUser } from "../query/UseQueryFetchLoginUser";

interface IFetchData {
  name: string;
  phone: string;
}

export const useEditMyPage = () => {
  const [updateUser] = UseMutationUpdateUser();
  const { data: userData } = UseQueryFetchLoginUser();
  const router = useRouter();

  const onClickEditBtn = async (data: IFetchData): Promise<void> => {
    console.log(userData?.fetchLoginUser.id);
    try {
      await updateUser({
        variables: {
          userId: String(userData?.fetchLoginUser.id),
          updateUserInput: {
            name: data.name,
            phone: data.phone,
          },
        },
      });
      router.push("/mypage");
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  return { onClickEditBtn };
};
