import styled from "@emotion/styled";
import * as GS from "../../../../../../theme/global";

// interface IDivProps {
//   left?: string;
//   right?: string;
//   top?: string;
//   bottom?: string;
// }

export const InfoTextAreaWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 32px 0;
  position: relative;
  flex-direction: column;
  align-items: center;
  ${GS.Paragraph.Medium}/* padding: 0px 128px; */
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
  resize: none;
  padding: 32px;
`;

export const Error = styled.span`
  display: flex;
  position: absolute;
  bottom: -32px;
  width: 100%;
  justify-content: start;
  color: ${GS.state.negative};
  ${GS.Paragraph.Medium};
`;
