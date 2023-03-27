import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchShopWithReviewAuthArgs,
} from "../../../../commons/types/generated/types";

interface IUseQueryFetchShopWithReviewAuth {
  data?: Pick<IQuery, "fetchShopWithReviewAuth">;
}

export const FETCH_SHOP_WITH_REVIEW_AUTH = gql`
  query fetchShopWithReviewAuth($shopId: String!) {
    fetchShopWithReviewAuth(shopId: $shopId) {
      id
      name
      reservation {
        id
      }
      hasReviewAuth
    }
  }
`;

export const UseQueryFetchShopWithReviewAuth = (
  shopId: string
): IUseQueryFetchShopWithReviewAuth => {
  const { data } = useQuery<
    Pick<IQuery, "fetchShopWithReviewAuth">,
    IQueryFetchShopWithReviewAuthArgs
  >(FETCH_SHOP_WITH_REVIEW_AUTH, { variables: { shopId } });
  return {
    data,
  };
};
