import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryDuplicateEmailArgs,
} from "../../../../commons/types/generated/types";

interface IUseQueryDuplicateEmail {
  data?: Pick<IQuery, "duplicateEmail">;
}

export const DUPLICATE_EMAIL = gql`
  query duplicateEmail($email: String!) {
    duplicateEmail(email: $email)
  }
`;

export const UseQueryDuplicateEmail = (): IUseQueryDuplicateEmail => {
  const { data } = useQuery<
    Pick<IQuery, "duplicateEmail">,
    IQueryDuplicateEmailArgs
  >(DUPLICATE_EMAIL);

  return {
    data,
  };
};
