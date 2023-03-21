import PageHeader from "../../atoms/PageHeader";
import Background from "../../organisms/Background";
import * as S from "./index.style";
import { MyPageBody } from "./MyPageBody";
import { DogsList } from "../../organisms/ListTable/DogsList";
import { Buttons } from "../../atoms/Buttons";
import { ReservationList } from "../../organisms/ListTable/ReservationList";
import { ReservationHistoryList } from "../../organisms/ListTable/ReservationHistoryList";

interface IMyPageProps {
  name: string;
  email: string;
  phone: string;
  image?: string;
}

export const MyPage = (props: IMyPageProps) => {
  return (
    <>
      <Background>
        <S.MyPageWrapper>
          <PageHeader
            icon="image/icon-account-cog.svg"
            title="마이페이지"
          ></PageHeader>
          <S.MyPageBodyWrapper>
            <MyPageBody
              name={props.name}
              email={props.email}
              phone={props.phone}
              image={props.image}
            ></MyPageBody>
            <ReservationList></ReservationList>
            <ReservationHistoryList></ReservationHistoryList>
            <p>
              <Buttons size="large" label="수정하기"></Buttons>
            </p>
          </S.MyPageBodyWrapper>
        </S.MyPageWrapper>
      </Background>
    </>
  );
};
