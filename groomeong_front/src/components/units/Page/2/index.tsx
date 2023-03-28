import * as S from "./index.styled";

export default function Page2() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Wrapper_left>
          <S.Left_Img src="/image/main_reservation.png" />
        </S.Wrapper_left>
        <S.Wrapper_right>
          <S.Right_subText>기다림 없는 실시간 온라인예약</S.Right_subText>
          <S.Right_title>실시간 예약 현황 바로 확인</S.Right_title>
          <S.Right_bottomText>
            기다림없는 실시간 예약으로 원하는 시간대에 바로 예약하세요
          </S.Right_bottomText>
        </S.Wrapper_right>
      </S.Wrapper>
    </S.Container>
  );
}
