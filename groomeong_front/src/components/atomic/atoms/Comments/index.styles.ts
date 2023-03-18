import styled from "@emotion/styled";
import { Modal } from "antd";
import * as GS from "../../../../../theme/global";
import StoreSharpIcon from "@mui/icons-material/StoreSharp";

export const CommentsBoxModalStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${`${GS.Spacing[16]}px`};
`;
export const CommentsHeaderModalTitleStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${GS.border.borderPrimary};
  width: 996px;

  padding: ${`${GS.Spacing[8]}px`};
  gap: ${`${GS.Spacing[32]}px`};
  & > h1 {
    ${GS.Heading.XXXL};
    color: ${GS.contents.contentPrimary};
  }
`;

export const CommentsHeaderModalStyles = styled(Modal)`
  .ant-modal-content {
    /* width: auto; */
    width: 1124px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: ${`${GS.Spacing[20]}px ${GS.Spacing[20]}px 0 0 `};
    padding: 0;
  }
  .ant-btn {
    display: none;
  }
`;
export const ShopIconStyles = styled(StoreSharpIcon)`
  width: 45px;
  height: 45px;
`;
export const CommentsFooterModalStyles = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const CommentsFooterModalLabelStyles = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${`${GS.Spacing[16]}px`};
`;
export const FooterLabelNameStyles = styled.span`
  display: flex;
  flex-direction: column;
  & > label {
    ${GS.Paragraph.Medium}
  }
`;
export const FooterModalButtonBox = styled.div`
  display: flex;
  align-items: flex-end;
`;
