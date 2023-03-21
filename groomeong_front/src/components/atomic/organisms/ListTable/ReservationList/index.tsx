import * as S from "./index.style";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Buttons } from "../../../atoms/Buttons";

interface IReservationListProps {
  shopName?: string;
  date?: string;
  time?: string;
  myDog?: string;
}

export const ReservationList = (props: IReservationListProps) => {
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
            <tbody>
              <tr>
                <th>{props.shopName}</th>
                <th>{props.date}</th>
                <th>{props.time}</th>
                <th>{props.myDog}</th>
                <th>
                  <div>
                    <Buttons label="예약 취소"></Buttons>
                  </div>
                </th>
              </tr>
            </tbody>
          </table>
        </S.Table>
      </S.ReservationListWrapper>
    </>
  );
};
