import { useMoveToPage } from "./useMovedToPage";
import { UseQueryFetchShop } from "../query/UseQueryFetchShop";
import { IAutocompleteShopsOutput } from "../../../../commons/types/generated/types";

const useMapOverlayView = (shop: IAutocompleteShopsOutput) => {
  console.log(shop);
  const { data } = UseQueryFetchShop(shop?.shopid);
  const { onClickMoveToPage } = useMoveToPage();

  return {
    shop: data?.fetchShop,
    onClickMoveToPage,
  };
};

export default useMapOverlayView;
