import { OverlayView, PolygonF } from "@react-google-maps/api";
import { IDataProps } from "../../../commons/GeoData/getGeoData";
import useMapPolygon from "../../../commons/hooks/custom/useMapPolygon";
import {
  PolygonOverlayViewWrapper,
  PolygonOverlayViewTitle,
} from "./index.styled";

interface IMapPolygon {
  map: IDataProps;
  codes: number[];
  key: string;
}

const MapPolygon = (props: IMapPolygon) => {
  const {
    onClickpolygon,
    onMouseOutpolygon,
    onMouseOverpolygon,
    onUnmountPolygon,
    onMountPolygon,
    polygonOption,
    bounds,
    isActive,
  } = useMapPolygon(props.map, props.codes);


  return (
    <>
      <PolygonF
        key={props.key}
        paths={props.map.geometry}
        options={polygonOption}
        onMouseOver={onMouseOverpolygon}
        onMouseOut={onMouseOutpolygon}
        onLoad={onMountPolygon}
        onUnmount={onUnmountPolygon}
        onClick={onClickpolygon}
      />
      {polygonOption.fillColor !== "transparent" && !isActive ? (
        <OverlayView mapPaneName="markerLayer" bounds={bounds}>
          <PolygonOverlayViewWrapper>
            <PolygonOverlayViewTitle animate={{ x: 100, opacity: 1 }}>
              {props.map.properties.name}
            </PolygonOverlayViewTitle>
          </PolygonOverlayViewWrapper>
        </OverlayView>
      ) : isActive ? (
        <OverlayView mapPaneName="overlayMouseTarget" bounds={bounds}>
          <PolygonOverlayViewWrapper>
            <PolygonOverlayViewTitle
              initial={{ x: 0, opacity: 1 }}
              animate={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.5, times: [] }}
            >
              {props.map.properties.name}
            </PolygonOverlayViewTitle>
          </PolygonOverlayViewWrapper>
        </OverlayView>
      ) : (
        <></>
      )}
    </>
  );
};

export default MapPolygon;
