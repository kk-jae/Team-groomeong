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

export const ReservationTemplate = () => {
  const router = useRouter();
  const { data } = UseQueryFetchShop(String(router.query.shopId));
  const { data: fetchLoginUserData } = UseQueryFetchLoginUser();
  const { data: fetchUserDogData } = UseQueryFetchUserDogs();
  const { onClickReservationDog } = useReservationDog();
  const [reservationDate, setReservationDate] = useState("");
  const [dogId, setDogId] = useState("");
  const [reservationTime, setReservationTime] = useState("");

  // console.log("예약 날짜 : ", reservationDate); // date
  // console.log("샵 아이디 : ", router.query.shopId); // shopId
  // console.log("유저 아이디 : ", fetchLoginUserData?.fetchLoginUser.id); // userId
  // console.log("강아지 아이디 :", dogId);
  // console.log("예약 시간 : ", reservationTime);

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
            <ReservationDate setReservationDate={setReservationDate} />
          </S.ReservationWrapperBottomItem>
          <S.ReservationWrapperBottomItem>
            <S.ReservationWrapperBottomItemTitle>
              시간
            </S.ReservationWrapperBottomItemTitle>
            <ReservationTime
              data={data}
              setReservationTime={setReservationTime}
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
