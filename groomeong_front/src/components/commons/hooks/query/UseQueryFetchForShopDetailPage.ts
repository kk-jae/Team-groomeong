import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchForShopDetailPageArgs,
} from "../../../../commons/types/generated/types";

interface IUseQueryDuplicateEmail {
  data?: Pick<IQuery, "fetchForShopDetailPage">;
}

export const FOR_SHOP_DETAIL = gql`
  query fetchForShopDetailPage($shopId: String!) {
    fetchForShopDetailPage(shopId: $shopId) {
      profile {
        name
        image
      }
      review {
        id
        contents
      }
    }
  }
`;

export const UseQueryFetchForShopDetailPage = (
  shopId: string
): IUseQueryDuplicateEmail => {
  const { data } = useQuery<
    Pick<IQuery, "fetchForShopDetailPage">,
    IQueryFetchForShopDetailPageArgs
  >(FOR_SHOP_DETAIL, {
    variables: {
      shopId,
    },
  });

  return {
    data,
  };
};
