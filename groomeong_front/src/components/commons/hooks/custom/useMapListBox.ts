import { useEffect, useState } from "react";
import { IAutocompleteShopsOutput } from "./../../../../commons/types/generated/types";
import { mapState } from "./../../../../commons/Store/index";
import { useRecoilState } from "recoil";
import getLatLng from "../../../../commons/Utils/getLatLng";
export const useMapListBox = (shop: IAutocompleteShopsOutput) => {
  const [pos, setPos] = useState<google.maps.LatLngLiteral | null>(null);
  const [mapInfo, setMapInfo] = useRecoilState(mapState);

  useEffect(() => {
    if (pos !== null) {
      mapInfo.map?.panTo(pos);
      mapInfo.map?.setZoom(15)
    }
    if (mapInfo.polygon.bounds !== null) {
      mapInfo.map?.fitBounds(mapInfo.polygon.bounds)
    }
  }, [pos]);

  useEffect(() => {
    const currentElement = document.getElementById(mapInfo?.shop?.id as string);
    if (currentElement !== null) {
      currentElement?.scrollIntoView({ behavior: "smooth" });
    }
  });

  const onClickListBox = () => {
    setMapInfo((prev) => ({
      ...prev,
      shop
    }))
    setMapInfo((prev) => ({
      ...prev,
      shop,
    }));
    const pos = getLatLng(shop?.lat, shop?.lng);
    setPos(pos);
  };

  return {
    mapInfo,
    onClickListBox,
  };
};
