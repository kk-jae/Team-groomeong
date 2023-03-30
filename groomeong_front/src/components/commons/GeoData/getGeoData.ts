import geoData from "./geoData.json";

type geometryType = google.maps.LatLngLiteral

interface IDataProps {
  properties: {
    base_year: string;
    code: string;
    name: string;
    name_eng: string;
  } | Record<string, never>;
  geometry: geometryType[] | [];
}

export const getGeoData = () => {
  console.log(geoData);
  const data: IDataProps[] = [];
  geoData.features.forEach((map, idx) => {
    const mapObj: IDataProps | any = {
      geometry: [],
    };
    mapObj.properties = map.properties;
    map.geometry.coordinates.forEach((coords) => {
      coords.forEach((coord) => {
        mapObj.geometry.push({
          lng: coord[0],
          lat: coord[1],
        })
      });
    });
    data.push(mapObj)
  });

  return data;
};
