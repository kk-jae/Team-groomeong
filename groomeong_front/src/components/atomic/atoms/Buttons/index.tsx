import { IButtonProps } from "../ButtonCommons/index.styles";
import * as S from "./index.styles";
export const Buttons = (props: IButtonProps) => {
  return (
    <>
      <S.ButtonStyles
        state={props.state}
        size={props.size ?? "small"}
        variation={props.variation}
        border={props.border ?? "none"}
        onClick={props.onClick}
        type={props.type ?? "submit"}
        disabled={props.state === "disabled"}
        iconImg={props.iconImg}
      >
        {props.iconImg}
        {props.label}
      </S.ButtonStyles>
    </>
  );
};
