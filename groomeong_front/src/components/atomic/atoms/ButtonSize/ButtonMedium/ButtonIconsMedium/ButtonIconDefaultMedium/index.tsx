import AddCircleSharpIcon from "@mui/icons-material/AddCircleSharp";
import { IButtonProps } from "../../../../ButtonCommons/index.styles";
import * as S from "../index.styles";

export const ButtonIconDefaultMedium = (props: IButtonProps) => {
  return (
    <>
      <S.ButtonIconsDefaultMediumStyles>
        <span>
          <AddCircleSharpIcon />
          {props.label}
        </span>
      </S.ButtonIconsDefaultMediumStyles>
    </>
  );
};
