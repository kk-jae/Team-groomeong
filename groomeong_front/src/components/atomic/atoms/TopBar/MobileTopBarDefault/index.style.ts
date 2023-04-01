import styled from "@emotion/styled";
import * as GS from "../../../../../../theme/global";
import { motion } from "framer-motion";
import { mediaQueries } from "../../../../commons/libraries/MediaQueries";

export const MenuBox = styled(motion.div)`
  display: none;
  z-index: 100;

  ${mediaQueries("tablet")} {
    display: flex;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.867);
    position: absolute;
    right: 0px;
    top: 88px;
    display: flex;
    flex-direction: column;
  }
`;

export const MenuButton = styled.button`
  ${mediaQueries("tablet")} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    ${GS.Label.Large}
    background-color: rgba(0, 0, 0, 0);
    border: 0px;
    color: ${GS.white};
    width: 100%;
    height: 88px;
    cursor: pointer;
  }
`;
