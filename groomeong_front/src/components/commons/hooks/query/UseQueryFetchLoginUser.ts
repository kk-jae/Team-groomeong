import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";

export const FETCH_LOGIN_USER = gql`
  query {
    fetchLoginUser {
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
        breed {
          SMALL
          MEDIUM
          LARGE
          SPECIAL
        }
      }
    }
  }
`;

export const UseQueryFetchLoginUser = () => {
  const { data } = useQuery<Pick<IQuery, "fetchLoginUser">>(FETCH_LOGIN_USER);
  return {
    data,
  };
};
