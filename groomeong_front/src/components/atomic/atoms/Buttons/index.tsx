import { IButtonProps } from "../ButtonCommons/index.styles";
import * as S from "./index.styles";
export const Buttons = (props: IButtonProps): JSX.Element => {
  return (
    <>
      <S.ButtonStyles
        state={props.state}
        variation={props.variation}
        border={props.border ?? "none"}
        size={props.size ?? "small"}
        iconImg={props.iconImg}
        onClick={props.onClick}
        type={props.type ?? "submit"}
        disabled={props.state === "disabled"}
        id={props.id}
        className={props.className}
      >
        {props.iconImg}
        {props.label}
      </S.ButtonStyles>
    </>
  );
};
