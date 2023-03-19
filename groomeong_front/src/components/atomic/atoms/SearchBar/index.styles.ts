import styled from "@emotion/styled";
import * as GS from "../../../../../theme/global";

interface ISearchBarProps {
  size: "small" | "medium" | "large";
}

interface IInputContentProps {
  size: "small" | "medium" | "large";
  placeholder: string;
}

export const SearchBox = styled.div`
  width: ${(props: ISearchBarProps) =>
    props.size === "small"
      ? "508px"
      : props.size === "medium"
      ? "744px"
      : props.size === "large"
      ? "1054px"
      : ""};
  height: ${(props: ISearchBarProps) =>
    props.size === "small"
      ? "60px"
      : props.size === "medium"
      ? "76px"
      : props.size === "large"
      ? "92px"
      : ""};
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px;
`;

export const InputContent = styled.input`
  width: ${(props: IInputContentProps) =>
    props.size === "small"
      ? "404px"
      : props.size === "medium"
      ? "640px"
      : props.size === "large"
      ? "950px"
      : ""};
  height: 100%;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  background-color: ${GS.base.secondary};
  padding: 0px 44px;
  border: 1px solid ${GS.border.borderPrimary};
`;

export const SearchButton = styled.button`
  width: 140px;
  height: 100%;
  background-color: ${GS.black};
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  cursor: pointer;
  border: none;

  span {
    color: white;
  }
`;
