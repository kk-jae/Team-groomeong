import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchShopArgs,
} from "../../../../commons/types/generated/types";

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
    }
  }
`;

// 아이디 넘겨받기 import 하는곳에서  const {data} = UseQueryFetchShop(shopId:string) 그 후 => 얘를 여기 소괄호에 받기. // 이런식으로
export const UseQueryFetchShop = () => {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchShop">, IQueryFetchShopArgs>(
    FETCH_SHOP,
    {
      variables: {
        shopId: String(router.query.shopId),
      },
    }
  );
  return {
    data,
  };
};
