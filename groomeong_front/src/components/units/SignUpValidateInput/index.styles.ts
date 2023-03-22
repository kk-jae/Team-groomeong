import styled from "@emotion/styled";
import * as GS from "../../../../theme/global";
import { InputTag } from "../../atomic/atoms/Input/Small/index.styled";

export const ValidateInputWrapper = styled.div`
  padding: 32px 0;
  position: relative;
`;
export const Label = styled.label`
  display: block;
  ${GS.Paragraph.Medium}
  color: ${GS.contents.contentSecondary};
  position: absolute;
  top: 0px;
`;

export const ValidationInput = styled(InputTag)`
  width: 220px;
`;

export const ValidateDiv = styled.div`
  display: flex;
  width: 500px;
  justify-content: center;
`;

export const ValidateWrapper = styled.div`
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
`;

export const Error = styled.span`
  color: red;
  width: 100%;
  position: absolute;
  bottom: 24px;
  ${GS.Paragraph.Medium}
`;

export const EmailInput = styled(ValidationInput)`
  width: 100%;
  &:disabled {
    background-color: #525252;
    color: ${GS.contents.contentSecondary};
  }
`;
