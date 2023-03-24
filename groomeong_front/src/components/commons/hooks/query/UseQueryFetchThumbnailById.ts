import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchThumbnailByIdArgs,
} from "../../../../commons/types/generated/types";

export const FETCH_THUMBNAIL_BY_ID = gql`
  query fetchThumbnailById($shopId: String!) {
    fetchThumbnailById(shopId: $shopId) {
      id
      imageUrl
      isThumbnail
    }
  }
`;

export const UseQueryFetchThumbnailById = () => {
  const { data } = useQuery<
    Pick<IQuery, "fetchThumbnailById">,
    IQueryFetchThumbnailByIdArgs
  >(
    FETCH_THUMBNAIL_BY_ID
    // 아이디 넘겨받기 import 하는곳에서 const {data} = UseQueryFetchShopImagesById(shopImageId:string) 그 후 => 얘를 여기 소괄호에 받기. // 이런식으로
    // ,{
    //     variables:{shopId:}
    // }
  );
  return {
    data,
  };
};
