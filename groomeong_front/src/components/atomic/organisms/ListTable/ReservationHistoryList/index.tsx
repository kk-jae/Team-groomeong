import * as S from "./index.style";

interface IReservationHistoryListProps {
  shopName?: string;
  date?: string;
  time?: string;
  myDog?: string;
}

export const ReservationHistoryList = (props: IReservationHistoryListProps) => {
  return (
    <>
      <S.ReservationListWrapper>
        <S.TitleWrapper>
          <S.MyReservationText>예약 히스토리</S.MyReservationText>
        </S.TitleWrapper>
        <S.Table>
          <table>
            <thead>
              <tr>
                <th>상점명</th>
                <th>날짜</th>
                <th>시간</th>
                <th>나의 댕댕이</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>{props.shopName}</th>
                <th>{props.date}</th>
                <th>{props.time}</th>
                <th>{props.myDog}</th>
              </tr>
            </tbody>
          </table>
        </S.Table>
      </S.ReservationListWrapper>
    </>
  );
};
