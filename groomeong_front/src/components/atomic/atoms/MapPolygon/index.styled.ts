import styled from "@emotion/styled";
import { Div, H3 } from "../../../commons/style";
import * as GS from "../../../../../theme/global"


export const PolygonOverlayViewWrapper = styled(Div)`
  position: relative;
  width: 300px; 
  height: 100%;
`

export const PolygonOverlayViewTitle = styled(H3)`
  position: absolute;
  top: 50%;
  left: 30%;
  transform: translate(-50%, -50%);
  color: ${GS.blue[500]};
  background-color: ${GS.base.secondary};
  padding: 16px 32px;
`
