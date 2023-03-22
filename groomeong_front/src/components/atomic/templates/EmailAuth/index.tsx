import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useEmailAuth } from "../../../commons/hooks/custom/useEmailAuth";
import { InputMiddle } from "../../atoms/Input/Middle";
import PageHeader from "../../atoms/PageHeader";
import Background from "../../organisms/Background";
import * as S from "./index.styled";

export const EmailAuthTemplates = () => {
  // const { onClickSendEmail } = useEmailAuth();
  const [isOpenRandomCode, setIsOpenRandomCode] = useState(false);
  const [disabledState, setDisabledState] = useState(false);
  const { sendEmail, onClickCheckToken } = useEmailAuth();

  const method = useForm({
    mode: "onChange",
  });

  interface IEmailData {
    email: string;
  }

  const onClickSendEmail = (data: IEmailData) => {
    // sendEmail(data)();
    if (data.email !== "") {
      setIsOpenRandomCode((prev) => !prev);
      setDisabledState((prev) => !prev);
    }
  };

  return (
    <Background>
      <S.EmailAuthWrapper>
        <PageHeader title="이메일 인증하기" icon="/image/icon-email-fast.svg" />
        <S.EmailAuthMiddle>
          <S.EmailAuthMiddleTextButtonWrapper
            onSubmit={method.handleSubmit(onClickSendEmail)}
          >
            <FormProvider {...method}>
              <InputMiddle
                label="이메일"
                name="email"
                placeholder="이메일을 입력해주세요"
                type="email"
                disabled={disabledState}
              />
              <S.EmailAuthMiddleButton
                disabledState={disabledState}
                disabled={disabledState}
              >
                이메일 인증하기
              </S.EmailAuthMiddleButton>
            </FormProvider>
          </S.EmailAuthMiddleTextButtonWrapper>
          {isOpenRandomCode ? (
            <>
              <S.EmailAuthMiddleTextButtonWrapper
                onSubmit={method.handleSubmit(onClickCheckToken)}
              >
                <FormProvider {...method}>
                  <InputMiddle
                    label="03:00 타이머입니다. (아직 작동 안함)"
                    name="token"
                    placeholder="인증번호를 입력해주세요"
                  />
                  <S.EmailAuthMiddleTimeButton>
                    인증
                  </S.EmailAuthMiddleTimeButton>
                </FormProvider>
              </S.EmailAuthMiddleTextButtonWrapper>
            </>
          ) : (
            <div></div>
          )}
        </S.EmailAuthMiddle>
        <S.EmailAuthBottom>취소</S.EmailAuthBottom>
      </S.EmailAuthWrapper>
    </Background>
  );
};
