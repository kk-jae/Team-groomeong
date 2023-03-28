import { Modal } from "antd";
import { useRouter } from "next/router";
import { UseMutationUpdateUser } from "../mutation/UseMutationUpdateUser";
import {
  FETCH_LOGIN_USER,
  UseQueryFetchLoginUser,
} from "../query/UseQueryFetchLoginUser";

interface IFetchData {
  name?: string;
  phone?: string;
  image?: any;
}

// interface IuseEditMyPage {
//   onClickEditBtn: (data: IFetchData) => Promise<void>;
// }

export const useEditMyPage = () => {
  const [updateUser] = UseMutationUpdateUser();
  const { data: userData } = UseQueryFetchLoginUser();
  const router = useRouter();

  const onClickEditBtn = async (data: IFetchData): Promise<void> => {
    const updateUserInput = {
      name: data.name,
      phone: data.phone,
      image: data.image,
    };
    if (!updateUserInput.name)
      updateUserInput.name = userData?.fetchLoginUser.name;
    if (!updateUserInput.phone)
      updateUserInput.phone = userData?.fetchLoginUser.phone;

    if (updateUserInput.image?.length === 0) {
      updateUserInput.image = String(userData?.fetchLoginUser.image);
    } else {
      updateUserInput.image = data.image?.uploadProfileImage[0];
    }

    try {
      await updateUser({
        variables: {
          userId: String(userData?.fetchLoginUser.id),
          updateUserInput,
        },
        refetchQueries: [
          {
            query: FETCH_LOGIN_USER,
          },
        ],
      });
      router.push("/mypage");
    } catch (error) {
      if (error instanceof Error) {
        Modal.error({
          content: error.message,
        });
      }
    }
  };

  return { onClickEditBtn };
};
