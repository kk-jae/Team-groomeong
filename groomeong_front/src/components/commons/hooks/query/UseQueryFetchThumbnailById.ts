import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchThumbnailByShopArgs,
} from "../../../../commons/types/generated/types";

interface IUseQueryFetchThumbnailById {
  data?: Pick<IQuery, "fetchThumbnailByShop">;
}

export const FETCH_THUMBNAIL_BY_SHOP = gql`
  query fetchThumbnailByShop($shopId: String!) {
    fetchThumbnailByShop(shopId: $shopId) {
      id
      imageUrl
      isThumbnail
    }
  }
`;

export const UseQueryFetchThumbnailById = (): IUseQueryFetchThumbnailById => {
  const { data } = useQuery<
    Pick<IQuery, "fetchThumbnailByShop">,
    IQueryFetchThumbnailByShopArgs
  >(
    FETCH_THUMBNAIL_BY_SHOP
    // 아이디 넘겨받기 import 하는곳에서 const {data} = UseQueryFetchShopImagesById(shopImageId:string) 그 후 => 얘를 여기 소괄호에 받기. // 이런식으로
    // ,{
    //     variables:{shopId:}
    // }
  );
  return {
    data,
  };
};
