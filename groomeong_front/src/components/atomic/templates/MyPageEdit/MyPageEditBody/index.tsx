import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import { Schema } from "../../../../commons/validation/myPageEdit.validation";
import { Buttons } from "../../../atoms/Buttons";
import ContentInfo from "../../../atoms/ContentInfo";
import { CommonsImages } from "../../../atoms/Images";
import { InputMiddle } from "../../../atoms/Input/Middle";
import { InputSmall } from "../../../atoms/Input/Small";
import * as S from "./index.style";

interface IMyPageBodyProps {
  image?: string;
  nameDefaultValue?: string;
  emailDefaultValue?: string;
  phoneDefaultValue?: string;
  name: string;
}

export const MyPageEditBodyTemplate = (props: IMyPageBodyProps) => {
  const method = useForm({
    mode: "onChange",
    resolver: yupResolver(Schema),
  });
  return (
    <>
      <FormProvider {...method}>
        <form onSubmit={method.handleSubmit((data) => console.log(data))}>
          <InputMiddle
            label="닉네임"
            defaultValue={props.nameDefaultValue}
            name={"nickName"}
          />
          <InputMiddle
            label="이메일"
            defaultValue={props.emailDefaultValue}
            name={"email"}
          />
          <InputMiddle
            label="연락처"
            defaultValue={props.phoneDefaultValue}
            name={"phone"}
          />
          <S.LabelWrapper>
            <S.Label>비밀번호</S.Label>
            <Buttons type="button" label="비밀번호 초기화 하기"></Buttons>
          </S.LabelWrapper>
          <S.LabelWrapper>
            <S.Label>사진</S.Label>
            <CommonsImages></CommonsImages>
          </S.LabelWrapper>
          <S.ButtonBox>
            <Buttons size="large" label="수정 완료"></Buttons>
          </S.ButtonBox>
        </form>
      </FormProvider>
    </>
  );
};
