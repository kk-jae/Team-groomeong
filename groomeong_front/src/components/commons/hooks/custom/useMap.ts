import { useGetFilteredShops } from "./useGetFilteredShops";
import {
  mapState,
  polygonState,
  searchState,
} from "./../../../../commons/Store/index";
import { useJsApiLoader } from "@react-google-maps/api";
import { useEffect, useMemo } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { getGeoData } from "../../GeoData/getGeoData";
import getLatLng from "../../../../commons/Utils/getLatLng";

export const useMap = () => {
  const setSearch = useSetRecoilState(searchState);
  const [mapInfo, setMapInfo] = useRecoilState(mapState);
  const polygonInfo = useRecoilValue(polygonState);
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
      isLoaded,
    }));
  };

  const onClickMap = () => {
    setMapInfo((prev) => ({
      ...prev,
      shop: null,
      polygon: {
        bounds: null,
        isActive: false,
        isHover: false,
        ref: null,
      },
    }));
    setSearch("");
    if (mapInfo.shop != null) {
    const pos = getLatLng(mapInfo.shop?.lat, mapInfo.shop?.lng);
    if (pos !== null) {
      mapInfo.map?.panTo(pos);
    }
    if (polygonInfo.bounds !== null) {
      mapInfo.map?.fitBounds(polygonInfo.bounds);
    } else {
      mapInfo.map?.panTo(center);
    }
    }
  };

  useEffect(() => {
    if (polygonInfo.bounds !== null) {
      mapInfo?.map?.fitBounds(polygonInfo.bounds);
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
