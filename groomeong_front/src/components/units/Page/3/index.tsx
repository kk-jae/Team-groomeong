import * as S from "./index.styled";

export default function Page3() {
  return (
    <S.Container id="s3">
      <S.Wrapper>
        <S.Top>그루멍은 사랑입니다</S.Top>
        <S.Middle>
          <S.Middle_box>
            <S.Box_top>간단한 검색</S.Box_top>
            <S.Box_middle>
              <S.Box_img src="/image/main_search.png" />
            </S.Box_middle>
            <S.Box_bottom></S.Box_bottom>
          </S.Middle_box>
          <S.Middle_box>
            <S.Box_top>솔직한 리뷰</S.Box_top>
            <S.Box_middle>
              <S.Box_img src="" />
            </S.Box_middle>
            <S.Box_bottom></S.Box_bottom>
          </S.Middle_box>
          <S.Middle_box>
            <S.Box_top>실시간 예약</S.Box_top>
            <S.Box_middle>
              <S.Box_img src="/image/main_reservation.png" />
            </S.Box_middle>
            <S.Box_bottom></S.Box_bottom>
          </S.Middle_box>
        </S.Middle>
      </S.Wrapper>
    </S.Container>
  );
}
