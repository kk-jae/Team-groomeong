import useMapList from "../../../commons/hooks/custom/useMapList";
import * as GS from "../../../../../theme/global";
import * as LS from "./index.style";
import * as V from "./index.variants";
import { MapListBox } from "../../atoms/MapListBox";

export const MapList = () => {
  const { isClicked, onClickSetClicked, shops } = useMapList();
  return (
    <>
      <LS.MapListSearchBarWrapper>
        <LS.MapListSearchBar placeholder="동을 입력해주세요." />
        <LS.MapListSearchBarButton />
      </LS.MapListSearchBarWrapper>
      <LS.MapListBodyWrapper
        animate={!isClicked ? "open" : "closed"}
        variants={V.MapListContentsWrapperVariants}
      >
        <LS.MapListButton
          whileHover={{
            backgroundColor: GS.base.tertiary,
            color: GS.base.secondary,
          }}
          onClick={onClickSetClicked}
        >
          {isClicked ? ">" : "<"}
        </LS.MapListButton>
        <LS.MapListContentsWrapper>
            {shops?.map((shop) => (
              <MapListBox shop={shop} key={shop.id} />
            ))}
        </LS.MapListContentsWrapper>
      </LS.MapListBodyWrapper>
    </>
  );
};
