import styled from "@emotion/styled";
import * as GS from "../../../../../../theme/global";
import { mediaQueries } from "../../../../commons/libraries/MediaQueries";

export const ReservationListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
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
    ${mediaQueries("phone")} {
      ${GS.Paragraph.Small}
    }

    thead {
      background-color: ${GS.gray[100]};
      word-break: keep-all;

      tr {
        border-bottom: 1px solid ${GS.black};

        th {
          height: 44px;
          width: 20%;
          padding: 8px 4px;
          border-right: 1px solid black;
        }

        th:nth-child(5) {
          height: 44px;
          width: 20%;
          padding: 8px 4px;
          border-right: 0px;
        }
      }
    }

    tbody {
      background-color: ${GS.white};
      height: 44px;
      word-break: keep-all;
      ${mediaQueries("phone")} {
        ${GS.Paragraph.Small}
      }

      th {
        height: 44px;
        width: 20%;
        padding: 8px 4px;
        border-right: 1px solid black;
        border-bottom: 1px solid black;
      }

      th:nth-child(5) {
        height: 44px;
        width: 20%;
        padding: 8px 4px;
        border-right: 0px;

        div {
          display: flex;
          flex-direction: row;
          justify-content: center;

          button {
            padding: 4px 12px;
            background-color: ${GS.base.primary};
            border: 0px;
            color: ${GS.white};
            ${GS.Paragraph.Medium}
            cursor: pointer;

            ${mediaQueries("phone")} {
              ${GS.Paragraph.Small};
              word-break: keep-all;
            }
          }
        }
      }
    }
  }
`;
