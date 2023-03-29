import { useMoveToPage } from './useMovedToPage';
import { mapState } from "./../../../../commons/Store/index";
import { useRecoilValue } from "recoil";

const useMapOverlayView = () => {
  const mapInfo = useRecoilValue(mapState);
  const { onClickMoveToPage } = useMoveToPage()

  return {
    mapInfo,
    onClickMoveToPage,
  };
};

export default useMapOverlayView;
