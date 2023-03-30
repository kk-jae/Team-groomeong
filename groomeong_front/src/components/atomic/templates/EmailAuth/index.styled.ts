import styled from "@emotion/styled";
import * as GS from "../../../../../theme/global";

interface IProps {
  disabledState: boolean | undefined;
}

export const EmailAuthWrapper = styled.div`
  width: 1124px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const EmailAuthTop = styled.div`
  width: 996px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${GS.border.borderOpaque};
  margin: 32px 0px 64px 0px;
  padding-bottom: 10px;
  ${GS.Heading.XXXL};
`;
export const EmailAuthTopImg = styled.img`
  width: 48px;
  height: 48px;
  object-fit: cover;
  margin-right: 32px;
`;
export const EmailAuthTopText = styled.div``;

export const EmailAuthMiddle = styled.div`
  width: 697px;
  display: flex;
  flex-direction: column;
`;

export const EmailAuthMiddleLabel = styled.label`
  ${GS.Paragraph.Medium};
  color: ${GS.contents.contentSecondary};
  margin-bottom: 32px;
`;
export const EmailAuthMiddleTextButtonWrapper = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const EmailAuthMiddleText = styled.input`
  width: 500px;
  height: 66px;
  border-radius: 12px;
  padding-left: 32px;
  outline: none;
  border: 1px solid ${GS.border.borderOpaque};
  margin-right: 32px;
`;
export const EmailAuthMiddleButton = styled.button<IProps>`
  cursor: pointer;
  border: none;
  width: 165px;
  height: 42px;
  background-color: ${(props) =>
    props.disabledState !== undefined
      ? `${GS.state.disabled}`
      : `${GS.base.primary}`};
  color: ${(props) =>
    props.disabledState !== undefined ? `${GS.gray[200]}` : "white"};
  border-radius: 12px;
`;

export const EmailAuthMiddleTime = styled.span`
  margin-top: 72px;
  ${GS.Paragraph.Medium};
  color: ${GS.contents.contentSecondary};
  margin-bottom: 32px;
`;

export const EmailAuthMiddleTimeButton = styled.button`
  cursor: pointer;
  border: none;
  width: 92px;
  height: 42px;
  background-color: ${GS.base.primary};
  color: white;
  border-radius: 12px;
`;

export const EmailAuthBottom = styled.button`
  margin: 32px 0px 32px 0px;
  width: 92px;
  height: 42px;
  border-radius: 12px;
  background-color: red;
  color: white;
  border: none;
  cursor: pointer;
`;
