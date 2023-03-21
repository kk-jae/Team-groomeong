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

export const UseQueryFetchUser = () => {
  const { data } = useQuery<Pick<IQuery, "fetchUser">, IQueryFetchUserArgs>(
    FETCH_USER
    // 아이디 넘겨받기 import 하는곳에서  const {data} = UseQueryFetchUser(userId:) 그 후 => 얘를 여기 소괄호에 받기. // 이런식으로
    // ,{
    //   variables:{userId:}
    // }
  );
  return {
    data,
  };
};
