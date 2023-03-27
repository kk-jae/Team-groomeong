import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchShopArgs,
} from "../../../../commons/types/generated/types";

interface IUseQueryFetchShop {
  data?: Pick<IQuery, "fetchShop">;
}

export const FETCH_SHOP = gql`
  query fetchShop($shopId: String!) {
    fetchShop(shopId: $shopId) {
      id
      name
      phone
      openHour
      closeHour
      address
      averageStar
      lat
      lng
      reservation {
        id
        date
        time
        # shop
        # user
        # dog
      }
      review {
        id
        contents
        createAt
        star
      }
      image {
        id
        imageUrl
        isThumbnail
      }
    }
  }
`;

// 아이디 넘겨받기 import 하는곳에서  const {data} = UseQueryFetchShop(shopId:string) 그 후 => 얘를 여기 소괄호에 받기. // 이런식으로
export const UseQueryFetchShop = (shopId?: string): IUseQueryFetchShop => {
  const { data } = useQuery<Pick<IQuery, "fetchShop">, IQueryFetchShopArgs>(
    FETCH_SHOP,
    {
      variables: { shopId: String(shopId) },
    }
  );
  return {
    data,
  };
};
