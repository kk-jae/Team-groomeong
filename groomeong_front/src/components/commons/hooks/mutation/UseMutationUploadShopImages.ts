import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationUploadShopImagesArgs,
} from "../../../../commons/types/generated/types";

const UPLOAD_SHOP_IMAGES = gql`
  mutation uploadShopImages($files: [Upload!]!, $shopId: String!) {
    uploadShopImages(files: $files, shopId: $shopId)
  }
`;

export const UseMutationUploadShopImages = () => {
  const [uploadShopImages] = useMutation<
    Pick<IMutation, "uploadShopImages">,
    IMutationUploadShopImagesArgs
  >(UPLOAD_SHOP_IMAGES);
  return [uploadShopImages];
};
