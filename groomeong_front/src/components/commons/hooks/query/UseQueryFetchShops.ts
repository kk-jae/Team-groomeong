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
  query fetchShops($search: String) {
    fetchShops(search: $search) {
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

export const UseQueryFetchShops = (): IUseQueryFetchShops => {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchShops">,
    IQueryFetchShopsArgs
  >(
    FETCH_SHOPS
    // ,{
    //   variables:{search:}
    // }
  );
  return {
    data,
    refetch,
  };
};
