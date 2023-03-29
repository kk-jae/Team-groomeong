import { OverlayView, OverlayViewProps } from "@react-google-maps/api";
import { MapOverlayViewWrapper } from "./index.style";
import * as V from "./index.variants";
import { MapOverlayVeiwContents } from "./MapOverlayViewContents";
interface IMapOVerlayViewProps extends Omit<OverlayViewProps, "mapPaneName"> {
  isClicked: boolean;
}

const MapOverlayView = (props: IMapOVerlayViewProps) => {
  return (
    <OverlayView position={props.position} mapPaneName="overlayMouseTarget">
      {props.isClicked ? (
        <MapOverlayViewWrapper
          variants={V.OverlayViewVariants}
          initial={"initial"}
          animate={"visible"}
        >
          <MapOverlayVeiwContents />
        </MapOverlayViewWrapper>
      ) : (
        <></>
      )}
    </OverlayView>
  );
};

export default MapOverlayView;
