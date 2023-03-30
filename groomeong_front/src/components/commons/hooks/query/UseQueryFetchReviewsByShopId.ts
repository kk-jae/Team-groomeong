import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchReviewsByShopIdArgs,
} from "../../../../commons/types/generated/types";

interface IUseQueryFetchReviewsByShopId {
  data?: Pick<IQuery, "fetchReviewsByShopId">;
}

export const FETCH_REVIEWS_BY_SHOP_ID = gql`
  query fetchReviewsByShopId($page: Float, $shopId: String!) {
    fetchReviewsByShopId(page: $page, shopId: $shopId) {
      id
      contents
      createdAt
      star
    }
  }
`;

export const UseQueryFetchReviewsByShopId = (
  shopId: string
): IUseQueryFetchReviewsByShopId => {
  const { data } = useQuery<
    Pick<IQuery, "fetchReviewsByShopId">,
    IQueryFetchReviewsByShopIdArgs
  >(
    FETCH_REVIEWS_BY_SHOP_ID,

    {
      variables: { shopId },
    }
  );
  return {
    data,
  };
};
