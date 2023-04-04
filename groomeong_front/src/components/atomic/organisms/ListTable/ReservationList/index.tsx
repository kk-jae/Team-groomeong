import * as S from "./index.style";
import { ReservationTable } from "../../../atoms/ReservationTable";

export const ReservationList = (): JSX.Element => {
  return (
    <>
      <S.ReservationListWrapper>
        <S.TitleWrapper>
          <S.MyReservationText>예약 현황</S.MyReservationText>
        </S.TitleWrapper>
        <S.Table>
          <table>
            <thead>
              <tr>
                <th>상점명</th>
                <th>날짜</th>
                <th>시간</th>
                <th>나의 댕댕이</th>
                <th>예약 취소</th>
              </tr>
            </thead>
            <ReservationTable></ReservationTable>
          </table>
        </S.Table>
      </S.ReservationListWrapper>
    </>
  );
};
