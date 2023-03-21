import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchAverageStarArgs,
} from "../../../../commons/types/generated/types";

// 평균별점?
export const FETCH_AVERAGE_STAR = gql`
  query fetchAverageStar($shopId: String!) {
    fetchAverageStar(shopId: $shopId)
  }
`;

export const UseQueryFetchAverageStar = () => {
  const { data } = useQuery<
    Pick<IQuery, "fetchAverageStar">,
    IQueryFetchAverageStarArgs
  >(
    FETCH_AVERAGE_STAR
    // 아이디 넘겨받기 import 하는곳에서  const {data} = UseQueryFetchAverageStar(shopId:string) 그 후 => 얘를 여기 소괄호에 받기. // 이런식으로
    // ,{
    //   variables:{}
    // }
  );
  return {
    data,
  };
};
