import useMapList from "../../../commons/hooks/custom/useMapList";
import * as GS from "../../../../../theme/global";
import * as LS from "./index.style";
import * as V from "./index.variants";
import { MapListBox } from "../../atoms/MapListBox";
import InfiniteScroll from "react-infinite-scroller";

export const MapList = () => {
  const { isClicked, onClickSetClicked, shops, onLoadMore } = useMapList();
  console.log(shops);
  return (
    <>
      <LS.MapListSearchBarWrapper>
        <LS.MapListSearchBar placeholder="동을 입력해주세요." />
        <LS.MapListSearchBarButton />
      </LS.MapListSearchBarWrapper>
      <LS.MapListBodyWrapper
        animate={!isClicked ? "open" : "closed"}
        variants={V.MapListBodyWrapperVariants}
      >
        <LS.MapListButton
          whileHover={{
            backgroundColor: GS.base.tertiary,
            color: GS.base.secondary,
          }}
          onClick={onClickSetClicked}
        >
          {isClicked ? ">" : "<"}
        </LS.MapListButton>
        <LS.MapListContentsWrapper
          variants={V.MapListContentsWrapperVariants}
          initial={"initial"}
        >
          {shops != null && shops?.length !== 0 ? (
            <InfiniteScroll
              pageStart={1}
              loadMore={onLoadMore}
              hasMore={true}
              useWindow={false}
            >
              {shops?.map((shop) => (
                <MapListBox shop={shop} key={shop.id} />
              ))}
            </InfiniteScroll>
          ) : (
            <LS.ImgDiv>
              <LS.Span>검색결과가 없습니다.</LS.Span>
            </LS.ImgDiv>
          )}
        </LS.MapListContentsWrapper>
      </LS.MapListBodyWrapper>
    </>
  );
};
