import styled from "@emotion/styled";
import * as GS from "../../../../../theme/global";
import { InputMiddle } from "../../atoms/Input/Middle";

interface IValidInput {
  error?: string;
}

export const SignUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-direction: center;
  justify-content: center;
  border-radius: 20px;
  width: 1130px;
  background-color: ${GS.base.secondary};
`;

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 32px 0px;
`;

export const SingUpDivider = styled.div`
  margin-top: 32px;
  height: 1px;
  width: 996px;
  background-color: ${GS.contents.contentPrimary};
`;

export const ValidateInputWrapper = styled.div`
  padding: 32px 0px;
  position: relative;
`;
export const Label = styled.label`
  display: block;
  ${GS.Paragraph.Medium}
  color: ${GS.contents.contentSecondary};
  position: absolute;
  top: 0px;
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
  ${GS.Paragraph.Medium}
`;
