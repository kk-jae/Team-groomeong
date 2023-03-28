import { ReservationHistoryTable } from "../../../atoms/ReservationHistoryTable";
import * as S from "./index.style";

export const ReservationHistoryList = (): JSX.Element => {
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
                <th>리뷰 작성</th>
              </tr>
            </thead>
            <ReservationHistoryTable></ReservationHistoryTable>
          </table>
        </S.Table>
      </S.ReservationListWrapper>
    </>
  );
};
