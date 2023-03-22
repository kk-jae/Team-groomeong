import PageHeader from "../../atoms/PageHeader";
import Background from "../../organisms/Background";
import * as S from "./index.style";
import { DogsList } from "../../organisms/ListTable/DogsList";
import { Buttons } from "../../atoms/Buttons";
import { MyPageEditBodyTemplate } from "./MyPageEidtBody";

interface IMyPageEditProps {
  name: string;
  email: string;
  phone: string;
  image?: string;
}

export const MyPageEditTemplate = (props: IMyPageEditProps) => {
  return (
    <>
      <Background>
        <S.MyPageWrapper>
          <PageHeader
            icon="image/icon-account-cog.svg"
            title="마이페이지"
          ></PageHeader>
          <S.MyPageBodyWrapper>
            <MyPageEditBodyTemplate
              name={props.name}
              email={props.email}
              phone={props.phone}
              image={props.image}
            ></MyPageEditBodyTemplate>
            <DogsList></DogsList>
            <p>
              <Buttons size="large" label="수정하기"></Buttons>
            </p>
          </S.MyPageBodyWrapper>
        </S.MyPageWrapper>
      </Background>
    </>
  );
};
