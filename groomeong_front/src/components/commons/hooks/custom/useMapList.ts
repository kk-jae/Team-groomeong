import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { mapState } from "../../../../commons/Store";
import { useGetFilteredShops } from "./useGetFilteredShops";

const useMapList = () => {
  const [mapInfo, setMapInfo] = useRecoilState(mapState);
  const [isClicked, setIsClicked] = useState(false);
  const { autoShops, codes } = useGetFilteredShops();

  useEffect(() => {
    setMapInfo((prev) => ({
      ...prev,
      codes,
    }));
  }, []);

  // 나중에 쓰일수도 있는 코드
  // const onLoadMore = () => {
  //   if (data === undefined) return;
  //   void fetchMore({
  //     variables: {
  //       page: Math.ceil((data?.autocompleteShops?.length ?? 7) / 7) + 1,
  //       count: 7,
  //     },
  //     updateQuery: (prev, { fetchMoreResult }) => {
  //       if (fetchMoreResult == null) return prev;
  //       const newData = {
  //         fetchShops: [
  //           ...prev?.autocompleteShops as IAutocompeShopsOutput[],
  //           ...fetchMoreResult.autocompleteShops as IAutocompeShopsOutput[],
  //         ],
  //       };
  //       return newData;
  //     },
  //   });
  // };

  const onClickSetClicked = () => {
    setIsClicked(!isClicked);
  };

  return {
    isClicked,
    onClickSetClicked,
    shops: autoShops?.autocompleteShops,
    mapInfo,
    // onLoadMore,
  };
};

export default useMapList;
