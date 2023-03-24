import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchShopsArgs,
} from "../../../../commons/types/generated/types";

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
    }
  }
`;

export const UseQueryFetchShops = () => {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchShops">,
    IQueryFetchShopsArgs
  >(FETCH_SHOPS);
  return {
    data,
    refetch,
  };
};
