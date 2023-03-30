import { GoogleMap, MarkerClusterer } from "@react-google-maps/api";
import getLatLng from "../../../../commons/Utils/getLatLng";
import useLoggined from "../../../commons/hooks/custom/useLoggined";
import { useMap } from "../../../commons/hooks/custom/useMap";
import MapMarker from "../MapMarker";
import { TopBarMap } from "../TopBar/TopBarMap";
import { Div } from "./index.styled";

export const Map = (): JSX.Element => {
  const loggedIn = useLoggined();

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
        <TopBarMap loggedIn={loggedIn}></TopBarMap>
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
