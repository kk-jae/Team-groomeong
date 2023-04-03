import { mapState, searchState } from "./../../../../commons/Store/index";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { FixedSizeList as List } from "react-window";
import UseQueryAutocomplateShops from "../query/UseQueryAutocompleteShops";
import { useDebounceOnchage } from "./useDebounceOnchage";
import useGetRoute from "./useGetRoute";
import getLatLng from "../../../../commons/Utils/getLatLng";
import { KeyboardEvent, useEffect } from "react";

export const useHome = () => {
  const mapInfo = useRecoilValue(mapState);
  const { onChangeSearch, search, globalSearch } = useDebounceOnchage();
  const { push } = useGetRoute();
  const { data: autoShops } = UseQueryAutocomplateShops(globalSearch);

  const onClickSearch = () => {
    void push("/map");
  };

  const onkeyPressSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      void push("/map");
    }
  };

  useEffect(() => {
    if (mapInfo.isLoaded && autoShops != null) {
      const newBounds = new google.maps.LatLngBounds();
      autoShops?.autocompleteShops?.forEach((shop) => {
        newBounds.extend(getLatLng(shop.lat, shop.lng));
      });
      mapInfo.map?.setZoom(13);
      mapInfo.map?.fitBounds(newBounds);
    }
  }, [search, autoShops]);

  return {
    search,
    globalSearch,
    onChangeSearch,
    List,
    autoShops,
    onClickSearch,
    onkeyPressSearch,
  };
};
