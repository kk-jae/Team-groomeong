import { ChangeEvent, useState } from "react";
import * as S from "./index.styled";

// 사용 방법
// const [size, setSize] = useState("");
// <SizeBadge setSize={setSize} />
// size 를 string ( big / middle / small / special )로 return 합니다.)

export default function SizeBadge(props: any) {
  const [big, setBig] = useState(false);
  const [middle, setMiddle] = useState(false);
  const [small, setSmall] = useState(false);
  const [special, setSpecial] = useState(false);

  const onClickSize = (event: any) => {
    if (event.target.id === "big") {
      setBig(true);
      setMiddle(false);
      setSmall(false);
      setSpecial(false);
    }
    if (event.target.id === "middle") {
      setBig(false);
      setMiddle(true);
      setSmall(false);
      setSpecial(false);
    }
    if (event.target.id === "small") {
      setBig(false);
      setMiddle(false);
      setSmall(true);
      setSpecial(false);
    }
    if (event.target.id === "special") {
      setBig(false);
      setMiddle(false);
      setSmall(false);
      setSpecial(true);
    }
    props.setSize(event.target.id);
  };

  return (
    <S.SizeBadgeWrapper>
      <S.CheckBoxBig onClick={onClickSize} id="big" big={big}>
        대형
      </S.CheckBoxBig>
      <S.CheckBoxMiddle onClick={onClickSize} id="middle" middle={middle}>
        중형
      </S.CheckBoxMiddle>
      <S.CheckBoxSmall onClick={onClickSize} id="small" small={small}>
        소형
      </S.CheckBoxSmall>
      <S.CheckBoxSpecial onClick={onClickSize} id="special" special={special}>
        특수견
      </S.CheckBoxSpecial>
    </S.SizeBadgeWrapper>
  );
}
