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
        review {
          id
          contents
          createdAt
          star
        }
        user {
          name
          image
        }
      }
      image {
        id
        imageUrl
        isThumbnail
      }
    }
  }
`;

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
