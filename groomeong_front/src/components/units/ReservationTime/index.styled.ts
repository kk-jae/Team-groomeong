import styled from "@emotion/styled";
import * as GS from "../../../../theme/global";

export const ReservationWrapperBottomItemTimeWrapper = styled.div`
  width: 885px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

interface IReservationWrapperBottomItemTimeDetail {
  reservationTime: string;
  el: string;
  disabled: boolean;
}

export const ReservationWrapperBottomItemTimeDetail = styled.button<IReservationWrapperBottomItemTimeDetail>`
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
  background-color: ${(props) =>
    props.reservationTime === props.el ? GS.base.primary : "white"};
  cursor: ${(props) => (props.disabled ? "inherit" : "pointer")};

  :hover {
    background-color: ${(props) => (props.disabled ? "none" : GS.base.primary)};
  }
`;
