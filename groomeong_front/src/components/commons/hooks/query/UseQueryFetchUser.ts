import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUserArgs,
} from "../../../../commons/types/generated/types";

export const FETCH_USER = gql`
  query fetchUser($userId: String!) {
    fetchUser(userId: $userId) {
      id
      name
      email
      phone
      image
    }
  }
`;

export const UseQueryFetchUser = (userId: string) => {
  const { data } = useQuery<Pick<IQuery, "fetchUser">, IQueryFetchUserArgs>(
    FETCH_USER,
    {
      variables: { userId },
    }
  );

  return {
    data,
  };
};
