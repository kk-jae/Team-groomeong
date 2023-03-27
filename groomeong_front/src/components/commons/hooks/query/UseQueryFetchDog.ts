import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchDogArgs,
} from "../../../../commons/types/generated/types";

interface IUseQueryFetchDog {
  data?: Pick<IQuery, "fetchDog">;
}

export const FETCH_DOG = gql`
  query fetchDog($id: String!) {
    fetchDog(id: $id) {
      id
      name
      age
      weight
      breed
      image
      specifics
    }
  }
`;

export const UseQueryFetchDog = (id: string): IUseQueryFetchDog => {
  const { data } = useQuery<Pick<IQuery, "fetchDog">, IQueryFetchDogArgs>(
    FETCH_DOG,
    {
      variables: {
        id,
      },
    }
  );
  return {
    data,
  };
};
