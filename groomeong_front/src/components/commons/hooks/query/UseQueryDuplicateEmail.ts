import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryDuplicateEmailArgs,
} from "../../../../commons/types/generated/types";

export const DUPLICATE_EMAIL = gql`
  query duplicateEmail($email: String!) {
    duplicateEmail(email: $email)
  }
`;

export const UseQueryDuplicateEmail = () => {
  const { data } = useQuery<
    Pick<IQuery, "duplicateEmail">,
    IQueryDuplicateEmailArgs
  >(DUPLICATE_EMAIL);

  return {
    data,
  };
};
