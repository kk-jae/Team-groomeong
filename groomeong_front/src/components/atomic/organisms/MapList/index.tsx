import useMapList from "../../../commons/hooks/custom/useMapList";
import * as GS from "../../../../../theme/global";
import * as LS from "./index.style";
import * as V from "./index.variants";
import { MapListBox } from "../../atoms/MapListBox";
import { useDebounceOnchage } from "../../../commons/hooks/custom/useDebounceOnchage";
import { useEffect } from "react";

export const MapList = () => {
  const { onChangeSearch, search } = useDebounceOnchage();
  const { isClicked, onClickSetClicked, shops } = useMapList();

  useEffect(() => {
    const localBounds = localStorage.getItem("bounds");
    if (localBounds !== null) {
      const bounds = JSON.parse(localBounds);
      console.log(bounds);
    }
  }, [search]);

  return (
    <>
      <LS.MapListSearchBarWrapper>
        <LS.MapListSearchBar
          placeholder="동을 입력해주세요."
          value={search}
          onChange={onChangeSearch}
        />
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
            shops?.map((shop) => <MapListBox shop={shop} key={shop.id} />)
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
