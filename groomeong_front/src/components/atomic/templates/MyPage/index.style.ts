import styled from "@emotion/styled";
import * as GS from "../../../../../theme/global";
import { mediaQueries } from "../../../commons/libraries/MediaQueries";

export const MyPageWrapper = styled.div`
  width: 1124px;
  background-color: ${GS.base.secondary};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding-bottom: 32px;

  ${mediaQueries("tablet")} {
    width: 100%;
    padding: 32px 32px;
  }

  ${mediaQueries("phone")} {
    padding: 8px 16px;
  }
`;

export const MyPageBodyWrapper = styled.div`
  width: 100%;
  background-color: ${GS.base.secondary};
  padding: 32px 64px;
  display: flex;
  flex-direction: column;

  p {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 32px;
  }

  ${mediaQueries("tablet")} {
    padding: 16px 16px;
  }
`;
