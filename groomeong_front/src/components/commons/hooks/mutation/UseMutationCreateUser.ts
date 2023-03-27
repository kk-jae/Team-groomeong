import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateUserArgs,
} from "../../../../commons/types/generated/types";

const CREATE_USER = gql`
  mutation createUser(
    $name: String!
    $email: String!
    $password: String!
    $phone: String!
  ) {
    createUser(name: $name, email: $email, password: $password, phone: $phone) {
      id
    }
  }
`;

export const UseMutationCreateUser = () => {
  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);
  return [createUser];
};
