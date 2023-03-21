import { IButtonProps } from "../ButtonCommons/index.styles";
import * as S from "./index.styles";
export const Buttons = (props: IButtonProps) => {
  return (
    <>
      <S.ButtonStyles
        state={props.state}
        size={props.size}
        variation={props.variation}
        border={props.border}
        onClick={props.onClick}
        type={props.type}
      >
        {props.iconImg}
        {props.label}
      </S.ButtonStyles>
    </>
  );
};
