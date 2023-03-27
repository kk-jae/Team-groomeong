import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchReviewsByShopIdArgs,
} from "../../../../commons/types/generated/types";

// 각 샵에 해당하는 댓글...

export const FETCH_REVIEWS_BY_SHOP_ID = gql`
  query fetchReviewsByShopId($page: Float = 1, $shopId: String!) {
    fetchReviewsByShopId(page: $page, shopId: $shopId) {
      id
      contents
      createAt
      star
    }
  }
`;

export const UseQueryFetchReviewsByShopIdReservation = (shopId: string) => {
  const { data } = useQuery<
    Pick<IQuery, "fetchReviewsByShopId">,
    IQueryFetchReviewsByShopIdArgs
  >(
    FETCH_REVIEWS_BY_SHOP_ID,

    {
      variables: { shopId: String(shopId), page: 1 },
    }
  );

  return {
    data,
  };
};
