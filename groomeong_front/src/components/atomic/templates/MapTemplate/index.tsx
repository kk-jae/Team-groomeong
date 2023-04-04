import { useJsApiLoader } from "@react-google-maps/api";
import React from "react";
import { Map } from "../../atoms/Map";
import { MapList } from "../../organisms/MapList";

const MapTemplate = (): JSX.Element => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_API_KEY as string,
  });

  return (
    <>
      {isLoaded ? (
        <>
          <Map />
          {/* <MapList /> */}
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default MapTemplate;
