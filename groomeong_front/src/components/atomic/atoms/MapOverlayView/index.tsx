import { OverlayView, OverlayViewProps } from "@react-google-maps/api";
import { IAutocompleteShopsOutput } from "../../../../commons/types/generated/types";
import { MapOverlayViewWrapper } from "./index.style";
import * as V from "./index.variants";
import { MapOverlayVeiwContents } from "./MapOverlayViewContents";
interface IMapOverlayViewProps extends Omit<OverlayViewProps, "mapPaneName"> {
  isClicked: boolean;
  shop: IAutocompleteShopsOutput;
}

const MapOverlayView = (props: IMapOverlayViewProps) => {
  return (
    <OverlayView position={props.position} mapPaneName="overlayMouseTarget">
      {props.isClicked ? (
        <MapOverlayViewWrapper
          variants={V.OverlayViewVariants}
          initial={"initial"}
          animate={"visible"}
        >
          <MapOverlayVeiwContents shop={props.shop} />
        </MapOverlayViewWrapper>
      ) : (
        <></>
      )}
    </OverlayView>
  );
};

export default MapOverlayView;
