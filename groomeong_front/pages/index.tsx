import { useEffect, useState } from "react";
import * as S from "../src/commons/RendingStyles/index";
import { useMoveToPage } from "../src/components/commons/hooks/custom/useMovedToPage";
import { ArrowDownward } from "@mui/icons-material";

export default function Rending() {
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
    // setX(event.clientX);
    // setY(event.clientY);
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
        {/* <S.Page1 position={position}>
          <S.Img1 src="/image/img_not_character.svg" />
          <S.Img2 src="/image/img-character-dog.svg" />
        </S.Page1> */}
        <S.Page position={position}>
          <S.Wrapper position={position}>
            <S.First position={position}>
              <S.Shop_Text position={position}>
                가까운 반려견 미용샵 찾으시나요?
              </S.Shop_Text>
              <S.Shop_Img src="image/img_shop.png" position={position} />
            </S.First>
            <S.Second position={position}>
              <S.Reservation_Text>
                <S.Reservation_Text_One position={position}>
                  내 주변 미용샵 검색부터
                </S.Reservation_Text_One>
                <S.Reservation_Text_Two position={position}>
                  실시간 예약은 물론
                </S.Reservation_Text_Two>
              </S.Reservation_Text>
              <S.Reservation_Img src="image/img_reservation.png" />
            </S.Second>
            <S.Third position={position}>
              <S.Review_Img src="image/img_review.png" />
              <S.Review_Text>
                <S.Review_Text_One position={position}>
                  실제 이용 후기가 담긴
                </S.Review_Text_One>
                <S.Review_Text_Two position={position}>
                  <span style={{ fontSize: "80px" }}>찐! </span> 리뷰 확인까지
                </S.Review_Text_Two>
              </S.Review_Text>
            </S.Third>
            <S.Fourth position={position}>
              <S.Introduce_subTitle position={position}>
                <span
                  style={{
                    opacity: (position - 11555) / 800,
                  }}
                >
                  사장님도,
                </span>{" "}
                <span
                  style={{
                    opacity: (position - 13000) / 800,
                  }}
                >
                  견주님도
                </span>
                <S.Introduce_Img
                  src="/image/icon-magnify_white.svg"
                  position={position}
                />
              </S.Introduce_subTitle>
              <S.Introduce_Title position={position}>
                <S.Logo position={position}>그루멍</S.Logo>
                에서 만나요 !
              </S.Introduce_Title>
              <S.Introduce_Bottom position={position}>
                <S.ClickBtn position={position} src="/image/img_click.png" />
                <S.LastLogo
                  position={position}
                  src="/image/img_Groomeong_white.png"
                  onClick={onClickMoveToPage("/home")}
                />
              </S.Introduce_Bottom>
            </S.Fourth>
          </S.Wrapper>
        </S.Page>
      </S.Container>
    </>
  );
}
