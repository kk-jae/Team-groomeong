import { useEffect, useState } from "react";
import * as S from "./index.styled";

export default function Page11() {
  const [isScroll, setIsScroll] = useState(false);
  const [aa, setScrollY] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  return (
    <S.Container>
      <S.Wrapper
        src="/image/icon-dog.svg"
        aa={aa}
        // style={{ transform: `translate(${aa},${aa})` }}
      />
    </S.Container>
  );
}
