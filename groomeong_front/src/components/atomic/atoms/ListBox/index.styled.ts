import styled from "@emotion/styled";
import * as GS from "../../../../../theme/global";

export const ListBoxWrapper = styled.div`
  width: 508px;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  padding: 32px;
  margin-bottom: 8px;

  /* :focus {
    border: 2px solid ${GS.base.primary};
  } */

  :hover {
    background-color: #f5f5f5;
  }
`;

export const ListBoxTop = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  margin-bottom: 10px;
`;

export const ShopName = styled.div`
  ${GS.Heading.XL};
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
  ${GS.Paragraph.Medium};
  color: ${GS.contents.contentSecondary};
  margin-bottom: 8px;
`;

export const ListBoxBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ShopMoved = styled.div`
  padding: 4px 8px 4px 8px;
  border-radius: 4px;
  ${GS.Heading.Medium};
  color: white;
  background-color: ${GS.base.primary};
  cursor: pointer;
`;

export const ShopAddress = styled.div`
  ${GS.Paragraph.Medium};
  color: ${GS.contents.contentSecondary};
`;
