import { useMoveToPage } from "../../../commons/hooks/custom/useMovedToPage";
import { ShopDetailModal } from "../../organisms/ShopDetail/index.style";
import { StarRate } from "../StarRate";
import * as S from "./index.styled";

interface IProps {
  shopName: string;
  shopHours: string;
  shopAddress: string;
  shopImg: string;
  star: number;
}

export const ListBox = (props: IProps) => {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <S.ListBoxWrapper tabIndex={0}>
      <S.ListBoxTop>
        <S.ShopName>{props.shopName}</S.ShopName>
        <S.ShopImg
          src={
            props.shopImg !== ""
              ? `https://storage.googleapis.com/${props.shopImg}`
              : "/image/icon-store.svg"
          }
        />
        <StarRate state={true} star={props.star} />
      </S.ListBoxTop>
      <S.ShopHours>{props.shopHours}</S.ShopHours>
      <S.ListBoxBottom>
        <S.ShopAddress>{props.shopAddress}</S.ShopAddress>
        <S.ShopMoved onClick={onClickMoveToPage("/shopDetail")}>
          샵 보러가기
        </S.ShopMoved>
      </S.ListBoxBottom>
    </S.ListBoxWrapper>
  );
};
