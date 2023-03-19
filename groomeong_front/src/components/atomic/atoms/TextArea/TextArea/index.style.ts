import styled from "@emotion/styled";
import * as GS from "../../../../../../theme/global";

export interface ITextAreaProps {
  contents?: string;
  date?: string;
  title?: string;
  dateView?: boolean;
  iconView?: boolean;
  buttonView?: boolean;
}

export const TextArea_Wrapper = styled.div`
  width: 996px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px;
`;

export const TextArea_TopBox = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  flex-direction: row;
  justify-content: ${(props: ITextAreaProps) =>
    props.dateView ? "space-between" : "center"};
  align-items: center;
  border-bottom: 1px solid ${GS.border.borderTransparent};
  margin-bottom: 8px;
`;

export const TextArea_TopBox_Profile = styled.div`
  width: ${(props: ITextAreaProps) => (props.dateView ? "100%" : "50%")};
  display: flex;
  flex-direction: row;
  justify-content: ${(props: ITextAreaProps) =>
    props.dateView ? "flex-start" : "center"};
  align-items: center;

  span {
    width: ${(props: ITextAreaProps) =>
      props.dateView ? "max-content" : "100%"};
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    ${GS.Paragraph.Medium}
  }
`;

export const TextArea_Profile_Icon = styled.button`
  width: 48px;
  height: 48px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid ${GS.border.borderTransparent};
  border-radius: 50px;
  background-color: ${GS.white};
  margin-right: 20px;

  img {
    width: ${(props: ITextAreaProps) => (props.iconView ? "48px" : "24px")};
    height: ${(props: ITextAreaProps) => (props.iconView ? "48px" : "24px")};
    border: 1px solid ${GS.border.borderTransparent};
    border-radius: 50px;
    object-fit: contain;
  }
`;

export const TextArea_TopBox_Date = styled.div`
  width: ${(props: ITextAreaProps) => (props.dateView ? "100%" : "50%")};
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  ${GS.Paragraph.Medium}
  color: ${GS.contents.contentTertiary}
`;

export const TextArea_MiddleBox_Input = styled.textarea`
  width: 100%;
  height: 120px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  ${GS.Paragraph.Medium};
  color: ${GS.black};
  resize: none;
  border: 0px;
  background-color: ${GS.gray[100]};
  padding: 16px 28px;
  margin-bottom: 8px;
`;

export const TextArea_FooterBox = styled.div`
  width: 100%;
  height: 42px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: ce;
  border: 0px;
`;
