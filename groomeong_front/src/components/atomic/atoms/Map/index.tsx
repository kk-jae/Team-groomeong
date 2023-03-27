import React from "react";
import useMap from "../../../commons/hooks/custom/useMap";
import { Div } from "./index.styled";

const Map = () => {
  const { mapRef } = useMap();

  return <Div ref={mapRef} />;
};

export default Map;
