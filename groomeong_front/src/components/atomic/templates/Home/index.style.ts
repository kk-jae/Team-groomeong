import styled from "@emotion/styled";
import * as GS from "../../../../../theme/global";
import { motion } from "framer-motion";
import { mediaQueries } from "../../../commons/libraries/MediaQueries";

export const MainText = styled(motion.h1)`
  color: ${GS.white};
  margin: 56px 0px;

  ${mediaQueries("tablet")} {
    ${GS.Heading.XL}
    margin: 36px 0px 56px 0px;
  }

  ${mediaQueries("phone")} {
    ${GS.Heading.Large}
    margin:16px 0px 40px 0px;
    padding: 0px 32px;
    text-align: center;
  }
`;

export const MainCharacter = styled(motion.img)`
  width: 623px;
  height: 453px;
  margin-top: 56px;

  ${mediaQueries("tablet")} {
    width: 60%;
    height: 60%;
  }
`;
