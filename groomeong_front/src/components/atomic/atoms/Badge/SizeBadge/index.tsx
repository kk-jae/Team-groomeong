import { useState } from "react";
import { useFormContext } from "react-hook-form";
import * as S from "./index.styled";

export const SizeBadge = (): JSX.Element => {
  const { setValue } = useFormContext();
  const [big, setBig] = useState(true);
  const [middle, setMiddle] = useState(false);
  const [small, setSmall] = useState(false);
  const [special, setSpecial] = useState(false);

  const onClickSize = (event: any): void => {
    if (event.target.id === "LARGE") {
      setBig(true);
      setMiddle(false);
      setSmall(false);
      setSpecial(false);
    }
    if (event.target.id === "MEDIUM") {
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
  };

  return (
    <S.SizeBadgeWrapper>
      <S.CheckBoxBig onClick={onClickSize} id="LARGE" big={big}>
        대형
      </S.CheckBoxBig>
      <S.CheckBoxMiddle onClick={onClickSize} id="MEDIUM" middle={middle}>
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
