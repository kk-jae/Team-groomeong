import PageHeader from "../../atoms/PageHeader";
import Background from "../../organisms/Background";
import { ReservationHistoryList } from "../../organisms/ListTable/ReservationHistoryList";
import { ReservationList } from "../../organisms/ListTable/ReservationList";
import * as S from "./index.style";

interface IReservationListProps {
  shopName?: string;
  date?: string;
  time?: string;
  myDog?: string;

  historyShopName?: string;
  historyDate?: string;
  historyTime?: string;
  historyMyDog?: string;
}

export const ReservationListTemplate = (props: IReservationListProps) => {
  return (
    <>
      <Background>
        <S.BodyWrapper>
          <S.BodyTopWrapper>
            <PageHeader
              icon="/image/icon-store.svg"
              title="예약일정"
            ></PageHeader>
          </S.BodyTopWrapper>
          <S.BodyContentWrapper>
            <ReservationList></ReservationList>
            <ReservationHistoryList></ReservationHistoryList>
          </S.BodyContentWrapper>
        </S.BodyWrapper>
      </Background>
    </>
  );
};
