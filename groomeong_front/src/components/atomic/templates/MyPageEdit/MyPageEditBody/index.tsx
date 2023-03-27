import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import { IMutationUpdateUserArgs } from "../../../../../commons/types/generated/types";
import { withPromiseVoidFunc } from "../../../../../commons/Utils/withFunc";
import { useEditMyPage } from "../../../../commons/hooks/custom/useEditMyPage";
import { useMoveToPage } from "../../../../commons/hooks/custom/useMovedToPage";
import { UseQueryFetchLoginUser } from "../../../../commons/hooks/query/UseQueryFetchLoginUser";
import { Schema } from "../../../../commons/validation/myPageEdit.validation";
import { Buttons } from "../../../atoms/Buttons";
import ContentInfo from "../../../atoms/ContentInfo";
import ImgInput from "../../../atoms/Input/ImgInput";
import { InputMiddle } from "../../../atoms/Input/Middle";
import * as S from "./index.style";

export const MyPageEditBodyTemplate = () => {
  const method = useForm<IMutationUpdateUserArgs>({
    mode: "onChange",
    resolver: yupResolver(Schema),
  });
  const { data: userData } = UseQueryFetchLoginUser();
  const { onClickMoveToPage } = useMoveToPage();
  const { onClickEditBtn } = useEditMyPage();

  return (
    <>
      <FormProvider {...method}>
        <form
          onSubmit={method.handleSubmit(withPromiseVoidFunc(onClickEditBtn))}
        >
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
            defaultValue={userData?.fetchLoginUser?.phone.replaceAll("-", "")}
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
            <ContentInfo label="사진" component={<ImgInput name="image" />} />
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
