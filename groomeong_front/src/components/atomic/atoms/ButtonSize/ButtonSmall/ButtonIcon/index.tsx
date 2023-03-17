import AddCircleSharpIcon from "@mui/icons-material/AddCircleSharp";
import * as S from "./index.styles";
export const ButtonIcon = () => {
  return (
    <>
      <S.ButtonIconsBorderStyles>
        <span>
          <AddCircleSharpIcon />
          Button
        </span>
      </S.ButtonIconsBorderStyles>

      <S.ButtonIconsDefaultStyles>
        <span>
          <AddCircleSharpIcon />
          Button
        </span>
      </S.ButtonIconsDefaultStyles>
    </>
  );
};
