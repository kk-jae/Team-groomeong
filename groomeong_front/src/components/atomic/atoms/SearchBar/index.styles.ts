import styled from "@emotion/styled";
import * as GS from "../../../../../theme/global";
import { mediaQueries } from "../../../commons/libraries/MediaQueries";

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
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px;

  ${mediaQueries("tablet")} {
    height: 80px;
  }
  ${mediaQueries("phone")} {
    ${GS.Label.Small}
    height: 60px;
  }
`;

export const InputContent = styled.input`
  outline: none;
  width: 100%;
  height: 100%;
  background-color: ${GS.base.secondary};
  padding: 24px 44px;
  border: 1px solid ${GS.border.borderPrimary};
  ${GS.Label.Large}
  ${mediaQueries("phone")} {
    ${GS.Label.Small}
    height: 60px;
  }
`;

export const SearchButton = styled.button`
  width: 140px;
  height: 100%;
  background-color: ${GS.black};
  cursor: pointer;
  border: none;

  span {
    color: white;
  }
`;
