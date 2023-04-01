import styled from "@emotion/styled";
import * as GS from "../../../../../../theme/global";
import { mediaQueries } from "../../../../commons/libraries/MediaQueries";

export const DogsListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 32px;

  ${mediaQueries("phone")} {
    margin-top: 32px;
  }
`;

export const MyDogText = styled.span`
  color: ${GS.contents.contentSecondary};
  ${GS.Label.Medium}

  ${mediaQueries("phone")} {
    ${GS.Label.Small}
  }
`;

export const Table = styled.div`
  width: 100%;

  table {
    width: 100%;
    ${GS.Paragraph.Medium}

    ${mediaQueries("tablet")} {
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
          padding: 4px 8px;
          border-right: 1px solid black;
        }

        th:nth-child(5) {
          height: 44px;
          width: 20%;
          padding: 4px 8px;
          border-right: 0px;
        }
      }
    }

    tbody {
      background-color: ${GS.white};
      height: 44px;
      word-break: keep-all;

      th {
        height: 44px;
        width: 20%;
        padding: 4px 8px;
        border-right: 1px solid black;
        border-bottom: 1px solid black;
      }

      th:nth-child(5) {
        height: 44px;
        width: 20%;
        padding: 4px 8px;
        border-right: 0px;

        button {
          ${GS.Paragraph.Medium}

          ${mediaQueries("tablet")} {
            ${GS.Paragraph.Small}
          }
        }
      }
    }
  }
`;
