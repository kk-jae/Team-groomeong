import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationUploadDogImageArgs,
} from "../../../../commons/types/generated/types";

const UPLOAD_DOG_IMAGE = gql`
  mutation uploadDogImage($file: Upload!, $dogId: String!) {
    uploadDogImage(file: $file, dogId: $dogId)
  }
`;

export const UseMutationUploadDogImage = () => {
  const [uploadDogImage] = useMutation<
    Pick<IMutation, "uploadDogImage">,
    IMutationUploadDogImageArgs
  >(UPLOAD_DOG_IMAGE);
  return [uploadDogImage];
};
