import { useEffect, useState, useCallback } from "react";
import { IAutocompleteShopsOutput } from "./../../../../commons/types/generated/types";
import { mapState, polygonState } from "./../../../../commons/Store/index";
import { useRecoilState, useRecoilValue } from "recoil";
import getLatLng from "../../../../commons/Utils/getLatLng";
export const useMapListBox = (shop: IAutocompleteShopsOutput) => {
  const [pos, setPos] = useState<google.maps.LatLngLiteral | null>(null);
  const [mapInfo, setMapInfo] = useRecoilState(mapState);
  const polygonInfo = useRecoilValue(polygonState);

  useEffect(() => {
    if (pos !== null) {
      mapInfo.map?.setZoom(17);
      mapInfo.map?.panTo(pos);
    } else if (polygonInfo.bounds !== null) {
      mapInfo.map?.fitBounds(polygonInfo.bounds);
    }
  }, [pos]);

  useEffect(() => {
    const currentElement = document.getElementById(mapInfo?.shop?.id as string);
    if (currentElement !== null) {
      currentElement?.scrollIntoView({ behavior: "smooth" });
    }
  });

  const onClickListBox = useCallback(() => {
    setMapInfo((prev) => ({
      ...prev,
      shop,
    }));
    setMapInfo((prev) => ({
      ...prev,
      shop,
    }));
    const pos = getLatLng(shop?.lat, shop?.lng);
    if (pos !== null) {
      setPos(pos);
      mapInfo.map?.setZoom(15);
    }
  }, [setPos]);

  return {
    mapInfo,
    onClickListBox,
  };
};
