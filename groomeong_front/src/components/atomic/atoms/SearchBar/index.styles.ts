import styled from "@emotion/styled";
import * as GS from "../../../../../theme/global";

interface ISearchBarProps {
  sizes: "mini" | "small" | "medium" | "large";
}

export const SearchBox = styled.div`
  width: ${(props: ISearchBarProps) =>
    props.sizes === "mini"
      ? "350px"
      : props.sizes === "small"
      ? "508px"
      : props.sizes === "medium"
      ? "744px"
      : props.sizes === "large"
      ? "1054px"
      : ""};
  height: ${(props: ISearchBarProps) =>
    props.sizes === "mini"
      ? "60px"
      : props.sizes === "small"
      ? "60px"
      : props.sizes === "medium"
      ? "76px"
      : props.sizes === "large"
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
  width: 100%;
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
