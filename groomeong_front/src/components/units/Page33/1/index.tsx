import { useEffect, useState } from "react";
import * as S from "./index.styled";

export default function Page55() {
  const [position, setPosition] = useState(0);
  if (typeof document !== "undefined") {
    window.onload = function () {
      setTimeout(() => {
        scrollTo(0, 0);
      }, 100);
    };
  }
  function onScroll() {
    setPosition(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll); // 컴포넌트 언마운트되기전에 제거됨
    };
  }, []);

  console.log(position);

  return (
    <S.Container>
      <S.Page1 position={position}>
        <S.Img1 src="/image/img_not_character.svg" />
        <S.Img2 src="/image/img-character-dog.svg" />
        <S.FlyAway1 src="/image/img_1.jpg" />
        <S.FlyAway2 src="/image/img_2.jpg" />
        <S.FlyAway3 src="/image/img_3.jpg" />
        <S.FlyAway4 src="/image/img_4.jpg" position={position} />
        <S.Scroll>Down !!</S.Scroll>
      </S.Page1>
      <S.Page2 position={position}>
        <S.Shop position={position}>
          <S.Shop_Detail position={position}>
            <S.Shop_Text>전국 애견샵 조회</S.Shop_Text>
            <S.Shop_Img src="image/img_shop.jpg" />
          </S.Shop_Detail>
        </S.Shop>
        <S.Reservation position={position}>
          <S.Reservation_Detail position={position}>
            <S.Reservation_Img src="image/img_reservation.jpg" />
            <S.Reservation_Text>온라인 실시간 예약</S.Reservation_Text>
          </S.Reservation_Detail>
        </S.Reservation>
        <S.Review position={position}>
          <S.Review_Detail position={position}>
            <S.Review_Img src="image/img_review.jpg" />
            <S.Review_Text>솔직한 리뷰</S.Review_Text>
          </S.Review_Detail>
        </S.Review>
        <S.Introduce position={position}>
          <S.Introduce_Text>
            <S.Introduce_subTitle position={position}>
              사장님도, 견주님도
            </S.Introduce_subTitle>
            <S.Introduce_Title position={position}>
              이제 <span style={{ fontWeight: "600" }}>'그루멍'</span>하세요
            </S.Introduce_Title>
          </S.Introduce_Text>
          <S.Introduce_Img src="/image/icon-magnify_white.svg" />
        </S.Introduce>
      </S.Page2>
    </S.Container>
  );
}

{
  /* <S.Introduce_three position={position}>솔직한 후기</S.Introduce_three> */
}
{
  /* <S.Introduce_two position={position}>실시간 예약</S.Introduce_two> */
}
