import AddCircleSharpIcon from "@mui/icons-material/AddCircleSharp";
import { IButtonProps } from "../../../../ButtonCommons/index.styles";
import * as S from "../index.styles";

export const ButtonIconBorderLarge = (props: IButtonProps) => {
  return (
    <>
      <S.ButtonIconsBorderLargeStyles>
        <span>
          <AddCircleSharpIcon />
          {props.label}
        </span>
      </S.ButtonIconsBorderLargeStyles>
    </>
  );
};
