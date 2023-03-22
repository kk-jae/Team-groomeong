import { useState } from "react";
import PageHeader from "../../atoms/PageHeader";
import Background from "../../organisms/Background";
import * as S from "./index.styled";

export const EmailAuth = () => {
  const [isOpenRandomCode, setIsOpenRandomCode] = useState(false);
  const [disabledState, setDisabledState] = useState(false);
  const [startTimer, setStartTimer] = useState(false);

  const onClickSendEmail = () => {
    setIsOpenRandomCode((prev) => !prev);
    setDisabledState((prev) => !prev);
    setStartTimer((prev) => !prev);
  };

  return (
    <Background>
      <S.EmailAuthWrapper>
        <PageHeader title="이메일 인증하기" icon="/image/icon-email-fast.svg" />
        <S.EmailAuthMiddle>
          <S.EmailAuthMiddleLabel>이메일</S.EmailAuthMiddleLabel>
          <S.EmailAuthMiddleTextButtonWrapper>
            <S.EmailAuthMiddleText
              type="email"
              placeholder="이메일을 적어주세요"
              disabled={disabledState}
            />
            <S.EmailAuthMiddleButton
              onClick={onClickSendEmail}
              disabledState={disabledState}
            >
              이메일 인증하기
            </S.EmailAuthMiddleButton>
          </S.EmailAuthMiddleTextButtonWrapper>
          {isOpenRandomCode ? (
            <>
              <S.EmailAuthMiddleTime>03:00</S.EmailAuthMiddleTime>
              <S.EmailAuthMiddleTextButtonWrapper>
                <S.EmailAuthMiddleText placeholder="인증번호를 입력해주세요" />
                <S.EmailAuthMiddleTimeButton>인증</S.EmailAuthMiddleTimeButton>
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
