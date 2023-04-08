import styled from "@emotion/styled";
import { mediaQueries } from "../../../commons/libraries/MediaQueries";
import * as S from "../../../commons/style";
import * as GS from "../../../../../theme/global";

export const MapListBoxWrapper = styled(S.Div)`
  display: flex;
  width: 100%;
  padding: 16px;
  margin: 16px 0;
  flex-direction: column;
  z-index: 100;

  ${mediaQueries("tablet")} {
    width: 100%;
  }
`;

export const MapListBoxTitleWrapper = styled(S.Div)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-direction: row;
  .ant-rate-disabled {
    ${mediaQueries("phone")} {
      font-size: 12px;
    }
  }
  h4 {
    ${mediaQueries("phone")} {
      ${GS.Label.Medium}
    }
  }
`;
