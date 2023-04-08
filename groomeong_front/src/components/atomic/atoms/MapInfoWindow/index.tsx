import { InfoWindowProps, Marker, InfoWindowF } from "@react-google-maps/api";
import * as V from "./index.variants";
import { IAutocompleteShopsOutput } from "../../../../commons/types/generated/types";
import { InfoWindowWrapper } from "./index.style";
import MapInfoWindowContents from "./MapInfoWindowContents";
import { RefObject } from "react";

interface IMapInfoWindowProps extends InfoWindowProps {
  isClicked: boolean;
  shop: IAutocompleteShopsOutput;
  marker: RefObject<Marker>;
}
export const MapInfoWindow = (props: IMapInfoWindowProps) => {
  return props.isClicked ? (
    <InfoWindowWrapper
      variants={V.InfoWindowVariants}
      initial={"initial"}
      animate={"visible"}
    >
      <InfoWindowF anchor={props.marker.current?.marker}>
        <MapInfoWindowContents autoShop={props.shop} />
      </InfoWindowF>
    </InfoWindowWrapper>
  ) : (
    <></>
  );
};
