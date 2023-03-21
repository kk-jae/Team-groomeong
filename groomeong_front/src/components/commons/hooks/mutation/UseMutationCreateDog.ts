import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateDogArgs,
} from "../../../../commons/types/generated/types";

const CREATE_DOG = gql`
  mutation createDog($createDogInput: CreateDogInput!) {
    createDog(createDogInput: $createDogInput) {
      id
    }
  }
`;

export const UseMutationCreateDog = () => {
  const [createDog] = useMutation<
    Pick<IMutation, "createDog">,
    IMutationCreateDogArgs
  >(CREATE_DOG);
  return [createDog];
};
