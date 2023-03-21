import { FormProvider, useForm } from "react-hook-form";
import { InputMiddle } from "../../atoms/Input/Middle";
import Background from "../../organisms/Background";
import * as S from "./index.styled";
import { Buttons } from "../../atoms/Buttons";

export const LogIn = () => {
  const method = useForm({
    mode: "onChange",
  });

  return (
    <Background>
      <S.LogInWrapper>
        <S.LogInTop>
          <S.LogInTopText>로그인</S.LogInTopText>
        </S.LogInTop>
        <FormProvider {...method}>
          <S.LogInMiddle
            onSubmit={method.handleSubmit((data) => {
              console.log(data);
            })}
          >
            <InputMiddle
              label="이메일"
              name="email"
              placeholder="이메일을 입력해주세요"
            />
            <InputMiddle
              label="비밀번호"
              name="password"
              placeholder="비밀번호를 입력해주세요"
            />
            <Buttons size="large" label="로그인하기" border="none" />
          </S.LogInMiddle>
        </FormProvider>
        <S.LogInBottom>
          <S.LogInBottomSocial>
            <S.ButtonGoogle>구글 로그인하기</S.ButtonGoogle>
            <S.ButtonKakao>카카오 로그인하기</S.ButtonKakao>
          </S.LogInBottomSocial>
          <S.LogInBottomSighUp>
            <S.LogInBottomSighUpTop>
              아직 회원이 아니신가요?
            </S.LogInBottomSighUpTop>
            <S.LogInBottomSighUpBottom>회원가입하기</S.LogInBottomSighUpBottom>
          </S.LogInBottomSighUp>
          <S.LogInBottomFindPassword>
            <S.LogInBottomFindPasswordTop>
              비밀번호를 잊어버리셨나요?
            </S.LogInBottomFindPasswordTop>
            <S.LogInBottomFindPasswordBottom>
              비밀번호 초기화하러 가기
            </S.LogInBottomFindPasswordBottom>
          </S.LogInBottomFindPassword>
        </S.LogInBottom>
      </S.LogInWrapper>
    </Background>
  );
};
