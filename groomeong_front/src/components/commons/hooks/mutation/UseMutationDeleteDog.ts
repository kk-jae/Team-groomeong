import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationDeleteDogArgs,
} from "../../../../commons/types/generated/types";

const DELETE_DOG = gql`
  mutation deleteDog($id: String!) {
    deleteDog(id: $id)
  }
`;

export const UseMutationDeleteDog = () => {
  const [deleteDog] = useMutation<
    Pick<IMutation, "deleteDog">,
    IMutationDeleteDogArgs
  >(DELETE_DOG);

  return [deleteDog];
};
