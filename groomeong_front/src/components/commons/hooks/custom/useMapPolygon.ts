import { includes } from "lodash";
import * as GS from "../../../../../theme/global";
import { IDataProps } from "./../../GeoData/getGeoData";
import { getLatLngBounds } from "../../libraries/GetLatLngBounds";
import {
  mapState,
  IMapState,
  searchState,
} from "./../../../../commons/Store/index";
import { useEffect, useRef, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { Polygon } from "@react-google-maps/api";

const useMapPolygon = (map: IDataProps, codes: number[]) => {
  const polygonRef = useRef<Polygon>(null);
  const [isHover, setIsHover] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [mapInfo, setMapInfo] = useRecoilState(mapState);
  const setSearchState = useSetRecoilState(searchState);

  const bounds = getLatLngBounds(map);
  const polygonOption: google.maps.PolygonOptions = {
    fillColor: isHover || isActive ? "rgba(32, 148, 255, 0.3)" : "transparent",
    fillOpacity: 0.4,
    strokeColor: GS.blue[500],
    strokeOpacity: 0.8,
    strokeWeight: 0.5,
  };

  const onMouseOverpolygon = () => {
    setIsHover(true);
  };

  const onMouseOutpolygon = () => {
    setIsHover(false);
  };

  const onClickpolygon = (e: google.maps.MapMouseEvent) => {
    e.domEvent.stopPropagation();
    setIsActive(true);
    setMapInfo((prev: IMapState) => ({
      ...prev,
      shop: null,
      codes: [Number(map.properties.code)],
      polygon: {
        isHover,
        bounds,
        isActive,
        ref: polygonRef,
      },
    }));

    setSearchState(map.properties.name);
    mapInfo.map?.fitBounds(bounds);
  };

  useEffect(() => {
    setIsActive(includes(codes, Number(map.properties.code)));
    if (includes(codes, Number(map.properties.code))) {
      mapInfo.map?.fitBounds(bounds);
    }
  }, [codes, bounds, map, mapInfo]);

  return {
    isHover,
    mapInfo,
    onMouseOverpolygon,
    onMouseOutpolygon,
    onClickpolygon,
    polygonOption,
    bounds,
    polygonRef,
    isActive,
    setMapInfo,
  };
};

export default useMapPolygon;
