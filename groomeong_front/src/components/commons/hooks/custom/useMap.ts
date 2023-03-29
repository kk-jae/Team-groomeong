import { mapState } from "./../../../../commons/Store/index";
import { UseQueryFetchShops } from "./../query/UseQueryFetchShops";
import { useJsApiLoader } from "@react-google-maps/api";
import { useCallback } from "react";
import { useRecoilState } from "recoil";
import getLatLng from "../../../../commons/Utils/getLatLng";

export const useMap = () => {
  const [mapInfo, setMapInfo] = useRecoilState(mapState);
  const { data } = UseQueryFetchShops(1, 1000);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_API_KEY as string,
  });

  const onClickMap = () => {
    setMapInfo((prev) => ({
      ...prev,
      shop: undefined,
    }));
    const pos = getLatLng(mapInfo.shop?.lat, mapInfo.shop?.lng);
    if (pos !== null) mapInfo.map?.panTo(pos);
    else mapInfo.map?.panTo(center)
  };

  const onDragStart = () => {
    setMapInfo((prev) => ({
      ...prev,
      shop: undefined,
    }));
  };

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

  const onLoad = useCallback((mapInstance: google.maps.Map) => {
    console.log(mapInstance);
    setMapInfo((prev) => ({
      ...prev,
      map: mapInstance,
    }));
  }, []);

  return {
    fetchShops: data?.fetchShops,
    onClickMap,
    onDragStart,
    isLoaded,
    onLoad,
    center,
    options,
    mapContainerStyle,
  };
};
