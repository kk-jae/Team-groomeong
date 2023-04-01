import { useEffect, useState } from "react";
import * as S from "../src/commons/RendingStlyes/index";
import { useMoveToPage } from "../src/components/commons/hooks/custom/useMovedToPage";
import { ArrowDownward, DownloadOutlined } from "@mui/icons-material";

export default function Page55() {
  const [position, setPosition] = useState(0);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const { onClickMoveToPage } = useMoveToPage();

  if (typeof document !== "undefined") {
    window.onload = function () {
      setTimeout(() => {
        scrollTo(0, 0);
      }, 100);
    };
  }
  const onScroll = () => {
    setPosition(window.scrollY);
  };

  const onMouse = (event: any) => {
    setX(event.clientX);
    setY(event.clientY);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    window.addEventListener("mouse", onMouse);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.addEventListener("mouse", onMouse);
    };
  }, []);

  return (
    <>
      <S.Container onMouseMove={onMouse}>
        <S.Scroll x={x} y={y}>
          <S.Scroll_Text>SCROLL </S.Scroll_Text>
          <S.Scroll_Icon>
            <ArrowDownward />
          </S.Scroll_Icon>
        </S.Scroll>
        <S.Page1 position={position}>
          <S.Img1 src="/image/img_not_character.svg" />
          <S.Img2 src="/image/img-character-dog.svg" />
          <S.FlyAway1 src="/image/img_1.jpg" />
          <S.FlyAway2 src="/image/img_2.jpg" />
          <S.FlyAway3 src="/image/img_3.jpg" />
          <S.FlyAway4 src="/image/img_4.jpg" position={position} />
        </S.Page1>
        <S.Page2 position={position}>
          <S.Shop position={position}>
            <S.Shop_Detail position={position}>
              <S.Shop_Img src="image/img_shop.jpg" />
              <S.Shop_Text>전국 애견샵 조회</S.Shop_Text>
            </S.Shop_Detail>
          </S.Shop>
          <S.Reservation position={position}>
            <S.Reservation_Detail position={position}>
              <S.Reservation_Text>실시간 온라인 예약</S.Reservation_Text>
              <S.Reservation_Img src="image/img_reservation.jpg" />
            </S.Reservation_Detail>
          </S.Reservation>
          <S.Review position={position}>
            <S.Review_Detail position={position}>
              <S.Review_Text>솔직한 고객 리뷰</S.Review_Text>
              <S.Review_Img src="image/img_review.jpg" />
            </S.Review_Detail>
          </S.Review>
          <S.Introduce position={position}>
            <S.Introduce_Text>
              <S.Introduce_subTitle position={position}>
                <span
                  style={{
                    opacity: (position - 7500) / 1000,
                  }}
                >
                  사장님도,
                </span>{" "}
                <span
                  style={{
                    opacity: (position - 8000) / 1000,
                  }}
                >
                  견주님도
                </span>
              </S.Introduce_subTitle>
              <S.Introduce_Title position={position}>
                이제{" "}
                <S.Logo onClick={onClickMoveToPage("/home")}>그루멍 </S.Logo>
                <S.Button>Click !! </S.Button>
                하세요
              </S.Introduce_Title>
            </S.Introduce_Text>
            <div
              style={{
                opacity: (position - 7000) / 1000,
              }}
            >
              <S.Introduce_Img src="/image/icon-magnify_white.svg" />
            </div>
          </S.Introduce>
        </S.Page2>
      </S.Container>
    </>
  );
}
