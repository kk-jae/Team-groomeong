import PageHeader from "../../atoms/PageHeader";
import Background from "../../organisms/Background";
import * as S from "./index.style";
import { MyPageBody } from "./MyPageBody";
import { DogsList } from "../../organisms/ListTable/DogsList";
import { Buttons } from "../../atoms/Buttons";
import { UseQueryFetchLoginUser } from "../../../commons/hooks/query/UseQueryFetchLoginUser";
import { useMoveToPage } from "../../../commons/hooks/custom/useMovedToPage";

export const MyPageTemplate = () => {
  const { data } = UseQueryFetchLoginUser();

  const { onClickMoveToPage } = useMoveToPage();
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
              name={data?.fetchLoginUser.name ?? ""}
              email={data?.fetchLoginUser.email ?? ""}
              phone={data?.fetchLoginUser.phone ?? ""}
              image={data?.fetchLoginUser.image ?? "image/img-dog-detail.png"}
            ></MyPageBody>
            <DogsList></DogsList>
            <p>
              <Buttons
                size="large"
                label="수정하기"
                onClick={onClickMoveToPage("/mypage/edit")}
              ></Buttons>
            </p>
          </S.MyPageBodyWrapper>
        </S.MyPageWrapper>
      </Background>
    </>
  );
};
