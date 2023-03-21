import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationSaveShopImageArgs,
} from "../../../../commons/types/generated/types";

const SAVE_SHOP_IMAGE = gql`
  mutation saveShopImage(
    $imageUrl: String!
    $isThumbnail: Boolean!
    $shopId: String!
  ) {
    saveShopImage(
      imageUrl: $imageUrl
      isThumbnail: $isThumbnail
      shopId: $shopId
    ) {
      id
      imageUrl
    }
  }
`;

export const UseMutationSaveShopImage = () => {
  const [saveShopImage] = useMutation<
    Pick<IMutation, "saveShopImage">,
    IMutationSaveShopImageArgs
  >(SAVE_SHOP_IMAGE);
  return [saveShopImage];
};
