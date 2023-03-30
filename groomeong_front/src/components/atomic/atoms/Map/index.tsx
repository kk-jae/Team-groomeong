import { GoogleMap, MarkerClusterer, Polygon } from "@react-google-maps/api";
import getLatLng from "../../../../commons/Utils/getLatLng";
import { useMap } from "../../../commons/hooks/custom/useMap";
import MapMarker from "../MapMarker";
import { Div } from "./index.styled";

export const Map = (): JSX.Element => {
  const {
    onClickMap,
    fetchShops,
    isLoaded,
    onLoad,
    mapContainerStyle,
    options,
    center,
    geoData,
  } = useMap();

  console.log(geoData)
  return isLoaded ? (
    <Div>
      <GoogleMap
        onClick={onClickMap}
        mapContainerStyle={mapContainerStyle}
        options={options}
        center={center}
        zoom={12}
        onLoad={onLoad}
      >
        {
          geoData.map((map) => (
            <Polygon 
              key={map.properties.code}
              paths={map.geometry} 
            />
          ))
        }
        <MarkerClusterer>
          {(clusterer) => (
            <div>
              {fetchShops?.map((shop) => (
                <MapMarker
                  key={shop.id}
                  shop={shop}
                  position={getLatLng(shop.lat, shop.lng) ?? center}
                  clusterer={clusterer}
                />
              ))}
            </div>
          )}
        </MarkerClusterer>
      </GoogleMap>
    </Div>
  ) : (
    <></>
  );
};
