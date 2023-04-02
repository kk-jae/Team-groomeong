import styled from "@emotion/styled";
import * as GS from "../../../../../../theme/global";
import { mediaQueries } from "../../../../commons/libraries/MediaQueries";

export interface IMyPageProps {
  image: string;
}

export const LabelWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 64px;

  ${mediaQueries("tablet")} {
    margin-bottom: 32px;
  }

  p {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 32px;
  }
`;

export const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  .cancel {
    margin-left: 32px;

    ${mediaQueries("phone")} {
      margin-top: 16px;
      margin-left: 0px;
    }
  }
  ${mediaQueries("phone")} {
    flex-direction: column;
  }
`;

export const Label = styled.label`
  ${GS.Label.Medium}
  color: ${GS.gray[500]};
  margin-bottom: 32px;

  ${mediaQueries("tablet")} {
    margin-bottom: 16px;
  }
`;
