import styled from "@emotion/styled";
import { motion } from "framer-motion";
import * as GS from "../../../../theme/global";

interface ICommonProps {
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
}

interface IDivProps extends ICommonProps {
  direction?: string;
  justyfyContents?: string;
  alignItems?: string;
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
`;
export const Span = styled(motion.div)<ICommonProps>`
  ${GS.Paragraph.Medium}
  padding-left: ${({ left }) => left ?? null};
  padding-right: ${({ right }) => right ?? null};
  padding-top: ${({ top }) => top ?? null};
  padding-bottom: ${({ bottom }) => bottom ?? null};
`

export const H1 = styled(motion.h1)<ICommonProps>`
  ${GS.Heading.XXXL}
  padding-left: ${({ left }) => left ?? null};
  padding-right: ${({ right }) => right ?? null};
  padding-top: ${({ top }) => top ?? null};
  padding-bottom: ${({ bottom }) => bottom ?? null};
`
export const H2 = styled(motion.h2)<ICommonProps>`
  ${GS.Heading.XXL}
  padding-left: ${({ left }) => left ?? null};
  padding-right: ${({ right }) => right ?? null};
  padding-top: ${({ top }) => top ?? null};
  padding-bottom: ${({ bottom }) => bottom ?? null};
`
export const H3 = styled(motion.h3)<ICommonProps>`
  ${GS.Heading.XL}
  padding-left: ${({ left }) => left ?? null};
  padding-right: ${({ right }) => right ?? null};
  padding-top: ${({ top }) => top ?? null};
  padding-bottom: ${({ bottom }) => bottom ?? null};
`
export const H4 = styled(motion.h4)<ICommonProps>`
  ${GS.Heading.Large}
  padding-left: ${({ left }) => left ?? null};
  padding-right: ${({ right }) => right ?? null};
  padding-top: ${({ top }) => top ?? null};
  padding-bottom: ${({ bottom }) => bottom ?? null};
`
export const H5 = styled(motion.h5)<ICommonProps>`
  ${GS.Heading.Medium}
  padding-left: ${({ left }) => left ?? null};
  padding-right: ${({ right }) => right ?? null};
  padding-top: ${({ top }) => top ?? null};
  padding-bottom: ${({ bottom }) => bottom ?? null};
`
export const Divider = styled(Div)`
  width: 100%;
  height: 1px;
  margin: 16px 0;
  background-color: ${GS.gray[100]};
`;

