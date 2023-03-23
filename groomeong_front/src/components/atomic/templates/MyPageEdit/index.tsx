import PageHeader from "../../atoms/PageHeader";
import Background from "../../organisms/Background";
import * as S from "./index.style";
import { DogsList } from "../../organisms/ListTable/DogsList";
import { Buttons } from "../../atoms/Buttons";

import { MyPageEditBodyTemplate } from "./MyPageEditBody";

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
          </S.MyPageBodyWrapper>
        </S.MyPageWrapper>
      </Background>
    </>
  );
};
