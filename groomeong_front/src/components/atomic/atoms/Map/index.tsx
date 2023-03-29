import { GoogleMap, MarkerClusterer } from "@react-google-maps/api";
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
  } = useMap();

  return isLoaded ? (
    <Div>
      <GoogleMap
        onClick={onClickMap}
        // onZoomChanged={onDragStart}
        mapContainerStyle={mapContainerStyle}
        options={options}
        center={center}
        zoom={12}
        onLoad={onLoad}
      >
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
