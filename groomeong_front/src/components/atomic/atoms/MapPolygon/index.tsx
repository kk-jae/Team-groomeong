import { OverlayView, Polygon } from "@react-google-maps/api";
import { memo } from "react";
import { IDataProps } from "../../../commons/GeoData/getGeoData";
import useMapPolygon from "../../../commons/hooks/custom/useMapPolygon";
import { PolygonOverlayViewWrapper, PolygonOverlayViewTitle } from "./index.styled";

interface IMapPolygon {
  map: IDataProps;
  codes: number[];
}

const MapPolygon = (props: IMapPolygon) => {
  const {
    polygonRef,
    onClickpolygon,
    onMouseOutpolygon,
    onMouseOverpolygon,
    polygonOption,
    bounds,
    isHover,
    isActive
  } = useMapPolygon(props.map, props.codes);

  return (
    <>
      <Polygon
        key={props.map.properties.code}
        ref={polygonRef}
        paths={props.map.geometry}
        options={polygonOption}
        onMouseOver={onMouseOverpolygon}
        onMouseOut={onMouseOutpolygon}
        onClick={onClickpolygon}
      />
      {isActive ? (
        <OverlayView mapPaneName="overlayMouseTarget" bounds={bounds}>
          <PolygonOverlayViewWrapper>
            <PolygonOverlayViewTitle
              initial={{x: 0, opacity: 1, }}
              animate={{x: 100, opacity: 0 }}
              transition={{ duration: .5, times: [] }}
            >
              {props.map.properties.name}
            </PolygonOverlayViewTitle>
          </PolygonOverlayViewWrapper>
        </OverlayView>
      ) : (
        isHover ? (
        <OverlayView mapPaneName="overlayMouseTarget" bounds={bounds}>
          <PolygonOverlayViewWrapper>
            <PolygonOverlayViewTitle
              animate={{x: 100, opacity: 1 }}
            >
              {props.map.properties.name}
            </PolygonOverlayViewTitle>
          </PolygonOverlayViewWrapper>
        </OverlayView>
        ) : <></>
      )}
    </>
  );
};

export default MapPolygon;
