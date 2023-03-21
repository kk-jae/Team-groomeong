import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchDogArgs,
} from "../../../../commons/types/generated/types";

export const FETCH_DOG = gql`
  query fetchDog($id: String) {
    fetchDog(id: $id) {
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
      specifics
      image
    }
  }
`;

export const UseQueryFetchDog = () => {
  const { data } = useQuery<Pick<IQuery, "fetchDog">, IQueryFetchDogArgs>(
    FETCH_DOG
    // 아이디 넘겨받기 import 하는곳에서  const {data} = UseQueryFetchDog(id:string) 그 후 => 얘를 여기 소괄호에 받기. // 이런식으로
    // ,{
    //     variables:{id:}
    // }
  );
  return {
    data,
  };
};
