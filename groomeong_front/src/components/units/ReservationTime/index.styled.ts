import styled from "@emotion/styled";
import * as GS from "../../../../theme/global";

export const ReservationWrapperBottomItemTimeWrapper = styled.div`
  width: 885px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const ReservationWrapperBottomItemTimeDetail = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 196px;
  height: 82px;
  border: 1px solid ${GS.border.borderTransparent};
  border-radius: 12px;
  ${GS.Paragraph.Large}
  margin-bottom: 30px;
  margin-right: 20px;
  cursor: pointer;

  :hover {
    background-color: ${GS.base.primary};
  }
`;
