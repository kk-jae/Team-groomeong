import { useEffect, useState } from "react";
import * as S from "./index.styled";

export default function Page11() {
  const [position, setPosition] = useState(0);
  const homeImg = [1, 2, 3, 4, 5, 6, 7];

  useEffect(() => {
    window.addEventListener("scroll", (Scroll) => {});
  }, []);

  const on = () => {
    const mainBox = document.getElementById("box");
    setPosition(mainBox?.scrollTop);
    console.log(position);
  };

  return (
    <S.Container>
      <div id="box" onScroll={on}>
        <div style={{ transform: `rotate(${position / 8}deg)` }}>악!!</div>
        {homeImg.map((el, index) => (
          <div key={index}>
            <div>{el}</div>
          </div>
        ))}
      </div>
    </S.Container>
  );
}
