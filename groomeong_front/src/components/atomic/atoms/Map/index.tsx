import { GoogleMap } from "@react-google-maps/api";
import { v4 } from "uuid";
import getLatLng from "../../../../commons/Utils/getLatLng";
import { useMap } from "../../../commons/hooks/custom/useMap";
import MapMarker from "../MapMarker";
import MapPolygon from "../MapPolygon";
import { Div } from "./index.styled";

export const Map = (): JSX.Element => {
  const {
    onClickMap,
    shops,
    isLoaded,
    onLoad,
    mapContainerStyle,
    options,
    center,
    geoData,
    mapInfo,
    codes,
  } = useMap();


  return isLoaded ? (
    <Div>
      <GoogleMap
        onClick={onClickMap}
        mapContainerStyle={mapContainerStyle}
        options={options}
        center={mapInfo?.codes.length === 0 ? center : undefined}
        zoom={11}
        onLoad={onLoad}
      >
        {geoData.map((map) => (
          <>
            <MapPolygon key={v4()} codes={codes} map={map} />
          </>
        ))}
          <div>
            {shops?.map((shop) => (
              <MapMarker
                key={shop.id}
                shop={shop}
                position={getLatLng(shop.lat, shop.lng) ?? center}
              />
            ))}
          </div>
      </GoogleMap>
    </Div>
  ) : (
    <></>
  );
};
