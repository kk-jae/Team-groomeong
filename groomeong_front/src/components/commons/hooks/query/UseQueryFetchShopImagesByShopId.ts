import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchShopImagesByShopIdArgs,
} from "../../../../commons/types/generated/types";

export const FETCH_SHOP_IMAGES_BY_SHOP_ID = gql`
  query fetchShopImagesByShopId($shopId: String!) {
    fetchShopImagesByShopId(shopId: $shopId) {
      id
      imageUrl
      isThumbnail
    }
  }
`;

export const UseQueryFetchShopImagesByShopId = () => {
  const { data } = useQuery<
    Pick<IQuery, "fetchShopImagesByShopId">,
    IQueryFetchShopImagesByShopIdArgs
  >(
    FETCH_SHOP_IMAGES_BY_SHOP_ID
    // 아이디 넘겨받기 import 하는곳에서  const {data} = UseQueryFetchShopImagesByShopId(shopId:string) 그 후 => 얘를 여기 소괄호에 받기. // 이런식으로

    //         ,{
    // variables:{shopId:}
    //         }
  );
  return {
    data,
  };
};
