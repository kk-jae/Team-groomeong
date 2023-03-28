import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";

interface IUseQueryFetchUserWithDeleted {
  data?: Pick<IQuery, "fetchUserWithDeleted">;
}

export const FETCH_USER_WITH_DELETED = gql`
  query {
    fetchUserWithDeleted {
      id
      name
      email
      phone
    }
  }
`;
export const UseQueryFetchUserWithDeleted =
  (): IUseQueryFetchUserWithDeleted => {
    const { data } = useQuery<Pick<IQuery, "fetchUserWithDeleted">>(
      FETCH_USER_WITH_DELETED
    );
    return {
      data,
    };
  };
