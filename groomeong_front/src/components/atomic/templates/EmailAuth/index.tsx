import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import {
  IEmail,
  useEmailAuth,
} from "../../../commons/hooks/custom/useEmailAuth";
import { InputMiddle } from "../../atoms/Input/Middle";
import PageHeader from "../../atoms/PageHeader";
import Background from "../../organisms/Background";
import * as S from "./index.styled";
import { UseQueryFetchLoginUser } from "../../../commons/hooks/query/UseQueryFetchLoginUser";
import { useMoveToPage } from "../../../commons/hooks/custom/useMovedToPage";

export const EmailAuthTemplates = (): JSX.Element => {
  const { onClickMoveToPage } = useMoveToPage();
  const { data: fetchLoginUserData } = UseQueryFetchLoginUser();
  const [disabledState, setDisabledState] = useState<undefined | boolean>(
    undefined
  );
  const { sendEmail, onClickCheckToken, isOpenRandomCode, clearTimer } =
    useEmailAuth();
  const [timer, setTimer] = useState("3:00");
  const [timeInterval, setTimeInterval] = useState<
    NodeJS.Timer | NodeJS.Timeout
  >();

  const method = useForm({
    mode: "onChange",
  });

  const onClickSendEmail = (data: IEmail): void => {
    void sendEmail(data)();
    setDisabledState(true);
    let min = 2;
    let sec = 60;
    const timeInterval = setInterval(() => {
      sec = sec - 1;
      if (sec === -1) {
        min = min - 1;
        sec = 59;
      }
      setTimer(`${min}:${String(sec).padStart(2, "0")}`);
    }, 1000);
    setTimeInterval(timeInterval);
  };

  if (clearTimer) {
    clearInterval(timeInterval as NodeJS.Timeout);
  }
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
                value={fetchLoginUserData?.fetchLoginUser.email}
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
                    label={timer}
                    name="token"
                    placeholder="인증번호를 입력해주세요"
                    maxLength={6}
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
        <S.EmailAuthBottom onClick={onClickMoveToPage("/mypage/edit")}>
          취소
        </S.EmailAuthBottom>
      </S.EmailAuthWrapper>
    </Background>
  );
};
