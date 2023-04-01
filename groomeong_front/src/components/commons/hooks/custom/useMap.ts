import { useGetFilteredShops } from "./useGetFilteredShops";
import { mapState } from "./../../../../commons/Store/index";
import { useJsApiLoader } from "@react-google-maps/api";
import { useEffect, useMemo } from "react";
import { useRecoilState } from "recoil";
import { getGeoData } from "../../GeoData/getGeoData";
import getLatLng from "../../../../commons/Utils/getLatLng";

export const useMap = () => {
  const [mapInfo, setMapInfo] = useRecoilState(mapState);
  const { codes, autoShops } = useGetFilteredShops();
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_API_KEY as string,
  });

  const geoData = useMemo(() => getGeoData(), []);
  const mapContainerStyle = {
    width: "100vw",
    height: "100vh",
  };

  const options: google.maps.MapOptions = {
    disableDefaultUI: true,
    disableDoubleClickZoom: true,
    clickableIcons: false,
  };

  const center: google.maps.LatLngLiteral = {
    lat: 37.541,  
    lng: 126.986,
  };

  const onLoad = (mapInstance: google.maps.Map) => {
    setMapInfo((prev) => ({
      ...prev,
      map: mapInstance,
    }));
  };

  const onClickMap = () => {
    setMapInfo((prev) => ({
      ...prev,
      shop: null,
    }));
    const pos = getLatLng(mapInfo.shop?.lat, mapInfo.shop?.lng);
    if (mapInfo.polygon.bounds !== null) {
      mapInfo.map?.fitBounds(mapInfo.polygon.bounds);
    } else if (pos !== null) {
      mapInfo.map?.panTo(pos);
    } else {
      mapInfo.map?.panTo(center);
      mapInfo.map?.setZoom(11);
    }
  };

  useEffect(() => {
    if (mapInfo.polygon.bounds !== null) {
      mapInfo?.map?.fitBounds(mapInfo?.polygon.bounds);
    }
  }, [mapInfo]);

  return {
    shops: autoShops?.autocompleteShops,
    onClickMap,
    isLoaded,
    onLoad,
    center,
    options,
    mapContainerStyle,
    geoData,
    mapInfo,
    codes,
  };
};
