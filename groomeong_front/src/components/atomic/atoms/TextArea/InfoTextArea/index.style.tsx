import styled from "@emotion/styled";
import * as GS from "../../../../../../theme/global";

interface IDivProps {
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  showButton?: boolean;
}

export const Div = styled.div<IDivProps>`
  display: ${({ showButton }) => (showButton ? "flex" : "hidden")};
  margin-left: ${({ left }) => left ?? null};
  margin-right: ${({ right }) => right ?? null};
  margin-top: ${({ top }) => top ?? null};
  margin-bottom: ${({ bottom }) => bottom ?? null};
`;

export const InfoTextAreaWrapper = styled.div`
  padding: 64px 32px;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  ${GS.Paragraph.Medium}
  padding: 0px 128px;
`;

export const InfoTextAreaHeader = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 8px 0;
  border-bottom: 1px solid ${GS.border.borderOpaque};
  margin-bottom: 8px;
`;

export const InfoTextAreaLabel = styled.label`
  color: ${GS.gray[400]};
  margin-bottom: 8px;
`;

export const InfoTextAreaContents = styled.textarea`
  border: none;
  outline: none;
  width: 100%;
  height: 150px;
  background: #f2f2f2;
  padding: 32px;
  resize: none;
`;

export const InfoTextAreaFooter = styled.div`
  display: flex;
  margin: 32px;
`;
