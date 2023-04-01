import styled from "@emotion/styled";
import * as GS from "../../../../../theme/global";
import { motion } from "framer-motion";
import { mediaQueries } from "../../../commons/libraries/MediaQueries";

export const MainText = styled(motion.h1)`
  color: ${GS.white};
  margin: 56px 0px;

  ${mediaQueries("tablet")} {
    ${GS.Heading.XL}
    margin: 35px 0px 56px 0px;
  }

  ${mediaQueries("phone")} {
    ${GS.Heading.Large}
    margin: 0px 0px 56px 0px;
  }
`;

export const MainCharacter = styled(motion.img)`
  width: 60%;
  height: 60%;
  margin-top: 56px;
`;
