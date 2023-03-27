import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchShopImagesByShopArgs,
} from "../../../../commons/types/generated/types";

interface IUseQueryFetchShopImagesByShopId {
  data?: Pick<IQuery, "fetchShopImagesByShop">;
}

export const FETCH_SHOP_IMAGES_BY_SHOP = gql`
  query fetchShopImagesByShop($shopId: String!) {
    fetchShopImagesByShop(shopId: $shopId) {
      id
      imageUrl
      isThumbnail
    }
  }
`;

export const UseQueryFetchShopImagesByShopId =
  (): IUseQueryFetchShopImagesByShopId => {
    const { data } = useQuery<
      Pick<IQuery, "fetchShopImagesByShop">,
      IQueryFetchShopImagesByShopArgs
    >(
      FETCH_SHOP_IMAGES_BY_SHOP
      // 아이디 넘겨받기 import 하는곳에서  const {data} = UseQueryFetchShopImagesByShopId(shopId:string) 그 후 => 얘를 여기 소괄호에 받기. // 이런식으로

      //         ,{
      // variables:{shopId:}
      //         }
    );
    return {
      data,
    };
  };
