import styled from "@emotion/styled";
import * as GS from "../../../../../../theme/global";

interface IProps {
  state: boolean;
}

export const TextBadgeWrapper = styled.div``;

export const TextBadgeButton = styled.button<IProps>`
  cursor: pointer;
  width: 72px;
  height: 30px;
  border-radius: 4px;
  background-color: ${(props) =>
    props.state ? `${GS.base.primary}` : `${GS.gray[300]}`};
  border: none;
  color: #ffffff;
  font: ${GS.Heading.Medium};
  padding: 4px 8px 4px 8px;
`;
