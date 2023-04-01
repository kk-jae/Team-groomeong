import { IDataProps } from "./../GeoData/getGeoData";

export const getLatLngBounds = (map: IDataProps) => {
  const bounds = new google.maps.LatLngBounds();
  map.geometry.forEach((coord) => {
    bounds.extend(coord);
  });
  return bounds;
};
