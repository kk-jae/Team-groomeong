import { useState, useEffect } from "react";
import { includes } from "lodash";
import { IDataProps } from "./../../GeoData/getGeoData";
import { getLatLngBounds } from "../../libraries/GetLatLngBounds";
import * as GS from "../../../../../theme/global";
import {
  mapState,
  IMapState,
  searchState,
  polygonState,
  polygonsState,
  IPolyInfo,
} from "./../../../../commons/Store/index";
import { useRecoilState, useSetRecoilState } from "recoil";

const useMapPolygon = (map: IDataProps, codes: number[]) => {
  const [isHover, setIsHover] = useState("transparent");
  const [isActive, setIsActive] = useState(false);
  const [polygonOption, setPolygonOption] = useState({
    fillColor: "transparent",
    fillOpacity: 0.4,
    strokeColor: GS.blue[500],
    strokeOpacity: 0.8,
    strokeWeight: 0.5,
  });
  const [mapInfo, setMapInfo] = useRecoilState(mapState);
  const setPolygonInfo = useSetRecoilState(polygonState);
  const [polygonsInfo, setPolygonsInfo] = useRecoilState(polygonsState);
  const setSearch = useSetRecoilState(searchState);

  const bounds = getLatLngBounds(map);
  const onMouseOverpolygon = () => {
    if (!isActive) setIsHover("rgba(32, 148, 255, 0.3)");
  };

  const onMouseOutpolygon = () => {
    setIsHover("transparent");
  };

  const onMountPolygon = () => {
    if (polygonsInfo.length === 0) {
      setPolygonsInfo((prev: IPolyInfo[] | []) => [
        ...prev,
        {
          code: Number(map.properties.code),
          bounds,
        },
      ]);
    }
  };

  const onUnmountPolygon = () => {
    setPolygonOption({
      fillColor: "transparent",
      fillOpacity: 0.4,
      strokeColor: GS.blue[500],
      strokeOpacity: 0.8,
      strokeWeight: 0.5,
    });
  };

  const onClickpolygon = (e: google.maps.MapMouseEvent) => {
    console.log("plygon");
    e.domEvent.stopPropagation();
    setIsActive(true);
    setMapInfo((prev: IMapState) => ({
      ...prev,
      shop: null,
      codes: [Number(map.properties.code)],
    }));
    setPolygonInfo((prev) => ({
      isHover: isHover !== "transparent",
      bounds,
      isActive,
    }));
    setPolygonOption((prev) => ({
      ...prev,
      fillColor: "transparent",
    }));
    setSearch(map.properties.name);
    mapInfo.map?.fitBounds(bounds);
  };

  useEffect(() => {
    setIsActive(includes(codes, Number(map.properties.code)));
    setPolygonOption((prev) => ({
      ...prev,
      fillColor: isHover,
    }));
  }, [codes, map, isHover]);

  return {
    isHover,
    mapInfo,
    onMountPolygon,
    onMouseOverpolygon,
    onMouseOutpolygon,
    onUnmountPolygon,
    onClickpolygon,
    polygonOption,
    bounds,
    isActive,
    setIsActive,
    setPolygonOption,
    setMapInfo,
    codes,
  };
};

export default useMapPolygon;
