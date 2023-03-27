import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchReviewArgs,
} from "../../../../commons/types/generated/types";

interface IUseQueryFetchReview {
  data?: Pick<IQuery, "fetchReview">;
}

export const FETCH_REVIEW = gql`
  query fetchReview($reviewId: String!) {
    fetchReview(reviewId: $reviewId) {
      id
      contents
      createAt
      star
    }
  }
`;

export const UseQueryFetchReview = (reviewId: string): IUseQueryFetchReview => {
  const { data } = useQuery<Pick<IQuery, "fetchReview">, IQueryFetchReviewArgs>(
    FETCH_REVIEW,
    // 아이디 넘겨받기 import 하는곳에서  const {data} = UseQueryFetchReview(reviewId:) 그 후 => 얘를 여기 소괄호에 받기. // 이런식으로
    {
      variables: { reviewId },
    }
  );
  return {
    data,
  };
};
