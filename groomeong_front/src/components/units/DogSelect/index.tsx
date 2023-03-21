import type { MouseEvent } from "react";
import { useState } from "react";
import * as S from "./index.styled";

const dogs = [
  { name: "멍재훈" },
  { name: "멍광기" },
  { name: "멍하은" },
  { name: "멍현재" },
];

export const DogSelect = () => {
  const [isOpenSelect, setIsOpenSelect] = useState(false);
  const [choiceDog, setChoice] = useState("댕댕이를 선택해주세요");

  const onClickOpenSelect = () => {
    setIsOpenSelect((prev) => !prev);
  };

  const onClickChoiceDog = (event: MouseEvent<HTMLSpanElement>) => {
    setChoice(event.currentTarget.id);
    setIsOpenSelect((prev) => !prev);
  };

  return (
    <S.SelectContainer>
      <S.SelectWrapper onClick={onClickOpenSelect}>
        <S.SelectTitle>
          <S.SelectTitleMessage choiceDog={choiceDog}>
            {choiceDog}
          </S.SelectTitleMessage>
          <S.SelectTitleIcon>▼</S.SelectTitleIcon>
        </S.SelectTitle>
      </S.SelectWrapper>
      {isOpenSelect ? (
        <S.SelectItemWrapper>
          {dogs.map((el, index) => (
            <div key={index}>
              <S.SelectItem id={el.name} onClick={onClickChoiceDog}>
                {el.name}
              </S.SelectItem>
            </div>
          ))}
        </S.SelectItemWrapper>
      ) : (
        <div></div>
      )}
    </S.SelectContainer>
  );
};
