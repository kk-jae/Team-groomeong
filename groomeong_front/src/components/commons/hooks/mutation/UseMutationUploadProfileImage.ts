import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationUploadProfileImageArgs,
} from "../../../../commons/types/generated/types";

const UPLOAD_PROFILE_IMAGE = gql`
  mutation uploadProfileImage($file: Upload!) {
    uploadProfileImage(file: $file)
  }
`;

export const UseMutationUploadProfileImage = (): [
  typeof uploadProfileImage
] => {
  const [uploadProfileImage] = useMutation<
    Pick<IMutation, "uploadProfileImage">,
    IMutationUploadProfileImageArgs
  >(UPLOAD_PROFILE_IMAGE);
  return [uploadProfileImage];
};
