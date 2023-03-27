import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationUploadShopImagesArgs,
} from "../../../../commons/types/generated/types";

const UPLOAD_SHOP_IMAGES = gql`
  mutation uploadShopImages($file: [Upload!]!, $shopId: String!) {
    uploadShopImages(file: $file, shopId: $shopId)
  }
`;

export const UseMutationUploadShopImages = () => {
  const [uploadShopImages] = useMutation<
    Pick<IMutation, "uploadShopImages">,
    IMutationUploadShopImagesArgs
  >(UPLOAD_SHOP_IMAGES);
  return [uploadShopImages];
};
