import React from "react";
import { Marker, MarkerProps } from "@react-google-maps/api";

const MapMarker = (props: MarkerProps) => {
  return (
    <Marker
      position={props.position}
      icon={{
        url: "/image/icon-marker.svg",
        size: [64, 64],
      }}
      clusterer={props.clusterer}
    />
  );
};

export default MapMarker;
