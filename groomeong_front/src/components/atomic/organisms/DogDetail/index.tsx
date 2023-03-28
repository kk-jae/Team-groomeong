import { useRouter } from "next/router";
import useDetailPage from "../../../commons/hooks/custom/useDetailPage";
import { UseMutationDeleteDog } from "../../../commons/hooks/mutation/UseMutationDeleteDog";
import { FETCH_USER_DOGS } from "../../../commons/hooks/query/UseQueryFetchUserDogs";
import { TextBadge } from "../../atoms/Badge/TextBadge";
import { Buttons } from "../../atoms/Buttons";
import ContentInfo from "../../atoms/ContentInfo";
import PageHeader from "../../atoms/PageHeader";
import InfoTextArea from "../../atoms/TextArea/InfoTextArea";
import * as S from "./index.style";

const DogDetail = (): JSX.Element => {
  const { method, FormProvider, data, breed } = useDetailPage();
  const [deleteDog] = UseMutationDeleteDog();
  const router = useRouter();

  const onClickDelete = async (): Promise<void> => {
    try {
      await deleteDog({
        variables: { id: String(router.query.dogId) },
        refetchQueries: [
          {
            query: FETCH_USER_DOGS,
          },
        ],
      });
      void router.push("/mypage/");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickMoveBack = async (): Promise<void> => {
    void router.push("/mypage/");
  };

  return (
    <S.DogDetailWrapper>
      <PageHeader title="댕댕이 정보" icon="/image/icon-dog.svg" />
      <S.DogDetailContentWrapper>
        <S.Div crossAxis={true}>
          <ContentInfo content={data?.name} label="이름" right="64px" />
          <ContentInfo
            content={data?.age.toString()}
            label="나이"
            right="64px"
          />
          <ContentInfo
            content={data?.weight.toString()}
            label="몸무게"
            right="64px"
          />
          <ContentInfo
            label="견종"
            component={<TextBadge state={true} text={data?.breed ?? "SMALL"} />}
          />
        </S.Div>
        <S.DogDetailImgLabel>
          <div>사진</div>
          <S.DogDetailContentImg
            url={
              data?.image
                ? `https://storage.googleapis.com/${data?.image}`
                : "/image/img-dog-detail.png"
            }
          />
        </S.DogDetailImgLabel>
      </S.DogDetailContentWrapper>
      <S.DogDetailSpecifics>
        <S.SpecificsTitle>특이사항</S.SpecificsTitle>
        <S.SpecificsBox>{data?.specifics ?? ""}</S.SpecificsBox>
      </S.DogDetailSpecifics>
      <S.DogDetailFooter>
        <S.Div>
          <Buttons
            border="border"
            label={"뒤로가기"}
            variation="primary"
            size="medium"
            onClick={onClickMoveBack}
          />
        </S.Div>
        <S.Div left="32px">
          <Buttons
            label={"댕댕이 프로필 삭제하기"}
            size="medium"
            onClick={onClickDelete}
          />
        </S.Div>
      </S.DogDetailFooter>
    </S.DogDetailWrapper>
  );
};

export default DogDetail;
