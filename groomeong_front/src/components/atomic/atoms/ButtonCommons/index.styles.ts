import styled from "@emotion/styled";
import {
  DefaultComponentProps,
  OverridableTypeMap,
} from "@mui/material/OverridableComponent";
import { MouseEvent } from "react";
import * as GS from "../../../../../theme/global";

type voidFunc = (args?: any) => void;
type voidClickFunc = (e: MouseEvent<HTMLButtonElement>) => void;
type promiseClickFunc = (e: MouseEvent<HTMLButtonElement>) => Promise<void>;

export interface IButtonProps {
  state?: "disabled";
  variation?: "primary" | "tertiary" | "negative";
  border?: "border" | "none";
  size?: "small" | "medium" | "large";
  iconImg?: DefaultComponentProps<OverridableTypeMap>;
  label?: string;
  onClick?: voidFunc | voidClickFunc | promiseClickFunc;
  type?: "button" | "submit" | "reset";
}

export const ButtonCommons = styled.button<IButtonProps>`
  border: 0;
  outline: 0;

  border-radius: ${`${GS.Spacing[12]}px`};
  ${GS.Paragraph.Medium};
  padding: ${(props) => {
    if (props.size === "small") {
      return `${GS.Spacing[8]}px ${GS.Spacing[20]}px`;
    } else if (props.size === "medium") {
      return `${GS.Spacing[8]}px ${GS.Spacing[32]}px`;
    } else if (props.size === "large") {
      return `${GS.Spacing[8]}px ${GS.Spacing[64]}px`;
    }
    return `${GS.Spacing[8]}px ${GS.Spacing[20]}px`;
  }};
`;
