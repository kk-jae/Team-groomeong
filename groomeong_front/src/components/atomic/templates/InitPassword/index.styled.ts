import styled from "@emotion/styled";
import { mediaQueries } from "../../../commons/libraries/MediaQueries";

export const InitPasswordWrapper = styled.div`
  width: 1124px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${mediaQueries("tablet")} {
    width: 100%;
    padding: 36px;
  }
`;

export const InitPasswordForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 60px;
`;
