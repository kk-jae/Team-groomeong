import styled from "@emotion/styled";
import * as GS from "../../../../../../theme/global";

interface IDivProps {
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
}

interface IImgDiv {
  url?: string;
}

export const Div = styled.div<IDivProps>`
  display: flex;
  padding-left: ${({ left }) => left ?? null};
  padding-right: ${({ right }) => right ?? null};
  padding-top: ${({ top }) => top ?? null};
  padding-bottom: ${({ bottom }) => bottom ?? null};
`;

export const ImgInputWrapper = styled(Div)`
  flex-direction: column;
`;

export const Input = styled.input`
  display: none;
`;

// prettier-ignore
export const ImgDiv = styled(Div)<IImgDiv>`
  background-image: url(${({ url }) => url == "" ? "/image/icon-image-plus.svg" : url});
  background-size: ${({ url }) => (url == "" ? "54px" : "contain")};
  background-repeat: no-repeat;
  background-position: center;
  background-color: ${GS.base.primary};
  width: 84px;
  height: 84px;
  padding: 16px;
  transition: all 0.2s ease;
  cursor: pointer;
  &:hover {
    background-color: ${GS.blue[600]};
  }
  &:active {
    background-color: ${GS.blue[400]};
  }
`;
