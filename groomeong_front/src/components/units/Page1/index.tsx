import * as S from "./index.styled";
import { animated, useSpring } from "@react-spring/web";
import { useState } from "react";

export default function Page1() {
  const [rotate, setRotate] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: rotate ? 1 : 0,
    transform: `perspective(600px) rotateX(${rotate ? 180 : 0}deg)`,
  });

  const onClickRotate = () => {
    setRotate((prev) => !prev);
  };

  return (
    <S.Container>
      <S.Wrapper onClick={onClickRotate}>
        <animated.div
          style={{ opacity: opacity.to((o) => 1 - o), transform }}
        />
        <animated.span style={{ opacity, transform, rotateX: "180deg" }} />
      </S.Wrapper>
    </S.Container>
  );
}
