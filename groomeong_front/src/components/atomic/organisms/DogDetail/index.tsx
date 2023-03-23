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
  const { method, FormProvider } = useDetailPage()
  return (
    <DogDetailWrapper>
      <PageHeader title="댕댕이 정보" icon="/images/icon-dog.svg" />
      <DogDetailContentWrapper>
        <Div>
          <ContentInfo content="댕댕이" label="이름" right="64px" />
          <ContentInfo content="3" label="나이" right="64px" />
          <ContentInfo content="8" label="몸무게" right="64px" />
          <ContentInfo
            label="견종"
            component={<TextBadge state={true} text="소형" />}
          />
        </Div>
        <Div>
          <DogDetailContentImg />
        </Div>
      </DogDetailContentWrapper>
      <FormProvider {...method}>
        <form>
          <Div>
            <InfoTextArea
              name="significant"
              title={"특이사항"}
              content={"이상없음"}
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
