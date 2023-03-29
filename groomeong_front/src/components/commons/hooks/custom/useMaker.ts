import { IShop } from "./../../../../commons/types/generated/types";
import { mapState } from "./../../../../commons/Store/index";
import { useRecoilState } from "recoil";
import getLatLng from "../../../../commons/Utils/getLatLng";
import { useEffect, useRef } from "react";
import { Marker } from "@react-google-maps/api";

export const useMaker = (shop: IShop) => {
  const [mapInfo, setMapInfo] = useRecoilState(mapState);
  // const [isClicked, setIsCliecked] = useState<boolean>(false);
  const markerRef = useRef<Marker>(null);
  const onClickMaker = (e: google.maps.MapMouseEvent) => {
    console.log(e);
    setMapInfo((prev) => ({
      ...prev,
      marker: markerRef,
      shop,
    }));
    const pos = getLatLng(shop?.lat, shop?.lng);
    if (pos !== null) {
      console.log(mapInfo);
      mapInfo?.map?.setZoom(15);
      mapInfo?.map?.panTo(pos);
    }
  };

  useEffect(() => {
    if (shop.id === mapInfo?.shop?.id) {
      const pos = getLatLng(shop?.lat, shop?.lng);
      mapInfo?.map?.setZoom(15);
      mapInfo?.map?.panTo(pos);
    }
  }, [onClickMaker]);

  return {
    onClickMaker,
    markerRef,
  };
};
