import { useMoveToPage } from "../../../commons/hooks/custom/useMovedToPage";
import { ShopDetailModal } from "../../organisms/ShopDetail/index.style";
import { StarRate } from "../StarRate";
import * as S from "./index.styled";

interface IProps {
  name: string;
  openHour: string;
  closeHour: string;
  address: string;
  shopImg?: string;
  star?: number;
  id: string;
}

export const ListBox = (props: IProps) => {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <S.ListBoxWrapper tabIndex={0}>
      <S.ListBoxTop>
        <S.ShopName>{props.name}</S.ShopName>
        <S.ShopImg
          src={
            props.shopImg !== undefined
              ? `https://storage.googleapis.com/${props.shopImg}`
              : "/image/icon-store.svg"
          }
        />
        <StarRate state={true} star={props.star} />
      </S.ListBoxTop>
      <S.ShopHours>
        {props.openHour} ~ {props.closeHour}
      </S.ShopHours>
      <S.ListBoxBottom>
        <S.ShopAddress>{props.address}</S.ShopAddress>
        <S.ShopMoved onClick={onClickMoveToPage(`/map/${props.id}`)}>
          샵 보러가기
        </S.ShopMoved>
      </S.ListBoxBottom>
    </S.ListBoxWrapper>
  );
};
