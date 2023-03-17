import AddCircleSharpIcon from "@mui/icons-material/AddCircleSharp";
import * as S from "./index.styles";

export const ButtonIconLarge = () => {
  return (
    <>
      <S.ButtonIconsBorderLargeStyles>
        <span>
          <AddCircleSharpIcon />
          Button
        </span>
      </S.ButtonIconsBorderLargeStyles>

      <S.ButtonIconsDefaultLargeStyles>
        <span>
          <AddCircleSharpIcon />
          Button
        </span>
      </S.ButtonIconsDefaultLargeStyles>
    </>
  );
};
