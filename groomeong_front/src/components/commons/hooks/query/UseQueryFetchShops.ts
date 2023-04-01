import {
  IQuery,
  IQueryFetchShopsArgs,
} from "./../../../../commons/types/generated/types";
import {
  ApolloQueryResult,
  FetchMoreQueryOptions,
  gql,
  useQuery,
} from "@apollo/client";

interface IUseQueryFetchShops {
  data?: Pick<IQuery, "fetchShops">;
  refetch?: (
    variables?: Partial<IQueryFetchShopsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchShops">>>;
  fetchMore: (
    fetchMoreOptions: FetchMoreQueryOptions<
      IQueryFetchShopsArgs,
      Pick<IQuery, "fetchShops">
    > & {
      updateQuery?: (
        previousQueryResult: Pick<IQuery, "fetchShops">,
        options: {
          fetchMoreResult: Pick<IQuery, "fetchShops">;
          variables: IQueryFetchShopsArgs;
        }
      ) => Pick<IQuery, "fetchShops">;
    }
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchShops">>>;
}

export const FETCH_SHOPS = gql`
  query fetchShops($page: Float!, $count: Float!) {
    fetchShops(page: $page, count: $count) {
      id
      name
      openHour
      closeHour
      address
      lat
      lng
      code
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
        createdAt
        star
      }
    }
  }
`;

export const UseQueryFetchShops = (
  page: number,
  count: number
): IUseQueryFetchShops => {
  const { data, refetch, fetchMore } = useQuery<
    Pick<IQuery, "fetchShops">,
    IQueryFetchShopsArgs
  >(FETCH_SHOPS, {
    variables: {
      count,
      page,
    },
  });
  return {
    data,
    refetch,
    fetchMore,
  };
};
