import * as S from "./index.style";
import { ReservationTable } from "../../../atoms/ReservationTable";
import { UseQueryFetchReservationByUser } from "../../../../commons/hooks/query/UseQueryFetchReservationByUserId";
import { isSameDate } from "../../../../commons/libraries/GetTimeStamp";

export const ReservationList = (): JSX.Element => {
  const { data } = UseQueryFetchReservationByUser();

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
            {isSameDate(data?.fetchReservationsByUser.at(-1)?.date) &&
            data?.fetchReservationsByUser[0]?.date !== undefined ? (
              <ReservationTable></ReservationTable>
            ) : (
              <>
                <th colSpan={5}>현재 등록된 예약이 없습니다</th>
              </>
            )}
          </table>
        </S.Table>
      </S.ReservationListWrapper>
    </>
  );
};
