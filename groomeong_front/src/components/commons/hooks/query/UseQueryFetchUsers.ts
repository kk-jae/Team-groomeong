import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";

export const FETCH_USERS = gql`
  query {
    fetchUsers {
      id
      name
      email
      phone
    }
  }
`;

export const UseQueryFetchUsers = () => {
  const { data } = useQuery<Pick<IQuery, "fetchUsers">>(FETCH_USERS);
  return {
    data,
  };
};
