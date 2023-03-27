import { FormProvider, useForm } from "react-hook-form";
import { InputMiddle } from "../../atoms/Input/Middle";
import Background from "../../organisms/Background";
import * as S from "./index.styled";
import { Buttons } from "../../atoms/Buttons";
import { useMoveToPage } from "../../../commons/hooks/custom/useMovedToPage";
import { useLogInButton } from "../../../commons/hooks/custom/useLogIn";
import { withPromiseVoidFunc } from "../../../../commons/Utils/withFunc";
import PageHeader from "../../atoms/PageHeader";

export const LogInTemplate = (): JSX.Element => {
  const method = useForm({
    mode: "onChange",
  });

  const { onClickMoveToPage } = useMoveToPage();
  const { onClickHomePageLogIn } = useLogInButton();

  return (
    <Background>
      <S.LogInWrapper>
        <PageHeader title="로그인" />
        <FormProvider {...method}>
          <S.LogInMiddle
            onSubmit={method.handleSubmit(
              withPromiseVoidFunc(onClickHomePageLogIn)
            )}
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
              type="password"
            />
            <Buttons size="large" label="로그인하기" border="none" />
          </S.LogInMiddle>
        </FormProvider>
        <S.LogInBottom>
          <S.LogInBottomSocial>
            {/* <S.ButtonGoogle>구글 로그인하기</S.ButtonGoogle> */}
            <S.LoginLogo src="/image/icon-google.png" />
            <S.LoginLogo src="/image/icon-kakao-talk.png" />
            {/* <S.ButtonKakao>카카오 로그인하기</S.ButtonKakao> */}
          </S.LogInBottomSocial>
          <S.LogInBottomSighUp>
            <S.LogInBottomSighUpTop>
              아직 회원이 아니신가요?
            </S.LogInBottomSighUpTop>
            <S.LogInBottomSighUpBottom onClick={onClickMoveToPage("/signup")}>
              회원가입하기
            </S.LogInBottomSighUpBottom>
          </S.LogInBottomSighUp>
          <S.LogInBottomFindPassword>
            <S.LogInBottomFindPasswordTop>
              비밀번호를 잊어버리셨나요?
            </S.LogInBottomFindPasswordTop>
            <S.LogInBottomFindPasswordBottom
              onClick={onClickMoveToPage("/emailAuth")}
            >
              비밀번호 초기화하러 가기
            </S.LogInBottomFindPasswordBottom>
          </S.LogInBottomFindPassword>
        </S.LogInBottom>
      </S.LogInWrapper>
    </Background>
  );
};
