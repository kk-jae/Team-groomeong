import styled from "@emotion/styled";
import { ButtonDefaultStyle } from "../Button/index.styles";
import { ButtonBorderStyles } from "../ButtonBorder/index.styles";

export const ButtonIconsBorderStyles = styled(ButtonBorderStyles)`
  & > span {
    display: flex;
    gap: 10px;
  }
`;

export const ButtonIconsDefaultStyles = styled(ButtonDefaultStyle)`
  & > span {
    display: flex;
    gap: 10px;
  }
`;
