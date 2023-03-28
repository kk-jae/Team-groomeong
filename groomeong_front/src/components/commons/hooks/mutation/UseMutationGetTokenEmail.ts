import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationGetTokenEmailArgs,
} from "../../../../commons/types/generated/types";

const GET_TOKEN_EMAIL = gql`
  mutation getTokenEmail($email: String!) {
    getTokenEmail(email: $email)
  }
`;

export const UseMutationGetTokenEmail = (): [typeof getTokenEmail] => {
  const [getTokenEmail] = useMutation<
    Pick<IMutation, "getTokenEmail">,
    IMutationGetTokenEmailArgs
  >(GET_TOKEN_EMAIL);

  return [getTokenEmail];
};
