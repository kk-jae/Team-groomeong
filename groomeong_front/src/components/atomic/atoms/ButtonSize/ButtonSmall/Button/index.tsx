import { IButtonProps } from "../../../ButtonCommons/index.styles";
import * as S from "./index.styles";

export const Button = (props: IButtonProps) => {
  return (
    <>
      <S.ButtonDefaultStyle>{props.label}</S.ButtonDefaultStyle>
    </>
  );
};
