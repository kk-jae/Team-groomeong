import { searchState } from "./../../../../commons/Store/index";
import { useRecoilValue } from "recoil";
import { filter, map, uniq } from "lodash";
import UseQueryAutocomplateShops from "../query/UseQueryAutocompleteShops";
import { UseQueryFetchShops } from "../query/UseQueryFetchShops";

export const useGetFilteredShops = () => {
  const search = useRecoilValue(searchState);

  const { data: autoShops } = UseQueryAutocomplateShops(search);
  const { data: fetchShops } = UseQueryFetchShops(1, 1000);

  const filteredShops = map(autoShops?.autocompleteShops, (autoShop) =>
    filter(fetchShops?.fetchShops, (shop) => shop.id === autoShop.shopid)
  ).flat();

  const codes = uniq(map(filteredShops, "code"));

  return {
    autoShops,
    fetchShops,
    filteredShops,
    codes,
    globalSearch: search,
  };
};
