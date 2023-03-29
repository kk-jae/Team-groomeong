import * as S from "../../../commons/style";
import * as GS from "../../../../../theme/global";
import { IShop } from "../../../../commons/types/generated/types";
import { MapListBoxWrapper, MapListBoxTitleWrapper } from "./index.style";
import { useMapListBox } from "../../../commons/hooks/custom/useMapListBox";
import { StarRate } from "../StarRate";

interface IMapListBoxProps {
  shop: IShop;
}

export const MapListBox = ({ shop }: IMapListBoxProps) => {
  const { onClickListBox } = useMapListBox(shop);
  return (
    <MapListBoxWrapper
      id={shop.id}
      onClick={onClickListBox}
      whileHover={{
        outline: `1px solid rgba(32, 148, 255, .5)`,
      }}
    >
      <MapListBoxTitleWrapper>
        <S.H4>{shop?.name}</S.H4>
        <StarRate state={true} star={shop?.averageStar} />
      </MapListBoxTitleWrapper>
      <S.Divider />
      <S.Div>
        <S.Span>{shop?.address}</S.Span>
      </S.Div>
      <S.Div>
        <S.Div right="8px">
          <S.Span>영업시간: </S.Span>
        </S.Div>
        <S.Div>
          <S.Span>
            {shop?.openHour} - {shop?.closeHour}
          </S.Span>
        </S.Div>
      </S.Div>
    </MapListBoxWrapper>
  );
};
