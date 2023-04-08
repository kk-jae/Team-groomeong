import { UseQueryFetchShop } from "../query/UseQueryFetchShop";
import { useMoveToPage } from "./useMovedToPage";
import { IAutocompleteShopsOutput, IReview, Maybe } from "./../../../../commons/types/generated/types";

const useInfoWindow = (shop?: IAutocompleteShopsOutput) => {
  const { data } = UseQueryFetchShop(shop?.shopid);
  const { onClickMoveToPage } = useMoveToPage();
  const reviewCount: Array<Maybe<IReview> | undefined> = [];
  if (data?.fetchShop?.reservation?.length !== 0) {
    data?.fetchShop.reservation?.map((el) => reviewCount.push(el.review));
  }

  return {
    shop: data?.fetchShop,
    onClickMoveToPage,
    reviewCount,
  };
};

export default useInfoWindow;
