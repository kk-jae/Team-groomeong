import { IButtonProps } from "../../../ButtonCommons/index.styles";
import * as S from "./index.styles";

export const ButtonBorder = (props: IButtonProps) => {
  return (
    <>
      <S.ButtonBorderStyles>{props.label}</S.ButtonBorderStyles>
    </>
  );
};
