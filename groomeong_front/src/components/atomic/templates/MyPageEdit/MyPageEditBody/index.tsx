import { yupResolver } from "@hookform/resolvers/yup";
import { Email } from "@mui/icons-material";
import { useRouter } from "next/router";
import { FormProvider, useForm } from "react-hook-form";
import {
  IMutation,
  IMutationUpdateUserArgs,
  IUpdateUserInput,
} from "../../../../../commons/types/generated/types";
import { useMoveToPage } from "../../../../commons/hooks/custom/useMovedToPage";
import { UseMutationUpdateUser } from "../../../../commons/hooks/mutation/UseMutationUpdateUser";
import { UseQueryFetchLoginUser } from "../../../../commons/hooks/query/UseQueryFetchLoginUser";
import { Schema } from "../../../../commons/validation/myPageEdit.validation";
import { Buttons } from "../../../atoms/Buttons";
import { CommonsImages } from "../../../atoms/Images";
import { InputMiddle } from "../../../atoms/Input/Middle";
import * as S from "./index.style";

interface IMyPageBodyProps {
  image?: string;
  nameDefaultValue?: string;
  emailDefaultValue?: string;
  phoneDefaultValue?: string;
  name: string;
}

export const MyPageEditBodyTemplate = (props: IMyPageBodyProps) => {
  const method = useForm<IMutationUpdateUserArgs>({
    mode: "onChange",
    resolver: yupResolver(Schema),
  });
  const { data: userData } = UseQueryFetchLoginUser();
  const { onClickMoveToPage } = useMoveToPage();
  const [updateUser] = UseMutationUpdateUser();
  const router = useRouter();

  const onClickEditBtn = async (data: IUpdateUserInput): Promise<void> => {
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

  return (
    <>
      <FormProvider {...method}>
        <form onSubmit={method.handleSubmit((data) => console.log(data))}>
          <InputMiddle
            label="닉네임"
            defaultValue={userData?.fetchLoginUser?.name}
            name={"name"}
          />
          <InputMiddle
            label="이메일"
            value={userData?.fetchLoginUser?.email}
            name={"email"}
          />
          <InputMiddle
            label="연락처"
            defaultValue={userData?.fetchLoginUser?.phone}
            name={"phone"}
          />
          <S.LabelWrapper>
            <S.Label>비밀번호</S.Label>
            <Buttons
              onClick={onClickMoveToPage("/emailAuth")}
              type="button"
              label="비밀번호 초기화 하기"
            ></Buttons>
          </S.LabelWrapper>
          <S.LabelWrapper>
            <S.Label>사진</S.Label>
            <CommonsImages></CommonsImages>
          </S.LabelWrapper>
          <S.ButtonBox>
            <Buttons
              size="large"
              label="수정 완료"
              onClick={onClickEditBtn}
            ></Buttons>
          </S.ButtonBox>
        </form>
      </FormProvider>
    </>
  );
};
