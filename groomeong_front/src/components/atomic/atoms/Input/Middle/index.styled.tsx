import styled from "@emotion/styled";
import * as GS from "../../../../../../theme/global";

interface IFocusLabel {
  focus: boolean;
  error: string;
}
interface IFocusInput {
  error: string;
}

export const InputWrapper = styled.div`
  width: 500px;
  margin-top: 32px;
  margin-bottom: 32px;
  font: ${GS.Paragraph.Medium};
`;

export const Label = styled.label<IFocusLabel>`
  color: ${(props) =>
    props.focus ? GS.state.positive : GS.contents.contentSecondary};
  color: ${(props) => props.error && GS.state.negative};
`;

export const InputTag = styled.input<IFocusInput>`
  width: 100%;
  height: 46px;
  border-radius: 12px;
  padding: 20px 32px 20px 32px;
  margin: 20px 0px 20px 0px;
  border: 2px solid
    ${(props) => (props.error && GS.state.negative) || GS.border.borderPrimary};

  &::placeholder {
    color: ${GS.contents.contentTertiary};
    color: ${(props) => props.error && GS.state.negative};
  }

  :focus {
    outline: none;
    border: 2px solid ${GS.state.positive};
    border: 2px solid ${(props) => props.error && GS.state.negative};
    color: ${GS.state.positive};
    color: ${(props) => props.error && GS.state.negative};

    &::placeholder {
      color: ${GS.state.positive};
      color: ${(props) => props.error && GS.state.negative};
    }
  }
  &:disabled {
    background: #f5f5f5;
    border: 2px solid ${GS.gray[100]};
    color: ${GS.contents.contentSecondary}
  }
`;

export const Error = styled.span`
  color: red;
`;
