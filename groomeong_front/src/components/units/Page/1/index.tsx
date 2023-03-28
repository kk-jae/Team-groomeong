import * as S from "./index.styled";

export default function Page1() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Wrapper_left>
          <S.Left_subText>전국 모든 애견샵을 한번에!</S.Left_subText>
          <S.Left_title>
            'GROOMEOMG' 에서 <S.Left_img src="/image/main_rending.png" />
          </S.Left_title>
          <S.Left_logo>우리집 강아지를 믿고 맡겨보세요</S.Left_logo>
          <S.Left_bottomText>
            실시간 예약부터, 리뷰, 나만 아는 상점 등록까지 그루멍에서 한번에!
          </S.Left_bottomText>
        </S.Wrapper_left>
        <S.Wrapper_right>
          <S.Right_Img src="/image/main_right.jpg" />
        </S.Wrapper_right>
      </S.Wrapper>
    </S.Container>
  );
}
