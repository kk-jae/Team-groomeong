import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUserArgs,
} from "../../../../commons/types/generated/types";

interface IUseQueryFetchUser {
  data?: Pick<IQuery, "fetchUser">;
}

export const FETCH_USER = gql`
  query fetchUser($userId: String!) {
    fetchUser(userId: $userId) {
      id
      name
      email
      phone
      image
      dogs {
        id
        name
        age
        weight
        breed
      }
    }
  }
`;

export const UseQueryFetchUser = (userId: string): IUseQueryFetchUser => {
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
