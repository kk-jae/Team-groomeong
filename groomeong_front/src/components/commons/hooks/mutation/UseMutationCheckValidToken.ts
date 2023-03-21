import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCheckValidTokenArgs,
} from "../../../../commons/types/generated/types";

const CHECK_VALID_TOKEN = gql`
  mutation checkValidToken($email: String!, $token: String!) {
    checkValidToken(email: $email, token: $token)
  }
`;

export const UseMutationCheckValidToken = () => {
  const [checkValidToken] = useMutation<
    Pick<IMutation, "checkValidToken">,
    IMutationCheckValidTokenArgs
  >(CHECK_VALID_TOKEN);
  return [checkValidToken];
};
