import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateShopArgs,
} from "../../../../commons/types/generated/types";

const CREATE_SHOP = gql`
  mutation createShop($createShopInput: CreateShopInput!) {
    createShop(createShopInput: $createShopInput) {
      id
    }
  }
`;

export const UseMutationCreateShop = () => {
  const [createShop] = useMutation<
    Pick<IMutation, "createShop">,
    IMutationCreateShopArgs
  >(CREATE_SHOP);
  return [createShop];
};
