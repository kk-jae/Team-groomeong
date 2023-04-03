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
            <S.First position={position}>
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
            </S.First>
            <S.Second position={position}>
              <S.Second_Text_Wrapper>
                <S.Second_Main_Text position={position}>
                  가까운 반려견 미용샵을 <br />
                  찾으시나요?
                </S.Second_Main_Text>
                <S.Second_Sub_Text position={position}>
                  우리 동네 반려견 미용샵 찾기, <br /> GROOMENONG과 함께!
                </S.Second_Sub_Text>
              </S.Second_Text_Wrapper>
              <S.Second_Img_Wrapper position={position}>
                <S.Second_Img_Dog
                  src="image/img_second_dog.png"
                  position={position}
                />
                <S.Second_Img_Table
                  src="image/img_second_table.png"
                  position={position}
                />
                <S.Second_Img_Back
                  src="image/img_second_back.png"
                  position={position}
                />
                <S.Second_Img_Women
                  src="image/img_second_women.png"
                  position={position}
                />
              </S.Second_Img_Wrapper>
            </S.Second>
            <S.Third position={position}>
              <S.Third_Img_Wrapper position={position}>
                <S.Third_Img_Back
                  position={position}
                  src="/image/img_third_back.png"
                />
                <S.Third_Img_Map
                  position={position}
                  src="/image/img_third_map.png"
                />
              </S.Third_Img_Wrapper>
              <S.Third_Text_Wrapper position={position}>
                <S.Third_Main_Text position={position}>
                  지도 검색을 통한 <br />
                  미용샵 모아보기
                </S.Third_Main_Text>
                <S.Third_Sub_Text position={position}>
                  생생한 리뷰와 별점, <br />
                  나에게 적합한 미용샵을 한눈에!
                </S.Third_Sub_Text>
              </S.Third_Text_Wrapper>
            </S.Third>
            <S.Fourth position={position}>
              <S.Fourth_Text_Wrapper position={position}>
                <S.Fourth_Main_Text position={position}>
                  편리한 예약 <br /> 서비스
                </S.Fourth_Main_Text>
                <S.Fourth_Sub_Text position={position}>
                  실시간 예약은 물론, <br />
                  지난 예약 히스토리까지!
                </S.Fourth_Sub_Text>
              </S.Fourth_Text_Wrapper>
              <S.Fourth_Img_Wrapper position={position}>
                <S.Fourth_Img_Reservation
                  src="/image/img_fourth_reservation.png"
                  position={position}
                />
              </S.Fourth_Img_Wrapper>
            </S.Fourth>
            <S.Fifth position={position}>
              <S.Fifth_Wrapper>
                <S.Fifth_Img_Wrapper>
                  <S.Fifth_Img src="/image/img_fifth_logo.png" />
                </S.Fifth_Img_Wrapper>
                <S.Fifth_Text_Wrapper>
                  <S.Fifth_Main_Text>이 모든 것을 그루멍에서</S.Fifth_Main_Text>
                  <S.Fifth_SubButton_Text
                    onClick={onClickMoveToPage("/home")}
                    position={position}
                  >
                    웹 사이트 바로가기
                    <S.Icon>{" > "}</S.Icon>
                  </S.Fifth_SubButton_Text>
                </S.Fifth_Text_Wrapper>
              </S.Fifth_Wrapper>
            </S.Fifth>
          </S.Wrapper>
        </S.Page>
      </S.Container>
    </>
  );
}
