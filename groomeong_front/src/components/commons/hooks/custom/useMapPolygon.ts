import { isEqual } from "lodash";
import { IDataProps } from "./../../GeoData/getGeoData";
import { getLatLngBounds } from "../../libraries/GetLatLngBounds";
import { mapState, IMapState } from "./../../../../commons/Store/index";
import { useMemo, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { Polygon } from "@react-google-maps/api";

const useMapPolygon = (map: IDataProps) => {
  const polygonRef = useRef<Polygon>(null);
  const [isHover, setIsHover] = useState(false)
  const [mapInfo, setMapInfo] = useRecoilState(mapState);

  const bounds = useMemo(() => getLatLngBounds(map), [map]);
  const polygonOption: google.maps.PolygonOptions = {
    fillColor: isHover
      ? "rgba(32, 148, 255, 0.3)"
      : "transparent",
    fillOpacity: 0.4,
    strokeColor: isHover
      ? "rgba(32, 148, 255, .7)"
      : "transparent",
    strokeOpacity: 0.8,
    strokeWeight: 3,
  };

  const onMouseOverpolygon = () => {
    setIsHover(true)
    setMapInfo((prev: IMapState) => ({
      ...prev,
      code: Number(map.properties.code),
      polygon: {
        ...prev.polygon,
        isHover,
      },
    }));
    // mapInfo.map?.fitBounds();
  };

  const onMouseOutpolygon = () => {
    setIsHover(false)
    setMapInfo((prev: IMapState) => ({
      ...prev,
      code: Number(map.properties.code),
      polygon: {
        ...prev.polygon,
        isHover,
      },
    }));
  };


  const onDragPolygon = () => {
    // setSelectedPoly(true);
  };

  const onDbClickpolygon = () => {
    setMapInfo((prev: IMapState) => ({
      ...prev,
      shop: undefined,
      // code: Number(map.properties.code),
    }));
    mapInfo.map?.fitBounds(bounds);
  };


  return {
    isHover,
    mapInfo,
    onMouseOverpolygon,
    onMouseOutpolygon,
    onDbClickpolygon,
    onDragPolygon,
    polygonOption,
    bounds,
    polygonRef,
  };
};

export default useMapPolygon;
