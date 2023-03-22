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
  width: 200px;
  position: relative;
  ${GS.Paragraph.Medium};
`;

export const Label = styled.label<IFocusLabel>`
  ${GS.Label.Medium}
  color: ${(props) =>
    props.focus ? GS.state.positive : GS.contents.contentSecondary};
  color: ${(props) => props.error && GS.state.negative};
`;

export const InputTag = styled.input<IFocusInput>`
  width: 100%;
  border: none;
  padding: 20px 32px 20px 32px;
  margin: 20px 0px 20px 0px;
  outline: none;
  ${GS.Label.Medium}
  background-color: ${(props) =>
    props.error
      ? GS.state.negativeTransparent
      : props.disabled
      ? GS.state.disabled
      : GS.base.secondary};
  border-bottom: 2px solid
    ${(props) => (props.error && GS.state.negative) || GS.border.borderPrimary};

  &::placeholder {
    color: ${GS.contents.contentTertiary};
    color: ${(props) => props.error && GS.state.negative};
    ${GS.Paragraph.Medium}
  }

  &:focus {
    outline: none;
    background-color: ${(props) =>
      props.error
        ? GS.state.negativeTransparent
          ? props.disabled
          : GS.state.disabled
        : GS.base.secondary};
    border-bottom: 2px solid ${GS.state.positive};
    border-bottom: 2px solid ${(props) => props.error && GS.state.negative};
    color: ${GS.state.positive};
    color: ${(props) => props.error && GS.state.negative};

    &::placeholder {
      color: ${GS.state.positive};
      color: ${(props) => props.error && GS.state.negative};
    }
  }
  &:disabled {
    background: ${GS.state.disabled};
    border-bottom: 2px solid ${GS.border.borderOpaque};
    color: ${GS.contents.contentSecondary};
    &::placeholder {
      color: ${GS.contents.contentTertiary};
    }
  }
`;

export const Error = styled.span`
  color: red;
  position: absolute;
  width: 100%;
  bottom: -24px;
`;
