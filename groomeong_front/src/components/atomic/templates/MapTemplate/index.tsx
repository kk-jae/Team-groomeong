import React from "react";
import { Map } from "../../atoms/Map";
import { MapList } from "../../organisms/MapList";

const MapTemplate = (): JSX.Element => {
  return (
    <>
      <Map />
      <MapList />
    </>
  );
};

export default MapTemplate;
