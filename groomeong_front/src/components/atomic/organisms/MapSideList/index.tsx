import { SearchBar } from "../../atoms/SearchBar";
import * as S from "./index.styled";
import { ListBox } from "../../atoms/ListBox";

const fetchShops = [
  {
    shopName: "광기네",
    shopHours: "09:00 ~ 18:00",
    shopAddress: "서울시 오류동",
    shopImg: "",
    star: 5,
  },
  {
    shopName: "하은네",
    shopHours: "09:00 ~ 18:00",
    shopAddress: "경기도 모르는데요",
    shopImg: "",
    star: 2,
  },
];

export const MapSideList = () => {
  return (
    <S.MapSideListWrapper>
      <S.SearchBarWrapper>
        <SearchBar sizes="small" placeholder="placeholder" />
      </S.SearchBarWrapper>
      {fetchShops.length >= 1 ? (
        <S.ShopListWrapper>
          {fetchShops.map((el, index) => (
            <div key={index}>
              <ListBox
                shopName={el.shopName}
                shopHours={el.shopHours}
                shopAddress={el.shopAddress}
                shopImg={el.shopImg}
                star={el.star}
              />
            </div>
          ))}
        </S.ShopListWrapper>
      ) : (
        <S.NonShopListWrapper>
          <S.ShopListText>미용샵을 검색해 주세요</S.ShopListText>
          <S.ShopListImg src="/image/icon-List-dog.svg" />
        </S.NonShopListWrapper>
      )}
    </S.MapSideListWrapper>
  );
};
