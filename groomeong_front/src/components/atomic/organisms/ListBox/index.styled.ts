import styled from "@emotion/styled";
import * as GS from "../../../../../theme/global";

export const ListBoxWrapper = styled.div`
  width: 508px;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  padding: 32px;
  cursor: pointer;
  margin-bottom: 8px;

  :focus {
    border: 2px solid ${GS.base.primary};
  }
`;

export const Top = styled.div`
  width: 100%;
  height: 68px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

export const ShopName = styled.div`
  font: ${GS.Heading.XL};
  padding-bottom: 8px;
  overflow: hidden;
`;

export const ShopImg = styled.img`
  width: 68px;
  height: 68px;
  object-fit: cover;
  background-color: #d9d9d9;
  position: absolute;
  top: 0px;
  right: 0px;
`;
export const ShopHours = styled.div`
  font: ${GS.Paragraph.Medium};
  color: ${GS.contents.contentSecondary};
`;
export const ShopAddress = styled.div`
  font: ${GS.Paragraph.Medium};
  color: ${GS.contents.contentSecondary};
  margin-top: 8px;
  margin-bottom: 8px;
`;
