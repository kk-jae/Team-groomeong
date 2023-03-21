import styled from "@emotion/styled";
import * as GS from "../../../../../theme/global";

export const MapSideListWrapper = styled.div`
  width: 540px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SearchBarWrapper = styled.div`
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.1);
  padding: 32px 16px 32px 16px;
`;

export const ShopListWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 124px);
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 16px;
`;

export const NonShopListWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 124px);
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ShopListText = styled.div`
  color: ${GS.contents.contentTertiary};
  ${GS.Heading.XL};
  margin-bottom: 8px;
`;

export const ShopListImg = styled.img`
  object-fit: cover;
`;
