import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchReviewsByShopIdArgs,
} from "../../../../commons/types/generated/types";

// 각 샵에 해당하는 댓글...

export const FETCH_REVIEWS_BY_SHOP_ID = gql`
  query fetchReviewsByShopId($shopId: String!) {
    fetchReviewsByShopId(shopId: $shopId) {
      id
      contents
      createAt
      star
    }
  }
`;

export const UseQueryFetchReviewsByShopId = () => {
  const router = useRouter();
  const { data } = useQuery<
    Pick<IQuery, "fetchReviewsByShopId">,
    IQueryFetchReviewsByShopIdArgs
  >(
    FETCH_REVIEWS_BY_SHOP_ID,

    {
      variables: { shopId: String(router.query.shopId) },
    }
  );
  return {
    data,
  };
};
