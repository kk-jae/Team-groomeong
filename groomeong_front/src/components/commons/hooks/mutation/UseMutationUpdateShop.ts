import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationUpdateShopArgs,
} from "../../../../commons/types/generated/types";

const UPDATE_SHOP = gql`
  mutation updateShop($shopId: String!, $updateShopInput: UpdateShopInput!) {
    updateShop(shopId: $shopId, updateShopInput: $updateShopInput) {
      id
    }
  }
`;

export const UseMutationUpdateShop = () => {
  const [updateShop] = useMutation<
    Pick<IMutation, "updateShop">,
    IMutationUpdateShopArgs
  >(UPDATE_SHOP);
  return [updateShop];
};
