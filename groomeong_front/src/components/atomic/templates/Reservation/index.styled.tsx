import styled from "@emotion/styled";
import * as GS from "../../../../../theme/global";
import { mediaQueries } from "../../../commons/libraries/MediaQueries";

export const ReservationWrapper = styled.div`
  width: 1124px;
  background-color: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${mediaQueries("tablet")} {
    width: 100%;
    padding: 0px 64px;
  }

  ${mediaQueries("phone")} {
    padding: 0px 28px;
  }
`;

export const ReservationWrapperTop = styled.div`
  width: 996px;
  height: 87px;
  margin: 32px 64px 32px 64px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${GS.border.borderOpaque};

  ${mediaQueries("tablet")} {
    width: 100%;
  }
`;

export const ReservationTopImg = styled.img`
  width: 45px;
  height: 45px;
  object-fit: cover;

  ${mediaQueries("phone")} {
    display: none;
  }
`;
export const ReservationTopText = styled.span`
  ${GS.Heading.XXXL}
  padding-left:32px;

  ${mediaQueries("tablet")} {
    ${GS.Heading.XXL}
  }

  ${mediaQueries("phone")} {
    ${GS.Heading.XL}
    padding-left:0px;
  }
`;

export const ReservationWrapperBottom = styled.div`
  width: 996px;

  ${mediaQueries("tablet")} {
    width: 100%;
  }
`;

export const ReservationWrapperBottomItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 64px;

  ${mediaQueries("phone")} {
    padding-bottom: 40px;
  }
`;

export const ReservationWrapperBottomItemTitle = styled.span`
  color: ${GS.contents.contentTertiary};
  ${GS.Label.Medium};
  padding-bottom: 32px;
`;

export const ReservationWrapperBottomItemAnswer = styled.span`
  ${GS.Paragraph.Large}
`;

export const ReservationWrapperBottomSubmitWrapper = styled.div`
  width: 996px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 32px 0px 32px 0px;

  ${mediaQueries("tablet")} {
    width: 100%;
  }
`;

export const ReservationWrapperBottomSubmit = styled.button`
  width: 184px;
  height: 42px;
  background-color: ${GS.base.primary};
  border: none;
  color: white;
  ${GS.Paragraph.Medium}
  cursor: pointer;
`;
