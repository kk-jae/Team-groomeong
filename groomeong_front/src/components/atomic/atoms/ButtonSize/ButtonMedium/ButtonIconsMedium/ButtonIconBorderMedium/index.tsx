import AddCircleSharpIcon from "@mui/icons-material/AddCircleSharp";
import { IButtonProps } from "../../../../ButtonCommons/index.styles";
import * as S from "../index.styles";

export const ButtonIconBorderMedium = (props: IButtonProps) => {
  return (
    <>
      <S.ButtonIconsBorderMediumStyles>
        <span>
          <AddCircleSharpIcon />
          {props.label}
        </span>
      </S.ButtonIconsBorderMediumStyles>
    </>
  );
};
