import styled from "@emotion/styled";
import * as GS from "../../../../../theme/global";
import * as S from "../../../../components/commons/style";
import { motion } from "framer-motion";
import { mediaQueries } from "../../../commons/libraries/MediaQueries";

export const MainText = styled(motion.h1)`
  color: ${GS.white};
  margin: 0px 0px 56px 0px;

  ${mediaQueries("tablet")} {
    ${GS.Heading.XL}
    margin: 0px 0px 32px 0px;
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
    ${GS.Paragraph.Small}
  }
`;

export const MainBody = styled(S.Div)`
  flex-direction: column;
  background-color: #fff;
  border: 1px;
  ${GS.Paragraph.Medium}

  ${mediaQueries("tablet")} {
    height: 80px;
  }
  ${mediaQueries("phone")} {
    height: 60px;
  }
`;

export const MainPopupBoxWrapper = styled(S.Div)`
  width: 100%;
  position: relative;
  flex-direction: column;
`;

export const MainPopupBox = styled(S.Div)`
  position: absolute;
  width: 100%;
  flex-direction: column;
  background-color: #fff;
`;

export const MainPopupBoxContentsWrapper = styled(S.Div)`
  padding: 32px 44px;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  ${GS.Paragraph.Medium}
  ${mediaQueries("phone")} {
    padding: 32px 28px;
  }
  .ant-rate-disabled {
    ${mediaQueries("phone")} {
      font-size: 12px;
    }
  }
`;
export const MainPopupBoxContentsButton = styled(motion.button)`
  border: none;
  outline: none;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${GS.base.secondary};
  cursor: pointer;
  border-bottom: 1px solid ${GS.gray[100]};
`;

export const MainPopupBoxContentsTitle = styled(S.Div)`
  padding-right: 32px;
  ${GS.Label.Medium}

  ${mediaQueries("phone")} {
    ${GS.Label.Small}
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
