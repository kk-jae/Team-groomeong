import styled from "@emotion/styled";
import * as TS from "../../../../../theme/global";

interface IFocusLabel {
  focus: boolean;
  error: string;
}
interface IFocusInput {
  error: string;
}

export const InputWrapper = styled.div`
  width: 500px;
  font: ${TS.Paragraph.Medium};
`;

export const Label = styled.label<IFocusLabel>`
  color: ${(props) =>
    props.focus ? TS.state.positive : TS.contents.contentSecondary};
  color: ${(props) => props.error && "red"};
`;

export const InputTag = styled.input<IFocusInput>`
  width: 100%;
  height: 46px;
  border-radius: 12px;
  padding: 20px 32px 20px 32px;
  margin: 20px 0px 20px 0px;
  border: 2px solid #898989; // border/borderOpaque 없음
  border: 2px solid ${(props) => props.error && "red"};

  &::placeholder {
    color: ${TS.contents.contentTertiary};
    color: ${(props) => props.error && "red"};
  }

  :focus {
    outline: none;
    border: 2px solid ${TS.state.positive};
    border: 2px solid ${(props) => props.error && "red"};
    color: ${TS.state.positive};
    color: ${(props) => props.error && "red"};

    &::placeholder {
      color: ${TS.state.positive};
      color: ${(props) => props.error && "red"};
    }
  }
`;

export const Error = styled.span`
  color: red;
`;
