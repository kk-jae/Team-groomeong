import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationResetPwdArgs,
} from "../../../../commons/types/generated/types";

const RESET_PWD = gql`
  mutation resetPwd($email: String!, $newPassword: String!) {
    resetPwd(email: $email, newPassword: $newPassword) {
      id
    }
  }
`;

export const UseMutationResetPwd = (): [typeof resetPwd] => {
  const [resetPwd] = useMutation<
    Pick<IMutation, "resetPwd">,
    IMutationResetPwdArgs
  >(RESET_PWD);
  return [resetPwd];
};
