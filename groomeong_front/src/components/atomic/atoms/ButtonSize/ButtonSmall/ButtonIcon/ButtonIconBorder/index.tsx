import AddCircleSharpIcon from "@mui/icons-material/AddCircleSharp";
import { IButtonProps } from "../../../../ButtonCommons/index.styles";
import * as S from "../index.styles";

export const ButtonIconBorder = (props: IButtonProps) => {
  return (
    <>
      <S.ButtonIconsBorderStyles>
        <span>
          <AddCircleSharpIcon />
          {props.label}
        </span>
      </S.ButtonIconsBorderStyles>
    </>
  );
};
