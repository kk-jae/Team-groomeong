import styled from "@emotion/styled";
import * as GS from "../../../../../../theme/global";

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
`;

export const Label = styled.label`
  ${GS.Label.Medium}
  color: ${GS.gray[500]};
  margin-bottom: 32px;
`;
