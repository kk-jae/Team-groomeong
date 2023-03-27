import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUserArgs,
} from "../../../../commons/types/generated/types";

export const FETCH_USER_DOGS = gql`
  query {
    fetchUserDogs {
      id
      name
      age
      weight
      breed
    }
  }
`;

export const UseQueryFetchUserDogs = () => {
  const { data } = useQuery<Pick<IQuery, "fetchUserDogs">, IQueryFetchUserArgs>(
    FETCH_USER_DOGS
  );
  return {
    data,
  };
};
