import useMapList from "../../../commons/hooks/custom/useMapList";
import * as GS from "../../../../../theme/global";
import * as LS from "./index.style";
import * as V from "./index.variants";
import { MapListBox } from "../../atoms/MapListBox";
import { useDebounceOnchage } from "../../../commons/hooks/custom/useDebounceOnchage";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { mapState } from "../../../../commons/Store";
import getLatLng from "../../../../commons/Utils/getLatLng";

export const MapList = () => {
  const { onChangeSearch, search } = useDebounceOnchage();
  const [mapInfo] = useRecoilState(mapState);
  const { isClicked, onClickSetClicked, shops, globalSearch } =
    useMapList();

  useEffect(() => {
    if (mapInfo.isLoaded && shops != null) {
      const newBounds = new google.maps.LatLngBounds();
      shops.forEach((shop) => {
        newBounds.extend(getLatLng(shop.lat, shop.lng));
      });
      mapInfo.map?.setZoom(13);
      mapInfo.map?.fitBounds(newBounds);
    }
  }, [search, shops]);

  return (
    <>
      <LS.MapListSearchBarWrapper>
        <LS.MapListSearchBar
          placeholder={
            globalSearch !== "" && search !== ""
              ? globalSearch
              : `행정구 및 행정동을 입력해주세요.`
          }
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
