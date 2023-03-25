import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";

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

export const UseQueryFetchShopWithReviewAuth = () => {
  const { data } = useQuery<Pick<IQuery, "fetchShopWithReviewAuth">>(
    FETCH_SHOP_WITH_REVIEW_AUTH

    //         ,{
    // variables:{shopId:}
    //         }
  );
  return {
    data,
  };
};
