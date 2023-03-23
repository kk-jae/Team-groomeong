import PageHeader from "../../atoms/PageHeader";
import Background from "../../organisms/Background";
import * as S from "./index.style";
import { MyPageBody } from "./MyPageBody";
import { DogsList } from "../../organisms/ListTable/DogsList";
import { Buttons } from "../../atoms/Buttons";
import { UseQueryFetchLoginUser } from "../../../commons/hooks/query/UseQueryFetchLoginUser";
import { UseQueryFetchUserDogs } from "../../../commons/hooks/query/UseQueryFetchUserDogs";
import { useMoveToPage } from "../../../commons/hooks/custom/useMovedToPage";

export const MyPageTemplate = () => {
  const { data } = UseQueryFetchLoginUser();
  const { data: dogData } = UseQueryFetchUserDogs();
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
            <DogsList
            //이후 도그 패치되면 수정해야 함
            // dogName={dogData?.fetchUserDogs}
            // dogAge={dogData?.fetchUserDogs}
            // dogWeight={dogData?.fetchUserDogs}
            // dogType={dogData?.fetchUserDogs}
            ></DogsList>
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
