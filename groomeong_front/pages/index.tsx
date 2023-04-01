import { useEffect, useState } from "react";
import * as S from "../src/commons/RendingStyles/index";
import { useMoveToPage } from "../src/components/commons/hooks/custom/useMovedToPage";
import { ArrowDownward } from "@mui/icons-material";

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
              <S.Shop_Text position={position}>
                가까운 반려견 미용샵 찾으시나요?
              </S.Shop_Text>
              <S.Shop_Img src="image/img_shop.png" position={position} />
              <S.Bubble></S.Bubble>
              <S.Bubble2></S.Bubble2>
              <S.Bubble3></S.Bubble3>
              <S.Bubble4></S.Bubble4>
              <S.Bubble5></S.Bubble5>
              <S.Bubble6></S.Bubble6>
            </S.Shop_Detail>
            <S.Reservation_Detail position={position}>
              <S.Reservation_Text>
                <S.Reservation_Text_One position={position}>
                  내 주변 미용샵 검색부터
                </S.Reservation_Text_One>
                <S.Reservation_Text_Two position={position}>
                  실시간 예약은 물론
                </S.Reservation_Text_Two>
              </S.Reservation_Text>
              <S.Reservation_Img src="image/img_reservation.png" />
            </S.Reservation_Detail>
            <S.Review_Detail position={position}>
              <S.Review_Img src="image/img_review.png" />
              <S.Review_Text>
                <S.Review_Text_One position={position}>
                  실제 이용 후기가 담긴
                </S.Review_Text_One>
                <S.Review_Text_Two position={position}>
                  <span style={{ fontSize: "80px" }}>찐! </span> 리뷰 확인까지
                </S.Review_Text_Two>
              </S.Review_Text>
            </S.Review_Detail>
            <S.Introduce_Text id="last" style={{ animation: "none" }}>
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
                <S.Logo>그루멍</S.Logo>
                에서 만나요 !
              </S.Introduce_Title>
              <S.LastLogo
                position={position}
                src="/image/img_Groomeong_white.png"
                onClick={onClickMoveToPage("/home")}
              />
              <S.ClickBtn position={position} src="/image/img_click.png" />
            </S.Introduce_Text>
            <div
              style={{
                opacity: (position - 7000) / 1000,
              }}
            >
              <S.Introduce_Img src="/image/icon-magnify_white.svg" />
            </div>
          </S.Shop>
        </S.Page2>
      </S.Container>
    </>
  );
}
