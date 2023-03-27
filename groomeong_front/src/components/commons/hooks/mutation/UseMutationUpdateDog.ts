import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationUpdateDogArgs,
} from "../../../../commons/types/generated/types";

const UPDATE_DOG = gql`
  mutation updateDog($id: String!, $updateDogInput: UpdateDogInput!) {
    updateDog(id: $id, updateDogInput: $updateDogInput) {
      id
    }
  }
`;

export const UseMutationUpdateDog = (): [typeof updateDog] => {
  const [updateDog] = useMutation<
    Pick<IMutation, "updateDog">,
    IMutationUpdateDogArgs
  >(UPDATE_DOG);
  return [updateDog];
};
