import styled from "@emotion/styled";
import * as GS from "../../../../../../theme/global";

export interface IMyPageProps {
  image: string;
}

export const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  img {
    width: 84px;
    height: 84px;
    margin-left: 32px;
    padding: 8px;
    border: 1px solid ${GS.border.borderTransparent};
  }
`;
