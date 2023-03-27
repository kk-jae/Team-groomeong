import { SearchBar } from "../../atoms/SearchBar";
import * as S from "./index.styled";
import { ListBox } from "../../atoms/ListBox";
import { UseQueryFetchShops } from "../../../commons/hooks/query/UseQueryFetchShops";

export const MapSideList = (): JSX.Element => {
  const { data } = UseQueryFetchShops();

  return (
    <S.MapSideListWrapper>
      <S.SearchBarWrapper>
        <SearchBar sizes="small" placeholder="placeholder" />
      </S.SearchBarWrapper>
      {data?.fetchShops.length !== undefined && data?.fetchShops.length >= 1 ? (
        <S.ShopListWrapper>
          {data?.fetchShops.map((el) => (
            <div key={el.id}>
              <ListBox
                name={el.name}
                openHour={el.openHour}
                closeHour={el.closeHour}
                address={el.address}
                star={el.averageStar}
                id={el.id}
                shopImg={el.image}
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
