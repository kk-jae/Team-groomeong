import PageHeader from "../../atoms/PageHeader";
import Background from "../../organisms/Background";
import * as S from "./index.style";
import { DogsList } from "../../organisms/ListTable/DogsList";
import { Buttons } from "../../atoms/Buttons";

import { MyPageEditBodyTemplate } from "./MyPageEditBody";

export const MyPageEditTemplate = () => {
  return (
    <>
      <Background>
        <S.MyPageWrapper>
          <PageHeader
            icon="image/icon-account-cog.svg"
            title="마이페이지"
          ></PageHeader>
          <S.MyPageBodyWrapper>
            <MyPageEditBodyTemplate></MyPageEditBodyTemplate>
          </S.MyPageBodyWrapper>
        </S.MyPageWrapper>
      </Background>
    </>
  );
};
