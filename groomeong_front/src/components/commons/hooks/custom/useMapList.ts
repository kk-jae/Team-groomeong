import { UseQueryFetchShops } from "./../query/UseQueryFetchShops";
import { useState } from "react";

const useMapList = () => {
  const [isClicked, setIsClicked] = useState(false);
  const { data } = UseQueryFetchShops(1, 1000);
  const onClickSetClicked = () => {
    setIsClicked(!isClicked);
  };
  return {
    isClicked,
    onClickSetClicked,
    shops: data?.fetchShops,
  };
};

export default useMapList;
