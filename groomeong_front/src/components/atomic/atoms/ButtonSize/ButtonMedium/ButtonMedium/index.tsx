import { IButtonProps } from "../../../ButtonCommons/index.styles";
import * as S from "./index.styles";

export const ButtonMedium = (props: IButtonProps) => {
  return (
    <>
      <S.ButtonMediumStyle>{props.label}</S.ButtonMediumStyle>
    </>
  );
};
