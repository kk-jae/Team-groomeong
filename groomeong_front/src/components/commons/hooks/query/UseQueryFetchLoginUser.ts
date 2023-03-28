import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUserArgs,
} from "../../../../commons/types/generated/types";

interface IUseQueryFetchLoginUser {
  data?: Pick<IQuery, "fetchLoginUser">;
}

export const FETCH_LOGIN_USER = gql`
  query {
    fetchLoginUser {
      id
      name
      email
      phone
      image
    }
  }
`;

export const UseQueryFetchLoginUser = (): IUseQueryFetchLoginUser => {
  const { data } = useQuery<
    Pick<IQuery, "fetchLoginUser">,
    IQueryFetchUserArgs
  >(FETCH_LOGIN_USER);

  return {
    data,
  };
};
