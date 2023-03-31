import * as S from "./index.styled";

export default function Page44() {
  return (
    <S.Container id="head" style={{ animation: "none" }}>
      <S.TitleWrapper>
        <S.Text>전국 모든 애견샵을 한번에!</S.Text>
        <S.Title>
          GROOMEOMG
          <S.Title_img src="/rending/start/main_rending.png" />
        </S.Title>
        <S.Bottom>
          실시간 예약부터, 리뷰, 나만 아는 상점 등록까지 그루멍에서 한번에!
        </S.Bottom>
      </S.TitleWrapper>
      <S.Scroll>
        <S.ScrollItem>
          <S.Item1>Scroll</S.Item1> <S.Item2>↓</S.Item2>
        </S.ScrollItem>
        {/* <S.ScrollItem></S.ScrollItem>
        <S.ScrollItemText>↓</S.ScrollItemText> */}
      </S.Scroll>
      <S.Wrapper>
        <S.Background1></S.Background1>
        <S.Background2></S.Background2>
        <S.Circle8 src="/rending/start/8.jpg" />
        <S.Circle2 src="/rending/start/3.jpg" />
        <S.Circle10 src="/rending/start/5.jpg" />
        <S.Circle3 src="/rending/start/7.jpg" />
        <S.Circle6 src="/rending/start/4.jpg" />
        {/* <S.Circle4 src="/rending/start/2.jpg" /> */}
        {/* <S.Circle7 src="/rending/start/9.jpg" /> */}
        <S.Circle9 src="/rending/start/10.jpg" />
      </S.Wrapper>
    </S.Container>
  );
}
