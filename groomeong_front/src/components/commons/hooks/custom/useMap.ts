import { UseQueryFetchShops } from './../query/UseQueryFetchShops';
import { useJsApiLoader } from "@react-google-maps/api";
import { useCallback, useState } from "react";

export const useMap = () => {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const { data } = UseQueryFetchShops(1, 1000);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_API_KEY as string,
  });

  const mapContainerStyle = {
    width: "100vw",
    height: "100vh",
  };

  const options: google.maps.MapOptions = {
    disableDefaultUI: true,
    clickableIcons: false,
  };

  const center: google.maps.LatLngLiteral = {
    lat: 37.541,
    lng: 126.986,
  };

  const onLoad = useCallback(
    (mapInstance: google.maps.Map) => {
      setMap(mapInstance);
    },
    [map]
  );

  return {
    isLoaded,
    onLoad,
    center,
    options,
    mapContainerStyle,
  };
};
