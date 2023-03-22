import styled from "@emotion/styled";
import * as GS from "../../../../../theme/global";

export const MyPageWrapper = styled.div`
  width: 1124px;
  background-color: ${GS.base.secondary};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding-bottom: 32px;
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
`;
