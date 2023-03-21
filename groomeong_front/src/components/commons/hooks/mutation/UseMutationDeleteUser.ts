import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationDeleteUserArgs,
} from "../../../../commons/types/generated/types";

const DELETE_USER = gql`
  mutation deleteUser($userId: String!) {
    deleteUser(userId: $userId)
  }
`;

export const UseMutationDeleteUser = () => {
  const [deleteUser] = useMutation<
    Pick<IMutation, "deleteUser">,
    IMutationDeleteUserArgs
  >(DELETE_USER);
  return [deleteUser];
};
