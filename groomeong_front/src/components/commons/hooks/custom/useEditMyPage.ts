import { useRouter } from "next/router";
import { UseMutationUpdateUser } from "../mutation/UseMutationUpdateUser";
import { UseQueryFetchLoginUser } from "../query/UseQueryFetchLoginUser";

interface IFetchData {
  name?: string;
  phone?: string;
  image?: string;
}

// interface IuseEditMyPage {
//   onClickEditBtn: (data: IFetchData) => Promise<void>;
// }

export const useEditMyPage = () => {
  const [updateUser] = UseMutationUpdateUser();
  const { data: userData } = UseQueryFetchLoginUser();
  const router = useRouter();

  const onClickEditBtn = async (data: IFetchData): Promise<void> => {
    try {
      await updateUser({
        variables: {
          userId: String(userData?.fetchLoginUser.id),
          updateUserInput: {
            name: data.name,
            phone: data.phone,
            image: data.image,
          },
        },
      });
      void router.push("/mypage");
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  return { onClickEditBtn };
};
