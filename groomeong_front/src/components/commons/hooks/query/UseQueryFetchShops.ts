import { ApolloQueryResult, gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchShopsArgs,
} from "../../../../commons/types/generated/types";

interface IUseQueryFetchShops {
  data?: Pick<IQuery, "fetchShops">;
  refetch?: (
    variables?: Partial<IQueryFetchShopsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchShops">>>;
}

export const FETCH_SHOPS = gql`
  query fetchShops($page: Float!, $count: Float!) {
    fetchShops(search: page: $page, count: $count) {
      id
      name
      openHour
      closeHour
      address
      lat
      lng
      averageStar
      image {
        id
        imageUrl
        isThumbnail
      }
      reservation {
        id
      }
      review {
        id
        contents
        createAt
        star
      }
    }
  }
`;

export const UseQueryFetchShops = (
  page: number,
  count: number
): IUseQueryFetchShops => {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchShops">,
    IQueryFetchShopsArgs
  >(FETCH_SHOPS, {
    variables: {
      page,
      count,
    },
  });
  return {
    data,
    refetch,
  };
};
