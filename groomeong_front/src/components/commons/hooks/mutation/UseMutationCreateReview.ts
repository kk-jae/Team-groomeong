import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateReviewArgs,
} from "../../../../commons/types/generated/types";

const CREATE_REVIEW = gql`
  mutation createReview($createReviewInput: CreateReviewInput!) {
    createReview(createReviewInput: $createReviewInput) {
      id
    }
  }
`;

export const UseMutationCreateReview = (): [typeof createReview] => {
  const [createReview] = useMutation<
    Pick<IMutation, "createReview">,
    IMutationCreateReviewArgs
  >(CREATE_REVIEW);
  return [createReview];
};
