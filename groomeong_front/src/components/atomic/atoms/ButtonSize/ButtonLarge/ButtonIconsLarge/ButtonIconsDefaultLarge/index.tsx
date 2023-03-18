import AddCircleSharpIcon from "@mui/icons-material/AddCircleSharp";
import { IButtonProps } from "../../../../ButtonCommons/index.styles";
import * as S from "../index.styles";

export const ButtonIconDefaultLarge = (props: IButtonProps) => {
  return (
    <>
      <S.ButtonIconsDefaultLargeStyles>
        <span>
          <AddCircleSharpIcon />
          {props.label}
        </span>
      </S.ButtonIconsDefaultLargeStyles>
    </>
  );
};
