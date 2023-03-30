import { FormProvider, useForm } from "react-hook-form";
import { withPromiseVoidFunc } from "../../../../commons/Utils/withFunc";
import { useInitPassword } from "../../../commons/hooks/custom/useInitPassword";
import { Buttons } from "../../atoms/Buttons";
import { InputMiddle } from "../../atoms/Input/Middle";
import PageHeader from "../../atoms/PageHeader";
import Background from "../../organisms/Background";
import * as S from "./index.styled";

export const InitPasswordTemplate = (): JSX.Element => {
  const { onClickInitPassword } = useInitPassword();

  const method = useForm({
    mode: "onChange",
  });

  return (
    <Background>
      <S.InitPasswordWrapper>
        <PageHeader title="비밀번호 초기화하기" />
        <FormProvider {...method}>
          <S.InitPasswordForm
            onSubmit={method.handleSubmit(
              withPromiseVoidFunc(onClickInitPassword)
            )}
          >
            <InputMiddle
              label="비밀번호"
              name="password"
              placeholder="비밀번호를 입력해주세요."
              type="password"
            />
            <InputMiddle
              label="비밀번호 확인"
              name="password2"
              placeholder="비밀번호를 다시 입력해주세요"
              type="password"
            />
            <S.BtnWrapper>
              <Buttons label="비밀번호 초기화"></Buttons>
            </S.BtnWrapper>
          </S.InitPasswordForm>
        </FormProvider>
      </S.InitPasswordWrapper>
    </Background>
  );
};
