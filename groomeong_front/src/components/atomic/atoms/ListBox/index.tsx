import { useState } from "react";
import { ShopDetail } from "../../organisms/ShopDetail";
import { StarRate } from "../StarRate";
import * as S from "./index.styled";

interface IProps {
  name: string;
  openHour?: string;
  closeHour?: string;
  address?: string;
  shopImg?: object | string;
  star?: number;
  id: string;
}

export const ListBox = (props: IProps): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = (): void => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <S.ListBoxWrapper tabIndex={0}>
      <S.ListBoxTop>
        <S.ShopName>{props.name}</S.ShopName>
        <S.ShopImg
          src={
            !(props.shopImg === "")
              ? `https://storage.googleapis.com/${String(props.shopImg)}`
              : "/image/icon-store.svg"
          }
        />
        <StarRate star={props.star} />
      </S.ListBoxTop>
      <S.ShopHours>
        {props.openHour} ~ {props.closeHour}
      </S.ShopHours>
      <S.ListBoxBottom>
        <S.ShopAddress>{props.address}</S.ShopAddress>
        <S.ShopMoved id={props.id} onClick={showModal}>
          샵 보러가기
        </S.ShopMoved>
        {isModalOpen && <ShopDetail showModal={showModal} id={props.id} />}
      </S.ListBoxBottom>
    </S.ListBoxWrapper>
  );
};
