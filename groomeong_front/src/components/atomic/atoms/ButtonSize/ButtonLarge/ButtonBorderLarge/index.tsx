import { IButtonProps } from "../../../ButtonCommons/index.styles";
import * as S from "./index.styles";

export const ButtonBorderLarge = (props: IButtonProps) => {
  return (
    <>
      <S.ButtonBorderLargeStyles>{props.label}</S.ButtonBorderLargeStyles>
    </>
  );
};
