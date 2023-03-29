import { OverlayView, OverlayViewProps } from "@react-google-maps/api";
import useMapOverlayView from "../../../commons/hooks/custom/useMapOverlayView";
import { MapOverlayViewWrapper } from "./index.style";
import * as V from "./index.variants";
import { MapOverlayVeiwContents } from "./MapOverlayViewContents";
interface IMapOVerlayViewProps extends Omit<OverlayViewProps, "mapPaneName"> {
  isClicked: boolean;
}

const MapOverlayView = (props: IMapOVerlayViewProps) => {
  const { mapInfo } = useMapOverlayView();
  return (
    <OverlayView position={props.position} mapPaneName="overlayMouseTarget">
      {props.isClicked ? (
        <MapOverlayViewWrapper
          variants={V.OverlayViewVariants}
          initial={"initial"}
          animate={"visible"}
        >
          <MapOverlayVeiwContents 
            shop={mapInfo.shop} 
          />
        </MapOverlayViewWrapper>
      ) : (
        <></>
      )}
    </OverlayView>
  );
};

export default MapOverlayView;
