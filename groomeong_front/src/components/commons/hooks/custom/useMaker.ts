import { IShop } from "./../../../../commons/types/generated/types";
import { mapState } from "./../../../../commons/Store/index";
import { useRecoilState } from "recoil";
import getLatLng from "../../../../commons/Utils/getLatLng";

export const useMaker = (shop: IShop) => {
  const [mapInfo, setMapInfo] = useRecoilState(mapState);

  const onClickMaker = () => {
    setMapInfo((prev) => ({
      ...prev,
      shop,
    }));
    const pos = getLatLng(shop?.lat, shop?.lng);
    pos !== null && mapInfo?.map?.panTo(pos);
  };

  return {
    onClickMaker,
    isClicked: shop.id === mapInfo.shop?.id,
  };
};
