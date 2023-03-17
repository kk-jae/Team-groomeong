import styled from "@emotion/styled";
import * as GS from "../../../../../theme/global";

export interface IButtonProps {
  state?: "disabled";
  variation?: "primary" | "tertiary" | "negative";
  border?: "border" | "none";
  size?: "small" | "medium" | "large";
  icon?: boolean;
  label?: string;
}

export const ButtonCommons = styled.button<IButtonProps>`
  border: 0;
  outline: 0;

  border-radius: ${`${GS.Spacing[12]}px`};
  ${GS.Paragraph.Medium};
  padding: ${`${GS.Spacing[8]}px`} ${`${GS.Spacing[20]}px`};
`;
