import { useRouter } from "next/router";
import useDetailPage from "../../../commons/hooks/custom/useDetailPage";
import { UseMutationDeleteDog } from "../../../commons/hooks/mutation/UseMutationDeleteDog";
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
            component={
              <TextBadge state={true} text={breed[data?.breed ?? "SMALL"]} />
            }
          />
        </S.Div>
        <S.DogDetailImgLabel>
          <div>사진</div>
          <S.DogDetailContentImg
            url={
              `https://storage.googleapis.com/${String(data?.image)}` ??
              "/image/example_dog.png"
            }
          />
        </S.DogDetailImgLabel>
      </S.DogDetailContentWrapper>

      <FormProvider {...method}>
        <form>
          <S.Div left={"124px"} right={"124px"}>
            <InfoTextArea
              name="significant"
              title={"특이사항"}
              placeholder="특이사항을 적어주세요."
              content={data?.specifics ?? ""}
              disabled
            />
          </S.Div>
        </form>
      </FormProvider>
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
