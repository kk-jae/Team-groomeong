import { InfoWindowF } from "@react-google-maps/api";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import * as GS from "../../../../../theme/global";
import { mediaQueries } from "../../../commons/libraries/MediaQueries";
import * as S from "../../../commons/style";

export const InfoWindowWrapper = styled(S.Div)`
  min-width: 400px;
  flex-direction: column;
  padding: 32px;
  border-radius: 8px;
  background-color: ${GS.base.secondary};

  ${mediaQueries("phone")} {
    width: 100%;
    height: 100%;
    padding: 16px;
  }
`;

export const TitleWrapper = styled(S.Div)`
  min-width: 424px;
  flex-direction: column;
`;

export const MapOverlayViewWrapper = styled(S.Div)`
  position: fixed;
  z-index: 99999;
  min-width: 240px;
  flex-direction: column;
  padding: 32px;
  border-radius: 8px;
  background-color: ${GS.base.secondary};
  position: relative;
  top: 20%;
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
  ${GS.Label.Large}
  width: 50%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  ${mediaQueries("phone")} {
    ${GS.Label.Large}
  }
`;

export const Divider = styled(S.Div)`
  width: 100%;
  height: 1px;
  margin: 16px 0;
  background-color: ${GS.gray[100]};
`;

export const Span = styled(S.Span)`
  font-size: 16px;
  ${mediaQueries("phone")} {
    ${GS.Paragraph.Small}
  }
`;

export const HighlightSpan = styled(Span)`
  ${GS.Label.Medium}
  color: ${GS.base.primary};
`;

export const ContentsWrapper = styled(S.Div)`
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

export const StyledInfoWindow = styled(InfoWindowF)``;
