import * as S from "./index.styled";

// 사용 방법
// <BookingBadge state={true} />

interface IProps {
  state: boolean;
}

export default function BookingBadge(props: IProps) {
  return (
    <S.BookingBadgeWrapper>
      {props.state ? (
        <S.Booking_Button>가게예약</S.Booking_Button>
      ) : (
        <S.Call_Button>전화예약</S.Call_Button>
      )}
    </S.BookingBadgeWrapper>
  );
}
