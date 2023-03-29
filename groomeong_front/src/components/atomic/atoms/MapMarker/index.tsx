import React from "react";
import { Marker, MarkerProps } from "@react-google-maps/api";
import { useMaker } from "../../../commons/hooks/custom/useMaker";
import MapOverlayView from "../MapOverlayView";
import { IShop } from "../../../../commons/types/generated/types";
import { useRecoilValue } from "recoil";
import { mapState } from "../../../../commons/Store";

interface IMarkerProps extends MarkerProps {
  shop: IShop;
}

const MapMarker = (props: IMarkerProps) => {
  const { onClickMaker, markerRef } = useMaker(props.shop);
  const mapInfo = useRecoilValue(mapState);
  const isClicked = mapInfo?.shop?.id === props.shop.id;
  return (
    <Marker
      ref={markerRef}
      position={props.position}
      icon={{
        url: "/image/icon-marker.svg",
        scaledSize: new google.maps.Size(64, 64),
      }}
      clusterer={props.clusterer}
      onClick={onClickMaker}
      animation={isClicked ? 1 : undefined}
    >
      {console.log(isClicked)}
      <MapOverlayView isClicked={isClicked} position={props.position} />
    </Marker>
  );
};

export default MapMarker;
