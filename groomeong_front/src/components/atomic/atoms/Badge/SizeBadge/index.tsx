import { useState } from "react";
import { useFormContext } from "react-hook-form";
import * as S from "./index.styled";

// 사용 방법
// const [size, setSize] = useState("");
// <SizeBadge setSize={setSize} />
// size 를 string ( big / middle / small / special )로 return 합니다.)

export const SizeBadge = (props: any) => {
  const { setValue } = useFormContext();
  const [big, setBig] = useState(false);
  const [middle, setMiddle] = useState(false);
  const [small, setSmall] = useState(false);
  const [special, setSpecial] = useState(false);

  const onClickSize = (event: any) => {
    if (event.target.id === "BIG") {
      setBig(true);
      setMiddle(false);
      setSmall(false);
      setSpecial(false);
    }
    if (event.target.id === "MIDDLE") {
      setBig(false);
      setMiddle(true);
      setSmall(false);
      setSpecial(false);
    }
    if (event.target.id === "SMALL") {
      setBig(false);
      setMiddle(false);
      setSmall(true);
      setSpecial(false);
    }
    if (event.target.id === "SPECIAL") {
      setBig(false);
      setMiddle(false);
      setSmall(false);
      setSpecial(true);
    }
    setValue("breed", event.target.id);
    // props.setSize(event.target.id);
  };

  return (
    <S.SizeBadgeWrapper>
      <S.CheckBoxBig onClick={onClickSize} id="BIG" big={big}>
        대형
      </S.CheckBoxBig>
      <S.CheckBoxMiddle onClick={onClickSize} id="MIDDLE" middle={middle}>
        중형
      </S.CheckBoxMiddle>
      <S.CheckBoxSmall onClick={onClickSize} id="SMALL" small={small}>
        소형
      </S.CheckBoxSmall>
      <S.CheckBoxSpecial onClick={onClickSize} id="SPECIAL" special={special}>
        특수견
      </S.CheckBoxSpecial>
    </S.SizeBadgeWrapper>
  );
};
