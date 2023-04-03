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
  console.log(position);

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
          <S.Scroll_Text>SCROLL</S.Scroll_Text>
          <S.Scroll_Icon>
            <ArrowDownward />
          </S.Scroll_Icon>
        </S.Scroll>
        <S.Page position={position}>
          <S.Wrapper position={position}>
            {/* <S.First position={position}>
              <S.First_Img_Wrapper>
                <S.First_Back_Img
                  src="image/img_first_back.png"
                  position={position}
                />
                <S.First_Dog_Img
                  src="image/img_first_dog.png"
                  position={position}
                />
              </S.First_Img_Wrapper>
              <S.First_Text_Wrapper>
                <S.First_sub_Text position={position}>
                  반려견을 더욱 사랑스럽게, 더욱 건강하게
                </S.First_sub_Text>
                <S.First_Text position={position}>GROOMEONG</S.First_Text>
              </S.First_Text_Wrapper>
            </S.First> */}
            <S.Second position={position}>
              <S.Second_Text_Wrapper>
                <S.Second_Main_Text position={position}>
                  가까운 반려견 미용샵을 찾으시나요?
                </S.Second_Main_Text>
                <S.Secont_Sub_Text position={position}>
                  우리 동네 반려견 미용샵 찾기, <br /> GROOMENONG과 함께!
                </S.Secont_Sub_Text>
              </S.Second_Text_Wrapper>
              <S.Reservation_Img src="image/img_reservation.png" />
            </S.Second>
            {/* <S.Third position={position}>
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
            </S.Fourth> */}
          </S.Wrapper>
        </S.Page>
      </S.Container>
    </>
  );
}
