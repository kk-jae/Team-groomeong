import { UseQueryFetchShops } from "./../query/UseQueryFetchShops";
import { useState } from "react";

const useMapList = () => {
  const [isClicked, setIsClicked] = useState(false);
  const { data, fetchMore } = UseQueryFetchShops(1, 7);

  const onLoadMore = () => {
    if (data === undefined) return;
    void fetchMore({
      variables: {
        page: Math.ceil((data?.fetchShops.length ?? 7) / 10) + 1,
        count: 7,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult == null) return prev;
        console.log(fetchMoreResult);
        const newData =  {
          fetchShops: [...prev.fetchShops, ...fetchMoreResult.fetchShops],
        };
        return newData
      },
    });
  };
  const onClickSetClicked = () => {
    setIsClicked(!isClicked);
  };
  return {
    isClicked,
    onClickSetClicked,
    shops: data?.fetchShops,
    onLoadMore,
  };
};

export default useMapList;
