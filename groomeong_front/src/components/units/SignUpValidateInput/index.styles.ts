import styled from "@emotion/styled";
import * as GS from "../../../../theme/global";
import { InputTag } from "../../atomic/atoms/Input/Small/index.styled";
import { mediaQueries } from "../../commons/libraries/MediaQueries";

export const ValidateInputWrapper = styled.div`
  padding: 32px 0;
  position: relative;

  ${mediaQueries("phone")} {
    padding: 32px 0px 12px 0px;
  }
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

  ${mediaQueries("phone")} {
    width: 100%;
    justify-content: flex-start;
  }
`;

export const ValidateWrapper = styled.div`
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;

  ${mediaQueries("phone")} {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;

export const Error = styled.span`
  color: red;
  width: 100%;
  position: absolute;
  bottom: 24px;
  ${GS.Paragraph.Medium}

  ${mediaQueries("phone")} {
    bottom: 12px;
  }
`;

export const EmailInput = styled(ValidationInput)`
  width: 100%;
  &:disabled {
    background-color: #525252;
    color: ${GS.contents.contentSecondary};
  }
`;
