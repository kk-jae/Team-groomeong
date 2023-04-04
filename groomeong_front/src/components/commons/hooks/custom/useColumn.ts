import { useSetRecoilState } from "recoil";
import { IMapState, mapState } from "../../../../commons/Store";
import { IAutocompleteShopsOutput } from "../../../../commons/types/generated/types";
import useGetRoute from "../../../commons/hooks/custom/useGetRoute";

const useColumn = () => {
  const setMapInfo = useSetRecoilState(mapState);
  const { push } = useGetRoute();
  const onClickPopupContent = (shop: IAutocompleteShopsOutput) => () => {
    setMapInfo((prev: IMapState) => ({
      ...prev,
      shop,
    }));
    void push("/map");
  };

  return {
    onClickPopupContent,
  };
};

export default useColumn;
