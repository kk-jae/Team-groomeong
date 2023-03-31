import { useEffect, useState } from "react";
import * as S from "./index.styled";

export default function Page33() {
  const [position, setPosition] = useState(1);

  function onScroll() {
    setPosition(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll); // 컴포넌트 언마운트되기전에 제거됨
    };
  }, []);

  return (
    <S.Container>
      <div className="wrapper">
        <S.Bgbg1 className="bg bg1" position={position}>
          <S.Bgbg1Text>Welcome</S.Bgbg1Text>
        </S.Bgbg1>
        <S.Desc1 className="desc" position={position}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </S.Desc1>
        <S.Desc2 className="desc2" position={position}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat laborum.
        </S.Desc2>
        <S.Dis position={position}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          vero ut ullam earum dolore
        </S.Dis>
        <S.Dis1 position={position}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          vero ut ullam earum
        </S.Dis1>
        <S.Dis2 position={position}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          vero ut ullam earum dolore p
        </S.Dis2>

        <img src="/image/icon-dog.svg" className="item" />
        <img src="/image/icon-store.svg" className="item" />
      </div>
    </S.Container>
  );
}
