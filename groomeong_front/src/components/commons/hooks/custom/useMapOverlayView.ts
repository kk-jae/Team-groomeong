import { mapState } from "./../../../../commons/Store/index";
import { useRecoilValue } from "recoil";

const useMapOverlayView = () => {
  const mapInfo = useRecoilValue(mapState);

  return {
    mapInfo,
  };
};

export default useMapOverlayView;
