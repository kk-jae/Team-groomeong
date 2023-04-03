import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { mapState } from "../../../../commons/Store";
import { useGetFilteredShops } from "./useGetFilteredShops";

const useMapList = () => {
  const [mapInfo, setMapInfo] = useRecoilState(mapState);
  const [isClicked, setIsClicked] = useState(false);
  const { autoShops, codes, globalSearch } = useGetFilteredShops();

  useEffect(() => {
    setMapInfo((prev) => ({
      ...prev,
      codes,
    }));
  }, []);


  const onClickSetClicked = () => {
    setIsClicked(!isClicked);
  };

  return {
    isClicked,
    onClickSetClicked,
    shops: autoShops?.autocompleteShops,
    mapInfo,
    codes,
    globalSearch,
  };
};

export default useMapList;
