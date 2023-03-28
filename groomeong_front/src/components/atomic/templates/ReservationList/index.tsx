import PageHeader from "../../atoms/PageHeader";
import Background from "../../organisms/Background";
import { ReservationHistoryList } from "../../organisms/ListTable/ReservationHistoryList";
import { ReservationList } from "../../organisms/ListTable/ReservationList";
import * as S from "./index.style";

export const ReservationListTemplate = (): JSX.Element => {
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
