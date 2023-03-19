import AddCircleSharpIcon from "@mui/icons-material/AddCircleSharp";
import { IButtonProps } from "../../../../ButtonCommons/index.styles";
import * as S from "../index.styles";
export const ButtonIconDefault = (props: IButtonProps) => {
  return (
    <>
      <S.ButtonIconsDefaultStyles>
        <span>
          {props.iconImg}
          {props.label}
        </span>
      </S.ButtonIconsDefaultStyles>
    </>
  );
};
