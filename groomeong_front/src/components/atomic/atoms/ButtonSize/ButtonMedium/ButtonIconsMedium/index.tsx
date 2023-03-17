import AddCircleSharpIcon from "@mui/icons-material/AddCircleSharp";
import * as S from "./index.styles";

export const ButtonIconMedium = () => {
  return (
    <>
      <S.ButtonIconsBorderMediumStyles>
        <span>
          <AddCircleSharpIcon />
          Button
        </span>
      </S.ButtonIconsBorderMediumStyles>

      <S.ButtonIconsDefaultMediumStyles>
        <span>
          <AddCircleSharpIcon />
          Button
        </span>
      </S.ButtonIconsDefaultMediumStyles>
    </>
  );
};
