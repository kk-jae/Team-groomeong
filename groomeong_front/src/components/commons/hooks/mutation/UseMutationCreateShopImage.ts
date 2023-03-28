import { gql, useMutation } from "@apollo/client";
import { IMutation } from "../../../../commons/types/generated/types";

const CREATE_SHOP_IMAGE = gql`
  mutation createShopImage(
    $imageUrl: String!
    $isThumbnail: Boolean!
    $shopId: String!
  ) {
    createShopImage(
      imageUrl: $imageUrl
      isThumbnail: $isThumbnail
      shopId: $shopId
    ) {
      id
      imageUrl
      isThumbnail
    }
  }
`;

export const UseMutationCreateShopImage = (): [typeof createShopImage] => {
  const [createShopImage] =
    useMutation<Pick<IMutation, "createShopImage">>(CREATE_SHOP_IMAGE);
  return [createShopImage];
};
