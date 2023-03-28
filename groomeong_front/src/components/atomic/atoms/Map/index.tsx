import { GoogleMap, Marker } from "@react-google-maps/api";
import { useMap } from "../../../commons/hooks/custom/useMap";
import { Div } from "./index.styled";

const Map = (): JSX.Element => {
  const { isLoaded, onLoad, mapContainerStyle, options, center } = useMap();

  return isLoaded ? (
    <Div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        options={options}
        center={center}
        zoom={12}
        onLoad={onLoad}
      >
        {

        }
      </GoogleMap>
    </Div>
  ) : (
    <></>
  );
};

export default Map;
