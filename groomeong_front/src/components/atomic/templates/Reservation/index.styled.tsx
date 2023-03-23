import styled from "@emotion/styled";
import * as GS from "../../../../../theme/global";

export const ReservationWrapper = styled.div`
  width: 1124px;
  background-color: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ReservationWrapperTop = styled.div`
  width: 996px;
  height: 87px;
  margin: 32px 64px 32px 64px;
  display: flex;
  flex-direction: row;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${GS.border.borderOpaque};
`;

export const ReservationTopImg = styled.img`
  width: 45px;
  height: 45px;
  object-fit: cover;
`;
export const ReservationTopText = styled.span`
  ${GS.Heading.XXXL}
  padding-left:32px;
`;

export const ReservationWrapperBottom = styled.div`
  width: 996px;
`;

export const ReservationWrapperBottomItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 64px;
`;

export const ReservationWrapperBottomItemTitle = styled.span`
  color: ${GS.contents.contentTertiary};
  ${GS.Label.Medium};
  padding-bottom: 32px;
`;

export const ReservationWrapperBottomItemAnswer = styled.span`
  ${GS.Paragraph.Large}
`;

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

export const ReservationWrapperBottomSubmitWrapper = styled.div`
  width: 996px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 32px 0px 32px 0px;
`;

export const ReservationWrapperBottomSubmit = styled.button`
  width: 184px;
  height: 42px;
  background-color: ${GS.base.primary};
  border: none;
  border-radius: 12px;
  color: white;
  ${GS.Paragraph.Medium}
  cursor: pointer;
`;
