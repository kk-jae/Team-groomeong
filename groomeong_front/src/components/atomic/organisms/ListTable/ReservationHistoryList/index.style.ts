import styled from "@emotion/styled";
import * as GS from "../../../../../../theme/global";

export const ReservationListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 32px;
`;

export const MyReservationText = styled.span`
  color: ${GS.contents.contentSecondary};
  ${GS.Label.Medium}
`;

export const Table = styled.div`
  width: 100%;

  table {
    width: 100%;
    ${GS.Paragraph.Medium}

    thead {
      background-color: ${GS.gray[100]};

      tr {
        border-bottom: 1px solid ${GS.black};

        th {
          height: 44px;
          width: 20%;
          padding: 10px 0px;
          border-right: 1px solid black;
        }

        th:nth-child(5) {
          height: 44px;
          width: 20%;
          padding: 10px 0px;
          border-right: 0px;
        }
      }
    }

    tbody {
      background-color: ${GS.white};
      height: 44px;

      th {
        height: 44px;
        width: 20%;
        padding: 5px 0px;
        border-right: 1px solid black;
        border-bottom: 1px solid black;
      }

      th:nth-child(5) {
        height: 44px;
        width: 20%;
        padding: 10px 0px;
        border-right: 0px;

        div {
          display: flex;
          flex-direction: row;
          justify-content: center;
        }
      }
    }
  }
`;
