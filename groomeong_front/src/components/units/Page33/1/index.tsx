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
        <S.Img1 src="/rending/start2/groomeong_not_character.svg" />
        <S.Img2 src="/image/img-character-dog.svg" />
        <S.FlyAway1 src="/rending/start/5.jpg" />
        <S.FlyAway2 src="/rending/start/2.jpg" />
        <S.FlyAway3 src="/rending/start/3.jpg" />
        <S.FlyAway4 src="/rending/start/7.jpg" position={position} />
        <S.Scroll>Down !!</S.Scroll>
      </S.Page1>
      <S.Page2 position={position}>
        <S.Introduce>
          <S.Introduce_one position={position}>
            전국 애견샵 지도
          </S.Introduce_one>
          <S.Introduce_two position={position}>실시간 예약</S.Introduce_two>
          <S.Introduce_three position={position}>솔직한 후기</S.Introduce_three>
        </S.Introduce>
      </S.Page2>
    </S.Container>
  );
}
