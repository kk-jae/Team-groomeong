import { OverlayView, Polygon } from "@react-google-maps/api";
import { memo } from "react";
import { IDataProps } from "../../../commons/GeoData/getGeoData";
import useMapPolygon from "../../../commons/hooks/custom/useMapPolygon";

interface IMapPolygon {
  map: IDataProps;
}

const MapPolygon = (props: IMapPolygon) => {
  const {
    polygonRef,
    onDbClickpolygon,
    onMouseOutpolygon,
    onMouseOverpolygon,
    polygonOption,
    bounds,
    isHover,
    mapInfo,
  } = useMapPolygon(props.map);

  console.log(mapInfo);

  return (
    <>
      <Polygon
        key={props.map.properties.code}
        ref={polygonRef}
        paths={props.map.geometry}
        options={polygonOption}
        onMouseOver={onMouseOverpolygon}
        onMouseOut={onMouseOutpolygon}
        onDblClick={onDbClickpolygon}
      />
      {isHover ? (
        <OverlayView mapPaneName="overlayMouseTarget" bounds={bounds}>
          <h1>{props.map.properties.name}</h1>
        </OverlayView>
      ) : (
        <></>
      )}
    </>
  );
};

export default memo(MapPolygon);
