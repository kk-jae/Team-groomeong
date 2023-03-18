import { IButtonProps } from "../../../ButtonCommons/index.styles";
import { ButtonLargeStyle } from "./index.styles";

export const ButtonLarge = (props: IButtonProps) => {
  return (
    <>
      <ButtonLargeStyle>{props.label}</ButtonLargeStyle>
    </>
  );
};
