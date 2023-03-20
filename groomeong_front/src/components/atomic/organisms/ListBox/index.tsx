import BookingBadge from "../../atoms/Badge/TextBadge";
import * as S from "./index.styled";

interface IProps {
  shopName: string;
  shopHours: string;
  shopAddress: string;
  shopImg: string;
  state: boolean;
}

export const ListBox = (props: IProps) => {
  return (
    <S.ListBoxWrapper tabIndex={0}>
      <S.Top>
        <S.ShopName>{props.shopName}</S.ShopName>
        <S.ShopImg
          src={
            props.shopImg !== ""
              ? `https://storage.googleapis.com/${props.shopImg}`
              : "/ShopDefaultImg/defaultImg.png"
          }
        />
        <S.ShopHours>{props.shopHours}</S.ShopHours>
      </S.Top>
      <S.ShopAddress>{props.shopAddress}</S.ShopAddress>
      <BookingBadge state={props.state} />
    </S.ListBoxWrapper>
  );
};
