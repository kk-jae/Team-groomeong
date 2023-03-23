import useDetailPage from "../../../commons/hooks/custom/useDetailPage";
import { TextBadge } from "../../atoms/Badge/TextBadge";
import { Buttons } from "../../atoms/Buttons";
import ContentInfo from "../../atoms/ContentInfo";
import PageHeader from "../../atoms/PageHeader";
import InfoTextArea from "../../atoms/TextArea/InfoTextArea";
import {
  Div,
  DogDetailContentImg,
  DogDetailContentWrapper,
  DogDetailWrapper,
  DogDetailFooter,
} from "./index.style";

const DogDetail = () => {
  const { method, FormProvider, data, breed } = useDetailPage();
  return (
    <DogDetailWrapper>
      <PageHeader title="댕댕이 정보" icon="/images/icon-dog.svg" />
      <DogDetailContentWrapper>
        <Div>
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
        </Div>
        <Div>
          <DogDetailContentImg url={data?.image ?? undefined} />
        </Div>
      </DogDetailContentWrapper>
      <FormProvider {...method}>
        <form>
          <Div>
            <InfoTextArea
              name="significant"
              title={"특이사항"}
              placeholder="특이사항을 적어주세요."
              content={data?.specifics ?? ""}
              disabled
            />
          </Div>
        </form>
      </FormProvider>
      <DogDetailFooter>
        <Div>
          <Buttons
            border="border"
            label={"뒤로가기"}
            variation="primary"
            size="medium"
          />
        </Div>
        <Div left="32px">
          <Buttons label={"댕댕이 프로필 삭제하기"} size="medium" />
        </Div>
      </DogDetailFooter>
    </DogDetailWrapper>
  );
};

export default DogDetail;
