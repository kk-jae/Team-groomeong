import styled from "@emotion/styled";
import { mediaQueries } from "../../../commons/libraries/MediaQueries";

export const BodyWrapper = styled.div`
  width: 1124px;
  padding: 64px 64px;
  background-color: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${mediaQueries("tablet")} {
    width: 100%;
    height: 100%;
    padding-bottom: 64px;
    padding: 0px 32px 32px 32px;
  }
`;

export const BodyTopWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BodyContentWrapper = styled.div`
  width: 100%;
  padding: 0px 64px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${mediaQueries("tablet")} {
    padding: 0px 32px;
  }

  ${mediaQueries("phone")} {
    padding: 0px 0px;
  }
`;
