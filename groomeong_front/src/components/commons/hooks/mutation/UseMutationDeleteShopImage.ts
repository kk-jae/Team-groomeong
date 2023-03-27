import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationDeleteShopImageArgs,
} from "../../../../commons/types/generated/types";

const DELETE_SHOP_IMAGE = gql`
  mutation deleteShopImage($shopImageId: String!) {
    deleteShopImage(shopImageId: $shopImageId) {
      id
    }
  }
`;
export const UseMutationDeleteShopImage = (): [typeof deleteShopImage] => {
  const [deleteShopImage] = useMutation<
    Pick<IMutation, "deleteShopImage">,
    IMutationDeleteShopImageArgs
  >(DELETE_SHOP_IMAGE);
  return [deleteShopImage];
};
