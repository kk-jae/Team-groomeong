import React from "react";
import { Marker, MarkerProps } from "@react-google-maps/api";
import { useMaker } from "../../../commons/hooks/custom/useMaker";
import MapOverlayView from "../MapOverlayView";
import { IShop } from "../../../../commons/types/generated/types";

interface IMarkerProps extends MarkerProps {
  shop: IShop;
}

const MapMarker = (props: IMarkerProps) => {
  const { onClickMaker, isClicked } = useMaker(props.shop);
  return (
    <Marker
      position={props.position}
      icon={{
        url: "/image/icon-marker.svg",
        scaledSize: new google.maps.Size(64, 64),
      }}
      clusterer={props.clusterer}
      onClick={onClickMaker}
      animation={isClicked ? 1 : undefined}
    >
      <MapOverlayView isClicked={isClicked} position={props.position} />
    </Marker>
  );
};

export default MapMarker;
