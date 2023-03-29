import { useEffect, useState } from "react";
import { IShop } from "./../../../../commons/types/generated/types";
import { mapState } from "./../../../../commons/Store/index";
import { useRecoilState } from "recoil";
import getLatLng from "../../../../commons/Utils/getLatLng";
export const useMapListBox = (shop: IShop) => {
  const [pos, setPos] = useState<google.maps.LatLngLiteral | null>(null);
  const [mapInfo, setMapInfo] = useRecoilState(mapState);

  useEffect(() => {
    if (pos !== null) {
      mapInfo.map?.panTo(pos);
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
