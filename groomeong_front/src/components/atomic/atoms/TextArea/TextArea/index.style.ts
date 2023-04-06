import styled from "@emotion/styled";
import * as GS from "../../../../../../theme/global";
import { mediaQueries } from "../../../../commons/libraries/MediaQueries";

export interface ITextAreaProps {
  contents?: string;
  date?: string;
  name?: string;
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

  ${mediaQueries("tablet")} {
    width: 100%;
  }
`;

export const TextArea_TopBox = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${GS.border.borderTransparent};
  margin-bottom: 8px;
`;

export const TextArea_TopBox_Profile = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  span {
    width: max-content;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    ${GS.Paragraph.Medium}
    margin-right: 32px;

    ${mediaQueries("phone")} {
      ${GS.Paragraph.Small};
    }
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
    width: 44px;
    height: 44px;
    border: 1px solid ${GS.border.borderTransparent};
    border-radius: 50px;
    object-fit: contain;

    ${mediaQueries("phone")} {
      width: 32px;
      height: 32px;
    }
  }
  ${mediaQueries("phone")} {
    width: 36px;
    height: 36px;
    margin-right: 12px;
  }
`;

export const TextArea_TopBox_Rate = styled.div`
  width: 208px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  position: relative;

  .css-gg5brn {
    ${mediaQueries("tablet")} {
      font-size: 16px;
    }
  }
`;

export const TextArea_TopBox_Date = styled.div`
  width: 82px;
  display: ${(props: ITextAreaProps) =>
    props.dateView === true ? "flex" : "none"};
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  ${GS.Paragraph.Medium};
  color: ${GS.contents.contentTertiary};
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
  :focus {
    outline: none;
  }
  ::placeholder {
    color: #bdbdbd;
  }

  ${mediaQueries("tablet")} {
    ${GS.Paragraph.Small};
  }
`;

export const TextArea_FooterBox = styled.div`
  width: 100%;
  height: 42px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  border: 0px;
`;
export const Error = styled.span`
  color: red;
  ${GS.Paragraph.Medium}
  position: absolute;
  width: 100%;
  bottom: -24px;
  left: 0;
`;
export const ErrorStar = styled.span`
  color: red;
  ${GS.Paragraph.Medium}
  position: absolute;
  width: 100%;
  bottom: 0px;
  right: 50%;
`;
export const TextArea_MiddleMainBox_Input = styled.div`
  position: relative;
`;
