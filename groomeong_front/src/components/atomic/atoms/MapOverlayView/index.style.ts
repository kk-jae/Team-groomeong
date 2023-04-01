import styled from "@emotion/styled";
import { motion } from "framer-motion";
import * as GS from "../../../../../theme/global";
import { mediaQueries } from "../../../commons/libraries/MediaQueries";

interface IDivProps {
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  direction?: string;
  justyfyContents?: string;
  alignItems?: string;
}

interface ISpanProps {
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
}

export const Div = styled(motion.div)<IDivProps>`
  display: flex;
  padding-left: ${({ left }) => left ?? null};
  padding-right: ${({ right }) => right ?? null};
  padding-top: ${({ top }) => top ?? null};
  padding-bottom: ${({ bottom }) => bottom ?? null};
  flex-direction: ${({ direction }) => direction ?? "row"};
  justify-content: ${({ justyfyContents }) => justyfyContents ?? "flex-start"};
  align-items: ${({ alignItems }) => alignItems ?? "flex-start"};

  .phoneDisable {
    ${mediaQueries("phone")} {
      display: none;
    }
  }

  .css-gg5brn {
    ${mediaQueries("phone")} {
      font-size: 16px;
    }
  }
`;

export const TitleWrapper = styled(Div)`
  width: 100%;
  flex-direction: column;
`;

export const MapOverlayViewWrapper = styled(Div)`
  min-width: 240px;
  flex-direction: column;
  padding: 32px;
  border-radius: 8px;
  background-color: ${GS.base.secondary};
  position: relative;
  top: 20%;
  z-index: 100;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
  &::after {
    position: absolute;
    content: "";
    top: 95%;
    left: 50%;
    border: none;
    border-top: 36px solid ${GS.base.secondary};
    border-left: 16px solid transparent;
    border-right: 16px solid transparent;
    border-radius: 8px;
    transform: translate((50%, 50%));
  }

  ${mediaQueries("phone")} {
    width: 100%;
    height: 100%;
    padding: 16px;
  }
`;

export const H3 = styled(motion.h3)`
  ${GS.Heading.Large}

  ${mediaQueries("phone")} {
    ${GS.Heading.Medium}
  }
`;

export const Divider = styled(Div)`
  width: 100%;
  height: 1px;
  margin: 16px 0;
  background-color: ${GS.gray[100]};
`;

export const Span = styled(motion.span)<ISpanProps>`
  ${GS.Paragraph.Medium}
  padding-left: ${({ left }) => left ?? null};
  padding-right: ${({ right }) => right ?? null};
  padding-top: ${({ top }) => top ?? null};
  padding-bottom: ${({ bottom }) => bottom ?? null};
`;

export const HighlightSpan = styled(Span)`
  ${GS.Label.Medium}
  color: ${GS.base.primary};
`;

export const ContentsWrapper = styled(Div)`
  flex-direction: column;
`;

export const ContentsButton = styled(motion.button)`
  ${GS.Label.Medium}
  color: ${GS.base.secondary};
  border: none;
  outline: none;
  padding: 8px 8px;
  background-color: ${GS.base.primary};
  cursor: pointer;
`;
