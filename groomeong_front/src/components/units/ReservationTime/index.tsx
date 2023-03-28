/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { Dispatch, MouseEvent, SetStateAction } from "react";
import { IQuery } from "../../../commons/types/generated/types";
import * as S from "./index.styled";

interface IPropsFetchShop {
  data: Pick<IQuery, "fetchShop"> | undefined;
  setReservationTime: Dispatch<SetStateAction<string>>;
  reservationDate: string;
  // reservationTime?: string ;
  reservationTime?: any;
}

interface IFetchShop {
  date: string;
  id: string;
  time: string;
}

export const ReservationTime = (props: IPropsFetchShop): JSX.Element => {
  const shopOpenTime = [];
  const time =
    Number(props.data?.fetchShop.closeHour.split(":")[0]) -
    Number(props.data?.fetchShop.openHour.split(":")[0]);
  shopOpenTime.push(props.data?.fetchShop.openHour);
  for (let i = 1; i <= time; i++) {
    shopOpenTime.push(
      `${Number(props.data?.fetchShop.openHour.split(":")[0]) + i}:00`
    );
  }

  // console.log(
  //   props.data?.fetchShop.reservation.map(
  //     (el) => `예약날짜 : ${el.date.slice(0, 10)} 예약시간 : ${el.time}`
  //   )
  // );

  const reservationDateArr = props.data?.fetchShop.reservation.map(
    (el: IFetchShop) => el.date.slice(0, 10)
  );
  const reservationTime = props.data?.fetchShop.reservation.map(
    (el: IFetchShop) => el.time
  );

  let reservedDate = false;
  const reservedDateTime: string[] = [];

  if (props.reservationDate !== "") {
    if (reservationDateArr?.includes(props.reservationDate)) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      reservedDate = true;
      for (let i = 0; i < reservationDateArr.length; i++) {
        if (
          reservationDateArr[i] === props.reservationDate &&
          reservationTime !== undefined
        ) {
          reservedDateTime.push(reservationTime[i]);
        }
      }
    }
  }

  const onClickTime = (event: MouseEvent<HTMLDivElement>): void => {
    props.setReservationTime(event.currentTarget.id);
  };

  return (
    <S.ReservationWrapperBottomItemTimeWrapper>
      {shopOpenTime.map((el, index) => (
        <div key={index} id={el} onClick={onClickTime}>
          <S.ReservationWrapperBottomItemTimeDetail
            disabled={reservedDateTime.includes(String(el))}
            reservationTime={props.reservationTime}
            el={String(el)}
          >
            {el}
          </S.ReservationWrapperBottomItemTimeDetail>
        </div>
      ))}
    </S.ReservationWrapperBottomItemTimeWrapper>
  );
};
