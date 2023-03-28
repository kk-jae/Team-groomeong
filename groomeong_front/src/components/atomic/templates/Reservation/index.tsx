import { useRouter } from "next/router";
import { useState } from "react";
import { useReservationDog } from "../../../commons/hooks/custom/useReservation";
import { UseQueryFetchLoginUser } from "../../../commons/hooks/query/UseQueryFetchLoginUser";
import { UseQueryFetchShop } from "../../../commons/hooks/query/UseQueryFetchShop";
import { UseQueryFetchUserDogs } from "../../../commons/hooks/query/UseQueryFetchUserDogs";
import { DogSelect } from "../../../units/DogSelect";
import { ReservationDate } from "../../../units/ReservationDate";
import { ReservationTime } from "../../../units/ReservationTime";
import Background from "../../organisms/Background";
import * as S from "./index.styled";

export const ReservationTemplate = (): JSX.Element => {
  const router = useRouter();
  const { data } = UseQueryFetchShop(String(router.query.shopId));
  const { data: fetchLoginUserData } = UseQueryFetchLoginUser();
  // const { data: fetchUserDogData } = UseQueryFetchUserDogs();
  const { onClickReservationDog } = useReservationDog();
  const [reservationDate, setReservationDate] = useState(""); // 예약 날짜
  const [dogId, setDogId] = useState(""); // 강아지 아이디
  const [reservationTime, setReservationTime] = useState(""); // 예약 시간

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
              {data?.fetchShop.name}
            </S.ReservationWrapperBottomItemAnswer>
          </S.ReservationWrapperBottomItem>
          <S.ReservationWrapperBottomItem>
            <S.ReservationWrapperBottomItemTitle>
              댕댕이 선택
            </S.ReservationWrapperBottomItemTitle>
            <DogSelect setDogId={setDogId} />
          </S.ReservationWrapperBottomItem>
          <S.ReservationWrapperBottomItem>
            <S.ReservationWrapperBottomItemTitle>
              날짜
            </S.ReservationWrapperBottomItemTitle>
            <ReservationDate
              setReservationDate={setReservationDate}
              setReservationTime={setReservationTime}
            />
          </S.ReservationWrapperBottomItem>
          <S.ReservationWrapperBottomItem>
            <S.ReservationWrapperBottomItemTitle>
              시간
            </S.ReservationWrapperBottomItemTitle>
            <ReservationTime
              data={data}
              setReservationTime={setReservationTime}
              reservationDate={reservationDate}
              reservationTime={reservationTime}
            />
          </S.ReservationWrapperBottomItem>
          <S.ReservationWrapperBottomSubmitWrapper>
            <S.ReservationWrapperBottomSubmit
              onClick={onClickReservationDog(
                String(reservationDate),
                String(router.query.shopId),
                String(fetchLoginUserData?.fetchLoginUser.id),
                String(dogId),
                String(reservationTime)
              )}
            >
              예약하기
            </S.ReservationWrapperBottomSubmit>
          </S.ReservationWrapperBottomSubmitWrapper>
        </S.ReservationWrapperBottom>
      </S.ReservationWrapper>
    </Background>
  );
};
