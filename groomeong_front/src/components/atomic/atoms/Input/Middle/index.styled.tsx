import styled from "@emotion/styled";
import { motion } from "framer-motion";
import * as GS from "../../../../../../theme/global";
import { mediaQueries } from "../../../../commons/libraries/MediaQueries";

interface IFocusLabel {
  focus: boolean;
  error: string;
}
interface IFocusInput {
  error: string;
}

export const InputWrapper = styled(motion.div)`
  width: 500px;
  margin-top: 32px;
  margin-bottom: 32px;
  position: relative;
  ${GS.Paragraph.Medium};

  ${mediaQueries("phone")} {
    width: 100%;
  }
`;

export const Label = styled.label<IFocusLabel>`
  ${GS.Label.Medium}
  color: ${(props) =>
    props.focus ? GS.state.positive : GS.contents.contentSecondary};
  color: ${(props) => props.error !== undefined && GS.state.negative};
  ${GS.Label.Medium}
`;

export const InputTag = styled.input<IFocusInput>`
  width: 100%;
  border: none;
  padding: 20px 32px 20px 32px;
  margin: 20px 0px 20px 0px;
  outline: none;
  ${GS.Label.Medium}
  background-color: ${(props) =>
    props.error !== undefined
      ? GS.state.negativeTransparent
      : props.disabled !== undefined
      ? GS.state.disabled
      : GS.base.secondary};
  border-bottom: 2px solid
    ${(props) =>
      (props.error !== undefined && GS.state.negative !== undefined) ||
      GS.border.borderPrimary};

  &::placeholder {
    color: ${GS.contents.contentTertiary};
    color: ${(props) => props.error !== undefined && GS.state.negative};
    ${GS.Paragraph.Medium}
  }

  &:focus {
    outline: none;
    background-color: ${(props) =>
      props.error !== undefined
        ? GS.state.negativeTransparent !== undefined
          ? props.disabled
          : GS.state.disabled
        : GS.base.secondary};
    border-bottom: 2px solid ${GS.state.positive};
    border-bottom: 2px solid
      ${(props) => props.error !== undefined && GS.state.negative};
    color: ${GS.state.positive};
    color: ${(props) => props.error !== undefined && GS.state.negative};

    &::placeholder {
      color: ${GS.state.positive};
      color: ${(props) => props.error !== undefined && GS.state.negative};
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

export const InputLastText = styled.span`
  right: 20px;
  top: 69px;
  color: #a7a4a4;
  position: absolute;
  ${GS.Label.Medium}
`;

export const Error = styled.span`
  color: red;
  ${GS.Paragraph.Medium}
  position: absolute;
  width: 100%;
  bottom: -24px;
  left: 0;
`;
