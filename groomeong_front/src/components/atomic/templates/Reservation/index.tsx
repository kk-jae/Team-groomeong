import { useState } from "react";
import { DogSelect } from "../../../units/DogSelect";
import { ReservationDate } from "../../../units/ReservationDate";
import Background from "../../organisms/Background";
import * as S from "./index.styled";

interface IPropsR {
  name: string;
}

const openHour = "09:00";
const closeHour = "20:00";

export const Reservation = (props: IPropsR) => {
  const [reservationDate, setReservationDate] = useState("");

  const shopOpenTime = [];
  const time = Number(closeHour.split(":")[0]) - Number(openHour.split(":")[0]);

  shopOpenTime.push(openHour);

  for (let i = 1; i <= time; i++) {
    shopOpenTime.push(`${Number(openHour.split(":")[0]) + i}:00`);
  }

  return (
    <Background>
      <S.ReservationWrapper>
        <S.ReservationWrapperTop>
          <S.ReservationTopImg src="/image/icon-store.svg" />
          <S.ReservationTopText>예약하기 </S.ReservationTopText>
        </S.ReservationWrapperTop>
        <S.ReservationWrapperBottom>
          <S.ReservationWrapperBottomItem>
            <S.ReservationWrapperBottomItemTitle>
              가게이름
            </S.ReservationWrapperBottomItemTitle>
            <S.ReservationWrapperBottomItemAnswer>
              {props.name}
            </S.ReservationWrapperBottomItemAnswer>
          </S.ReservationWrapperBottomItem>
          <S.ReservationWrapperBottomItem>
            <S.ReservationWrapperBottomItemTitle>
              댕댕이 선택
            </S.ReservationWrapperBottomItemTitle>
            <DogSelect />
          </S.ReservationWrapperBottomItem>
          <S.ReservationWrapperBottomItem>
            <S.ReservationWrapperBottomItemTitle>
              날짜
            </S.ReservationWrapperBottomItemTitle>
            <ReservationDate setReservationDate={setReservationDate} />
          </S.ReservationWrapperBottomItem>
          <S.ReservationWrapperBottomItem>
            <S.ReservationWrapperBottomItemTitle>
              시간
            </S.ReservationWrapperBottomItemTitle>
            <S.ReservationWrapperBottomItemTimeWrapper>
              {shopOpenTime.map((el) => (
                <>
                  <S.ReservationWrapperBottomItemTimeDetail tabIndex={0}>
                    {el}
                  </S.ReservationWrapperBottomItemTimeDetail>
                </>
              ))}
            </S.ReservationWrapperBottomItemTimeWrapper>
          </S.ReservationWrapperBottomItem>
          <S.ReservationWrapperBottomSubmitWrapper>
            <S.ReservationWrapperBottomSubmit>
              예약하기
            </S.ReservationWrapperBottomSubmit>
          </S.ReservationWrapperBottomSubmitWrapper>
        </S.ReservationWrapperBottom>
      </S.ReservationWrapper>
    </Background>
  );
};
