import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchShopImagesByIdArgs,
} from "../../../../commons/types/generated/types";

export const FETCH_SHOP_IMAGES_BY_ID = gql`
  query fetchShopImagesById($shopImageId: String!) {
    fetchShopImagesById(shopImageId: $shopImageId) {
      id
      imageUrl
      isThumbnail
    }
  }
`;

export const UseQueryFetchShopImagesById = () => {
  const { data } = useQuery<
    Pick<IQuery, "fetchShopImagesById">,
    IQueryFetchShopImagesByIdArgs
  >(
    FETCH_SHOP_IMAGES_BY_ID
    // 아이디 넘겨받기 import 하는곳에서 const {data} = UseQueryFetchShopImagesById(shopImageId:string) 그 후 => 얘를 여기 소괄호에 받기. // 이런식으로
    // ,{
    //     variables:{}
    // }
  );
  return {
    data,
  };
};
